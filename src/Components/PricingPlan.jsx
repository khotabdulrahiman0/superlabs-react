import React from "react";

const plans = [
  {
    name: "Standard",
    price: "$3,499/year",
    perMonth: "$291.5/month",
    cta: "Select & Pay",
    features: [
      "Unlimited",
      "Unlimited",
      "USD 500",
      "20",
      "60/month",
      "",
      "",
      "5",
      "Yes",
      "72",
      "Yes",
      "Yes",
      "Dedicated account manager",
      "Not available"
    ],
    highlight: false,
    subHeader: null,
  },
  {
    name: "Standard Extended",
    price: "$5,299/2 years",
    perMonth: "$441.5/year",
    cta: "Select & Pay",
    features: [
      "Unlimited",
      "Unlimited",
      "USD 500+150",
      "20",
      "60/month",
      "",
      "",
      "5",
      "Yes",
      "72",
      "Yes",
      "Yes",
      "Dedicated account manager",
      "Not available"
    ],
    highlight: true,
    subHeader: "2-year with 20% Savings"
  },
  {
    name: "Premium",
    price: "$6,999/year",
    perMonth: "$583.2/month",
    cta: "Select & Pay",
    features: [
      "Unlimited",
      "Unlimited",
      "USD 1000+150",
      "20",
      "60/month",
      "",
      "",
      "5",
      "Yes",
      "100",
      "Yes",
      "Yes",
      "NYC Based Key Account Manager",
      ""
    ],
    highlight: false,
    subHeader: null,
  },
];

const featuresList = [
  "Post products",
  "Receive & respond to inquiries",
  "Keyword ad spend",
  "Showcased products",
  "Respond to RFQs",
  "Keyword Trends",
  "180 day traffic accelerator",
  "Sub accounts",
  "Worldwide Shipping (over 60 countries)",
  "Product posting service",
  "Minute creation",
  "Feature configuration",
  "Account Manager",
  "US based Key Success Program (KSP)"
];

const PricingPlans = () => (
  <div className="bg-white min-h-screen py-8 flex flex-col items-center">
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow p-4 md:p-8">
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-0 border-b">
        <div className="col-span-1"></div>
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`text-center px-4 py-4 ${plan.highlight ? "bg-red-100" : ""}`}
          >
            {plan.subHeader && (
              <div className="text-xs font-bold text-white bg-red-600 rounded-t-md py-1 mb-2">{plan.subHeader}</div>
            )}
            <div className="text-2xl font-bold mb-1">{plan.name}</div>
            <div className="text-2xl text-gray-800 font-bold mb-1">{plan.price}</div>
            <div className="text-gray-400 mb-4">{plan.perMonth}</div>
            <button
              className={`mb-2 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold shadow transition`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
      {/* Table Body */}
      <div className="grid grid-cols-4 gap-0">
        {/* Features list */}
        <div className="col-span-1 border-r">
          {featuresList.map((feature, i) => (
            <div key={i} className="py-3 px-4 border-b text-gray-700 text-sm font-medium">
              {feature}
            </div>
          ))}
        </div>
        {/* Plan features */}
        {plans.map((plan, colIdx) => (
          <div key={plan.name} className={`border-r last:border-r-0`}>
            {plan.features.map((feature, rowIdx) => (
              <div
                key={rowIdx}
                className="py-3 px-4 border-b text-center text-gray-800 text-sm"
              >
                {feature || <span className="text-gray-300">-</span>}
              </div>
            ))}
            {/* CTA at bottom for mobile */}
            <div className="block md:hidden pt-4 pb-2">
              <button
                className={`px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold shadow transition w-full`}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Help section */}
    <div className="w-full max-w-6xl mx-auto text-center mt-8 px-4">
      <h3 className="text-xl md:text-2xl font-bold mb-2">Need help picking the best plan?</h3>
      <p className="mb-4 text-gray-700">
        Book a free personal demo with our customer success professional to get more sales for your business.
      </p>
      <button className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-full font-semibold shadow transition">
        Talk to sales
      </button>
    </div>
  </div>
);

export default PricingPlans;