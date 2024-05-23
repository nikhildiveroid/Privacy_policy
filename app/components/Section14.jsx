import React from "react";

export default function Section14() {
  const data = [
    {
      li: "Request access to Your Personal Data:",
      p: "The right to access, update or delete the information We have on You. Whenever made possible, you can access, update or request deletion of Your Personal Data directly within Your account settings section. If you are unable to perform these actions yourself, please contact Us to assist You. This also enables You to receive a copy of the Personal Data We hold about You.",
    },
    {
      li: "Request correction of the Personal Data that We hold about You.",
      p: " You have the right to to have any incomplete or inaccurate information We hold about You corrected.",
    },
    {
      li: "Object to processing of Your Personal Data:",
      p: " This right exists where We are relying on a legitimate interest as the legal basis for Our processing and there is something about Your particular situation, which makes You want to object to our processing of Your Personal Data on this ground. You also have the right to object where We are processing Your Personal Data for direct marketing purposes.",
    },
    {
      li: "Request erasure of Your Personal Data:",
      p: "  You have the right to ask Us to delete or remove Personal Data when there is no good reason for Us to continue processing it.",
    },
    {
      li: "Request the transfer of Your Personal Data: ",
      p: "  We will provide to You, or to a third-party You have chosen, Your Personal Data in a structured, commonly used, machine-readable format. Please note that this right only applies to automated information which You initially provided consent for Us to use or where We used the information to perform a contract with You.",
    },
    {
      li: "Withdraw Your consent:",
      p: " You have the right to withdraw Your consent on using your Personal Data. If You withdraw Your consent, We may not be able to provide You with access to certain specific functionalities of the Service.",
    },
  ];
  return (
    <section>
      <h1 className="font-extrabold text-[25px]">Your Rights under the GDPR</h1>
      <div className="flex flex-col gap-4">
        <h1>
          The Company undertakes to respect the confidentiality of Your Personal
          Data and to guarantee You can exercise Your rights.
        </h1>
        <h2>
          You have the right under this Privacy Policy, and by law if You are
          within the EU, to:
        </h2>

        <ul className="flex flex-col gap-2 list-disc list-inside">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <li className="font-extrabold text-md">{item.li} </li>
              <p className="pl-6">{item.p}</p>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}
