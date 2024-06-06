import React from "react";

export default function Section10() {
    const data = [
        {
            h1:"Business Transactions",
            p:"If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy."
        },
        {
            h1:"Law enforcement",
            p:"Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency)."
        },
        {
            h1:"Other legal requirements",
            p:"Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency)."
        },
    
       
    ]
    const links = [
        "Comply with a legal obligation","Protect and defend the rights or property of the Company","Prevent or investigate possible wrongdoing in connection with the Service","Protect the personal safety of Users of the Service or the public","Protect against legal liability"
    ]
  return (
    <section>
      <div className=" flex flex-col gap-4">
        <h1 className="font-extrabold text-[20px]  ">
          Disclosure of Your Personal Data
        </h1>
        {data.map((item, index)=>(
            <React.Fragment key={index}>


            <h1 className="font-extrabold underline underline-offset-4">{item.h1}</h1>
            <p>{item.p}</p> {index===2 &&
            (
                <ul className="flex flex-col gap-1 list-disc list-inside pl-4">
                {links.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )
            
            
            }
        </React.Fragment>


        ))}




      </div>
    </section>
  );
}
