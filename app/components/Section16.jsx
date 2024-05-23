import React from "react";

export default function Section16() {
  const data = [
    {
      li: "The right to notice:",
      p: "You must be properly notified which categories of Personal Data are being collected and the purposes for which the Personal Data is being used.",
    },
    {
      li: "The right to access / the right to request:",
      p: " The CCPA permits You to request and obtain from the Company information regarding the disclosure of Your Personal Data that has been collected in the past 12 months by the Company or its subsidiaries to a third-party for the third party's direct marketing purposes.",
    },
    {
      li: "The right to say no to the sale of Personal Data:",
      p: 'You also have the right to ask the Company not to sell Your Personal Data to third parties. You can submit such a request by visiting our "Do Not Sell My Personal Information" section or web page.',
    },
    {
      li: "The right to know about Your Personal Data:",
      p: "You have the right to request and obtain from the Company information regarding the disclosure of the following:",
    },
    {
      li: "The right to delete Personal Data:",
      p: "You also have the right to request the deletion of Your Personal Data that have been collected in the past 12 months.",
    },
    {
      li: "The right not to be discriminated against:",
      p: "You have the right not to be discriminated against for exercising any of Your Consumer's rights, including by:",
    },
  ];
  const subdata = [
    "The categories of Personal Data collected",
    "The sources from which the Personal Data was collected",
    "The business or commercial purpose for collecting or selling the Personal Data",
    "Categories of third parties with whom We share Personal Data",
    "The specific pieces of Personal Data we collected about You",
  ];
  const subdata1 = [
    "Denying goods or services to You",
    "Charging different prices or rates for goods or services, including the use of discounts or other benefits or imposing penalties",
    "Providing a different level or quality of goods or services to You",
    "Suggesting that You will receive a different price or rate for goods or services or a different level or quality of goods or services.",
  ];
  return (
    <section>
      <h1 className="text-[25px] font-extrabold">CCNA Privacy</h1>

      <div className="flex flex-col gap-4 mt-3">
        <h1 className="text-[18px] font-extrabold">
          Your Rights under the CCPA
        </h1>

        <h2>
          Under this Privacy Policy, and by law if You are a resident of
          California, You have the following rights:
        </h2>

        <ul className=" flex flex-col list-disc list-inside gap-2">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <li className="font-extrabold text-[16px]">{item.li}</li>
              <p className="pl-6"> {item.p}</p>
              {index === 3 ? (
                <ul className="list-disc list-inside pl-10 ">
                  {subdata.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : index === 5 ? (
                <ul className="list-disc list-inside pl-10 ">
                  {subdata1.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}
