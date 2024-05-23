import React from "react";

export default function Section13() {
  const links = [
    "Consent: You have given Your consent for processing Personal Data for one or more specific purposes.",
    "Performance of a contract: Provision of Personal Data is necessary for the performance of an agreement with You and/or for any pre-contractual obligations thereof.",
    "Legal obligations: Processing Personal Data is necessary for compliance with a legal obligation to which the Company is subject.",
    "Vital interests: Processing Personal Data is necessary in order to protect Your vital interests or of another natural person.",
    "Public interests: Processing Personal Data is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Company.",
    "Legitimate interests: Processing Personal Data is necessary for the purposes of the legitimate interests pursued by the Company.",
  ];
  return (
    <section>
      <h1 className="font-extrabold text-[25px]">GDPR Privacy</h1>
      <div className="flex flex-col gap-4">
        <h1 className="font-extrabold text-[18px]">
          Legal Basis for Processing Personal Data under GDPR
        </h1>
        <p>We may process Personal Data under the following conditions:</p>
        <ul className="flex flex-col gap-1 list-disc list-inside pl-4">
          {links.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>In any case, the Company will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.</p>
      </div>
    </section>
  );
}
