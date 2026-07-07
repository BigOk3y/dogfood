/* ============================================================
   DOGFOOD CO. — LANGUAGE ENGINE (EN / AR)
   Auto-detects Arabic for Gulf visitors, switches instantly,
   flips layout to RTL, remembers the visitor's choice.
   ============================================================ */
(function () {

    const translations = {
        en: {
            "nav.home": "Home",
            "nav.shop": "Our Food",
            "nav.about": "About",
            "nav.contact": "Contact",
            "nav.shopnow": "Shop Now",
            "lang.switchTo": "العربية",

            "footer.about_desc": "Real food, real ingredients, real results. Scientifically formulated with vets and backed by thousands of happy customers.",
            "footer.quicklinks": "Quick Links",
            "footer.contact_title": "Contact",
            "footer.rights": "© 2025 DogFood Co. All rights reserved. | Order via WhatsApp: +974 7408 9629",
            "fab.whatsapp": "Chat on WhatsApp",
            "fab.phone": "Call Us",

            "cta.shopall": "Shop All Products →",

            /* HOME */
            "home.title": "DogFood Co. – Real Food for Real Dogs in Qatar",
            "home.meta_desc": "Vet-formulated, fresh dog food delivered across Qatar. Real ingredients, no fillers. Order in minutes via WhatsApp with free delivery over QAR 150.",
            "home.badge": "Vet-Approved Formula",
            "home.hero_title": "Real Food. Real Ingredients. Happier Dogs.",
            "home.hero_desc": "Scientifically formulated superfood meals made with premium whole ingredients — because your dog deserves better than a bag of mystery kibble.",
            "home.hero_shop": "Shop Now →",
            "home.hero_learn": "Learn More",
            "home.trust_guarantee": "30-day money back guarantee",
            "home.hero_img_alt": "Dog enjoying a fresh bowl of DogFood Co. meal",

            "home.feat1_title": "Real Food",
            "home.feat1_desc": "Wholesome recipes with real meat and veggies — nothing artificial.",
            "home.feat2_title": "Premium Ingredients",
            "home.feat2_desc": "Unmatched safety and quality in every single batch we make.",
            "home.feat3_title": "Made Fresh",
            "home.feat3_desc": "We protect the integrity of whole foods and maximum nutrition.",
            "home.feat4_title": "Vet Delivered",
            "home.feat4_desc": "Formulated by vets, surpassing industry nutrition expectations.",

            "home.benefits_badge": "Why It Works",
            "home.benefits_title": "Nutrition is the foundation for longer, healthier lives in dogs.",
            "home.benefits_desc": "Invest in your dog's future with our scientifically formulated superfood-powered supplements. Watch them thrive with vitality, energy, and the joy of a longer, healthier life.",
            "home.benefits_cta": "Give Your Dog the Best →",

            "home.stat1": "97%",
            "home.stat1_desc": "Dogs choose our food over leading brands for its real ingredients and delicious flavour.",
            "home.stat2": "84%",
            "home.stat2_desc": "Superior nutrition with a patented probiotic for optimal nutrient absorption.",
            "home.stat3": "92%",
            "home.stat3_desc": "High protein and fat digestibility contributes to ideal stool quality.",
            "home.stat4": "91%",
            "home.stat4_desc": "Customers report significant health improvements after just one month.",

            "home.gut_badge": "Gut Health",
            "home.gut_title": "Improve overall gastrointestinal health for better nutrient absorption",
            "home.gut_desc": "Through rigorous scientific studies and consultations with veterinarians, we created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of customers reported significant improvements after incorporating our product.",
            "home.gut_cta": "Explore the Formula →",

            "home.pre_badge": "Prebiotics",
            "home.pre_title": "Prebiotics nourish beneficial gut bacteria, supporting digestive health",
            "home.pre_desc": "Our formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.",
            "home.pre_cta": "See Ingredients →",

            "home.test_badge": "Happy Customers",
            "home.test_title": "Dogs (and owners) love it",
            "test1_quote": "\u201cMax has so much more energy since switching. His coat is glossy and he actually finishes every meal — first time ever!\u201d",
            "test1_name": "Sarah M.",
            "test1_role": "Golden Retriever owner",
            "test2_quote": "\u201cOur vet noticed the improvement before we even mentioned the food change. Bella's digestion is night and day different.\u201d",
            "test2_name": "James R.",
            "test2_role": "Border Collie owner",
            "test3_quote": "\u201cI was sceptical but the 30-day guarantee made it easy to try. Rocky lost 2kg in 6 weeks and plays like a puppy again.\u201d",
            "test3_name": "Lisa K.",
            "test3_role": "Labrador owner",

            "home.cta_title": "Ready to transform your dog's health?",
            "home.cta_desc": "Join 50,000+ happy dogs already thriving on DogFood Co.",

            /* SHOP */
            "shop.title": "Shop – Dog Food & Supplements Delivered in Qatar | DogFood Co.",
            "shop.meta_desc": "Browse vet-formulated dry food, wet food, supplements and treats. Order via WhatsApp with delivery across Qatar — free over QAR 150.",
            "shop.breadcrumb_home": "Home",
            "shop.breadcrumb_current": "Our Food",
            "shop.hero_title": "Real Food for Real Dogs",
            "shop.hero_desc": "Every product is vet-formulated, made with whole ingredients, and delivered fresh. Order any item directly via WhatsApp.",
            "shop.filter_all": "All Products",
            "shop.filter_dry": "Dry Food",
            "shop.filter_wet": "Wet Food",
            "shop.filter_supplement": "Supplements",
            "shop.filter_treat": "Treats",
            "shop.order_wa": "🛒 Order via WhatsApp",
            "shop.from": "From",
            "shop.percan": "Per can",
            "shop.howto_badge": "Simple Ordering",
            "shop.howto_title": "How to order in 3 easy steps",
            "shop.step1_title": "Pick your product",
            "shop.step1_desc": "Select the size and quantity that suits your dog above.",
            "shop.step2_title": "Tap \u201cOrder via WhatsApp\u201d",
            "shop.step2_desc": "Fill in your name, phone, and delivery area. Takes 30 seconds.",
            "shop.step3_title": "We confirm & deliver",
            "shop.step3_desc": "Our team confirms your order on WhatsApp and arranges delivery.",
            "shop.modal_title": "Complete Your Order",
            "shop.modal_desc": "Fill in your details and we'll open WhatsApp with everything pre-filled.",
            "shop.modal_size_label": "Size / Pack",
            "shop.modal_qty_label": "Quantity",
            "shop.modal_name": "Your Name *",
            "shop.modal_name_ph": "e.g. Ahmed Al-Rashid",
            "shop.modal_phone": "Phone / WhatsApp *",
            "shop.modal_phone_ph": "+974 XXXX XXXX",
            "shop.modal_area": "Delivery Area",
            "shop.modal_area_ph": "e.g. Al Waab, Doha",
            "shop.modal_notes": "Notes (optional)",
            "shop.modal_notes_ph": "Allergies, preferred delivery time…",
            "shop.modal_submit": "Send Order on WhatsApp",
            "shop.modal_note": "🔒 Your details go directly to us — no third parties.",

            /* ABOUT */
            "about.title": "About Us – DogFood Co.",
            "about.meta_desc": "Founded by pet owners and vets in Qatar. Learn our story, meet the team, and see why 50,000+ dogs across the Gulf trust DogFood Co.",
            "about.breadcrumb_current": "About Us",
            "about.hero_title": "We Believe Dogs Deserve Better",
            "about.hero_desc": "Founded by pet owners and vets who got tired of reading ingredient labels they couldn't pronounce.",
            "about.story_label": "Our Story",
            "about.story_title": "Started in a kitchen.<br>Built on science.",
            "about.story_p1": "DogFood Co. was born in 2018 when our founder, Dr. Leila Nasser, watched her 8-year-old Labrador, Biscuit, struggle with chronic digestive issues despite eating \u201cpremium\u201d commercial kibble. After months of research and consultation with veterinary nutritionists, she created a fresh-food formula from scratch — and Biscuit never looked back.",
            "about.story_p2": "What began as weekend batches shared with neighbours' dogs quickly grew into a movement. Today, DogFood Co. serves over 50,000 dogs across Qatar and the Gulf, and every recipe still starts with the same question: <em>\u201cWould Biscuit eat this?\u201d</em>",
            "about.story_p3": "We're part of a community of dog lovers who believe that what goes into the bowl matters — and that real, whole ingredients shouldn't be a luxury.",
            "about.story_cta": "Explore Our Products →",

            "about.stats_badge": "By the Numbers",
            "about.stats_title": "The results speak for themselves.",
            "about.stats_desc": "Every metric we track comes back to one thing: healthier, happier dogs. That's why thousands of owners keep coming back.",
            "about.stats_cta": "Start Your Dog's Journey →",
            "about.stat1": "50K+",
            "about.stat1_desc": "Dogs currently eating DogFood Co. across Qatar and the Gulf.",
            "about.stat2": "97%",
            "about.stat2_desc": "Customer re-order rate after the first month.",
            "about.stat3": "12",
            "about.stat3_desc": "Veterinary nutritionists involved in formulating our recipes.",
            "about.stat4": "0",
            "about.stat4_desc": "Artificial colours, flavours, or preservatives. Ever.",

            "about.values_label": "What We Stand For",
            "about.values_title": "Our Values",
            "about.val1_title": "Real Ingredients Only",
            "about.val1_desc": "Every recipe starts with named, whole proteins — chicken, salmon, beef. No \u201cmeat meal\u201d, no by-products, no mystery fillers.",
            "about.val2_title": "Science-Backed Formulation",
            "about.val2_desc": "Our recipes are developed in partnership with board-certified veterinary nutritionists and tested rigorously before going on sale.",
            "about.val3_title": "Clean Labels",
            "about.val3_desc": "We believe you should understand every ingredient. If we wouldn't eat it ourselves, it's not going in our food.",
            "about.val4_title": "Honest Business",
            "about.val4_desc": "No subscription traps, no hard sells. Just great food, transparent pricing, and a team that answers the phone.",
            "about.val5_title": "Freshness Guaranteed",
            "about.val5_desc": "Manufactured in small batches and delivered quickly. We never sit on stock — your dog gets food at peak nutritional quality.",
            "about.val6_title": "Sustainable Packaging",
            "about.val6_desc": "Our packaging is recyclable and we're actively working toward fully compostable packaging by 2026.",

            "about.team_label": "The Team",
            "about.team_title": "The people behind the bowl",
            "about.team1_name": "Dr. Leila Nasser",
            "about.team1_role": "Founder & Chief Nutrition Officer",
            "about.team1_desc": "Veterinary nutritionist with 14 years' experience. Biscuit's proud mum.",
            "about.team2_name": "Karim Farouk",
            "about.team2_role": "Head of Operations",
            "about.team2_desc": "Keeps every batch on schedule and every delivery on time across the Gulf.",
            "about.team3_name": "Amina Haddad",
            "about.team3_role": "Lead Food Scientist",

            "about.test_title": "Don't take our word for it",
            "about.faq_label": "Questions",
            "about.faq_title": "Frequently Asked Questions",
            "about.faq1_q": "Is DogFood Co. suitable for all breeds and ages?",
            "about.faq1_a": "Yes — our core adult formula is appropriate for dogs of all breeds over 12 months. We also offer puppy and senior-specific recipes. If your dog has a health condition, we recommend a quick chat with your vet before switching.",
            "about.faq2_q": "How do I transition my dog to DogFood Co.?",
            "about.faq2_a": "We recommend a 7-day transition: start by mixing 25% DogFood Co. with 75% of your current food, gradually increasing the ratio each day. This helps avoid any digestive upset while your dog's gut microbiome adjusts to the new, higher-quality nutrition.",
            "about.faq3_q": "Do you deliver across Qatar?",
            "about.faq3_a": "Yes, we deliver to all areas in Qatar including Doha, Lusail, Al Wakra, Al Khor, and Al Rayyan. Delivery is free on orders over QAR 150. Orders are typically delivered within 1–2 business days.",
            "about.faq4_q": "What is your money-back guarantee?",
            "about.faq4_a": "If your dog doesn't love it within 30 days, we'll give you a full refund — no questions asked. Just message us on WhatsApp with your order details and we'll process it immediately.",
            "about.faq5_q": "Are your products vet-approved?",
            "about.faq5_a": "Every recipe is formulated by board-certified veterinary nutritionists and meets or exceeds AAFCO nutritional standards. We also work with a panel of 12 practising vets across Qatar who review and validate our formulas annually.",

            "about.cta_title": "Give your dog the nutrition they deserve.",
            "about.cta_desc": "Order via WhatsApp in under 2 minutes — free delivery on orders over QAR 150.",

            /* CONTACT */
            "contact.title": "Contact Us – DogFood Co. Qatar",
            "contact.meta_desc": "Reach DogFood Co. by WhatsApp, phone, or email. Free delivery across Qatar on orders over QAR 150. We usually reply within 30 minutes.",
            "contact.breadcrumb_current": "Contact",
            "contact.hero_title": "We'd Love to Hear From You",
            "contact.hero_desc": "Questions, orders, vet advice — our team is on WhatsApp, email, and phone. We actually reply.",
            "contact.getintouch": "Get in Touch",
            "contact.intro": "Whether you want to place an order, ask about ingredients, or just share a photo of your happy dog — we're here for it.",
            "contact.wa_title": "WhatsApp (Fastest)",
            "contact.wa_desc": "Usually replies within 30 minutes",
            "contact.phone_title": "Phone",
            "contact.phone_desc": "Sat–Thu: 8 AM – 8 PM",
            "contact.email_title": "Email",
            "contact.email_desc": "Replies within 1 business day",
            "contact.area_title": "Delivery Area",
            "contact.area_desc1": "All areas across Qatar.",
            "contact.area_desc2": "Free delivery on orders over QAR 150.",
            "contact.order_hint_title": "Want to order?",
            "contact.order_hint_desc": "Head to our shop, pick your products, and tap \u201cOrder via WhatsApp\u201d for the fastest experience.",
            "contact.order_hint_cta": "Browse Products →",

            "contact.form_title": "Send Us a Message",
            "contact.form_desc": "We'll get back to you on WhatsApp or email, whichever you prefer.",
            "contact.form_name": "Your Name *",
            "contact.form_name_ph": "Ahmed Al-Rashid",
            "contact.form_phone": "Phone / WhatsApp",
            "contact.form_phone_ph": "+974 XXXX XXXX",
            "contact.form_email": "Email Address *",
            "contact.form_email_ph": "you@example.com",
            "contact.form_subject": "Subject",
            "contact.form_subject_select": "Select a topic",
            "contact.form_subject1": "Product question",
            "contact.form_subject2": "Order enquiry",
            "contact.form_subject3": "Delivery question",
            "contact.form_subject4": "Vet / nutrition advice",
            "contact.form_subject5": "Returns & refunds",
            "contact.form_subject6": "Other",
            "contact.form_message": "Message *",
            "contact.form_message_ph": "Tell us about your dog and how we can help…",
            "contact.form_submit": "Send Message via WhatsApp →",
            "contact.form_note": "🔒 Your message opens directly in WhatsApp — we never store your details.",
            "contact.success_title": "Message Sent!",
            "contact.success_desc": "Your WhatsApp should have opened with your message. We'll reply as soon as possible — usually within the hour!",
            "contact.success_cta": "Browse Our Products",

            "contact.faq_label": "Quick Answers",
            "contact.faq_title": "Common Questions",
            "contact.faq1_q": "How do I place an order?",
            "contact.faq1_a": "Visit our shop page, choose your product and size, then tap \u201cOrder via WhatsApp\u201d. A pre-filled message will open in WhatsApp — just fill in your name, phone, and delivery area and send. We'll confirm your order within minutes.",
            "contact.faq2_q": "What payment methods do you accept?",
            "contact.faq2_a": "We accept cash on delivery, bank transfer (QNB, QIIB, CBQ), and card payments via our secure payment link sent through WhatsApp. All major cards are supported including Visa, Mastercard, and Amex.",
            "contact.faq3_q": "How long does delivery take?",
            "contact.faq3_a": "Standard delivery within Doha and surrounding areas is 1–2 business days. Same-day delivery is available for orders placed before 12 PM on business days (subject to availability). We'll confirm your delivery window when we confirm your order on WhatsApp.",
            "contact.faq4_q": "Do you offer bulk or subscription discounts?",
            "contact.faq4_a": "Yes! Message us on WhatsApp to ask about monthly subscription bundles — you save up to 15% compared to single orders, with free delivery included. We also offer bulk pricing for kennels, shelters, and breeders.",
            "contact.cta_title": "Ready to transform your dog's health?",
            "contact.cta_desc": "Join 50,000+ happy dogs already thriving on DogFood Co."
        },

        ar: {
            "nav.home": "الرئيسية",
            "nav.shop": "منتجاتنا",
            "nav.about": "من نحن",
            "nav.contact": "تواصل معنا",
            "nav.shopnow": "تسوّق الآن",
            "lang.switchTo": "English",

            "footer.about_desc": "طعام حقيقي، مكونات حقيقية، نتائج حقيقية. تركيبة علمية بمشاركة أطباء بيطريين، ويثق بها آلاف العملاء السعداء.",
            "footer.quicklinks": "روابط سريعة",
            "footer.contact_title": "تواصل معنا",
            "footer.rights": "© 2025 دوغ فود كو. جميع الحقوق محفوظة. | اطلب عبر واتساب: 97474089629+",
            "fab.whatsapp": "تواصل عبر واتساب",
            "fab.phone": "اتصل بنا",

            "cta.shopall": "تسوّق جميع المنتجات ←",

            /* HOME */
            "home.title": "دوغ فود كو. – طعام حقيقي لكلاب حقيقية في قطر",
            "home.meta_desc": "طعام كلاب طازج بتركيبة بيطرية يصل إلى جميع أنحاء قطر. مكونات حقيقية بلا إضافات. اطلب خلال دقائق عبر واتساب وتوصيل مجاني للطلبات فوق ١٥٠ ريال قطري.",
            "home.badge": "تركيبة معتمدة من الأطباء البيطريين",
            "home.hero_title": "طعام حقيقي. مكونات حقيقية. كلاب أكثر سعادة.",
            "home.hero_desc": "وجبات فائقة القيمة الغذائية، مُعدّة علمياً من مكونات كاملة وعالية الجودة — لأن كلبك يستحق أفضل من كيس كيبل مجهول المصدر.",
            "home.hero_shop": "تسوّق الآن ←",
            "home.hero_learn": "اعرف أكثر",
            "home.trust_guarantee": "ضمان استرجاع الأموال خلال ٣٠ يوماً",
            "home.hero_img_alt": "كلب يستمتع بوعاء طازج من طعام دوغ فود كو.",

            "home.feat1_title": "طعام حقيقي",
            "home.feat1_desc": "وصفات صحية بمكونات حقيقية من اللحوم والخضروات — بلا أي إضافات مصنّعة.",
            "home.feat2_title": "مكونات فاخرة",
            "home.feat2_desc": "سلامة وجودة لا تُضاهى في كل دفعة نصنعها.",
            "home.feat3_title": "طازج دائماً",
            "home.feat3_desc": "نحافظ على تكامل المكونات الطبيعية وأعلى قيمة غذائية.",
            "home.feat4_title": "بتوصية بيطرية",
            "home.feat4_desc": "تركيبة من إعداد أطباء بيطريين، تتجاوز معايير صناعة الأغذية.",

            "home.benefits_badge": "لماذا تنجح تركيبتنا",
            "home.benefits_title": "التغذية هي الأساس لحياة أطول وأكثر صحة لكلبك.",
            "home.benefits_desc": "استثمر في مستقبل كلبك مع مكملاتنا الغذائية المصممة علمياً والمدعومة بالأغذية الفائقة. شاهده يزدهر بالحيوية والنشاط ومتعة حياة أطول وأكثر صحة.",
            "home.benefits_cta": "قدّم لكلبك الأفضل ←",

            "home.stat1": "٩٧٪",
            "home.stat1_desc": "من الكلاب تفضّل طعامنا على العلامات التجارية الكبرى بفضل مكوناته الحقيقية ونكهته اللذيذة.",
            "home.stat2": "٨٤٪",
            "home.stat2_desc": "تغذية متفوقة مع بروبيوتيك حصري لامتصاص أمثل للعناصر الغذائية.",
            "home.stat3": "٩٢٪",
            "home.stat3_desc": "قابلية هضم عالية للبروتين والدهون تساهم في جودة إخراج مثالية.",
            "home.stat4": "٩١٪",
            "home.stat4_desc": "يُفيد العملاء بتحسن صحي ملحوظ بعد شهر واحد فقط.",

            "home.gut_badge": "صحة الجهاز الهضمي",
            "home.gut_title": "تحسين صحة الجهاز الهضمي بشكل عام لامتصاص أفضل للعناصر الغذائية",
            "home.gut_desc": "من خلال دراسات علمية دقيقة واستشارات مع أطباء بيطريين، طوّرنا تركيبة مبتكرة مخصصة للتغلب على التحديات الصحية الشائعة لدى الكلاب. أفاد 91% من العملاء بتحسن ملحوظ بعد استخدام منتجنا.",
            "home.gut_cta": "اكتشف التركيبة ←",

            "home.pre_badge": "البريبايوتك",
            "home.pre_title": "البريبايوتك يغذّي البكتيريا النافعة في الأمعاء، ويدعم صحة الجهاز الهضمي",
            "home.pre_desc": "تحتوي تركيبتنا على بريبايوتك مُختار بعناية يعمل بتناغم مع ميكروبيوم الأمعاء، ويوفّر العناصر الغذائية اللازمة لنمو البكتيريا النافعة والحفاظ عليها، بما يدعم صحة الجهاز الهضمي.",
            "home.pre_cta": "شاهد المكونات ←",

            "home.test_badge": "عملاء سعداء",
            "home.test_title": "الكلاب (وأصحابها) يعشقونه",
            "test1_quote": "\u201cأصبح لدى ماكس طاقة أكبر بكثير منذ تغيير طعامه. فروه لامع، وهو ينهي كل وجبة فعلاً — لأول مرة!\u201d",
            "test1_name": "سارة م.",
            "test1_role": "صاحبة كلب غولدن ريتريفر",
            "test2_quote": "\u201cلاحظ طبيبنا البيطري التحسن قبل أن نخبره بتغيير الطعام. هضم بيلا مختلف تماماً الآن.\u201d",
            "test2_name": "جيمس ر.",
            "test2_role": "صاحب كلب بوردر كولي",
            "test3_quote": "\u201cكنت متردداً، لكن ضمان استرجاع الأموال لمدة ٣٠ يوماً سهّل عليّ التجربة. فقد روكي ٢ كجم خلال ٦ أسابيع ويلعب الآن مثل الجراء.\u201d",
            "test3_name": "ليزا ك.",
            "test3_role": "صاحبة كلب لابرادور",

            "home.cta_title": "هل أنت مستعد لتحسين صحة كلبك؟",
            "home.cta_desc": "انضم إلى أكثر من ٥٠،٠٠٠ كلب سعيد يزدهر بالفعل مع دوغ فود كو.",

            /* SHOP */
            "shop.title": "المتجر – طعام ومكملات الكلاب، التوصيل في قطر | دوغ فود كو.",
            "shop.meta_desc": "تصفّح طعاماً جافاً ورطباً ومكملات ووجبات خفيفة بتركيبة بيطرية. اطلب عبر واتساب مع التوصيل في جميع أنحاء قطر — مجاني فوق ١٥٠ ريال قطري.",
            "shop.breadcrumb_home": "الرئيسية",
            "shop.breadcrumb_current": "منتجاتنا",
            "shop.hero_title": "طعام حقيقي لكلاب حقيقية",
            "shop.hero_desc": "كل منتج مُعدّ بتركيبة بيطرية، من مكونات كاملة، ويصل طازجاً. اطلب أي منتج مباشرة عبر واتساب.",
            "shop.filter_all": "جميع المنتجات",
            "shop.filter_dry": "طعام جاف",
            "shop.filter_wet": "طعام رطب",
            "shop.filter_supplement": "مكملات غذائية",
            "shop.filter_treat": "وجبات خفيفة",
            "shop.order_wa": "🛒 اطلب عبر واتساب",
            "shop.from": "ابتداءً من",
            "shop.percan": "لكل علبة",
            "shop.howto_badge": "طلب بسيط",
            "shop.howto_title": "كيفية الطلب في ٣ خطوات سهلة",
            "shop.step1_title": "اختر منتجك",
            "shop.step1_desc": "حدّد الحجم والكمية المناسبة لكلبك أعلاه.",
            "shop.step2_title": "اضغط \u201cاطلب عبر واتساب\u201d",
            "shop.step2_desc": "أدخل اسمك وهاتفك ومنطقة التوصيل. يستغرق ٣٠ ثانية فقط.",
            "shop.step3_title": "نؤكد الطلب ونوصّله",
            "shop.step3_desc": "يؤكد فريقنا طلبك عبر واتساب ويرتّب عملية التوصيل.",
            "shop.modal_title": "أكمل طلبك",
            "shop.modal_desc": "أدخل بياناتك وسنفتح واتساب مع كل التفاصيل جاهزة مسبقاً.",
            "shop.modal_size_label": "الحجم / العبوة",
            "shop.modal_qty_label": "الكمية",
            "shop.modal_name": "اسمك *",
            "shop.modal_name_ph": "مثال: أحمد الراشد",
            "shop.modal_phone": "الهاتف / واتساب *",
            "shop.modal_phone_ph": "٩٧٤+ XXXX XXXX",
            "shop.modal_area": "منطقة التوصيل",
            "shop.modal_area_ph": "مثال: الوعب، الدوحة",
            "shop.modal_notes": "ملاحظات (اختياري)",
            "shop.modal_notes_ph": "الحساسية، وقت التوصيل المفضّل…",
            "shop.modal_submit": "إرسال الطلب عبر واتساب",
            "shop.modal_note": "🔒 تصلنا بياناتك مباشرة — لا تتم مشاركتها مع أي طرف آخر.",

            /* ABOUT */
            "about.title": "من نحن – دوغ فود كو.",
            "about.meta_desc": "تأسست على يد أصحاب حيوانات أليفة وأطباء بيطريين في قطر. تعرّف على قصتنا وفريقنا، ولماذا يثق بنا أكثر من ٥٠،٠٠٠ كلب في الخليج.",
            "about.breadcrumb_current": "من نحن",
            "about.hero_title": "نؤمن بأن الكلاب تستحق الأفضل",
            "about.hero_desc": "تأسست الشركة على يد أصحاب حيوانات أليفة وأطباء بيطريين سئموا من قراءة مكونات لا يمكنهم نطقها.",
            "about.story_label": "قصتنا",
            "about.story_title": "بدأت في مطبخ.<br>وبُنيت على العلم.",
            "about.story_p1": "وُلدت دوغ فود كو. عام ٢٠١٨ عندما لاحظت مؤسِّستنا، الدكتورة ليلى ناصر، أن كلبها اللابرادور البالغ من العمر ٨ سنوات، بسكويت، يعاني من مشاكل هضمية مزمنة رغم تناوله كيبل تجاري \u201cفاخر\u201d. بعد أشهر من البحث والاستشارة مع أخصائيي تغذية بيطريين، ابتكرت تركيبة طعام طازج من الصفر — ولم ينظر بسكويت إلى الوراء أبداً.",
            "about.story_p2": "ما بدأ كدفعات في عطلة نهاية الأسبوع تُشارَك مع كلاب الجيران، تحوّل بسرعة إلى حركة واسعة. اليوم، تخدم دوغ فود كو. أكثر من ٥٠،٠٠٠ كلب في قطر ودول الخليج، وكل وصفة لا تزال تبدأ بنفس السؤال: <em>\u201cهل سيأكل بسكويت هذا؟\u201d</em>",
            "about.story_p3": "نحن جزء من مجتمع محبي الكلاب الذين يؤمنون بأن ما يدخل الوعاء مهم — وأن المكونات الحقيقية والكاملة لا ينبغي أن تكون رفاهية.",
            "about.story_cta": "استكشف منتجاتنا ←",

            "about.stats_badge": "بالأرقام",
            "about.stats_title": "النتائج تتحدث عن نفسها.",
            "about.stats_desc": "كل رقم نتتبعه يعود لشيء واحد: كلاب أكثر صحة وسعادة. لهذا يعود إلينا آلاف الملّاك مرة تلو الأخرى.",
            "about.stats_cta": "ابدأ رحلة كلبك ←",
            "about.stat1": "+٥٠ ألف",
            "about.stat1_desc": "كلب يتناول طعام دوغ فود كو. حالياً في قطر ودول الخليج.",
            "about.stat2": "٩٧٪",
            "about.stat2_desc": "معدّل إعادة الطلب من العملاء بعد الشهر الأول.",
            "about.stat3": "١٢",
            "about.stat3_desc": "أخصائي تغذية بيطري شاركوا في تطوير وصفاتنا.",
            "about.stat4": "٠",
            "about.stat4_desc": "ألوان أو نكهات أو مواد حافظة صناعية. إطلاقاً.",

            "about.values_label": "ما نؤمن به",
            "about.values_title": "قيمنا",
            "about.val1_title": "مكونات حقيقية فقط",
            "about.val1_desc": "كل وصفة تبدأ بمكونات بروتينية كاملة ومحدّدة الاسم — دجاج، سلمون، لحم بقري. بلا \u201cمسحوق لحم\u201d، بلا مشتقات، وبلا حشوات مجهولة.",
            "about.val2_title": "تركيبة مدعومة علمياً",
            "about.val2_desc": "تُطوَّر وصفاتنا بالشراكة مع أخصائيي تغذية بيطريين معتمدين، وتُختبر بدقة قبل طرحها للبيع.",
            "about.val3_title": "مكونات واضحة",
            "about.val3_desc": "نؤمن بأنه يجب أن تفهم كل مكوّن. إن كنا لن نأكله بأنفسنا، فلن يدخل في طعامنا.",
            "about.val4_title": "تعامل صادق",
            "about.val4_desc": "بلا فخاخ اشتراكات، وبلا أساليب بيع ضاغطة. فقط طعام رائع، وأسعار شفافة، وفريق يرد على هاتفك.",
            "about.val5_title": "ضمان الطزاجة",
            "about.val5_desc": "يُصنَّع على دفعات صغيرة ويُوصَّل بسرعة. لا نُبقي مخزوناً طويلاً — يحصل كلبك على طعام في أعلى جودة غذائية.",
            "about.val6_title": "تغليف مستدام",
            "about.val6_desc": "تغليفنا قابل لإعادة التدوير، ونعمل بنشاط للوصول إلى تغليف قابل للتحلل بالكامل بحلول عام ٢٠٢٦.",

            "about.team_label": "الفريق",
            "about.team_title": "الأشخاص وراء الوعاء",
            "about.team1_name": "د. ليلى ناصر",
            "about.team1_role": "المؤسِّسة ورئيسة قسم التغذية",
            "about.team1_desc": "أخصائية تغذية بيطرية بخبرة ١٤ عاماً. والدة بسكويت الفخورة.",
            "about.team2_name": "كريم فاروق",
            "about.team2_role": "رئيس العمليات",
            "about.team2_desc": "يحرص على التزام كل دفعة بالجدول الزمني وكل توصيلة بموعدها في أنحاء الخليج.",
            "about.team3_name": "أمينة حداد",
            "about.team3_role": "كبيرة علماء الأغذية",

            "about.test_title": "لا تكتفِ بكلامنا فقط",
            "about.faq_label": "أسئلة",
            "about.faq_title": "الأسئلة الشائعة",
            "about.faq1_q": "هل دوغ فود كو. مناسب لجميع السلالات والأعمار؟",
            "about.faq1_a": "نعم — تركيبتنا الأساسية للكلاب البالغة مناسبة لجميع السلالات فوق عمر ١٢ شهراً. كما نقدّم وصفات مخصصة للجراء والكلاب المسنّة. إذا كان كلبك يعاني من حالة صحية، نوصي باستشارة سريعة مع طبيبك البيطري قبل التغيير.",
            "about.faq2_q": "كيف أنقل كلبي إلى طعام دوغ فود كو.؟",
            "about.faq2_a": "نوصي بانتقال تدريجي على ٧ أيام: ابدأ بمزج ٢٥٪ من طعامنا مع ٧٥٪ من طعام كلبك الحالي، وزِد النسبة تدريجياً كل يوم. هذا يساعد على تجنب أي اضطراب هضمي أثناء تكيّف ميكروبيوم أمعاء كلبك مع التغذية الجديدة عالية الجودة.",
            "about.faq3_q": "هل توصّلون إلى جميع أنحاء قطر؟",
            "about.faq3_a": "نعم، نوصّل إلى جميع مناطق قطر بما فيها الدوحة ولوسيل والوكرة والخور والريان. التوصيل مجاني للطلبات فوق ١٥٠ ريالاً قطرياً. عادة ما تصل الطلبات خلال ١-٢ يوم عمل.",
            "about.faq4_q": "ما هو ضمان استرجاع الأموال لديكم؟",
            "about.faq4_a": "إذا لم يعجب كلبك الطعام خلال ٣٠ يوماً، سنقوم برد كامل المبلغ — دون أي أسئلة. فقط راسلنا عبر واتساب مع تفاصيل طلبك وسنُنجز الأمر فوراً.",
            "about.faq5_q": "هل منتجاتكم معتمدة من أطباء بيطريين؟",
            "about.faq5_a": "كل وصفة يُعدّها أخصائيو تغذية بيطريون معتمدون، وتفي بمعايير AAFCO الغذائية أو تتجاوزها. كما نعمل مع لجنة من ١٢ طبيباً بيطرياً ممارساً في قطر يراجعون ويعتمدون تركيباتنا سنوياً.",

            "about.cta_title": "امنح كلبك التغذية التي يستحقها.",
            "about.cta_desc": "اطلب عبر واتساب في أقل من دقيقتين — توصيل مجاني للطلبات فوق ١٥٠ ريالاً قطرياً.",

            /* CONTACT */
            "contact.title": "تواصل معنا – دوغ فود كو. قطر",
            "contact.meta_desc": "تواصل مع دوغ فود كو. عبر واتساب أو الهاتف أو البريد الإلكتروني. توصيل مجاني في قطر للطلبات فوق ١٥٠ ريالاً قطرياً. نرد عادة خلال ٣٠ دقيقة.",
            "contact.breadcrumb_current": "تواصل معنا",
            "contact.hero_title": "يسعدنا التواصل معك",
            "contact.hero_desc": "أسئلة، طلبات، نصائح بيطرية — فريقنا متاح عبر واتساب والبريد الإلكتروني والهاتف. ونرد فعلاً.",
            "contact.getintouch": "تواصل معنا",
            "contact.intro": "سواء أردت تقديم طلب، أو السؤال عن المكونات، أو مجرد مشاركة صورة كلبك السعيد — نحن هنا من أجل ذلك.",
            "contact.wa_title": "واتساب (الأسرع)",
            "contact.wa_desc": "نرد عادة خلال ٣٠ دقيقة",
            "contact.phone_title": "الهاتف",
            "contact.phone_desc": "السبت–الخميس: ٨ صباحاً – ٨ مساءً",
            "contact.email_title": "البريد الإلكتروني",
            "contact.email_desc": "الرد خلال يوم عمل واحد",
            "contact.area_title": "منطقة التوصيل",
            "contact.area_desc1": "جميع مناطق قطر.",
            "contact.area_desc2": "توصيل مجاني للطلبات فوق ١٥٠ ريالاً قطرياً.",
            "contact.order_hint_title": "تريد تقديم طلب؟",
            "contact.order_hint_desc": "توجّه إلى متجرنا، اختر منتجاتك، واضغط \u201cاطلب عبر واتساب\u201d لأسرع تجربة.",
            "contact.order_hint_cta": "تصفّح المنتجات ←",

            "contact.form_title": "أرسل لنا رسالة",
            "contact.form_desc": "سنرد عليك عبر واتساب أو البريد الإلكتروني، أيهما تفضّل.",
            "contact.form_name": "اسمك *",
            "contact.form_name_ph": "أحمد الراشد",
            "contact.form_phone": "الهاتف / واتساب",
            "contact.form_phone_ph": "٩٧٤+ XXXX XXXX",
            "contact.form_email": "البريد الإلكتروني *",
            "contact.form_email_ph": "you@example.com",
            "contact.form_subject": "الموضوع",
            "contact.form_subject_select": "اختر موضوعاً",
            "contact.form_subject1": "سؤال عن منتج",
            "contact.form_subject2": "استفسار عن طلب",
            "contact.form_subject3": "سؤال عن التوصيل",
            "contact.form_subject4": "نصيحة بيطرية / غذائية",
            "contact.form_subject5": "الإرجاع والاسترداد",
            "contact.form_subject6": "أخرى",
            "contact.form_message": "الرسالة *",
            "contact.form_message_ph": "أخبرنا عن كلبك وكيف يمكننا المساعدة…",
            "contact.form_submit": "إرسال الرسالة عبر واتساب ←",
            "contact.form_note": "🔒 تُفتح رسالتك مباشرة في واتساب — لا نحتفظ ببياناتك أبداً.",
            "contact.success_title": "تم إرسال الرسالة!",
            "contact.success_desc": "من المفترض أن يكون واتساب قد فتح برسالتك. سنرد في أقرب وقت ممكن — عادة خلال ساعة!",
            "contact.success_cta": "تصفّح منتجاتنا",

            "contact.faq_label": "إجابات سريعة",
            "contact.faq_title": "أسئلة شائعة",
            "contact.faq1_q": "كيف أقدّم طلباً؟",
            "contact.faq1_a": "قم بزيارة صفحة المتجر، واختر منتجك وحجمه، ثم اضغط \u201cاطلب عبر واتساب\u201d. ستفتح رسالة معبّأة مسبقاً في واتساب — فقط أدخل اسمك وهاتفك ومنطقة التوصيل وأرسل. سنؤكد طلبك خلال دقائق.",
            "contact.faq2_q": "ما هي طرق الدفع المتاحة؟",
            "contact.faq2_a": "نقبل الدفع نقداً عند الاستلام، والتحويل البنكي (QNB، QIIB، CBQ)، والدفع بالبطاقة عبر رابط دفع آمن يُرسَل عبر واتساب. جميع البطاقات الرئيسية مدعومة بما فيها فيزا وماستركارد وأمكس.",
            "contact.faq3_q": "كم يستغرق التوصيل؟",
            "contact.faq3_a": "التوصيل القياسي داخل الدوحة والمناطق المحيطة يستغرق ١-٢ يوم عمل. التوصيل في نفس اليوم متاح للطلبات المقدَّمة قبل الساعة ١٢ ظهراً في أيام العمل (حسب التوفر). سنؤكد موعد التوصيل عند تأكيد طلبك عبر واتساب.",
            "contact.faq4_q": "هل تقدّمون خصومات للطلبات الكبيرة أو الاشتراكات؟",
            "contact.faq4_a": "نعم! راسلنا عبر واتساب للسؤال عن باقات الاشتراك الشهرية — وفّر حتى ١٥٪ مقارنة بالطلبات الفردية، مع توصيل مجاني. كما نقدّم أسعاراً خاصة للكميات الكبيرة لمرابض الكلاب والملاجئ والمربّين.",
            "contact.cta_title": "هل أنت مستعد لتحسين صحة كلبك؟",
            "contact.cta_desc": "انضم إلى أكثر من ٥٠،٠٠٠ كلب سعيد يزدهر بالفعل مع دوغ فود كو."
        }
    };

    const STORAGE_KEY = "dogfoodco_lang";

    function detectLanguage() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === "en" || saved === "ar") return saved;
        } catch (e) { /* localStorage unavailable */ }

        // Gulf/Qatar visitors default to Arabic
        try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
            if (tz === "Asia/Qatar") return "ar";
        } catch (e) { /* ignore */ }

        const navLangs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ""];
        for (const l of navLangs) {
            if (l && l.toLowerCase().startsWith("ar")) return "ar";
        }
        return "en";
    }

    function applyLanguage(lang) {
        const dict = translations[lang] || translations.en;
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
        document.body.classList.toggle("lang-ar", lang === "ar");

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
        });
        document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
            const key = el.getAttribute("data-i18n-aria-label");
            if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
        });
        document.querySelectorAll("[data-i18n-alt]").forEach(el => {
            const key = el.getAttribute("data-i18n-alt");
            if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
        });
        document.querySelectorAll("[data-i18n-title]").forEach(el => {
            const key = el.getAttribute("data-i18n-title");
            if (dict[key] !== undefined) el.setAttribute("title", dict[key]);
        });

        const pageTitleKey = document.body.getAttribute("data-i18n-page-title");
        if (pageTitleKey && dict[pageTitleKey]) document.title = dict[pageTitleKey];

        const metaDesc = document.querySelector('meta[name="description"]');
        const metaKey = document.body.getAttribute("data-i18n-meta-desc");
        if (metaDesc && metaKey && dict[metaKey]) metaDesc.setAttribute("content", dict[metaKey]);

        const toggleLabel = document.getElementById("langToggleLabel");
        if (toggleLabel) toggleLabel.textContent = dict["lang.switchTo"];

        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

        // Let dependent scripts (e.g. shop product renderer) know the language changed
        document.dispatchEvent(new CustomEvent("dogfoodco:langchange", { detail: { lang } }));
    }

    window.toggleLang = function () {
        const current = document.documentElement.lang === "ar" ? "ar" : "en";
        applyLanguage(current === "ar" ? "en" : "ar");
    };

    window.getCurrentLang = function () {
        return document.documentElement.lang === "ar" ? "ar" : "en";
    };

    window.dogfoodTranslations = translations;

    document.addEventListener("DOMContentLoaded", function () {
        applyLanguage(detectLanguage());
    });
})();
