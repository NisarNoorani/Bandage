import React from "react";

const PricingFAQs = () => {
  const faqs = [
    {
      title: "What is included in the membership?",
      description:
        "Our membership includes access to all premium features, exclusive content, personalized support, and monthly updates tailored to your needs.",
    },
    {
      title: "Can I cancel my membership anytime?",
      description:
        "Yes, you can cancel your membership at any time with no hidden fees. Your access will remain active until the end of your billing period.",
    },
    {
      title: "How do I upgrade my membership?",
      description:
        "To upgrade your membership, go to your account settings and select the ‘Upgrade Plan’ option. Follow the instructions to complete the process.",
    },
    {
      title: "Are there any discounts available?",
      description:
        "Yes, we offer seasonal discounts and special promotions. Keep an eye on our updates or subscribe to our newsletter for the latest offers.",
    },
    {
      title: "What payment methods are accepted?",
      description:
        "We accept all major credit and debit cards, PayPal, and other secure payment options. Your payment information is always encrypted.",
    },
    {
      title: "Is there a free trial available?",
      description:
        "Yes, we offer a 7-day free trial for new members. Experience the premium features before deciding to subscribe.",
    },
  ];

  return (
    <div className="py-12 px-6 flex flex-col items-center bg-gray-50">
      {/* Title */}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center mb-2">Pricing FAQs</h1>
        <p className="text-gray-500 font-bold ">
          Everything you need to know about our membership plans.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg shadow-sm"
          >
            {/* Icon */}
            <span className="text-sky-500 font-bold text-xl mt-1">&lt;</span>

            {/* FAQ Content */}
            <div>
              <h3 className="text-lg font-semibold text-left mb-2">
                {faq.title}
              </h3>
              <p className="text-sm text-gray-700 text-left">
                {faq.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-12 flex flex-col items-center">
        <p className="text-gray-700 text-2xl text-left">
          Haven’t got your answer?
        </p>
          <a
            href="/contact"
            className="text-sky-500 text-2xl hover:underline font-medium"
          >
            Contact our support
          </a>
      </div>
    </div>
  );
};

export default PricingFAQs;
