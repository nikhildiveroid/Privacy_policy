import React from "react";

export default function Section4() {
    const data = [

        "OS Name",
        "OS Version",
        "OS Build",
        "Time Zone",
        "System Language",
        "Carrier Country",
        "Carrier Name"
    ]
    const locationInfo=[
        "Locale",
        "Country Area"
    ]
    const applicationInfo =[
        "App Name",
        "App Build",
        "APP Version Number",
        "SDK Name",
        "SDK Version"
    ]
  return (
    <section>
      <div className="flex flex-col gap-2">
        <p>
          In order to provide a better user experience, we have integrated data
          statistics tools in the App, they won&apos;t collect users health data or
          privacy data and are only used for CRASH targeting and AB-testing for
          new features and design, The details are as follows:
        </p>

        <h1 className="underline underline-offset-4">Device information:</h1>
        <ul className="flex flex-col gap-2 pl-4 list-disc list-inside">
            <li>OEM Name</li>
            <li>Model</li>

        </ul>
        <h1 className="underline underline-offset-4">Device system information:</h1>
        <ul className="flex flex-col gap-2 pl-4 list-disc list-inside">
            {data.map((item, index)=>(
                    <li key={index}>{item}</li>

            ))}
        
        

        </ul>
        <h1 className="underline underline-offset-4">Location information:</h1>
        <ul className="flex flex-col gap-2 pl-4 list-inside list-disc">
            {locationInfo.map((item, index)=>(
                    <li key={index}>{item}</li>

            ))}
        
        

        </ul>
        <h1 className="underline underline-offset-4">Application information:</h1>
        <ul className="flex flex-col gap-2 pl-4 list-inside list-disc">
            {applicationInfo.map((item, index)=>(
                    <li key={index}>{item}</li>

            ))}
        
        

        </ul>
      </div>
    </section>
  );
}
