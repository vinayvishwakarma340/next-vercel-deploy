import React from "react";

const FAQ = (props) => {
  const faqs = [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ];

  return (
    <div className={`props.color ? bg-slate-50 : "bg-white"`}>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="  tracking-tight text-gray-900 text-xl font-bold leading-6   ">
            {props.heading}
          </h2>

        </div>
        <div className="mt-16">
          <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
            {props.data.map((faq, index) => (
              <div key={index}>
                <dt className="font-semibold text-sm text-gray-900">{faq.question}</dt>
                <dd className="mt-3   text-sm">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
