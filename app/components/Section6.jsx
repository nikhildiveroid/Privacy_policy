import React from "react";

export default function Section6() {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <h1 className="font-extrabold text-[15px] ">
          Information from Third-Party Social Media Services
        </h1>
        <p>The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
        <ul className="flex flex-col gap-1 list-disc list-inside pl-4">

            <li >Google</li>
            <li >Facebook</li>

        </ul>
        <p>
        If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address and your profile photo. <br /> <br />
        You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.
        </p>
      </div>
    </section>
  );
}
