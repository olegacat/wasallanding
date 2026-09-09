// Placeholder legal content. Real legal text must be drafted and reviewed by a
// lawyer familiar with UAE PDPL / Saudi PDPL and consumer law before launch.
// Anything in [SQUARE BRACKETS] is a placeholder that MUST be replaced.

export type Lang = "en" | "ar";

export interface Section {
  id: string;
  heading: string;
  body: string[]; // paragraphs; can include markdown-ish plain text
}

export interface LegalDoc {
  slug: string;
  title: string;
  updated: string;
  effective?: string; // effective date, when different from last-updated
  summary: string; // plain-language, not legally binding
  sections: Section[];
  contacts: { label: string; email: string }[];
}

export interface DocIndexEntry {
  slug: string;
  title: string;
  description: string;
}

const PH = (what: string) => `[PLACEHOLDER — ${what}. To be drafted by legal counsel before launch.]`;

// ---------- ENGLISH ----------

const enPrivacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  updated: "August 17, 2026",
  summary:
    "Wasal only collects what we need to connect you with your verified neighborhood: profile and contact details, location for community eligibility, and content you choose to share. We do not sell your data, and you can delete your account at any time. This summary is not legally binding; the full text below is.",
  sections: [
    {
      id: "scope",
      heading: "Scope and acceptance",
      body: [
        "This Privacy Policy explains how Wisal for Custom Software Programming W.L.L. (\"Wasal,\" \"we,\" \"us,\" or \"our\"), a limited liability company registered in the State of Qatar (Commercial Registration No. 244862, Commercial License No. 335994), collects, uses, discloses, and protects information when you use the Wasal mobile application, website, and related services (collectively, the \"Service\").",
        "Registered address: Building 230, Street 303, Zone 69, Floor 19, Unit 1975, Doha, Qatar.",
        "Contact: privacy@wasal.me · +974 5553 1119.",
        "By using Wasal, you agree to the collection and use of information in accordance with this policy.",
      ],
    },
    {
      id: "who-we-are",
      heading: "Who we are",
      body: [
        "Wasal is a private, location-verified community platform that connects neighbors within a defined proximity (a street, mosque, tower, or block) to share events, requests for help, giveaways, reminders, and everyday neighborhood updates.",
      ],
    },
    {
      id: "information-we-collect",
      heading: "Information we collect",
      body: [
        "a) Information you provide directly — name, phone number, email address, password/authentication credentials, profile photo, household/unit details, language preference, and any content you post (posts, comments, event listings, requests, giveaways, replies, messages).",
        "b) Location information — precise or approximate geolocation, used to verify that you live within (or near) the neighborhood community you're joining. Location gating is core to how Wasal works.",
        "c) Information collected automatically — device type and OS, unique device identifiers, app usage and event data (via Amplitude), crash/log data, IP address and approximate network location.",
        "d) Information from others — if a neighbor invites or references you in a post, limited information may be shared with community admins for verification.",
      ],
    },
    {
      id: "how-we-use",
      heading: "How we use your information",
      body: [
        "— Verify eligibility to join a specific neighborhood community (proximity check).",
        "— Create and maintain your account and profile.",
        "— Operate the feed and enable admin moderation.",
        "— Send service notifications (prayer reminders, event alerts, moderation notices) — on by default; you can opt out in-app or at the device level.",
        "— Send account and product emails via Customer.io.",
        "— Understand product usage via Amplitude, to improve the Service.",
        "— Maintain safety and security (fraud prevention, fake-location detection).",
        "— Comply with legal obligations under Qatari law.",
      ],
    },
    {
      id: "legal-basis",
      heading: "Legal basis for processing",
      body: [
        "Where applicable law requires a legal basis (e.g., Qatar's Law No. 13 of 2016 on Personal Data Privacy Protection, or equivalent frameworks in the UAE/Saudi Arabia), we rely on consent (location, notifications, marketing), contract necessity (core Service), legitimate interest (safety, product improvement), and legal obligation.",
      ],
    },
    {
      id: "who-we-share",
      heading: "Who we share information with",
      body: [
        "— Other verified members of your community — your profile and posts are visible only within your closed Wasal community, never indexed by search engines or visible on the public web.",
        "— Community admins — for moderation.",
        "— Service providers/processors:",
        "Supabase (Seoul, South Korea region) — database, authentication, backend hosting.",
        "Customer.io — transactional and marketing email/messaging.",
        "Amplitude — product usage analytics.",
        "— Legal and regulatory authorities — where required by Qatari law, court order, or to protect the rights, safety, or property of Wasal, our users, or the public.",
        "We do not sell, rent, or trade personal data to third parties for their own marketing purposes.",
      ],
    },
    {
      id: "data-retention",
      heading: "Data retention",
      body: [
        "We retain personal data for as long as your account is active. If you delete your account, we permanently erase your personal data within 30 days, except where retention is required for legal, accounting, or dispute-resolution purposes. Content may persist in anonymized/aggregated form after deletion.",
      ],
    },
    {
      id: "your-rights",
      heading: "Your rights",
      body: [
        "Subject to applicable law, you may have the right to access, correct, or delete your personal data, object to or restrict certain processing (e.g., location tracking), and withdraw consent at any time (this may limit location-gated features). To exercise these rights, contact privacy@wasal.me.",
      ],
    },
    {
      id: "childrens-privacy",
      heading: "Children's privacy",
      body: [
        "Wasal is family-friendly by default and available to users 13 and older. We do not knowingly collect personal data from children under 13.",
      ],
    },
    {
      id: "data-security",
      heading: "Data security",
      body: [
        "We implement technical and organizational measures (encryption in transit, access controls, admin moderation tools, Supabase's built-in security) to protect your data. No method of transmission or storage is 100% secure.",
      ],
    },
    {
      id: "international-transfers",
      heading: "International data transfers",
      body: [
        "Wasal's backend (Supabase) hosts data in the Northeast Asia (Seoul, South Korea) region. If you access Wasal from Qatar, the UAE, or Saudi Arabia, your data will be transferred to and processed in South Korea. We take steps to ensure such transfers are protected by appropriate safeguards.",
      ],
    },
    {
      id: "cookies",
      heading: "Cookies and similar technologies",
      body: [
        "Our app/website uses essential cookies/local storage necessary for functionality (e.g., staying logged in), plus analytics identifiers via Amplitude to understand product usage. We do not use third-party advertising or cross-site tracking cookies.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      body: [
        "We may update this Privacy Policy from time to time and will notify you of material changes via the app or email, updating the \"Last updated\" date above.",
      ],
    },
    {
      id: "contact",
      heading: "Contact us",
      body: [
        "Wisal for Custom Software Programming W.L.L.",
        "Building 230, Street 303, Zone 69, Doha, Qatar",
        "Email: privacy@wasal.me",
        "Phone: +974 5553 1119",
      ],
    },
  ],
  contacts: [
    { label: "Privacy / data requests", email: "privacy@wasal.me" },
    { label: "General support", email: "support@wasal.me" },
  ],
};

