/* ============================================================
   NAV — hamburger + active page highlight + scroll shadow
   ============================================================ */
(function () {
    const nav       = document.querySelector('nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks  = document.querySelector('.nav-links');

    // Scroll shadow
    window.addEventListener('scroll', () => {
        nav && nav.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });

    // Active page highlight
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        if (a.getAttribute('href').split('/').pop() === current) a.classList.add('active');
    });

    if (!navToggle || !navLinks) return;

    navToggle.addEventListener('click', function () {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            navToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('open');
        });
    });
    document.addEventListener('click', e => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('open');
        }
    });
})();

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
(function () {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
})();

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item   = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(o => {
            o.classList.remove('open');
            o.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    });
});

/* ============================================================
   PRODUCT FILTERS  (shop page)
   ============================================================ */
(function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards      = document.querySelectorAll('.product-card[data-category]');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.dataset.filter;
            cards.forEach(card => {
                const show = cat === 'all' || card.dataset.category === cat;
                card.style.display = show ? '' : 'none';
            });
        });
    });
})();

/* ============================================================
   SIZE SELECTOR (product cards)
   ============================================================ */
document.querySelectorAll('.size-selector').forEach(selector => {
    selector.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selector.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            // update price display if data-price present
            const card  = btn.closest('.product-card, .modal');
            const price = btn.dataset.price;
            if (price && card) {
                const display = card.querySelector('.product-price .amount, .modal-product-price .amount');
                if (display) display.textContent = price;
            }
        });
    });
    // Pre-select first
    const first = selector.querySelector('.size-btn');
    if (first) first.classList.add('selected');
});

/* ============================================================
   QTY BUTTONS
   ============================================================ */
document.querySelectorAll('.qty-row').forEach(row => {
    const minus   = row.querySelector('.qty-minus');
    const plus    = row.querySelector('.qty-plus');
    const display = row.querySelector('.qty-display');
    if (!minus || !plus || !display) return;

    minus.addEventListener('click', () => {
        const v = parseInt(display.textContent);
        if (v > 1) display.textContent = v - 1;
    });
    plus.addEventListener('click', () => {
        display.textContent = parseInt(display.textContent) + 1;
    });
});

/* ============================================================
   WHATSAPP ORDER MODAL
   ============================================================ */
const WA_NUMBER = '97474089629';

function openOrderModal(productData) {
    const overlay = document.getElementById('orderModal');
    if (!overlay) return;

    // Populate modal
    overlay.querySelector('.modal-product-name').textContent  = productData.name;
    overlay.querySelector('.modal-product-desc').textContent  = productData.variant || '';
    overlay.querySelector('.modal-product-price .amount').textContent = productData.price;
    overlay.querySelector('.modal-product-img').src           = productData.img;
    overlay.querySelector('#modalProductName').textContent    = productData.name;
    overlay.dataset.product = JSON.stringify(productData);

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Reset form
    const form = overlay.querySelector('#orderForm');
    if (form) form.reset();
}

function closeOrderModal() {
    const overlay = document.getElementById('orderModal');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

// Close on overlay click
document.addEventListener('click', e => {
    const overlay = document.getElementById('orderModal');
    if (e.target === overlay) closeOrderModal();
});

// Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeOrderModal();
});

// Wire up "Order via WhatsApp" buttons on product cards
document.querySelectorAll('.btn-order-wa').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.product-card');
        const selectedSize = card.querySelector('.size-btn.selected');
        const qty = card.querySelector('.qty-display');

        openOrderModal({
            name:    card.querySelector('.product-name')?.textContent?.trim() || '',
            variant: selectedSize ? selectedSize.textContent.trim() : '',
            price:   card.querySelector('.product-price .amount')?.textContent?.trim() || '',
            img:     card.querySelector('.product-img img')?.src || '',
            qty:     qty ? qty.textContent : '1',
        });
    });
});

// Submit order form → build WhatsApp message
(function () {
    const form = document.getElementById('orderForm');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        const overlay = document.getElementById('orderModal');
        const product = JSON.parse(overlay?.dataset.product || '{}');

        // Collect form fields
        const name    = form.querySelector('#oName')?.value.trim();
        const phone   = form.querySelector('#oPhone')?.value.trim();
        const area    = form.querySelector('#oArea')?.value.trim();
        const notes   = form.querySelector('#oNotes')?.value.trim();

        // Selected size + qty from modal
        const selectedSize = form.querySelector('.size-btn.selected');
        const qtyEl        = form.querySelector('.qty-display');
        const size  = selectedSize ? selectedSize.textContent.trim() : product.variant || '—';
        const qty   = qtyEl ? qtyEl.textContent : product.qty || '1';

        if (!name || !phone) {
            [form.querySelector('#oName'), form.querySelector('#oPhone')].forEach(f => {
                if (f && !f.value.trim()) f.style.borderColor = '#e74c3c';
            });
            return;
        }

        const msg = [
            `🐾 *New Order — DogFood Co.*`,
            ``,
            `📦 *Product:* ${product.name}`,
            `📐 *Size:* ${size}`,
            `🔢 *Qty:* ${qty}`,
            `💰 *Price:* QAR ${product.price}`,
            ``,
            `👤 *Customer:* ${name}`,
            `📞 *Phone:* ${phone}`,
            `📍 *Area:* ${area || '—'}`,
            notes ? `📝 *Notes:* ${notes}` : '',
        ].filter(Boolean).join('\n');

        const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        closeOrderModal();
    });
})();

/* ============================================================
   CONTACT FORM (contact page)
   ============================================================ */
(function () {
    const form    = document.getElementById('contactForm');
    const success = document.getElementById('contactSuccess');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        let valid = true;
        form.querySelectorAll('[required]').forEach(f => {
            f.style.borderColor = f.value.trim() ? '' : '#e74c3c';
            if (!f.value.trim()) valid = false;
        });
        if (!valid) return;

        const btn = form.querySelector('.form-submit');
        btn.textContent = 'Sending…';
        btn.disabled = true;

        // Build WhatsApp message for contact form too
        const name    = form.querySelector('#cName')?.value.trim();
        const email   = form.querySelector('#cEmail')?.value.trim();
        const subject = form.querySelector('#cSubject')?.value.trim();
        const message = form.querySelector('#cMessage')?.value.trim();

        const msg = [
            `💬 *Message from DogFood Co. website*`,
            ``,
            `👤 *Name:* ${name}`,
            `✉️ *Email:* ${email}`,
            `📌 *Subject:* ${subject || 'General'}`,
            `📝 *Message:* ${message}`,
        ].join('\n');

        setTimeout(() => {
            window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
            form.style.display = 'none';
            if (success) success.style.display = 'block';
        }, 800);
    });
})();
