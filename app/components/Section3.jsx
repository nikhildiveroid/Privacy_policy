import React from "react";

export default function Section3() {
  const data = [
    "Hardware model;",
    "Information about operating system and its version;",
    "Language and country;",
    "Unique device identifiers (e.g. IDFA);",
    "Time zone;",
    "Device mute status (related to reminder function)",
  ];
  return (
    <section className="flex flex-col gap-4">
      <h1 className="underline text-[25px] font-bold">
        Collecting and Using Your Personal Data
      </h1>
      <div className="flex flex-col gap-2">
        <h1 className="font-extrabold text-[18px]">Types of Data Collected</h1>
        <h2 className="font-extrabold text-[15px]">Usage Data</h2>
        <p>
          Usage Data is collected automatically when using the Service.
          <br /> <br />
          Usage Data may include information such as Your Device's Id, the time
          spent on those screens of application, unique device identifiers and
          other diagnostic data.
          <br /> <br />
          When You access the Service by or through a mobile device, We may
          collect certain information automatically, including, but not limited
          to, the type of mobile device You use, Your mobile device unique ID,
          Your mobile operating system, the type of mobile Internet connectivity
          (e.g. network or Wifi), unique device identifiers and other diagnostic
          data. <br /> <br /> We may also collect information.below list can
          provide a non-exclusive list of the contents of Usage Data:
        </p>
        <ul className="flex flex-col gap-1 list-disc list-inside pl-4">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