const enTerms: LegalDoc = {
  slug: "terms",
  title: "Terms of Use",
  updated: "August 17, 2026",
  effective: "August 17, 2026",
  summary:
    "By using Wasal you agree to these rules. Keep it kind, keep it honest, don't break the law, and respect your neighbors. This summary is not legally binding; the full text below is.",
  sections: [
    {
      id: "scope",
      heading: "1. Scope",
      body: [
        'These Terms of Use ("Terms") govern your access to and use of the Wasal mobile application, website, and related services (the "Service"), operated by Wisal for Custom Software Programming W.L.L., a limited liability company registered in the State of Qatar (Commercial Registration No. 244862, Commercial License No. 335994, registered address: Building 230, Street 303, Zone 69, Doha, Qatar) ("Wasal," "we," "us"). By creating an account or otherwise using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the Service.',
      ],
    },
    {
      id: "service",
      heading: "2. Description of the Service and Features",
      body: [
        'Wasal is a private, location-verified community platform that connects neighbors within a defined proximity — a street, mosque, tower, or block — into a closed neighborhood group. Core features include a community feed for posts, events, giveaways, service requests, and questions; admin-led moderation; and optional notifications (including prayer-time and event reminders). Access to a given community is gated by proximity verification: you must be located within or near that community\'s defined area to join and participate. Feature availability may vary by neighborhood, city, or country as we roll out, and we may add, change, or remove features at any time.',
      ],
    },
    {
      id: "account",
      heading: "3. Account Registration",
      body: [
        "To use Wasal you must create an account using accurate, current information, including a valid phone number and/or email address. You must be at least 13 years old to register. Each person may hold only one account, tied to their real identity and actual residence or presence near the community they join; impersonation, fake locations, and proxy or bulk account creation are prohibited. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account, and must notify us promptly at the contact details in Section 11 if you suspect unauthorized access. We may request additional verification (e.g., proximity/location confirmation) before granting or continuing access to a community.",
      ],
    },
    {
      id: "subscriptions",
      heading: "4. Subscriptions and Pricing",
      body: [
        "Wasal is currently free to use. We do not charge subscription fees or require payment to create an account, join a community, or use the Service's core features. If we introduce paid features, subscriptions, or premium tiers in the future, we will update these Terms and provide clear notice of applicable pricing, billing terms, and cancellation rights before any charge applies to you.",
      ],
    },
    {
      id: "conduct",
      heading: "5. User Obligations and Prohibited Conduct",
      body: [
        "You agree to use Wasal respectfully and lawfully. You must not: falsify your location or proximity to a community; impersonate another person or misrepresent your identity or address; post content that is unlawful, harassing, discriminatory, defamatory, obscene, or that endangers the safety of others; use the Service for commercial advertising, spam, or solicitation not permitted by community admins; collect or harvest other users' personal information; attempt to circumvent location-gating, moderation, or account restrictions; upload malware or attempt to disrupt, hack, or reverse-engineer the Service; or use the Service in any way that violates the laws of Qatar or any jurisdiction from which you access it. Community admins may set additional, reasonable community-specific guidelines consistent with these Terms.",
      ],
    },
    {
      id: "content",
      heading: "6. Content Ownership and Licence",
      body: [
        "You retain ownership of the content you post on Wasal (text, photos, event listings, and similar). By posting content, you grant Wasal a limited, non-exclusive, royalty-free licence to host, store, reproduce, and display that content solely for the purposes of (a) operating the Service and showing your content to verified members of your community, (b) enabling admin moderation and safety review, and (c) maintaining backups necessary for the Service to function. This licence ends when you delete the content or your account, except where retention is required for moderation records, legal compliance, or as described in our Privacy Policy. We do not use your content for advertising, sell it to third parties, or use it beyond what is necessary to operate the Service.",
      ],
    },
    {
      id: "moderation",
      heading: "7. Moderation and Account Suspension",
      body: [
        "Each community is moderated by admins from that neighborhood, who may remove content or restrict members' posting privileges in accordance with these Terms and their community's guidelines. Wasal may also review, remove content, or suspend or terminate accounts that violate these Terms, pose a safety risk, involve falsified location or identity information, or are subject to legal or regulatory requirements. Where practical, we will notify affected users of the reason for moderation action. If you believe a moderation decision was made in error, you may appeal by contacting us at the details in Section 11; we will review appeals in good faith but do not guarantee reversal of any decision.",
      ],
    },
    {
      id: "liability",
      heading: "8. Liability",
      body: [
        'The Service is provided "as is" and "as available." Wasal facilitates connections between neighbors but is not responsible for the conduct, content, accuracy of listings, or actions of individual users, including content shared in requests for help, giveaways, or event listings. To the maximum extent permitted by applicable Qatari law, Wasal disclaims all warranties, express or implied, regarding the Service, and our aggregate liability for any claim arising from your use of the Service is limited to the greatest extent permitted by law. Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law.',
      ],
    },
    {
      id: "law",
      heading: "9. Governing Law and Jurisdiction",
      body: [
        "These Terms are governed by the laws of the State of Qatar. Any dispute arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the competent courts of Qatar, without regard to conflict-of-law principles.",
      ],
    },
    {
      id: "changes",
      heading: "10. Changes to These Terms",
      body: [
        'We may update these Terms from time to time to reflect changes to the Service, legal requirements, or our practices. We will notify you of material changes through the app, our website, or by email, and will update the "Last updated" date above. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms. If you do not agree to the changes, you should stop using the Service.',
      ],
    },
    {
      id: "contact",
      heading: "11. Contact",
      body: [
        "Wisal for Custom Software Programming W.L.L.",
        "Building 230, Street 303, Zone 69, Doha, Qatar",
        "Email: privacy@wasal.me",
        "Phone: +974 5553 1119",
      ],
    },
  ],
  contacts: [
    { label: "General support", email: "support@wasal.me" },
    { label: "Legal", email: "legal@wasal.me" },
  ],
};

