import type { SiteLang } from "@/lib/language";

/** Bilingual landing + shell copy. Single source of truth for EN/AR strings. */
export const COPY = {
  en: {
    heroChip: "Now inviting neighborhoods in Doha",
    heroTitleA: "The app that connects ",
    heroTitleEm: "neighborhoods.",
    heroBody:
      "Wasal is the private social layer for your street, mosque, and majlis. Find your people, share what's needed, and turn the block into a community.",
    heroCta: "Join your neighborhood",
    heroCtaAlt: "See how it works",
    trust: [
      { t: "Private by default", d: "Nothing you post is public or indexed. No ads, no trackers." },
      { t: "Verified by proximity", d: "You only join the Wasal you actually live in." },
      { t: "Moderated by neighbors", d: "Admins from your own street, never an algorithm." },
    ],
    ribbon: ["Meet neighbors", "Post requests", "Find help", "Join events", "Share updates", "Get answers", "Belong locally", "Build friendships"],
    ribbonAria: "Explore what you can do on Wasal",
    ribbonPillAria: "scroll to related section",
    stripLine: "No ads. No trackers. Your street stays yours.",
    stripCta: "Sign up / Log in",
    howChip: "How it works",
    howTitleA: "Three steps between you and ",
    howTitleTag: "your street",
    howBody:
      "Wasal is closed by design. Every community is small, local, and verified — so trust travels quickly.",
    steps: [
      {
        eyebrow: "Step 01",
        headA: "Find your ",
        headTag: "Wasal",
        body:
          "Open the map and see the communities forming around your mosque, tower, or block. Every Wasal is verified by proximity — no drive-by accounts.",
      },
      {
        eyebrow: "Step 02",
        headA: "Request ",
        headTag: "to join",
        body:
          "Introduce yourself in a line. Admins from your own street keep the space safe, warm, and genuinely local.",
      },
      {
        eyebrow: "Step 03",
        headA: "Show up ",
        headTag: "for each other",
        body:
          "Events, giveaways, prayer reminders, small favors — the daily texture of neighborhood life, delivered by the people who share your streetlights.",
      },
    ],
    feedChip: "The feed",
    feedTitle: "A quieter kind of social.",
    feedBody:
      "No infinite scroll. No strangers from across the world. Just posts from the people who share your streetlights — events at the mosque, a family that could use a hand, a study circle after Maghrib.",
    feedList: [
      "Events, giveaways, services and questions — organized",
      "Admin-moderated, family-friendly by default",
      "Location-gated. If you're not there, you're not in",
      "Arabic-first, works beautifully in English too",
    ],
    stickerHeroA: "487 neighbors",
    stickerHeroB: "nearby you",
    stickerFeedA: "Real neighbors",
    stickerFeedB: "real replies",
    faqChip: "FAQ",
    faqTitle: "Questions from the block.",
    faqBody: "Everything you might want to know before opening the door to your neighbors.",
    faqs: [
      {
        q: "Is my activity on Wasal actually private?",
        a: "Yes. Every Wasal is closed by default — posts and profiles are only visible to verified neighbors inside your community. Nothing you share is indexed by search engines or visible to the public web, and we never sell your data.",
      },
      {
        q: "How does Wasal actually connect me to my neighbors?",
        a: "When you join, we verify you live in the area using device location and address confirmation, then place you in the Wasal for your street, tower, or mosque. From there you'll see events, requests, and posts from the exact people who share your streetlights.",
      },
      {
        q: "How does commenting and interaction work?",
        a: "Every post supports threaded, moderated comments. Replies are visible only to members of that Wasal, admins can pin useful threads, and reporting a comment is a single tap. Family-friendly rules apply by default.",
      },
      {
        q: "Who moderates my community?",
        a: "Admins are volunteers from your own neighborhood, not Wasal staff. They set the tone, welcome new members, and remove content that breaks the community guidelines.",
      },
      {
        q: "When will Wasal be available in my area?",
        a: "We're rolling out neighborhood by neighborhood. Add your email below and we'll notify you the moment your block goes live.",
      },
    ],
    trustChip: "Built on trust",
    trustTitle: "A neighborhood is a promise. We treat it that way.",
    trustCards: [
      {
        t: "Verified by proximity",
        d: "You're invited to a Wasal only if you actually live nearby. No fake locations, no drive-by accounts.",
      },
      {
        t: "Community-run, not algorithmic",
        d: "Admins from your own neighborhood set the tone. Wasal never boosts, ranks, or advertises inside your feed.",
      },
      {
        t: "Private by default",
        d: "Nothing you post is public. No search engines. No screenshots for outsiders. Your street stays your street.",
      },
    ],
    getTitle: "Your street is waiting for you.",
    getBody:
      "Wasal is rolling out neighborhood by neighborhood. Drop your email and we'll invite you when your block is live.",
    legalNote: { a: "By continuing you agree to our ", terms: "Terms", mid: " and ", privacy: "Privacy Policy", z: "." },
    formPlaceholder: "you@street.com",
    formSubmit: "Notify me",
    formSubmitting: "Sending…",
    formNote: "One invite when your block is live — no spam.",
    formEmailLabel: "Email address",
    formInvalid: "Enter a valid email address.",
    formSlowDown: "Please try again in a moment.",
    successTitle: "You're on the list.",
    successBodyA: "We'll email ",
    successBodyB: " the moment your neighborhood goes live.",
    footerBlurb:
      "Bringing neighborhoods closer. Wasal transforms everyday strangers into a supportive community built on trust and care.",
    footerCity: "Doha, Qatar",
    footerProduct: "Product",
    footerLegal: "Legal & Support",
    footerHow: "How it works",
    footerFeed: "The feed",
    footerDownload: "Download",
    footerLegalHub: "Legal Hub",
    footerCookies: "Cookie preferences",
    footerSupport: "Support",
    footerContact: "Contact",
    footerRights: "All rights reserved.",
    cookie: {
      title: "Your street, your choice.",
      desc: "We only use cookies that are strictly necessary to run Wasal. Analytics and marketing cookies stay off unless you turn them on. You can change your mind anytime from the footer.",
      legend: "Cookie preferences",
      necessary: "Strictly necessary",
      necessaryDesc: "Required for sign-in, security, and core app functionality. Always on.",
      analytics: "Analytics",
      analyticsDesc: "Aggregated, anonymous usage stats so we know which streets need more love.",
      marketing: "Marketing",
      marketingDesc: "Only used if we ever run neighborhood-launch campaigns. Off by default.",
      manage: "Manage preferences",
      reject: "Reject non-essential",
      save: "Save preferences",
      acceptAll: "Accept all",
      seeA: "See our ",
      cookiePolicy: "Cookie Policy",
      seeMid: " and ",
      privacyPolicy: "Privacy Policy",
      seeZ: ".",
    },
    getApp: "Get the app",
  },
  ar: {
    heroChip: "ندعو الأحياء في الدوحة الآن",
    heroTitleA: "التطبيق الذي يربط ",
    heroTitleEm: "الأحياء.",
    heroBody:
      "وصال هي الطبقة الاجتماعية الخاصة لشارعك ومسجدك ومجلسك. اعرف جيرانك، شارك ما تحتاجه، وحوّل الحي إلى مجتمع.",
    heroCta: "انضم إلى حيّك",
    heroCtaAlt: "كيف يعمل",
    trust: [
      { t: "خاص بشكل افتراضي", d: "لا شيء تنشره علنيًّ أو مفهرس. بلا إعلانات ولا متتبعات." },
      { t: "موثّق بالقرب", d: "تنضم فقط إلى وصال الحي الذي تسكن فيه فعلًا." },
      { t: "إشراف من الجيران", d: "مشرفون من شارعك، لا خوارزمية." },
    ],
    ribbon: ["تعرّف على جيرانك", "انشر طلبًا", "اطلب المساعدة", "شارك في الفعاليات", "شارك التحديثات", "اسأل واحصل على إجابة", "انتمِ لمكانك", "ابنِ صداقات"],
    ribbonAria: "استكشف ما يمكنك فعله في وصال",
    ribbonPillAria: "انتقل إلى القسم المرتبط",
    stripLine: "بلا إعلانات. بلا متتبعات. شارعك يبقى لك.",
    stripCta: "إنشاء حساب / دخول",
    howChip: "كيف يعمل",
    howTitleA: "ثلاث خطوات بينك وبين ",
    howTitleTag: "شارعك",
    howBody: "وصال مغلق بحسب التصميم. كل مجتمع صغير ومحلي وموثّق — لتنتقل الثقة بسرعة.",
    steps: [
      {
        eyebrow: "الخطوة ٠١",
        headA: "اعرف ",
        headTag: "وصالك",
        body:
          "افتح الخريطة وشاهد المجتمعات المتكوّنة حول مسجدك أو برجك أو حيّك. كل وصال موثّق بالقرب — بلا حسابات عابرة.",
      },
      {
        eyebrow: "الخطوة ٠٢",
        headA: "اطلب ",
        headTag: "الانضمام",
        body:
          "عرّف بنفسك في سطر واحد. مشرفون من شارعك يحافظون على المكان آمنًا ودافئًا ومحليًّا حقًّا.",
      },
      {
        eyebrow: "الخطوة ٠٣",
        headA: "كونوا ",
        headTag: "سندًا لبعضكم",
        body:
          "فعاليات، هدايا، تذكير بالصلاة، مساعدات صغيرة — نسيج الحياة اليومية في الحي، من الناس الذين يشاركونك الشارع.",
      },
    ],
    feedChip: "التغذية",
    feedTitle: "تواصل اجتماعي أهدأ.",
    feedBody:
      "بلا تمرير لا نهائي. بلا غرباء من أنحاء العالم. فقط منشورات من الناس الذين يشاركونك الشارع — فعاليات المسجد، عائلة تحتاج يد عون، حلقة علم بعد المغرب.",
    feedList: [
      "فعاليات، هدايا، خدمات وأسئلة — منظّمة",
      "بإشراف المشرفين، مناسب للعائلة افتراضيًّا",
      "مقيّد بالموقع. إن لم تكن هنا، فلن تكون داخلًا",
      "عربي أولًا، ويعمل بجمال بالإنجليزية أيضًا",
    ],
    stickerHeroA: "٤٨٧ جارًا",
    stickerHeroB: "قريبون منك",
    stickerFeedA: "جيران حقيقيون",
    stickerFeedB: "وردود حقيقية",
    faqChip: "الأسئلة الشائعة",
    faqTitle: "أسئلة من الحي.",
    faqBody: "كل ما قد ترغب بمعرفته قبل أن تفتح بابك لجيرانك.",
    faqs: [
      {
        q: "هل نشاطي على وصال خاص فعلًا؟",
        a: "نعم. كل وصال مغلق افتراضيًّا — المنشورات والملفات الشخصية مرئية فقط للجيران الموثّقين داخل مجتمعك. لا شيء تشاركه يُفهرس في محركات البحث، ولا نبيع بياناتك أبدًا.",
      },
      {
        q: "كيف يربطني وصال بجيراني؟",
        a: "عند الانضمام نتحقق من سكنك في المنطقة عبر موقع الجهاز وتأكيد العنوان، ثم نضعك في وصال شارعك أو برجك أو مسجدك. بعدها ترى الفعاليات والطلبات والمنشورات من الناس الذين يشاركونك الشارع.",
      },
      {
        q: "كيف تعمل التعليقات والتفاعل؟",
        a: "كل منشور يدعم تعليقات مرتبة وخاضعة للإشراف. الردود مرئية لأعضاء الوصال فقط، ويمكن للمشرفين تثبيت النقاشات المفيدة، والإبلاغ عن تعليق بلمسة واحدة.",
      },
      {
        q: "من يشرف على مجتمعي؟",
        a: "المشرفون متطوعون من حيّك، وليسوا من فريق وصال. هم من يضعون الأسلوب، ويرحبون بالأعضاء الجدد، ويحذفون ما يخالف إرشادات المجتمع.",
      },
      {
        q: "متى سيتوفر وصال في منطقتي؟",
        a: "نتوسّع حيًّا بحي. أضف بريدك أدناه وسنخبرك لحظة انطلاق حيّك.",
      },
    ],
    trustChip: "مبني على الثقة",
    trustTitle: "الحي وعد. ونتعامل معه على هذا الأساس.",
    trustCards: [
      {
        t: "موثّق بالقرب",
        d: "تُدعى إلى وصال فقط إن كنت تسكن قريبًا فعلًا. بلا مواقع مزيفة ولا حسابات عابرة.",
      },
      {
        t: "يديره المجتمع لا الخوارزمية",
        d: "مشرفون من حيّك يضعون الأسلوب. وصال لا يرفع أو يرتب أو يعلن داخل تغذيتك.",
      },
      {
        t: "خاص بشكل افتراضي",
        d: "لا شيء تنشره علني. لا محركات بحث. لا لقطات شاشة للغرباء. شارعك يبقى شارعك.",
      },
    ],
    getTitle: "شارعك ينتظرك.",
    getBody: "وصال يتوسع حيًّا بحي. اترك بريدك وسندعوك حين ينطلق حيّك.",
    legalNote: { a: "بالمتابعة أنت توافق على ", terms: "الشروط", mid: " و", privacy: "سياسة الخصوصية", z: "." },
    formPlaceholder: "you@street.com",
    formSubmit: "أبلغني",
    formSubmitting: "جارٍ الإرسال…",
    formNote: "دعوة واحدة حين ينطلق حيّك — بلا إزعاج.",
    formEmailLabel: "البريد الإلكتروني",
    formInvalid: "أدخل بريدًا إلكترونيًّا صحيحًا.",
    formSlowDown: "حاول مرة أخرى بعد لحظة.",
    successTitle: "أنت على القائمة.",
    successBodyA: "سنراسل ",
    successBodyB: " لحظة انطلاق حيّك.",
    footerBlurb:
      "نقرّب الأحياء من بعضها. وصال يحوّل الغرباء المجاورين إلى مجتمع متعاون قائم على الثقة والاهتمام.",
    footerCity: "الدوحة، قطر",
    footerProduct: "المنتج",
    footerLegal: "القانوني والدعم",
    footerHow: "كيف يعمل",
    footerFeed: "التغذية",
    footerDownload: "تحميل",
    footerLegalHub: "المركز القانوني",
    footerCookies: "تفضيلات الكوكيز",
    footerSupport: "الدعم",
    footerContact: "تواصل",
    footerRights: "جميع الحقوق محفوظة.",
    cookie: {
      title: "شارعك، وقرارك.",
      desc: "نستخدم فقط الكوكيز الضرورية لتشغيل وصال. كوكيز التحليلات والتسويق تبقى مغلقة إلا إذا فعّلتها. يمكنك تغيير رأيك في أي وقت من التذييل.",
      legend: "تفضيلات الكوكيز",
      necessary: "ضرورية تمامًا",
      necessaryDesc: "لازمة لتسجيل الدخول والأمان ووظائف التطبيق الأساسية. مفعّلة دائمًا.",
      analytics: "التحليلات",
      analyticsDesc: "إحصاءات استخدام مجمّعة ومجهولة لنعرف أي الشوارع تحتاج اهتمامًا أكثر.",
      marketing: "التسويق",
      marketingDesc: "تُستخدم فقط إن أطلقنا حملات لافتتاح الأحياء. مغلقة افتراضيًّا.",
      manage: "إدارة التفضيلات",
      reject: "رفض غير الضروري",
      save: "حفظ التفضيلات",
      acceptAll: "قبول الكل",
      seeA: "راجع ",
      cookiePolicy: "سياسة الكوكيز",
      seeMid: " و",
      privacyPolicy: "سياسة الخصوصية",
      seeZ: ".",
    },
    getApp: "حمّل التطبيق",
  },
} as const;

export type Copy = (typeof COPY)["en"];

export function copyFor(lang: SiteLang): Copy {
  return COPY[lang] as unknown as Copy;
}
