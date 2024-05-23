import React from "react";

export default function Section11() {
  const data = [
    "Encrypt your personal data during transport and rest;",
    "System vulnerability scanning and penetration testing;",
    "Protect data integrity;",
    "Organizational and legal measures.",
    "Perform regular data protection impact assessments",
    "We take reasonable measures to protect your location information from unauthorized access, use, or disclosure.",
  ];
  return (
    <section>
      <div className=" flex flex-col gap-4">
        <h1 className="font-extrabold text-[20px] ">
          Security of Your Personal Data
        </h1>

        <p>
          We use administrative, technical, and physical security measures to
          help protect your personal information. We use the following
          information security measures to protect your personal data:
        </p>
        <ul className="flex flex-col gap-1 list-disc list-inside pl-4">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>
        The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
        </p>
      </div>
    </section>
  );
}