const enCookies: LegalDoc = {
  slug: "cookies",
  title: "Cookie Policy",
  updated: "August 17, 2026",
  effective: "August 17, 2026",
  summary:
    "Wasal only sets cookies and local storage that are strictly necessary to run the Service. Analytics stay off until you switch them on in the cookie preference centre, and we never use advertising or cross-site tracking cookies. This summary is not legally binding; the full text below is.",
  sections: [
    { id: "what", heading: "What cookies and similar technologies are", body: ["Cookies are small text files stored on your device when you visit a website. Local storage and mobile SDK identifiers work similarly to remember your preferences and keep you signed in."] },
    {
      id: "categories",
      heading: "Categories we use",
      body: [
        "Strictly necessary — authentication, session security, request routing, and remembering your cookie choice. Always on; the Service cannot run without them.",
        "Preferences — language and display choices, such as English or Arabic legal pages.",
        "Analytics (optional, off by default) — Amplitude, used for aggregated product-usage statistics so we can improve the Service. Only set after you enable analytics in the cookie preference centre.",
        "Marketing (optional, off by default) — reserved for neighborhood-launch campaigns. We do not use advertising or cross-site tracking cookies.",
      ],
    },
    { id: "manage", heading: "Managing your choices", body: ["Use the cookie preference centre — the \"Cookie preferences\" link in the site footer — to turn analytics and marketing on or off at any time. Your choice is stored on your device and applies until you change it or clear your browser storage.", "You can also block or delete cookies in your browser settings. Blocking strictly necessary cookies may break sign-in and other core features."] },
    { id: "retention", heading: "How long cookies last", body: [PH("Per-cookie table: name, provider, purpose, and expiry, to be completed once the analytics SDK configuration is final")] },
    { id: "more", heading: "More information", body: ["For how we process the data behind these technologies, see the Privacy Policy. Questions: privacy@wasal.me."] },
  ],
  contacts: [
    { label: "Privacy / cookie questions", email: "privacy@wasal.me" },
    { label: "General support", email: "support@wasal.me" },
  ],
};

