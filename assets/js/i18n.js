/* =========================================================================
   Catering Firdaus — translation dictionary + menu data
   Source of truth for all dish names/prices/weights: the two menu images
   supplied by the client. Nothing here is invented.
   ========================================================================= */

window.SITE_I18N = {
  bg: {
    _meta: { dir: "ltr", label: "Български", htmlLang: "bg" },
    seo: {
      title: "Кетъринг Фирдаус — Обедно меню и кетъринг с безплатна доставка",
      description: "Кетъринг Фирдаус предлага прясно приготвена храна за обяд и вечеря с безплатна доставка. Организираме и партита, фирмени събития и семейни празници. Разгледайте менюто и поръчайте по телефона."
    },
    skipLink: "Към съдържанието",
    nav: { home: "Начало", about: "За нас", menu: "Меню", weekly: "Седмично меню", events: "Партита и събития", contact: "Контакти", order: "Поръчай сега" },
    langSwitcher: { label: "Език" },
    hero: {
      eyebrow: "Кетъринг Фирдаус",
      headline: "Вкусната храна, която спасява деня ви",
      body: "Добре дошли при нас – мястото, където вкусната храна спасява деня ви. Ние сме вашата отмяна и помощ, когато нямате време, но искате нещо истински вкусно за обяд или вечеря. Бързо, топло и приготвено с грижа – точно както трябва.",
      ctaPrimary: "Поръчай сега",
      ctaSecondary: "Разгледай менюто",
      phoneLabel: "Обадете се за поръчка",
      badgeDelivery: "Безплатна доставка",
      badgeDeadlineWeekly: "Обедно меню до 11:00 ч.",
      badgeDeadlineMain: "Основно меню до 14:00 ч."
    },
    trustBar: {
      delivery: "Безплатна доставка",
      weeklyDeadline: "Обедно меню — заявки до 11:00 ч.",
      mainDeadline: "Основно меню — заявки до 14:00 ч.",
      fresh: "Приготвено прясно всеки ден"
    },
    about: {
      eyebrow: "За нас",
      heading: "Готвим с грижа, доставяме с обич",
      body: "Добре дошли при нас – мястото, където вкусната храна спасява деня ви. Ние сме вашата отмяна и помощ, когато нямате време, но искате нещо истински вкусно за обяд или вечеря. Бързо, топло и приготвено с грижа – точно както трябва."
    },
    why: {
      eyebrow: "Защо да изберете нас",
      heading: "Причини да поръчате от Фирдаус",
      items: [
        { title: "Прясна храна", text: "Всяко ястие се приготвя прясно, с внимание към качеството на продуктите." },
        { title: "Бързо обслужване", text: "Поръчката ви се приготвя и доставя своевременно, без излишно чакане." },
        { title: "Приготвено с грижа", text: "Всяко ястие е приготвено внимателно, точно както трябва." },
        { title: "Удобно поръчване", text: "Поръчвате лесно по телефона — бързо, без усложнения." },
        { title: "Безплатна доставка", text: "Доставката е за наша сметка — без скрити такси." }
      ]
    },
    menuSection: {
      eyebrow: "Основно меню",
      heading: "Разгледайте менюто ни",
      subheading: "Заявки за храна за вкъщи се приемат до 14:00 часа.",
      priceLabel: "Цена",
      categories: { alaminuti: "Аламинути", grill: "Скара", salads: "Салати", sides: "Гарнитури" }
    },
    weeklySection: {
      eyebrow: "Седмично меню",
      heading: "Обедно меню по дни",
      subheading: "Заявки за обедно меню се приемат до 11:00 часа.",
      soups: "Супи", mains: "Основни ястия", desserts: "Десерти", bread: "Хляб", combo: "Пакетно меню за деня",
      days: { mon: "Понеделник", tue: "Вторник", wed: "Сряда", thu: "Четвъртък", fri: "Петък" }
    },
    events: {
      eyebrow: "Партита и събития",
      heading: "Планирате специален повод?",
      subheading: "Ние ще се погрижим за вкусната храна и приятната атмосфера.",
      body: "Подходящо място за рождени дни, частни партита, фирмени събития, семейни празници и други специални моменти.",
      cta: "Направи запитване",
      imageAlt: "Празнична маса, подредена от Кетъринг Фирдаус",
      types: [
        { key: "birthday", label: "Рождени дни" },
        { key: "private", label: "Частни партита" },
        { key: "corporate", label: "Фирмени събития" },
        { key: "family", label: "Семейни празници" },
        { key: "special", label: "Специални поводи" },
        { key: "group", label: "Групови събирания" }
      ],
      form: {
        eyebrow: "Запитване",
        heading: "Разкажете ни за събитието",
        body: "Попълнете накратко какво планирате и ще уточним менюто и детайлите заедно.",
        name: "Име",
        namePlaceholder: "Вашето име",
        phone: "Телефон",
        phonePlaceholder: "напр. 0879 333 926",
        type: "Вид събитие",
        typePlaceholder: "Изберете вид събитие",
        date: "Предпочитана дата",
        guests: "Брой гости",
        guestsPlaceholder: "напр. 30",
        notes: "Допълнителна информация",
        notesPlaceholder: "Меню, час, място, специални изисквания…",
        optional: "по избор",
        submit: "Направи запитване",
        required: "Моля, попълнете това поле.",
        invalidPhone: "Моля, въведете валиден телефонен номер.",
        summaryTitle: "Запитване за събитие",
        successHeading: "Запитването е готово",
        successBody: "Остава да ни го изпратите — обадете се или го изпратете като SMS. Текстът по-долу е попълнен вместо вас.",
        call: "Обади се сега",
        sms: "Изпрати като SMS",
        copy: "Копирай текста",
        copied: "Копирано",
        reset: "Ново запитване"
      }
    },
    order: {
      eyebrow: "Поръчка",
      heading: "Поръчайте по телефона",
      body: "Обадете се на един от номерата по-долу — ще приготвим и доставим поръчката ви бързо, топло и с грижа.",
      deliveryBadge: "Доставка за наша сметка",
      weeklyDeadline: "Обедно меню: заявки до 11:00 ч.",
      mainDeadline: "Основно меню: заявки за храна за вкъщи до 14:00 ч.",
      callNow: "Обади се сега"
    },
    contact: {
      eyebrow: "Контакти",
      heading: "Свържи се с нас",
      phonesLabel: "Телефони за връзка",
      deliveryLabel: "Доставка",
      deliveryText: "Безплатна доставка за наша сметка.",
      hoursLabel: "Приемане на заявки",
      hoursWeekly: "Седмично (обедно) меню — до 11:00 ч.",
      hoursMain: "Основно меню (за вкъщи) — до 14:00 ч."
    },
    footer: {
      tagline: "Вкусна храна, приготвена с грижа.",
      rights: "Всички права запазени.",
      navHeading: "Навигация",
      contactHeading: "Контакти"
    },
    mobileCallBar: "Обади се за поръчка"
  },

  en: {
    _meta: { dir: "ltr", label: "English", htmlLang: "en" },
    seo: {
      title: "Catering Firdaus — Daily Lunch Menu & Catering with Free Delivery",
      description: "Catering Firdaus serves freshly prepared lunch and dinner with free delivery, and caters parties, corporate events and family celebrations. Browse the menu and order by phone."
    },
    skipLink: "Skip to content",
    nav: { home: "Home", about: "About", menu: "Menu", weekly: "Weekly Menu", events: "Parties & Events", contact: "Contact", order: "Order Now" },
    langSwitcher: { label: "Language" },
    hero: {
      eyebrow: "Catering Firdaus",
      headline: "Delicious food that saves your day",
      body: "Welcome — the place where delicious food saves your day. We're your shortcut and helping hand when you don't have time, but still want something truly tasty for lunch or dinner. Fast, warm, and made with care — just the way it should be.",
      ctaPrimary: "Order Now",
      ctaSecondary: "View the Menu",
      phoneLabel: "Call to order",
      badgeDelivery: "Free Delivery",
      badgeDeadlineWeekly: "Weekly menu until 11:00",
      badgeDeadlineMain: "Main menu until 14:00"
    },
    trustBar: {
      delivery: "Free Delivery",
      weeklyDeadline: "Weekly menu — orders until 11:00",
      mainDeadline: "Main menu — orders until 14:00",
      fresh: "Freshly prepared every day"
    },
    about: {
      eyebrow: "About Us",
      heading: "Cooked with care, delivered with love",
      body: "Welcome — the place where delicious food saves your day. We're your shortcut and helping hand when you don't have time, but still want something truly tasty for lunch or dinner. Fast, warm, and made with care — just the way it should be."
    },
    why: {
      eyebrow: "Why Choose Us",
      heading: "Reasons to order from Firdaus",
      items: [
        { title: "Fresh Food", text: "Every dish is freshly prepared, with attention to ingredient quality." },
        { title: "Fast Service", text: "Your order is prepared and delivered promptly, without unnecessary waiting." },
        { title: "Made With Care", text: "Every dish is prepared carefully, exactly the way it should be." },
        { title: "Convenient Ordering", text: "Order easily by phone — quick, with no hassle." },
        { title: "Free Delivery", text: "Delivery is on us — no hidden fees." }
      ]
    },
    menuSection: {
      eyebrow: "Main Menu",
      heading: "Browse Our Menu",
      subheading: "Takeaway food orders are accepted until 14:00.",
      priceLabel: "Price",
      categories: { alaminuti: "Alaminuti (Pan-Fried Specialties)", grill: "Grill", salads: "Salads", sides: "Side Dishes" }
    },
    weeklySection: {
      eyebrow: "Weekly Menu",
      heading: "Daily Lunch Menu",
      subheading: "Weekly lunch menu orders are accepted until 11:00.",
      soups: "Soups", mains: "Main Dishes", desserts: "Desserts", bread: "Bread", combo: "Daily Set Menu",
      days: { mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday" }
    },
    events: {
      eyebrow: "Parties & Events",
      heading: "Planning a special occasion?",
      subheading: "We take care of the food and the atmosphere.",
      body: "A good fit for birthdays, private parties, corporate events, family celebrations and other special moments.",
      cta: "Send an enquiry",
      imageAlt: "A celebration table catered by Catering Firdaus",
      types: [
        { key: "birthday", label: "Birthdays" },
        { key: "private", label: "Private parties" },
        { key: "corporate", label: "Corporate events" },
        { key: "family", label: "Family celebrations" },
        { key: "special", label: "Special occasions" },
        { key: "group", label: "Group gatherings" }
      ],
      form: {
        eyebrow: "Enquiry",
        heading: "Tell us about your event",
        body: "Give us a few details about what you are planning and we will agree the menu and the rest together.",
        name: "Name",
        namePlaceholder: "Your name",
        phone: "Phone",
        phonePlaceholder: "e.g. 0879 333 926",
        type: "Event type",
        typePlaceholder: "Choose an event type",
        date: "Preferred date",
        guests: "Number of guests",
        guestsPlaceholder: "e.g. 30",
        notes: "Additional information",
        notesPlaceholder: "Menu, time, venue, special requirements…",
        optional: "optional",
        submit: "Send an enquiry",
        required: "Please fill in this field.",
        invalidPhone: "Please enter a valid phone number.",
        summaryTitle: "Event enquiry",
        successHeading: "Your enquiry is ready",
        successBody: "One step left — call us or send it as an SMS. The text below has been filled in for you.",
        call: "Call now",
        sms: "Send as SMS",
        copy: "Copy the text",
        copied: "Copied",
        reset: "New enquiry"
      }
    },
    order: {
      eyebrow: "Order",
      heading: "Order by Phone",
      body: "Call one of the numbers below — we'll prepare and deliver your order fast, warm, and with care.",
      deliveryBadge: "Delivery is on us",
      weeklyDeadline: "Weekly menu: orders until 11:00",
      mainDeadline: "Main menu: takeaway orders until 14:00",
      callNow: "Call Now"
    },
    contact: {
      eyebrow: "Contact",
      heading: "Get in Touch",
      phonesLabel: "Phone Numbers",
      deliveryLabel: "Delivery",
      deliveryText: "Free delivery, on us.",
      hoursLabel: "Order Deadlines",
      hoursWeekly: "Weekly (lunch) menu — until 11:00",
      hoursMain: "Main menu (takeaway) — until 14:00"
    },
    footer: {
      tagline: "Delicious food, made with care.",
      rights: "All rights reserved.",
      navHeading: "Navigation",
      contactHeading: "Contact"
    },
    mobileCallBar: "Call to Order"
  },

  tr: {
    _meta: { dir: "ltr", label: "Türkçe", htmlLang: "tr" },
    seo: {
      title: "Catering Firdaus — Günlük Öğle Menüsü ve Ücretsiz Teslimatlı Catering",
      description: "Catering Firdaus, taze hazırlanmış öğle ve akşam yemeklerini ücretsiz teslimatla sunar; parti, kurumsal etkinlik ve aile kutlamaları için de hizmet verir. Menüyü inceleyin, telefonla sipariş verin."
    },
    skipLink: "İçeriğe geç",
    nav: { home: "Ana Sayfa", about: "Hakkımızda", menu: "Menü", weekly: "Haftalık Menü", events: "Parti ve Etkinlik", contact: "İletişim", order: "Şimdi Sipariş Ver" },
    langSwitcher: { label: "Dil" },
    hero: {
      eyebrow: "Catering Firdaus",
      headline: "Gününüzü kurtaran lezzetli yemekler",
      body: "Hoş geldiniz — lezzetli yemeğin gününüzü kurtardığı yer. Zamanınız olmadığında ama öğle veya akşam yemeği için gerçekten lezzetli bir şey istediğinizde, sizin çözümünüz ve yardımcınızız. Hızlı, sıcak ve özenle hazırlanmış — tam olması gerektiği gibi.",
      ctaPrimary: "Şimdi Sipariş Ver",
      ctaSecondary: "Menüyü İncele",
      phoneLabel: "Sipariş için arayın",
      badgeDelivery: "Ücretsiz Teslimat",
      badgeDeadlineWeekly: "Haftalık menü saat 11:00'a kadar",
      badgeDeadlineMain: "Ana menü saat 14:00'a kadar"
    },
    trustBar: {
      delivery: "Ücretsiz Teslimat",
      weeklyDeadline: "Haftalık menü — sipariş saat 11:00'a kadar",
      mainDeadline: "Ana menü — sipariş saat 14:00'a kadar",
      fresh: "Her gün taze hazırlanır"
    },
    about: {
      eyebrow: "Hakkımızda",
      heading: "Özenle pişirilir, sevgiyle teslim edilir",
      body: "Hoş geldiniz — lezzetli yemeğin gününüzü kurtardığı yer. Zamanınız olmadığında ama öğle veya akşam yemeği için gerçekten lezzetli bir şey istediğinizde, sizin çözümünüz ve yardımcınızız. Hızlı, sıcak ve özenle hazırlanmış — tam olması gerektiği gibi."
    },
    why: {
      eyebrow: "Neden Bizi Seçmelisiniz",
      heading: "Firdaus'tan sipariş verme nedenleri",
      items: [
        { title: "Taze Yemek", text: "Her yemek, malzeme kalitesine özen gösterilerek taze hazırlanır." },
        { title: "Hızlı Servis", text: "Siparişiniz gereksiz beklemeden hazırlanır ve teslim edilir." },
        { title: "Özenle Hazırlanır", text: "Her yemek tam olması gerektiği gibi özenle hazırlanır." },
        { title: "Kolay Sipariş", text: "Telefonla kolayca sipariş verin — hızlı ve sorunsuz." },
        { title: "Ücretsiz Teslimat", text: "Teslimat bizden — gizli ücret yok." }
      ]
    },
    menuSection: {
      eyebrow: "Ana Menü",
      heading: "Menümüzü İnceleyin",
      subheading: "Paket sipariş talepleri saat 14:00'a kadar kabul edilir.",
      priceLabel: "Fiyat",
      categories: { alaminuti: "Alaminuti (Anlık Kızartmalar)", grill: "Izgara", salads: "Salatalar", sides: "Garnitürler" }
    },
    weeklySection: {
      eyebrow: "Haftalık Menü",
      heading: "Günlük Öğle Menüsü",
      subheading: "Haftalık öğle menüsü talepleri saat 11:00'a kadar kabul edilir.",
      soups: "Çorbalar", mains: "Ana Yemekler", desserts: "Tatlılar", bread: "Ekmek", combo: "Günün Menüsü",
      days: { mon: "Pazartesi", tue: "Salı", wed: "Çarşamba", thu: "Perşembe", fri: "Cuma" }
    },
    events: {
      eyebrow: "Partiler ve Etkinlikler",
      heading: "Özel bir gün mü planlıyorsunuz?",
      subheading: "Lezzetli yemeği ve keyifli atmosferi biz üstleniyoruz.",
      body: "Doğum günleri, özel partiler, kurumsal etkinlikler, aile kutlamaları ve diğer özel anlar için uygun bir adres.",
      cta: "Teklif iste",
      imageAlt: "Catering Firdaus tarafından hazırlanmış kutlama masası",
      types: [
        { key: "birthday", label: "Doğum günleri" },
        { key: "private", label: "Özel partiler" },
        { key: "corporate", label: "Kurumsal etkinlikler" },
        { key: "family", label: "Aile kutlamaları" },
        { key: "special", label: "Özel günler" },
        { key: "group", label: "Grup buluşmaları" }
      ],
      form: {
        eyebrow: "Talep",
        heading: "Etkinliğinizden bahsedin",
        body: "Ne planladığınızı kısaca yazın; menüyü ve ayrıntıları birlikte belirleyelim.",
        name: "Ad",
        namePlaceholder: "Adınız",
        phone: "Telefon",
        phonePlaceholder: "örn. 0879 333 926",
        type: "Etkinlik türü",
        typePlaceholder: "Etkinlik türünü seçin",
        date: "Tercih edilen tarih",
        guests: "Kişi sayısı",
        guestsPlaceholder: "örn. 30",
        notes: "Ek bilgi",
        notesPlaceholder: "Menü, saat, mekân, özel istekler…",
        optional: "isteğe bağlı",
        submit: "Teklif iste",
        required: "Lütfen bu alanı doldurun.",
        invalidPhone: "Lütfen geçerli bir telefon numarası girin.",
        summaryTitle: "Etkinlik talebi",
        successHeading: "Talebiniz hazır",
        successBody: "Tek adım kaldı — bizi arayın ya da SMS olarak gönderin. Aşağıdaki metni sizin için hazırladık.",
        call: "Hemen ara",
        sms: "SMS olarak gönder",
        copy: "Metni kopyala",
        copied: "Kopyalandı",
        reset: "Yeni talep"
      }
    },
    order: {
      eyebrow: "Sipariş",
      heading: "Telefonla Sipariş Verin",
      body: "Aşağıdaki numaralardan birini arayın — siparişinizi hızlı, sıcak ve özenle hazırlayıp teslim edelim.",
      deliveryBadge: "Teslimat bizden",
      weeklyDeadline: "Haftalık menü: sipariş saat 11:00'a kadar",
      mainDeadline: "Ana menü: paket sipariş saat 14:00'a kadar",
      callNow: "Hemen Ara"
    },
    contact: {
      eyebrow: "İletişim",
      heading: "Bize Ulaşın",
      phonesLabel: "Telefon Numaraları",
      deliveryLabel: "Teslimat",
      deliveryText: "Ücretsiz teslimat, bizden.",
      hoursLabel: "Sipariş Son Saatleri",
      hoursWeekly: "Haftalık (öğle) menü — saat 11:00'a kadar",
      hoursMain: "Ana menü (paket) — saat 14:00'a kadar"
    },
    footer: {
      tagline: "Özenle hazırlanmış lezzetli yemekler.",
      rights: "Tüm hakları saklıdır.",
      navHeading: "Gezinme",
      contactHeading: "İletişim"
    },
    mobileCallBar: "Sipariş İçin Arayın"
  },

  ar: {
    _meta: { dir: "rtl", label: "العربية", htmlLang: "ar" },
    seo: {
      title: "كيترنغ فردوس — قائمة الغداء اليومية وخدمات التموين مع توصيل مجاني",
      description: "يقدم كيترنغ فردوس وجبات غداء وعشاء طازجة مع توصيل مجاني، كما ننظّم الحفلات وفعاليات الشركات والمناسبات العائلية. تصفح القائمة واطلب عبر الهاتف."
    },
    skipLink: "الانتقال إلى المحتوى",
    nav: { home: "الرئيسية", about: "من نحن", menu: "القائمة", weekly: "القائمة الأسبوعية", events: "الحفلات والمناسبات", contact: "تواصل معنا", order: "اطلب الآن" },
    langSwitcher: { label: "اللغة" },
    hero: {
      eyebrow: "كيترنغ فردوس",
      headline: "طعام لذيذ ينقذ يومك",
      body: "مرحبًا بكم في المكان الذي يُنقذ فيه الطعام اللذيذ يومكم. نحن حلّكم وسندكم عندما لا يكون لديكم وقت، لكنكم ترغبون بشيء لذيذ حقًا لتناوله في الغداء أو العشاء. سريع، دافئ، ومُحضّر بعناية — تمامًا كما يجب أن يكون.",
      ctaPrimary: "اطلب الآن",
      ctaSecondary: "تصفح القائمة",
      phoneLabel: "اتصل للطلب",
      badgeDelivery: "توصيل مجاني",
      badgeDeadlineWeekly: "القائمة الأسبوعية حتى الساعة 11:00",
      badgeDeadlineMain: "القائمة الرئيسية حتى الساعة 14:00"
    },
    trustBar: {
      delivery: "توصيل مجاني",
      weeklyDeadline: "القائمة الأسبوعية — الطلبات حتى الساعة 11:00",
      mainDeadline: "القائمة الرئيسية — الطلبات حتى الساعة 14:00",
      fresh: "يُحضّر طازجًا كل يوم"
    },
    about: {
      eyebrow: "من نحن",
      heading: "يُطهى بعناية، ويُوصَل بمحبة",
      body: "مرحبًا بكم في المكان الذي يُنقذ فيه الطعام اللذيذ يومكم. نحن حلّكم وسندكم عندما لا يكون لديكم وقت، لكنكم ترغبون بشيء لذيذ حقًا لتناوله في الغداء أو العشاء. سريع، دافئ، ومُحضّر بعناية — تمامًا كما يجب أن يكون."
    },
    why: {
      eyebrow: "لماذا تختارنا",
      heading: "أسباب للطلب من فردوس",
      items: [
        { title: "طعام طازج", text: "يُحضّر كل طبق طازجًا، مع الاهتمام بجودة المكونات." },
        { title: "خدمة سريعة", text: "يُحضّر طلبك ويُوصَل في الوقت المناسب، دون انتظار غير ضروري." },
        { title: "مُحضّر بعناية", text: "يُحضّر كل طبق بعناية، تمامًا كما يجب أن يكون." },
        { title: "طلب سهل", text: "اطلب بسهولة عبر الهاتف — بسرعة ودون تعقيد." },
        { title: "توصيل مجاني", text: "التوصيل على حسابنا — دون رسوم خفية." }
      ]
    },
    menuSection: {
      eyebrow: "القائمة الرئيسية",
      heading: "تصفح قائمتنا",
      subheading: "تُقبل طلبات الطعام الجاهز حتى الساعة 14:00.",
      priceLabel: "السعر",
      categories: { alaminuti: "أطباق مقلية سريعة", grill: "المشويات", salads: "السلطات", sides: "الأطباق الجانبية" }
    },
    weeklySection: {
      eyebrow: "القائمة الأسبوعية",
      heading: "قائمة الغداء اليومية",
      subheading: "تُقبل طلبات قائمة الغداء الأسبوعية حتى الساعة 11:00.",
      soups: "الشوربات", mains: "الأطباق الرئيسية", desserts: "الحلويات", bread: "الخبز", combo: "قائمة اليوم المتكاملة",
      days: { mon: "الاثنين", tue: "الثلاثاء", wed: "الأربعاء", thu: "الخميس", fri: "الجمعة" }
    },
    events: {
      eyebrow: "الحفلات والمناسبات",
      heading: "هل تخطط لمناسبة خاصة؟",
      subheading: "نحن نتكفل بالطعام اللذيذ والأجواء الجميلة.",
      body: "مكان مناسب لأعياد الميلاد والحفلات الخاصة وفعاليات الشركات والمناسبات العائلية وغيرها من اللحظات المميزة.",
      cta: "أرسل استفسارًا",
      imageAlt: "طاولة احتفال من إعداد كيترنغ فردوس",
      types: [
        { key: "birthday", label: "أعياد الميلاد" },
        { key: "private", label: "حفلات خاصة" },
        { key: "corporate", label: "فعاليات الشركات" },
        { key: "family", label: "مناسبات عائلية" },
        { key: "special", label: "مناسبات خاصة" },
        { key: "group", label: "تجمعات جماعية" }
      ],
      form: {
        eyebrow: "استفسار",
        heading: "أخبرنا عن مناسبتك",
        body: "اكتب لنا باختصار ما الذي تخطط له وسنتفق معًا على القائمة والتفاصيل.",
        name: "الاسم",
        namePlaceholder: "اسمك",
        phone: "الهاتف",
        phonePlaceholder: "مثال 0879 333 926",
        type: "نوع المناسبة",
        typePlaceholder: "اختر نوع المناسبة",
        date: "التاريخ المفضل",
        guests: "عدد الضيوف",
        guestsPlaceholder: "مثال 30",
        notes: "معلومات إضافية",
        notesPlaceholder: "القائمة، الوقت، المكان، طلبات خاصة…",
        optional: "اختياري",
        submit: "أرسل استفسارًا",
        required: "يرجى تعبئة هذا الحقل.",
        invalidPhone: "يرجى إدخال رقم هاتف صحيح.",
        summaryTitle: "استفسار عن مناسبة",
        successHeading: "استفسارك جاهز",
        successBody: "بقيت خطوة واحدة — اتصل بنا أو أرسله كرسالة نصية. النص أدناه معبأ من أجلك.",
        call: "اتصل الآن",
        sms: "إرسال كرسالة نصية",
        copy: "انسخ النص",
        copied: "تم النسخ",
        reset: "استفسار جديد"
      }
    },
    order: {
      eyebrow: "الطلب",
      heading: "اطلب عبر الهاتف",
      body: "اتصل بأحد الأرقام أدناه — سنقوم بتحضير وتوصيل طلبك بسرعة ودفء وعناية.",
      deliveryBadge: "التوصيل على حسابنا",
      weeklyDeadline: "القائمة الأسبوعية: الطلبات حتى الساعة 11:00",
      mainDeadline: "القائمة الرئيسية: طلبات الطعام الجاهز حتى الساعة 14:00",
      callNow: "اتصل الآن"
    },
    contact: {
      eyebrow: "تواصل معنا",
      heading: "ابقَ على تواصل",
      phonesLabel: "أرقام الهاتف",
      deliveryLabel: "التوصيل",
      deliveryText: "توصيل مجاني، على حسابنا.",
      hoursLabel: "مواعيد استقبال الطلبات",
      hoursWeekly: "القائمة الأسبوعية (الغداء) — حتى الساعة 11:00",
      hoursMain: "القائمة الرئيسية (طعام جاهز) — حتى الساعة 14:00"
    },
    footer: {
      tagline: "طعام لذيذ، مُحضّر بعناية.",
      rights: "جميع الحقوق محفوظة.",
      navHeading: "التنقل",
      contactHeading: "تواصل معنا"
    },
    mobileCallBar: "اتصل للطلب"
  }
};

/* =========================================================================
   Menu data — dish names translated per language; prices/weights identical
   across languages (as printed on the source images) and NEVER invented.
   Weight units: g = grams, pcs = pieces (Bulgarian "бр.").
   ========================================================================= */
window.MENU_DATA = {
  categories: ["alaminuti", "grill", "salads", "sides"],
  items: {
    alaminuti: [
      { name: { bg: "Кашкавал пане", en: "Breaded Kashkaval Cheese", tr: "Panelenmiş Kaşkaval Peyniri", ar: "جبنة كشكافال مقلية بالبقسماط" }, weight: "150 г / g", price: 2.70 },
      { name: { bg: "Пилешко бонфиле с корнфлейкс", en: "Chicken Fillet in Cornflakes", tr: "Mısır Gevreği Kaplı Tavuk Fileto", ar: "فيليه دجاج مقرمش بالكورن فليكس" }, weight: "200 г / g", price: 4.50 },
      { name: { bg: "Шницел от кайма", en: "Minced Meat Schnitzel", tr: "Kıyma Şnitzel", ar: "شنيتزل لحم مفروم" }, weight: "200 г / g", price: 3.40 },
      { name: { bg: "Пържено кюфте", en: "Fried Meatball", tr: "Kızarmış Köfte", ar: "كفتة مقلية" }, weight: "100 г / g", price: 1.20 },
      { name: { bg: "Тиквено кюфте", en: "Pumpkin Fritter", tr: "Kabak Köftesi", ar: "كفتة يقطين" }, weight: "90 г / g", price: 1.00 },
      { name: { bg: "Картофено кюфте", en: "Potato Fritter", tr: "Patates Köftesi", ar: "كفتة بطاطس" }, weight: "90 г / g", price: 1.00 },
      { name: { bg: "Панирани чушки", en: "Breaded Peppers", tr: "Panelenmiş Biber", ar: "فلفل مقلي بالبقسماط" }, weight: "3 бр. / pcs", price: 3.00 },
      { name: { bg: "Тиквички с кисело мляко", en: "Zucchini with Yogurt", tr: "Yoğurtlu Kabak", ar: "كوسا باللبن الزبادي" }, weight: "", price: 3.50 }
    ],
    grill: [
      { name: { bg: "Кюфте/кебапче", en: "Meatball / Kebapche", tr: "Köfte / Kebapçe", ar: "كفتة / كباب صغير" }, weight: "70 г / g", price: 0.90 },
      { name: { bg: "Пилешка пържола от бут", en: "Chicken Thigh Steak", tr: "Tavuk But Pirzola", ar: "ستيك فخذ دجاج" }, weight: "200 г / g", price: 4.00 },
      { name: { bg: "Пилешка пържола от филе", en: "Chicken Fillet Steak", tr: "Tavuk Fileto Pirzola", ar: "ستيك فيليه دجاج" }, weight: "200 г / g", price: 4.00 },
      { name: { bg: "Пилешко роле с кашкавал", en: "Chicken Roll with Kashkaval", tr: "Kaşkavallı Tavuk Rulo", ar: "رول دجاج بالجبنة الكشكافال" }, weight: "200 г / g", price: 4.50 },
      { name: { bg: "Свинска вратна пържола", en: "Pork Neck Steak", tr: "Domuz Boyun Pirzolası", ar: "شريحة رقبة خنزير" }, weight: "200 г / g", price: 4.00 },
      { name: { bg: "Татарско кюфте", en: "Tatarsko Kyufte (Flat Meatball)", tr: "Tatar Köftesi", ar: "كفتة تترية" }, weight: "180 г / g", price: 2.50 },
      { name: { bg: "Телешки Адана кебап", en: "Beef Adana Kebab", tr: "Dana Adana Kebap", ar: "كباب أضنة باللحم البقري" }, weight: "200 г / g", price: 4.00 },
      { name: { bg: "Пилешка/Свинска кълцаница", en: "Chicken / Pork Kaltsanitsa (Minced Grill)", tr: "Tavuk / Domuz Kıyma Izgara", ar: "دجاج / خنزير مفروم مشوي" }, weight: "150 г / g", price: 4.00 }
    ],
    salads: [
      { name: { bg: "Шопска салата", en: "Shopska Salad", tr: "Şopska Salata", ar: "سلطة شوبسكا" }, weight: "350 г / g", price: 3.50 },
      { name: { bg: "Овчарска салата", en: "Shepherd's Salad", tr: "Çoban Salatası", ar: "سلطة الراعي" }, weight: "350 г / g", price: 4.50 },
      { name: { bg: "Снежанка", en: "Snezhanka (Yogurt & Cucumber Salad)", tr: "Snejanka (Yoğurtlu Salata)", ar: "سلطة سنيجانكا (زبادي وخيار)" }, weight: "200 г / g", price: 3.00 },
      { name: { bg: "Зелена салата", en: "Green Salad", tr: "Yeşil Salata", ar: "سلطة خضراء" }, weight: "300 г / g", price: 2.50 },
      { name: { bg: "Червено цвекло и морков", en: "Red Beet & Carrot Salad", tr: "Kırmızı Pancar ve Havuç Salatası", ar: "سلطة الشمندر الأحمر والجزر" }, weight: "300 г / g", price: 2.50 },
      { name: { bg: "Хавуч таратор", en: "Carrot Tarator", tr: "Havuçlu Tarator", ar: "طاراتور بالجزر" }, weight: "", price: 3.00 }
    ],
    sides: [
      { name: { bg: "Пържени картофи порция", en: "French Fries — Large Portion", tr: "Patates Kızartması (Büyük Porsiyon)", ar: "بطاطس مقلية - وجبة كبيرة" }, weight: "350 г / g", price: 3.00 },
      { name: { bg: "Пържени картофи", en: "French Fries", tr: "Patates Kızartması", ar: "بطاطس مقلية" }, weight: "200 г / g", price: 2.00 },
      { name: { bg: "Картофено пюре", en: "Mashed Potatoes", tr: "Patates Püresi", ar: "بطاطس مهروسة" }, weight: "200 г / g", price: 2.00 },
      { name: { bg: "Домати и краставици", en: "Tomatoes & Cucumbers", tr: "Domates ve Salatalık", ar: "طماطم وخيار" }, weight: "200 г / g", price: 2.00 },
      { name: { bg: "Зеле и моркови", en: "Cabbage & Carrot Salad", tr: "Lahana ve Havuç Salatası", ar: "سلطة الملفوف والجزر" }, weight: "200 г / g", price: 1.50 },
      { name: { bg: "Лютеница", en: "Lyutenitsa (Roasted Pepper Relish)", tr: "Lyutenitsa (Biber Sosu)", ar: "ليوتينيتسا (صلصة الفلفل)" }, weight: "100 г / g", price: 1.50 }
    ]
  }
};

window.WEEKLY_MENU = {
  days: ["mon", "tue", "wed", "thu", "fri"],
  data: {
    mon: {
      soups: [
        { name: { bg: "Телешко варено", en: "Beef Broth", tr: "Dana Etli Çorba", ar: "شوربة لحم العجل" }, price: 2.30 },
        { name: { bg: "Шкембе чорба", en: "Tripe Soup (Shkembe Chorba)", tr: "İşkembe Çorbası", ar: "شوربة الكرشة" }, price: 2.30 },
        { name: { bg: "Таратор", en: "Tarator (Cold Cucumber-Yogurt Soup)", tr: "Tarator (Soğuk Yoğurt Çorbası)", ar: "طاراتور (شوربة زبادي باردة)" }, price: 2.00 }
      ],
      mains: [
        { name: { bg: "Пил. месо със сметана, гъби и броколи", en: "Chicken with Cream, Mushrooms & Broccoli", tr: "Kremalı Mantarlı Brokolili Tavuk", ar: "دجاج بالكريمة والفطر والبروكلي" }, price: 5.50 },
        { name: { bg: "Пил. роле с кашкавал + гарнитура", en: "Chicken Roll with Kashkaval + Side", tr: "Kaşkavallı Tavuk Rulo + Garnitür", ar: "رول دجاج بجبنة كشكافال + طبق جانبي" }, price: 4.50 },
        { name: { bg: "2бр. телешки кюфтета + разядка с маслини и разядка с патладжан", en: "2 pcs Beef Meatballs + Olive Spread & Aubergine Spread", tr: "2 adet Dana Köfte + Zeytin ve Patlıcan Ezmesi", ar: "٢ كفتة لحم عجل + غموس زيتون وغموس باذنجان" }, price: 5.50 },
        { name: { bg: "Кашкавал пане + гарнитура", en: "Breaded Kashkaval + Side", tr: "Panelenmiş Kaşkaval + Garnitür", ar: "جبنة كشكافال مقلية + طبق جانبي" }, price: 4.50 }
      ],
      desserts: [
        { name: { bg: "Крем карамел", en: "Crème Caramel", tr: "Karamelli Muhallebi", ar: "كريم كراميل" }, price: 2.30 },
        { name: { bg: "Плодова салата", en: "Fruit Salad", tr: "Meyve Salatası", ar: "سلطة فواكه" }, price: 3.00 },
        { name: { bg: "Щрудел", en: "Strudel", tr: "Ştrudel", ar: "شترودل" }, price: 2.30 }
      ],
      bread: { name: { bg: "Домашна питка", en: "Homemade Bread", tr: "Ev Yapımı Ekmek", ar: "خبز منزلي" }, price: 0.70 },
      combo: { name: { bg: "Леща + 2бр. Пържени кюфтета с гарн. + Крем карамел", en: "Lentil Soup + 2 pcs Fried Meatballs with Side + Crème Caramel", tr: "Mercimek Çorbası + 2 adet Kızarmış Köfte ve Garnitür + Karamelli Muhallebi", ar: "شوربة عدس + ٢ كفتة مقلية مع طبق جانبي + كريم كراميل" }, price: 7.90 }
    },
    tue: {
      soups: [
        { name: { bg: "Пилешка супа", en: "Chicken Soup", tr: "Tavuk Çorbası", ar: "شوربة دجاج" }, price: 2.30 },
        { name: { bg: "Шкембе чорба", en: "Tripe Soup (Shkembe Chorba)", tr: "İşkembe Çorbası", ar: "شوربة الكرشة" }, price: 2.30 },
        { name: { bg: "Таратор", en: "Tarator (Cold Cucumber-Yogurt Soup)", tr: "Tarator (Soğuk Yoğurt Çorbası)", ar: "طاراتور (شوربة زبادي باردة)" }, price: 2.00 }
      ],
      mains: [
        { name: { bg: "Боб яхния + 2бр. кюфтета", en: "Bean Stew + 2 pcs Meatballs", tr: "Fasulye Yahnisi + 2 adet Köfte", ar: "يخنة فاصولياء + ٢ كفتة" }, price: 4.50 },
        { name: { bg: "Свински шиш + гарнитура", en: "Pork Skewer + Side", tr: "Domuz Şiş + Garnitür", ar: "سيخ لحم خنزير + طبق جانبي" }, price: 4.50 },
        { name: { bg: "Татарско кюфте + карт. соте", en: "Tatar Meatball + Sautéed Potatoes", tr: "Tatar Köftesi + Sote Patates", ar: "كفتة تتارية + بطاطا سوتيه" }, price: 4.50 },
        { name: { bg: "3бр. Панирани чушки + плочка сирене", en: "3 pcs Breaded Peppers + Slice of Cheese", tr: "3 adet Panelenmiş Biber + Peynir Dilimi", ar: "٣ فلفل مقلي مغلف + شريحة جبنة" }, price: 4.00 }
      ],
      desserts: [
        { name: { bg: "Крем карамел", en: "Crème Caramel", tr: "Karamelli Muhallebi", ar: "كريم كراميل" }, price: 2.30 },
        { name: { bg: "Плодова салата", en: "Fruit Salad", tr: "Meyve Salatası", ar: "سلطة فواكه" }, price: 3.00 },
        { name: { bg: "Макарони на фурна", en: "Baked Sweet Macaroni", tr: "Fırında Tatlı Makarna", ar: "معكرونة حلوة بالفرن" }, price: 2.30 }
      ],
      bread: { name: { bg: "Домашна питка", en: "Homemade Bread", tr: "Ev Yapımı Ekmek", ar: "خبز منزلي" }, price: 0.70 },
      combo: { name: { bg: "Таратор + Кюфтета с доматен сос + Макарони на фурна", en: "Tarator + Meatballs in Tomato Sauce + Baked Sweet Macaroni", tr: "Tarator + Domates Soslu Köfte + Fırında Tatlı Makarna", ar: "طاراتور + كفتة بصلصة الطماطم + معكرونة حلوة بالفرن" }, price: 7.90 }
    },
    wed: {
      soups: [
        { name: { bg: "Супа топчета", en: "Meatball Soup", tr: "Köfteli Çorba", ar: "شوربة كرات اللحم" }, price: 2.30 },
        { name: { bg: "Шкембе чорба", en: "Tripe Soup (Shkembe Chorba)", tr: "İşkembe Çorbası", ar: "شوربة الكرشة" }, price: 2.30 },
        { name: { bg: "Таратор", en: "Tarator (Cold Cucumber-Yogurt Soup)", tr: "Tarator (Soğuk Yoğurt Çorbası)", ar: "طاراتور (شوربة زبادي باردة)" }, price: 2.00 }
      ],
      mains: [
        { name: { bg: "Свинско със спанак и ориз", en: "Pork with Spinach & Rice", tr: "Ispanaklı Pirinçli Domuz Eti", ar: "لحم خنزير بالسبانخ والأرز" }, price: 4.50 },
        { name: { bg: "Пилешки шиш + боб с лютеница + гарнитура", en: "Chicken Skewer + Beans with Lyutenitsa + Side", tr: "Tavuk Şiş + Lütenitsalı Fasulye + Garnitür", ar: "سيخ دجاج + فاصولياء مع ليوتنيتسا + طبق جانبي" }, price: 4.50 },
        { name: { bg: "Кюфтета по Цариградски", en: "Meatballs Tsarigrad-Style", tr: "İstanbul Usulü Köfte", ar: "كفتة على الطريقة الإسطنبولية" }, price: 4.50 },
        { name: { bg: "3бр. Тиквени кюфтета + Снежанка", en: "3 pcs Pumpkin Fritters + Snezhanka Salad", tr: "3 adet Kabak Köftesi + Snejanka Salatası", ar: "٣ كفتة قرع + سلطة سنيجانكا" }, price: 4.50 }
      ],
      desserts: [
        { name: { bg: "Крем карамел", en: "Crème Caramel", tr: "Karamelli Muhallebi", ar: "كريم كراميل" }, price: 2.30 },
        { name: { bg: "Плодова салата", en: "Fruit Salad", tr: "Meyve Salatası", ar: "سلطة فواكه" }, price: 3.00 },
        { name: { bg: "Дамски каприз", en: "Lady's Caprice (Layered Cream Dessert)", tr: "Damski Kapriz (Kremalı Tatlı)", ar: "دامسكي كابريز (حلوى كريمية)" }, price: 2.30 }
      ],
      bread: { name: { bg: "Домашна питка", en: "Homemade Bread", tr: "Ev Yapımı Ekmek", ar: "خبز منزلي" }, price: 0.70 },
      combo: { name: { bg: "Пилешка супа + 2бр. Кебапче с г-ра + Дамски каприз", en: "Chicken Soup + 2 pcs Kebapche with Side + Lady's Caprice", tr: "Tavuk Çorbası + 2 adet Kebapçe ve Garnitür + Damski Kapriz", ar: "شوربة دجاج + ٢ كبابتشه مع طبق جانبي + دامسكي كابريز" }, price: 7.90 }
    },
    thu: {
      soups: [
        { name: { bg: "Зеленчукова крем супа + сирене и крутони", en: "Cream of Vegetable Soup with Cheese & Croutons", tr: "Kremalı Sebze Çorbası (Peynir ve Kruton ile)", ar: "شوربة خضار كريمية بالجبنة والخبز المحمص" }, price: 2.30 },
        { name: { bg: "Шкембе чорба", en: "Tripe Soup (Shkembe Chorba)", tr: "İşkembe Çorbası", ar: "شوربة الكرشة" }, price: 2.30 },
        { name: { bg: "Таратор", en: "Tarator (Cold Cucumber-Yogurt Soup)", tr: "Tarator (Soğuk Yoğurt Çorbası)", ar: "طاراتور (شوربة زبادي باردة)" }, price: 2.00 }
      ],
      mains: [
        { name: { bg: "Винен кебап + топка ориз", en: "Wine Kebab + Rice", tr: "Şaraplı Kebap + Pilav Topu", ar: "كباب بالنبيذ + كرة أرز" }, price: 4.50 },
        { name: { bg: "Пилешки бут на скара + г-ра", en: "Grilled Chicken Leg + Side", tr: "Izgara Tavuk But + Garnitür", ar: "فخذ دجاج مشوي + طبق جانبي" }, price: 5.50 },
        { name: { bg: "Огретен", en: "Potato Gratin", tr: "Patates Graten", ar: "غراتان بطاطا" }, price: 4.50 },
        { name: { bg: "Омлет със сирене + домати и краставици", en: "Cheese Omelette + Tomatoes & Cucumbers", tr: "Peynirli Omlet + Domates ve Salatalık", ar: "أومليت بالجبنة + طماطم وخيار" }, price: 4.00 }
      ],
      desserts: [
        { name: { bg: "Крем карамел", en: "Crème Caramel", tr: "Karamelli Muhallebi", ar: "كريم كراميل" }, price: 2.30 },
        { name: { bg: "Плодова салата", en: "Fruit Salad", tr: "Meyve Salatası", ar: "سلطة فواكه" }, price: 2.30 },
        { name: { bg: "Домашен крем с ядки", en: "Homemade Cream Dessert with Nuts", tr: "Ev Yapımı Kuruyemişli Krema", ar: "كريمة منزلية بالمكسرات" }, price: 3.00 }
      ],
      bread: { name: { bg: "Домашна питка", en: "Homemade Bread", tr: "Ev Yapımı Ekmek", ar: "خبز منزلي" }, price: 0.70 },
      combo: { name: { bg: "Супа топчета + Омлет със сирене + Пресни сезонни плодове", en: "Meatball Soup + Cheese Omelette + Fresh Seasonal Fruit", tr: "Köfteli Çorba + Peynirli Omlet + Taze Mevsim Meyveleri", ar: "شوربة كرات اللحم + أومليت بالجبنة + فواكه موسمية طازجة" }, price: 7.90 }
    },
    fri: {
      soups: [
        { name: { bg: "Боб чорба", en: "Bean Soup", tr: "Fasulye Çorbası", ar: "شوربة فاصولياء" }, price: 2.30 },
        { name: { bg: "Шкембе чорба", en: "Tripe Soup (Shkembe Chorba)", tr: "İşkembe Çorbası", ar: "شوربة الكرشة" }, price: 2.30 },
        { name: { bg: "Таратор", en: "Tarator (Cold Cucumber-Yogurt Soup)", tr: "Tarator (Soğuk Yoğurt Çorbası)", ar: "طاراتور (شوربة زبادي باردة)" }, price: 2.00 }
      ],
      mains: [
        { name: { bg: "Пан. бяла риба + картофи соте", en: "Breaded White Fish + Sautéed Potatoes", tr: "Panelenmiş Beyaz Balık + Sote Patates", ar: "سمك أبيض مقلي مغلف + بطاطا سوتيه" }, price: 4.80 },
        { name: { bg: "Свинска пържола + г-ра", en: "Pork Steak + Side", tr: "Domuz Pirzola + Garnitür", ar: "شريحة لحم خنزير + طبق جانبي" }, price: 5.50 },
        { name: { bg: "3бр. Картофени кюфтета + г-ра", en: "3 pcs Potato Fritters + Side", tr: "3 adet Patates Köftesi + Garnitür", ar: "٣ كفتة بطاطا + طبق جانبي" }, price: 4.50 },
        { name: { bg: "Гювеч със свински джолан", en: "Clay-Pot Stew with Pork Shank", tr: "Güveçte Domuz İncik", ar: "طاجن بساق لحم الخنزير" }, price: 4.50 }
      ],
      desserts: [
        { name: { bg: "Крем карамел", en: "Crème Caramel", tr: "Karamelli Muhallebi", ar: "كريم كراميل" }, price: 2.30 },
        { name: { bg: "Плодова салата", en: "Fruit Salad", tr: "Meyve Salatası", ar: "سلطة فواكه" }, price: 3.00 },
        { name: { bg: "Мляко с ориз", en: "Rice Pudding", tr: "Sütlaç", ar: "أرز بالحليب" }, price: 2.30 }
      ],
      bread: { name: { bg: "Домашна питка", en: "Homemade Bread", tr: "Ev Yapımı Ekmek", ar: "خبز منزلي" }, price: 0.70 },
      combo: { name: { bg: "Зеленчукова крем супа със сирене и крутони + Гювеч със св. джолан + Крем карамел", en: "Cream of Vegetable Soup with Cheese & Croutons + Clay-Pot Pork Shank + Crème Caramel", tr: "Kremalı Sebze Çorbası + Güveçte Domuz İncik + Karamelli Muhallebi", ar: "شوربة خضار كريمية بالجبنة والخبز المحمص + طاجن ساق الخنزير + كريم كراميل" }, price: 7.90 }
    }
  }
};

window.SITE_DATA = {
  phones: ["0879333926", "0878924996", "0877335883"],
  businessName: { bg: "Кетъринг Фирдаус", en: "Catering Firdaus", tr: "Catering Firdaus", ar: "كيترنغ فردوس" }
};
