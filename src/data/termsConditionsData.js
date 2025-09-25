import { APP_CONSTANTS } from '../constants/appConstants';

export const termsConditionsData = {
  title: "Terms & Conditions",
  lastUpdated: APP_CONSTANTS.lastUpdated.terms,
  introduction: `Welcome to ${APP_CONSTANTS.company.fullName} ("${APP_CONSTANTS.company.name}," "we," "our," "us"). By accessing or using our website, services, mentorship programs, or any related content (collectively, the "Services"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree, please do not use our Services.`,
  sections: [
    {
      id: "eligibility",
      title: "Eligibility",
      points: [
        "You must be at least 13 years old to use our Services.",
        "If you are under 18, you must use the Services only under the supervision of a parent or legal guardian."
      ]
    },
    {
      id: "services-provided",
      title: "Services We Provide",
      points: [
        "ToppersClubs offers mentorship, guidance, and educational support from toppers and subject experts for competitive exams (e.g., NEET).",
        "Our Services include mentorship sessions, study strategies, online content, digital resources, and community interactions.",
        "We do not guarantee admission, exam rank, or specific results."
      ]
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      content: "When using our Services, you agree to:",
      points: [
        "Provide accurate and complete information during registration.",
        "Protect your account credentials and notify us of any unauthorized access.",
        "Use our Services only for lawful purposes.",
        "Not share, copy, or redistribute any paid content without permission.",
        "Respect other users and mentors in all interactions."
      ]
    },
    {
      id: "payment-terms",
      title: "Payment Terms",
      points: [
        "All payments are due in full at the time of enrollment unless otherwise agreed.",
        "Prices may change at any time, but enrolled students will not be affected during their current course.",
        "We use secure third-party payment processors and do not store your payment details."
      ]
    },
    {
      id: "refunds-cancellations",
      title: "Refunds and Cancellations",
      content: "Please refer to our separate Refund Policy for detailed information about refunds and cancellations."
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      points: [
        "All content, materials, and resources provided are owned by ToppersClubs or licensed to us.",
        "You may not reproduce, distribute, modify, or create derivative works without our written permission.",
        "You retain ownership of any content you submit but grant us a license to use it for providing our Services."
      ]
    },
    {
      id: "privacy",
      title: "Privacy",
      content: "Your use of our Services is also governed by our Privacy Policy. Please review it to understand how we collect, use, and protect your information."
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      points: [
        "Services are provided \"as is\" without warranties of any kind.",
        "We do not guarantee specific results, ranks, or admission to any institution.",
        "Study materials and guidance are supplementary and should not replace formal education.",
        "We are not responsible for third-party content or external links."
      ]
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, ToppersClubs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services."
    },
    {
      id: "termination",
      title: "Termination",
      points: [
        "We reserve the right to suspend or terminate your access for violation of these Terms.",
        "You may cancel your account at any time by contacting us.",
        "Upon termination, your right to use the Services will immediately cease."
      ]
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions."
    },
    {
      id: "changes-to-terms",
      title: "Changes to Terms",
      content: "We may update these Terms from time to time. We will notify you of significant changes via email or through the Services. Continued use after changes constitutes acceptance."
    },
    {
      id: "contact-information",
      title: "Contact Information",
      content: "For questions about these Terms & Conditions, please contact us at:",
      contactInfo: {
        email: APP_CONSTANTS.contact.email
      }
    }
  ]
};