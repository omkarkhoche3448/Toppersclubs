import { APP_CONSTANTS } from '../constants/appConstants';

export const privacyPolicyData = {
  title: "Privacy Policy",
  lastUpdated: APP_CONSTANTS.lastUpdated.privacyPolicy,
  introduction: `${APP_CONSTANTS.company.fullName} ("${APP_CONSTANTS.company.name}," "we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website, mentorship programs, or related services (collectively, "Services").`,
  agreement: "By using our Services, you agree to the practices described in this Privacy Policy.",
  sections: [
    {
      id: "information-collected",
      title: "Information We Collect",
      content: "We may collect the following types of information:",
      subsections: [
        {
          title: "Personal Information",
          content: "Name, email address, phone number, date of birth, and other details you provide during registration."
        },
        {
          title: "Payment Information",
          content: "Billing details, transaction history, and payment method (processed securely via third-party providers)."
        },
        {
          title: "Educational Information",
          content: "Exam details, study preferences, and academic goals (to personalize mentorship)."
        },
        {
          title: "Usage Data",
          content: "IP address, browser type, device information, and activity on our website."
        },
        {
          title: "Communications",
          content: "Messages, feedback, or queries you send to us."
        }
      ]
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      content: "We use your information to:",
      points: [
        "Provide mentorship, courses, and related services.",
        "Personalize learning plans and recommendations.",
        "Process payments and issue invoices/receipts.",
        "Communicate important updates, offers, and reminders.",
        "Improve our website, services, and customer support.",
        "Comply with legal and regulatory obligations."
      ]
    },
    {
      id: "how-we-share",
      title: "How We Share Your Information",
      content: "We do not sell or rent your personal information. However, we may share your information with:",
      points: [
        {
          title: "Mentors and coaches",
          content: "Only the information necessary for mentorship sessions."
        },
        {
          title: "Payment gateways",
          content: "For secure payment processing."
        },
        {
          title: "Service providers",
          content: "For hosting, analytics, or technical support."
        },
        {
          title: "Legal authorities",
          content: "If required by law, court order, or to protect our rights."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      content: "We implement industry-standard measures to protect your information against unauthorized access, misuse, or disclosure.",
      additionalContent: "While we strive to keep your data secure, no online transmission is 100% secure. You share information at your own risk."
    },
    {
      id: "cookies",
      title: "Cookies & Tracking",
      content: "We use cookies and similar technologies to improve user experience, track website performance, and deliver relevant content.",
      additionalContent: "You can manage cookie preferences in your browser settings, but some features of our site may not work properly without them."
    },
    {
      id: "your-rights",
      title: "Your Rights",
      content: "Depending on applicable laws, you may have the right to:",
      points: [
        "Access the personal data we hold about you.",
        "Request correction or deletion of your data.",
        "Opt out of marketing communications at any time.",
        "Withdraw consent (where applicable)."
      ],
      additionalContent: `To exercise these rights, contact us at ${APP_CONSTANTS.contact.email}.`
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: "We retain your information only as long as necessary to provide our Services and comply with legal obligations.",
      additionalContent: "After this period, data will be securely deleted or anonymized."
    },
    {
      id: "third-party",
      title: "Third-Party Links",
      content: "Our website may contain links to external sites. We are not responsible for the privacy practices of such third-party websites."
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      content: "Our Services are intended for students preparing for competitive exams.",
      additionalContent: "We do not knowingly collect data from children under 13. If you believe a child has provided us with personal information, contact us immediately for removal."
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. The revised version will be posted on this page with the updated date. Continued use of our Services constitutes acceptance of the updated policy."
    },
    {
      id: "contact",
      title: "Contact Us",
      content: "For questions regarding this Privacy Policy, please contact:",
      contactInfo: {
        email: APP_CONSTANTS.contact.email
      }
    }
  ]
};