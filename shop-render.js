/* ============================================================
   SHOP — renders product cards from products.json.
   To add a product: edit products.json (or use admin.html).
   No HTML editing needed.
   ============================================================ */
(function () {
    let PRODUCTS_DATA = null;
    let currentFilter = "all";

    function lang() { return (window.getCurrentLang && window.getCurrentLang()) || "en"; }

    function money(n) {
        return n;
    }

    function renderCard(p) {
        const L = lang();
        const name = p.name[L] || p.name.en;
        const desc = p.desc[L] || p.desc.en;
        const weightNote = (p.weightNote && (p.weightNote[L] || p.weightNote.en)) || "";
        const firstSize = p.sizes[0];

        const badgeHTML = p.badge
            ? `<span class="product-badge ${p.badge.style && p.badge.style !== 'custom-purple' ? p.badge.style : ''}" ${p.badge.style === 'custom-purple' ? 'style="background:#8e44ad;"' : ''}>${p.badge[L] || p.badge.en}</span>`
            : "";

        const sizesHTML = p.sizes.map((s, i) => {
            const label = s.label[L] || s.label.en;
            return `<button class="size-btn" data-price="${s.price}">${label}</button>`;
        }).join("");

        const priceLabel = firstSize.originalPrice
            ? `<span class="original">${(L === 'ar' ? 'ر.ق ' : 'QAR ')}${firstSize.originalPrice}</span> ${(L === 'ar' ? 'ر.ق' : 'QAR')} <span class="amount">${firstSize.price}</span>`
            : `${(L === 'ar' ? 'ر.ق' : 'QAR')} <span class="amount">${firstSize.price}</span>`;

        const weightHTML = weightNote ? `<div class="product-weight">${weightNote}</div>` : "";
        const orderLabel = (window.dogfoodTranslations && window.dogfoodTranslations[L] && window.dogfoodTranslations[L]["shop.order_wa"]) || "🛒 Order via WhatsApp";
        const catLabel = (function () {
            const cat = (PRODUCTS_DATA.categories || []).find(c => c.id === p.category);
            return cat ? (cat[L] || cat.en) : p.category;
        })();

        return `
            <div class="product-card" data-category="${p.category}" data-product-id="${p.id}">
                <div class="product-img">
                    <img src="${p.image}" alt="${name}" loading="lazy">
                    ${badgeHTML}
                </div>
                <div class="product-body">
                    <div class="product-category">${catLabel}</div>
                    <div class="product-name">${name}</div>
                    <div class="product-desc">${desc}</div>
                    <div class="size-selector">${sizesHTML}</div>
                    <div class="product-meta">
                        <div class="product-price">${priceLabel}</div>
                        ${weightHTML}
                    </div>
                    <div class="qty-row" style="margin-top:8px;">
                        <button class="qty-btn qty-minus" aria-label="Decrease">−</button>
                        <div class="qty-display">1</div>
                        <button class="qty-btn qty-plus" aria-label="Increase">+</button>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-order-wa">${orderLabel}</button>
                    </div>
                </div>
            </div>`;
    }

    function render() {
        const grid = document.getElementById("productGrid");
        if (!grid || !PRODUCTS_DATA) return;
        const products = PRODUCTS_DATA.products || [];
        const filtered = currentFilter === "all" ? products : products.filter(p => p.category === currentFilter);
        grid.innerHTML = filtered.map(renderCard).join("");
        wireCards();
    }

    function wireCards() {
        document.querySelectorAll("#productGrid .size-selector").forEach(selector => {
            selector.querySelectorAll(".size-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    selector.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
                    btn.classList.add("selected");
                    const card = btn.closest(".product-card");
                    const price = btn.dataset.price;
                    if (price && card) {
                        const display = card.querySelector(".product-price .amount");
                        if (display) display.textContent = price;
                    }
                });
            });
            const first = selector.querySelector(".size-btn");
            if (first) first.classList.add("selected");
        });

        document.querySelectorAll("#productGrid .qty-row").forEach(row => {
            const minus = row.querySelector(".qty-minus");
            const plus = row.querySelector(".qty-plus");
            const display = row.querySelector(".qty-display");
            if (!minus || !plus || !display) return;
            minus.addEventListener("click", () => {
                const v = parseInt(display.textContent);
                if (v > 1) display.textContent = v - 1;
            });
            plus.addEventListener("click", () => {
                display.textContent = parseInt(display.textContent) + 1;
            });
        });

        document.querySelectorAll("#productGrid .btn-order-wa").forEach(btn => {
            btn.addEventListener("click", () => {
                const card = btn.closest(".product-card");
                const selectedSize = card.querySelector(".size-btn.selected");
                const qty = card.querySelector(".qty-display");

                if (typeof window.openOrderModal === "function") {
                    window.openOrderModal({
                        name: card.querySelector(".product-name")?.textContent?.trim() || "",
                        variant: selectedSize ? selectedSize.textContent.trim() : "",
                        price: card.querySelector(".product-price .amount")?.textContent?.trim() || "",
                        img: card.querySelector(".product-img img")?.src || "",
                        qty: qty ? qty.textContent : "1",
                    });
                }

                // Sync modal sizes from this card (mirrors shop.html's inline modal script)
                const modalSizes = document.getElementById("modalSizes");
                if (modalSizes) {
                    const cardSizes = card.querySelectorAll(".size-btn");
                    modalSizes.innerHTML = "";
                    cardSizes.forEach(sb => {
                        const clone = document.createElement("button");
                        clone.type = "button";
                        clone.className = "size-btn" + (sb.classList.contains("selected") ? " selected" : "");
                        clone.textContent = sb.textContent;
                        clone.dataset.price = sb.dataset.price;
                        clone.addEventListener("click", () => {
                            modalSizes.querySelectorAll(".size-btn").forEach(b => b.classList.remove("selected"));
                            clone.classList.add("selected");
                            const priceEl = document.querySelector("#orderModal .modal-product-price .amount");
                            if (priceEl) priceEl.textContent = clone.dataset.price;
                        });
                        modalSizes.appendChild(clone);
                    });
                }
                const modalQtyRow = document.querySelector("#orderModal .qty-row");
                if (modalQtyRow) {
                    const minus = modalQtyRow.querySelector(".qty-minus");
                    const plus = modalQtyRow.querySelector(".qty-plus");
                    const display = modalQtyRow.querySelector(".qty-display");
                    display.textContent = "1";
                    minus.onclick = () => { const v = parseInt(display.textContent); if (v > 1) display.textContent = v - 1; };
                    plus.onclick = () => { display.textContent = parseInt(display.textContent) + 1; };
                }
            });
        });
    }

    function wireFilters() {
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                currentFilter = btn.dataset.filter;
                render();
            });
        });
    }

    function init() {
        const grid = document.getElementById("productGrid");
        if (!grid) return; // not the shop page
        fetch("products.json")
            .then(r => r.json())
            .then(data => {
                PRODUCTS_DATA = data;
                wireFilters();
                render();
            })
            .catch(err => {
                grid.innerHTML = '<p style="padding:40px;text-align:center;color:#999;">Could not load products. If you are viewing this file directly from disk, please serve it over a local web server (fetch of products.json requires http:// not file://).</p>';
                console.error("Failed to load products.json", err);
            });
    }

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("dogfoodco:langchange", () => { if (PRODUCTS_DATA) render(); });
})();
