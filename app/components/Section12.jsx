import React from "react";

export default function Section12() {
  return (
    <section>
      <h1 className="font-extrabold text-[25px]">
        Detailed Information on the Processing of Your Personal <br /> Data
      </h1>
      <div className="flex flex-col gap-4">
        <h1>
          Service Providers have access to Your Personal Data only to perform
          their tasks on Our behalf and are obligated not to disclose or use it
          for any other purpose.
        </h1>

        <h1 className="font-extrabold text-[18px] ">Analytics</h1>
        <p>
          We may use third-party Service providers to monitor and analyze the
          use of our Service.
        </p>

        <React.Fragment>
          <li>Google Analytics</li>
          <p>
            Google Analytics is a web analytics service offered by Google that
            tracks and reports website traffic. Google uses the data collected
            to track and monitor the use of our Service. This data is shared
            with other Google services. Google may use the collected data to
            contextualise and personalise the ads of its own advertising
            network. <br />
            You may opt-out of certain Google Analytics features through your
            mobile device settings, such as your device advertising settings or
            by following the instructions provided by Google in their Privacy
            Policy:{" "}
            <a
              target="_blank"
              href="https://policies.google.com/privacy?hl=en"
              className="text-blue-400"
            >
              https://policies.google.com/privacy?hl=en{" "}
            </a>{" "}
            <br />
            For more information on the privacy practices of Google, please
            visit the Google Privacy & Terms web page:{" "}
            <a
              target="_blank"
              href="https://policies.google.com/privacy?hl=en"
              className="text-blue-400"
            >
              {" "}
              https://policies.google.com/privacy?hl=en{" "}
            </a>
          </p>
          <li>Google Play In-App Payments</li>
          <p>Their Privacy Policy can be viewed at <a target="_blank" className="text-blue-400" href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/ </a> </p>
          <li>Apple Store In-App Payments</li>
          <p>Their Privacy Policy can be viewed at <a target="_blank" className="text-blue-400" href="https://www.apple.com/legal/privacy/en-ww/">https://www.apple.com/legal/privacy/en-ww/ </a> </p>

        </React.Fragment>
      </div>
    </section>
  );
}
