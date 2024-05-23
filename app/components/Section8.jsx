import React from "react";

export default function Section8() {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <h1 className="font-extrabold text-[20px] ">
          Retention of Your Personal Data
        </h1>
        <p>
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies. <br /> <br />
          The Company will also retain Usage Data for internal analysis
          purposes. Usage Data is generally retained for a shorter period of
          time, except when this data is used to strengthen the security or to
          improve the functionality of Our Service, or We are legally obligated
          to retain this data for longer time periods.
        </p>
        <ul className="flex flex-col list-disc pr-4 list-inside">
          <li>
            We retain location data for as long as it is necessary to fulfill
            the purposes outlined in this policy, unless a longer retention
            period is required or permitted by law.
          </li>
        </ul>
      </div>
    </section>
  );
}
