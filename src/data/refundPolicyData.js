import { APP_CONSTANTS } from '../constants/appConstants';

export const refundPolicyData = {
  title: "Refund Policy",
  lastUpdated: APP_CONSTANTS.lastUpdated.refundPolicy,
  introduction: `At ${APP_CONSTANTS.company.fullName}, we are committed to providing quality mentorship and guidance to students. This Refund Policy outlines the terms under which refunds may be granted for our mentorship programs, courses, or subscriptions.`,
  sections: [
    {
      id: "general-policy",
      title: "General Policy",
      points: [
        "All fees paid for mentorship sessions, courses, or digital products are non-refundable, except as specifically stated in this policy.",
        "By enrolling in any program or purchasing any service, you acknowledge and agree to this Refund Policy."
      ]
    },
    {
      id: "eligibility-refunds",
      title: "Eligibility for Refunds",
      content: "A refund may only be considered under the following conditions:",
      subsections: [
        {
          title: "Technical Issues",
          content: "If you face technical problems that prevent you from accessing our services, and we are unable to resolve them within 7 working days."
        },
        {
          title: "Duplicate Payment",
          content: "If a payment is accidentally charged more than once, the extra amount will be refunded."
        },
        {
          title: "Service Not Delivered",
          content: "If the mentorship program you enrolled in does not start within the promised timeframe (and no alternative arrangement is offered)."
        }
      ]
    },
    {
      id: "non-refundable",
      title: "Non-Refundable Situations",
      points: [
        "Change of mind after enrollment.",
        "Failure to attend live sessions, mentorship calls, or utilize study materials.",
        "Unsatisfactory exam performance (as results depend on individual effort).",
        "Partial use of the service (e.g., attending some sessions and requesting a refund later)."
      ]
    },
    {
      id: "refund-process",
      title: "Refund Request Process",
      content: "To request a refund:",
      steps: [
        `Write to us at ${APP_CONSTANTS.contact.refundEmail} within 7 days of payment.`,
        "Provide your name, registered email, transaction details, and reason for the refund request.",
        "Our team will review your request and respond within 7–10 working days."
      ]
    },
    {
      id: "mode-of-refund",
      title: "Mode of Refund",
      points: [
        "Approved refunds will be processed to the original payment method used during purchase.",
        "Refund processing time may vary depending on your bank/payment provider (usually 7–14 working days)."
      ]
    },
    {
      id: "program-specific",
      title: "Program-Specific Refunds",
      points: [
        "Some mentorship packages or offers may have custom refund terms, which will be clearly mentioned at the time of purchase.",
        "In such cases, those specific terms will override this general Refund Policy."
      ]
    },
    {
      id: "contact-us",
      title: "Contact Us",
      content: "For any refund-related queries, contact us at:",
      contactInfo: {
        email: APP_CONSTANTS.contact.refundEmail
      }
    }
  ]
};