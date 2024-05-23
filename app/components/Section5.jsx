import React from "react";

export default function Section5() {
  const data = [
    "To provide location-based services or offers.",
    "To enhance the functionality of our app, such as mapping features or location-specific recommendations.",
    "For security purposes, to prevent fraud.",
    "We use your location information to provide you weather information in your area, Nearby Dive Site, Diving Condition(core functionality of application)",
  ];
  const data1=[
    "We use location data to tailor our services to your current location, ensuring you receive relevant content and services.",
    "We may also use this data to analyze usage patterns to improve our app or for marketing purposes."
  ]
  return (
    <section>
      <div className="flex flex-col gap-4">
        <h1 className="font-extrabold text-[15px] ">Location Permission:</h1>
        <h2 className="">What we Collect</h2>
        <ul className="flex flex-col pl-4 list-inside list-disc">
          <li>
            We collect precise or approximate location data from your device if
            you grant us permission. This may be derived from GPS, Wi-Fi, and
            mobile networks.
          </li>
        </ul>
        <h2 className="">Why we Collect it:</h2>
        <ul className="flex flex-col pl-4 list-inside list-disc">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2 className="">How we use it:</h2>
        <ul className="flex flex-col pl-4 list-inside list-disc">
          {data1.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2 className="">Your Choices:</h2>
        <ul className="flex flex-col pl-4 list-inside list-disc">
         
            <li >You can disable location services in your device settings. However, this may affect the functionality of certain features of our app.</li>
 
        </ul>
      </div>
    </section>
  );
}