const enGuidelines: LegalDoc = {
  slug: "community-guidelines",
  title: "Community Guidelines",
  updated: "August 17, 2026",
  summary:
    "Wasal only works if every neighborhood feels safe. These are the ground rules for how members treat each other and what happens when they don't. This summary is not legally binding; the full text below is.",
  sections: [
    {
      id: "purpose",
      heading: "1. Purpose",
      body: [
        "These Community Guidelines exist to keep every Wasal neighborhood a safe, trustworthy, and welcoming place — an extension of the same courtesy and care neighbors owe each other in person. Wasal is built on verified proximity and closed communities so that trust can travel quickly; these guidelines protect that trust. They apply to every post, comment, profile, message, and interaction on the Service, alongside our Terms of Use and Privacy Policy, and they apply equally to every member regardless of how long they've been part of a community.",
      ],
    },
    {
      id: "acceptable",
      heading: "2. Acceptable Use",
      body: [
        "We welcome posts and interactions that build real neighborhood connection: sharing event announcements (mosque gatherings, study circles, community iftars), offering or requesting help (a ride, a tool, a favor), posting giveaways and items you no longer need, asking practical questions about the area, welcoming new neighbors, and sharing updates relevant to your street or building. Disagreements happen — respectful, good-faith discussion about shared community matters (parking, noise, building issues) is welcome, provided it stays constructive and doesn't target individuals unfairly.",
      ],
    },
    {
      id: "prohibited",
      heading: "3. Prohibited Content and Behaviour",
      body: [
        "Harassment, bullying, and threats. Do not target another member with repeated unwanted contact, intimidation, threats of harm, or content intended to humiliate or shame them.",
        "Hate speech and discrimination. Content that attacks, demeans, or excludes people based on race, ethnicity, nationality, religion, gender, disability, or similar characteristics is not permitted.",
        "Scams, fraud, and deceptive listings. Giveaway, service, and marketplace-style posts must be genuine. Do not post fake giveaways, misrepresent items or services, run payment scams, or use community trust to defraud neighbors.",
        "Impersonation. Do not create a profile or post content pretending to be another neighbor, an organization, a business, or a member of the Wasal team.",
        "Spam and unauthorized commercial promotion. Do not use the feed for repeated advertising, bulk promotional posts, or commercial solicitation that hasn't been permitted by your community's admins.",
        "Also prohibited: sharing another member's personal information without consent (addresses, phone numbers, photos of children); posting content that endangers safety (real-time location of a specific person, unverified accusations against a named neighbor); and any content or conduct that violates applicable law in Qatar or the jurisdiction you're posting from.",
      ],
    },
    {
      id: "reporting",
      heading: "4. Reporting and Blocking",
      body: [
        "If you see content or behavior that violates these guidelines, you can report the specific post, comment, or member directly within the app, or email report@wasal.me with a description and, where possible, a link or screenshot. Reports are reviewed by community admins and, where escalated, by the Wasal team. You can also block another member directly in the app at any time; blocking prevents them from seeing your posts or contacting you and does not notify them that they've been blocked. Reporting a genuine concern in good faith will never result in action against your own account, even if the report is ultimately not upheld.",
      ],
    },
    {
      id: "enforcement",
      heading: "5. Enforcement and Consequences",
      body: [
        "Violations are handled proportionately, generally following an escalation ladder: (1) content removal and a private notice explaining which guideline was violated; (2) a warning on the account for repeated or more serious violations; (3) temporary suspension from posting or from the community for continued or severe violations; and (4) permanent removal from the community or the Service for severe violations (e.g., threats, fraud, repeated harassment) or a pattern of repeated warnings. Some violations — genuine safety threats, fraud, or content involving minors — may result in immediate suspension without prior warning. If you believe enforcement action was taken in error, you may appeal by emailing appeals@wasal.me with your account details and the reason for your appeal; appeals are reviewed by someone who was not involved in the original decision, where practicable.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      body: [
        "Report content: report@wasal.me",
        "Appeals: appeals@wasal.me",
      ],
    },
  ],
  contacts: [
    { label: "Report content", email: "report@wasal.me" },
    { label: "Appeals", email: "appeals@wasal.me" },
  ],
};

