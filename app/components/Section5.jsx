import React from "react";

export default function Section5() {
  const data = [
    "To provide location-based services that are essential to the core functionality of our app.",
    "To enhance the functionality of our app, such as mapping features, location-specific recommendations, and weather information relevant to your current location.",
  ];
  const coreData=[
    "Our app requires background location access to provide core features such as Nearby Dive Site information and Diving Conditions. These features are integral to the app's primary purpose, as they help users plan and execute diving activities safely and effectively. Without background location access, these features would not function properly, significantly diminishing the app's usability and value to our users."
  ]
  const data1 = [
    "We use location data to tailor our services to your current location, ensuring you receive relevant content and services.",
    "We may also use this data to analyze usage patterns to improve our app or for marketing purposes.",
  ];
  return (
    <section>
      <div className="flex flex-col gap-4">
        <h1 className="font-extrabold text-[18px] underline underline-offset-4 ">Location Permission:</h1>
        <h2 className="underline underline-offset-4">What we Collect</h2>
        <ul className="flex flex-col pl-4 list-inside list-disc">
          <li>
            We collect precise or approximate location data from your device if
            you grant us permission. This may be derived from GPS, Wi-Fi, and
            mobile networks.
          </li>
        </ul>
        <h2 className="underline underline-offset-4">Why we Collect it:</h2>
        <ul className="flex flex-col pl-4 list-inside list-disc">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2 className="underline underline-offset-4">Core Functionality:</h2>
        <ul className="flex flex-col pl-4 list-inside list-disc">
          {coreData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2 className="underline underline-offset-4">How we use it:</h2>
        <ul className="flex flex-col pl-4 list-inside list-disc">
          {data1.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2 className="underline underline-offset-4">Your Choices:</h2>
        <ul className="flex flex-col pl-4 list-inside list-disc">
          <li>
          You can disable location services in your device settings. However, this will affect the functionality of core features of our app, such as Nearby Dive Sites and Diving Conditions, which rely on background location access to provide accurate and timely information.

          </li>
        </ul>
      </div>
    </section>
  );
}
