import React from "react";

export default function Section1() {
  const data = [
    {
      h1: "Effective date: 22/05/2024",
      h2: "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.",
      h3: "We use Your Personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.",
    },
  ];
  return (
    <>
      <section>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-5">
            <h1 className="font-extrabold	">{item.h1}</h1>
            <h2>{item.h2}</h2>
            <h3>{item.h3}</h3>
          </div>
        ))}
      </section>
    </>
  );
}