const enDeletion: LegalDoc = {
  slug: "account-deletion",
  title: "Account Deletion",
  updated: "August 17, 2026",
  summary:
    "You can delete your Wasal account and personal data at any time, from inside the app or by writing to us. Some information may be retained for legal reasons — the sections below explain what and why. This summary is not legally binding; the full text below is.",
  sections: [
    {
      id: "how",
      heading: "How to Delete Your Account from the App",
      body: [
        "1. Open the Wasal app and go to your profile.",
        "2. Tap Settings, then Account.",
        "3. Tap Delete Account and confirm.",
        "Deletion typically takes effect immediately in the app, and permanent erasure of your personal data follows within 30 days as described in Section 3.",
      ],
    },
    {
      id: "notes",
      heading: "Important Notes Before You Delete",
      body: [
        "Deletion is permanent and cannot be undone. Once confirmed, you cannot recover your account, posts, or community membership.",
        "Content you posted in a Wasal community may remain visible in the form of quotes or replies from other members, in anonymized form, since removing it entirely could delete another member's post along with it.",
        "Wasal is currently free to use, so there is no subscription to cancel separately. If we introduce paid features in the future, this section will be updated to explain how to cancel any active subscription through the Apple App Store or Google Play before deleting your account, since deleting your account does not automatically stop billing through those platforms.",
        "If you're an admin of a community, deleting your account will transfer or remove your admin role — check with your community before deleting if you're the only admin.",
      ],
    },
    {
      id: "what",
      heading: "What Is Deleted and What Is Retained",
      body: [
        "When you delete your account, we permanently erase your personal data within 30 days, except where retention is required for legal, accounting, or dispute-resolution purposes.",
        "Profile (name, photo, phone, email) — Deleted — Erased within 30 days.",
        "Posts and comments — Deleted (may persist anonymized if quoted/replied to by another member) — Erased within 30 days; anonymized fragments retained indefinitely as part of others' content.",
        "Photos/media you uploaded — Deleted — Erased within 30 days.",
        "Location/proximity data — Deleted — Erased within 30 days.",
        "Device identifiers & app usage data (Amplitude) — Deleted or anonymized — Erased or anonymized within 30 days.",
        "Support/report tickets involving your account — Retained — Up to 1 year, for moderation records and dispute resolution.",
        "Records required by law (e.g., in response to a legal request) — Retained — As long as required by applicable Qatari law or a valid legal order.",
      ],
    },
    {
      id: "email",
      heading: "Deletion Request by Email (Users Without App Access)",
      body: [
        "If you can't sign in to the app, send a deletion request to privacy@wasal.me from the email address on your account. Include the phone number your account was registered with. We will verify your identity and process the request within 30 days.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      body: [
        "See the contacts listed at the bottom of this page.",
        "Deletion requests: privacy@wasal.me",
        "General support: support@wasal.me",
      ],
    },
  ],
  contacts: [
    { label: "Deletion requests", email: "privacy@wasal.me" },
    { label: "General support", email: "support@wasal.me" },
  ],
};

