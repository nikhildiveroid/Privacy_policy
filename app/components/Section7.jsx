import React from "react";

export default function Section7() {
  const data = [
    "We may process the account data you provide by using the app and create it through your account only for the purposes of login or registration, third-party services, such as Apple ID, Google account, and Facebook account.",
    "You expressly consent to our collection and use of your location data, including background location access, which is essential for providing core app functionalities such as Nearby Dive Sites and Diving Conditions.",
    "Except as provided in this privacy policy, we will not transfer any of your personal data to third parties.",
  ];
  const dataUse = [
    "To provide and maintain our Service, including to monitor the usage of our Service.",
    "To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.",
    "For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.",
    "To contact You: To contact You by email, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.",
    "To provide You with news, special offers, and general information about other goods, services, and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.",
    "To ensure that users have a seamless experience with our app, we need to access location data in the background. This allows us to offer continuous and uninterrupted service, particularly for essential features such as tracking Nearby Dive Sites and providing real-time Diving Conditions. These functionalities are critical for your safety and planning during diving activities.",
    "To manage Your requests: To attend and manage Your requests to Us.",
  ];
  const dataShare=[
    {
      h1:"With Service Providers:",
      desc:" We may share Your personal information with Service Providers to monitor and analyze the use of our Service, for payment processing, to contact You."
    },
    {
      h1:"For Business transfers:",
      desc:" We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company."
    },
    {
      h1:"With Affiliates: ",
      desc:" We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us."
    },
    {
      h1:"With Business partners:",
      desc:" We may share Your information with Our business partners to offer You certain products, services or promotions."
    },
    {
      h1:"With other users:",
      desc:"We didn’t share any personal information with any of the other users except your Name, your e-mail address and your country to reach out to the customer support, sales support team. "
    },
  ]
  const subData = [
    "Analytics - We use third party analytics tools, Google Analytics, to help us measure traffic and usage trends for the Service. Google Analytics collects information such as device, location and app usage information. We may use the information get from Google Analytics only to customize and personalize your App experience for statistical purposes and analytics.",
    "Location: We may share your location data with service providers who perform services on our behalf, such as data analytics or marketing services.",
    'We only share what is necessary for them to perform these services and require them to protect your data and use it solely for the purposes for which it was shared.'
  ]
  return (
    <section>
      <div className="flex flex-col gap-4">
        <h1 className="font-extrabold text-[20px] ">
          Your Consent and Our Use of Your Personal Data
        </h1>
        <p className="underline underline-offset-4">
          By creating a profile or registering to use our apps, you expressly
          agree to: :
        </p>
        <ul className="flex flex-col gap-1 list-disc list-inside pl-4">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h1 className="underline underline-offset-4">The Company may use Personal Data for the following purposes:</h1>
        <ul className="flex flex-col gap-1 list-disc list-inside pl-4">
          {dataUse.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h1 className="underline underline-offset-4">
          We may share your personal information in the following situations:
        </h1>
        <ul className="flex flex-col gap-1 list-disc list-inside pl-4">
          {dataShare.map((item, index) => (
           <div key={index}>

            <li className="font-extrabold list-disc underline underline-offset-4">{item.h1}</li>
      
            <p className="pl-10">{item.desc}</p>
            {index===0 && (
                   <ul className="flex flex-col gap-1 list-disc list-inside pl-10">
                   {subData.map((item, index) => (
                     <li key={index}>{item}</li>
                   ))}
                 </ul>
              
            )}
           </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