const enLegalNotice: LegalDoc = {
  slug: "legal-notice",
  title: "Legal Notice",
  updated: "August 17, 2026",
  summary:
    "Company and publisher information for the entity that operates Wasal. This summary is not legally binding; the full text below is.",
  sections: [
    {
      id: "company",
      heading: "1. Company Name",
      body: [
        "Wisal for Custom Software Programming W.L.L. (وصال لبرمجة البرمجيات الخاصة), a limited liability company (W.L.L.) registered under the laws of the State of Qatar.",
      ],
    },
    {
      id: "registration",
      heading: "2. Trade Licence and Registration",
      body: [
        "Commercial Registration (C.R.) Number: 244862",
        "Commercial License Number: 335994",
        "Issuing Authority: Ministry of Commerce and Industry, State of Qatar — Department of Commercial Registration & Permits",
        "Entity Number: 5008857922",
        "Tax Registration Number: 17-3167-27",
        "Member of the Qatar Chamber of Commerce and Industry",
        "Licensed activities: Artificial Intelligence Systems Programming and Development; Computer Consultancy and Computer Facilities Management; Designing and Programming Special Software",
      ],
    },
    {
      id: "address",
      heading: "3. Registered Address",
      body: [
        "Building 230, Street 303, Zone 69, Floor 19, Unit 1975, Doha, State of Qatar",
      ],
    },
    {
      id: "person",
      heading: "4. Responsible Contact Person",
      body: [
        "Saud Abdullah Hamad Abdullah Al-Atiyah, Manager, holding full and absolute authority for the company, is the person responsible for the content of this website and the Wasal Service under Qatari law.",
      ],
    },
    {
      id: "contact",
      heading: "5. General Contact",
      body: [
        "See the contacts listed at the bottom of this page.",
      ],
    },
    {
      id: "copyright",
      heading: "6. Copyright Notice",
      body: [
        "© 2026 Wisal for Custom Software Programming W.L.L. All rights reserved. The Wasal name, logo, and associated branding are trademarks of Wisal for Custom Software Programming W.L.L. The text, graphics, design, and other content on this website and within the Wasal app are protected by copyright and other intellectual property laws and may not be reproduced, distributed, or used without our prior written permission, except as permitted for personal, non-commercial use of the Service.",
      ],
    },
    {
      id: "doc-contact",
      heading: "Contact",
      body: [
        "General inquiries: contact@wasal.me",
        "Support: support@wasal.me",
      ],
    },
  ],
  contacts: [
    { label: "General inquiries", email: "contact@wasal.me" },
    { label: "Support", email: "support@wasal.me" },
  ],
};

const enModeration: LegalDoc = {
  slug: "content-moderation",
  title: "Content Moderation and Reporting Policy",
  updated: "August 17, 2026",
  summary:
    "How Wasal handles reports of harmful content, how long reviews take, how you can appeal, and how we work with law enforcement. This summary is not legally binding; the full text below is.",
  sections: [
    {
      id: "report",
      heading: "1. How to Report Content or a User",
      body: [
        "You can report a post, comment, message, or user directly within the app by tapping the report option on the relevant content or profile and selecting a reason (e.g., harassment, fraud, hate speech, fake location, spam, safety concern). If you can't access the app, email report@wasal.me with a description of the issue and, where possible, a link, screenshot, or the name/handle of the member involved.",
        "Reports are confidential — the person you report is not told who filed the report. Reporting in good faith never results in action against your own account, even if your report isn't ultimately upheld.",
      ],
    },
    {
      id: "review",
      heading: "2. Review Process and Timelines",
      body: [
        "Reports are triaged by community admins and, where escalated, by the Wasal team, based on severity:",
        "Urgent/safety concerns (threats, content endangering someone's safety, suspected fraud in progress): reviewed within 24–48 hours.",
        "Standard violations (harassment, spam, prohibited content under our Community Guidelines): reviewed within 3–5 business days.",
        "Complex cases requiring further investigation or additional information from the reporter: reviewed within 14 days, with a status update provided to the reporter if the case is still open at that point.",
        "Outcomes may include no action, content removal, a warning, temporary suspension, or permanent removal, consistent with the enforcement ladder in our Community Guidelines. Reporters are notified of the outcome where practicable, without disclosing private details about the reported member.",
      ],
    },
    {
      id: "appeals",
      heading: "3. Appeals",
      body: [
        "If your content was removed or your account was restricted, you may appeal by emailing appeals@wasal.me with your account details, the content or decision in question, and why you believe it was made in error. Appeals are reviewed by someone who was not involved in the original decision, where practicable, and a response is provided within 7 business days.",
        "If an appeal is upheld, we will restore the content or access as quickly as possible; if denied, we will explain the reasoning. Decisions involving safety threats, fraud, or content involving minors may not be eligible for restoration during review, even while an appeal is pending.",
      ],
    },
    {
      id: "authorities",
      heading: "4. Law-Enforcement and Authority Requests",
      body: [
        "Requests from law enforcement or government authorities for user data must be submitted in writing to our dedicated channel, legal@wasal.me, and must be accompanied by valid legal process appropriate to the request (such as a court order, warrant, or official request from a competent Qatari authority consistent with Qatar's Law No. 13 of 2016 on Personal Data Privacy Protection).",
        "We review each request for legal validity and scope before responding, and we will push back on or narrow requests that are overbroad. Where a requesting authority submits a valid preservation request, we will preserve the specified data for 90 days, renewable upon a further valid request, pending receipt of formal legal process. Unless prohibited by law, a court order, or where we believe notice would endanger someone's safety or compromise an investigation, we will notify the affected user that their data has been requested.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      body: [
        "Report content: report@wasal.me",
        "Appeals: appeals@wasal.me",
        "Law-enforcement requests: legal@wasal.me",
      ],
    },
  ],
  contacts: [
    { label: "Report content", email: "report@wasal.me" },
    { label: "Appeals", email: "appeals@wasal.me" },
    { label: "Law-enforcement requests", email: "legal@wasal.me" },
  ],
};

// ---------- ARABIC ----------
// Arabic strings mirror the English structure. Real legal Arabic must be
// professionally translated and legally reviewed before launch.

const arWrap = (doc: LegalDoc, titleAr: string, summaryAr: string, headings: Record<string, string>): LegalDoc => ({
  ...doc,
  title: titleAr,
  summary: summaryAr,
  sections: doc.sections.map((s) => ({ ...s, heading: headings[s.id] ?? s.heading })),
});

const arPrivacy = arWrap(
  enPrivacy,
  "سياسة الخصوصية",
  "تجمع وصال فقط ما نحتاجه لربطك بحيّك الموثّق: بيانات الملف الشخصي والتواصل، الموقع للتأكد من أهلية المجتمع، والمحتوى الذي تختار مشاركته. لا نبيع بياناتك، ويمكنك حذف حسابك في أي وقت. هذا الملخص غير ملزم قانونياً؛ النص الكامل أدناه هو الملزم.",
  {
    scope: "النطاق والقبول",
    "who-we-are": "من نحن",
    "information-we-collect": "المعلومات التي نجمعها",
    "how-we-use": "كيف نستخدم معلوماتك",
    "legal-basis": "الأساس القانوني للمعالجة",
    "who-we-share": "من نشارك المعلومات معه",
    "data-retention": "الاحتفاظ بالبيانات",
    "your-rights": "حقوقك",
    "childrens-privacy": "خصوصية الأطفال",
    "data-security": "أمن البيانات",
    "international-transfers": "نقل البيانات دولياً",
    cookies: "ملفات تعريف الارتباط والتقنيات المشابهة",
    changes: "تغييرات على هذه السياسة",
    contact: "اتصل بنا",
  },
);

const arTerms = arWrap(
  enTerms,
  "شروط الخدمة",
  "باستخدام وصال فإنك توافق على هذه القواعد. كن لطيفاً، وصادقاً، ولا تخالف القانون، واحترم جيرانك. هذا الملخص غير ملزم قانونياً؛ النص الكامل أدناه هو الملزم.",
  {
    "effective-date": "تاريخ النفاذ والإصدارات",
    scope: "النطاق ومن تنطبق عليه الشروط",
    service: "وصف الخدمة والميزات",
    account: "تسجيل الحساب",
    subscriptions: "الاشتراكات والأسعار",
    conduct: "التزامات المستخدم والسلوك المحظور",
    content: "ملكية المحتوى والترخيص",
    moderation: "الإشراف وإيقاف الحسابات وإنهاؤها",
    "third-party": "خدمات الأطراف الثالثة والتعامل بين الجيران",
    liability: "إخلاء المسؤولية وحدودها",
    law: "القانون الحاكم وتسوية النزاعات",
    changes: "تغييرات على الشروط",
    contact: "التواصل",
  },
);

const arGuidelines = arWrap(
  enGuidelines,
  "إرشادات المجتمع",
  "وصال لا ينجح إلا إذا شعر كل حي بالأمان. هذه هي القواعد الأساسية لكيفية تعامل الأعضاء مع بعضهم البعض وما يحدث عند مخالفتها. هذا الملخص غير ملزم قانونياً؛ النص الكامل أدناه هو الملزم.",
  {
    purpose: "الغرض",
    acceptable: "الاستخدام المقبول",
    prohibited: "المحتوى والسلوك المحظور",
    reporting: "الإبلاغ والحظر",
    enforcement: "التنفيذ والعواقب",
  },
);

const arDeletion = arWrap(
  enDeletion,
  "حذف الحساب",
  "يمكنك حذف حسابك في وصال وبياناتك الشخصية في أي وقت، من داخل التطبيق أو بمراسلتنا. قد يتم الاحتفاظ ببعض المعلومات لأسباب قانونية — الجدول أدناه يوضح ما يتم الاحتفاظ به ولماذا. هذا الملخص غير ملزم قانونياً؛ النص الكامل أدناه هو الملزم.",
  {
    how: "كيفية حذف حسابك من التطبيق",
    notes: "ملاحظات مهمة قبل الحذف",
    what: "ما الذي يُحذف وما الذي يُحتفظ به",
    email: "طلب الحذف عبر البريد الإلكتروني",
    contact: "التواصل",
  },
);

const arLegalNotice = arWrap(
  enLegalNotice,
  "الإشعار القانوني",
  "معلومات الشركة والناشر للجهة المشغّلة لوصال. هذا الملخص غير ملزم قانونياً؛ النص الكامل أدناه هو الملزم.",
  {
    company: "اسم الشركة",
    registration: "الرخصة التجارية والتسجيل",
    address: "العنوان المسجل",
    person: "الشخص المسؤول",
    contact: "معلومات التواصل",
    copyright: "إشعار حقوق النشر",
  },
);

const arModeration = arWrap(
  enModeration,
  "سياسة الإشراف على المحتوى والإبلاغ",
  "كيف يتعامل وصال مع البلاغات، ومدة المراجعة، وكيف يمكنك التقدم بطعن، وكيف نتعامل مع طلبات جهات إنفاذ القانون. هذا الملخص غير ملزم قانونياً؛ النص الكامل أدناه هو الملزم.",
  {
    report: "1. كيفية الإبلاغ عن محتوى أو مستخدم",
    review: "2. عملية المراجعة والجداول الزمنية",
    appeals: "3. الطعون",
    authorities: "4. طلبات جهات إنفاذ القانون",
    contact: "التواصل",
  },
);

const arCookies = arWrap(
  enCookies,
  "سياسة ملفات تعريف الارتباط",
  "لا تستخدم وصال إلا ملفات تعريف الارتباط الضرورية لتشغيل الخدمة. تبقى أدوات التحليل معطّلة حتى تقوم بتشغيلها من مركز تفضيلات ملفات تعريف الارتباط، ولا نستخدم ملفات إعلانية أو تتبّعاً بين المواقع. هذا الملخص غير ملزم قانونياً؛ النص الكامل أدناه هو الملزم.",
  {
    what: "ما هي ملفات تعريف الارتباط والتقنيات المشابهة",
    categories: "الفئات التي نستخدمها",
    manage: "إدارة خياراتك",
    retention: "مدة بقاء ملفات تعريف الارتباط",
    more: "مزيد من المعلومات",
  },
);

// ---------- REGISTRY ----------

export const DOCS: Record<Lang, Record<string, LegalDoc>> = {
  en: {
    privacy: enPrivacy,
    terms: enTerms,
    cookies: enCookies,
    "community-guidelines": enGuidelines,
    "account-deletion": enDeletion,
    "legal-notice": enLegalNotice,
    "content-moderation": enModeration,
  },
  ar: {
    privacy: arPrivacy,
    terms: arTerms,
    cookies: arCookies,
    "community-guidelines": arGuidelines,
    "account-deletion": arDeletion,
    "legal-notice": arLegalNotice,
    "content-moderation": arModeration,
  },
};

export const DOC_INDEX_EN: DocIndexEntry[] = [
  { slug: "privacy", title: "Privacy Policy", description: "What we collect, why, and what you control." },
  { slug: "terms", title: "Terms of Service", description: "The rules for using Wasal, and when they took effect." },
  { slug: "cookies", title: "Cookie Policy", description: "Cookies we set and how to manage analytics cookies." },
  { slug: "community-guidelines", title: "Community Guidelines", description: "How members are expected to treat each other." },
  { slug: "account-deletion", title: "Account Deletion", description: "How to permanently delete your account and data." },
  { slug: "legal-notice", title: "Legal Notice", description: "Company, publisher, and registration information." },
  { slug: "content-moderation", title: "Content Moderation and Reporting Policy", description: "How reports are handled and appealed." },
];

export const DOC_INDEX_AR: DocIndexEntry[] = [
  { slug: "privacy", title: "سياسة الخصوصية", description: "ما الذي نجمعه ولماذا وما الذي يمكنك التحكم به." },
  { slug: "terms", title: "شروط الخدمة", description: "قواعد استخدام وصال وتاريخ نفاذها." },
  { slug: "cookies", title: "سياسة ملفات تعريف الارتباط", description: "ملفات تعريف الارتباط التي نستخدمها وكيفية إدارتها." },
  { slug: "community-guidelines", title: "إرشادات المجتمع", description: "كيف يجب أن يتعامل الأعضاء مع بعضهم البعض." },
  { slug: "account-deletion", title: "حذف الحساب", description: "كيفية حذف حسابك وبياناتك بشكل نهائي." },
  { slug: "legal-notice", title: "الإشعار القانوني", description: "معلومات الشركة والناشر والتسجيل." },
  { slug: "content-moderation", title: "سياسة الإشراف على المحتوى والإبلاغ", description: "كيف تُعالَج البلاغات وكيف يمكن الطعن." },
];

export const ALL_DOC_PATHS: { lang: Lang; slug: string }[] = (["en", "ar"] as const).flatMap((lang) =>
  Object.keys(DOCS[lang]).map((slug) => ({ lang, slug })),
);
