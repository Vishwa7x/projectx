import ButtonLogin from "./components/buttonLogin";
import FAQlistItem from "./components/FAQlistItems";
import Image from "next/image";
import productDemo from "@/app/productDemo.jpeg";
import { auth } from "@/auth";

export default async function Home() {

  const session = await auth()
  console.log(session);
  
  const pricingFeaturesList=["Collect customer feedback","Unlimited boards","Admin dashboard","24/7 support"];
  return (
    <main>
      {/*Header*/}
      <section className="bg-base-200">
      <div className="flex justify-between items-center px-8 py-2 max-w-5xl mx-auto">
        <div className="font-bold">ProjextX</div>
        <div className="space-x-4 max-md:hidden">
          <a className="link link-hover" href="#pricing" >Pricing</a>
          <a className="link link-hover" href="#faq">FAQ</a>
        </div>
        <div>
         <ButtonLogin session={session}  />
        </div>
        </div>
      </section>
      {/*Hero*/}
      <section className="text-center lg:text-left py-32 px-8 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-start ">
        <Image src={productDemo} alt="product demo" className="w-96 rounded-xl"/>
        <div>
      <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Get Customer Feedbacks And Improve Your Product</h1>
      <div className="opacity-90 mb-10">
           Create a feedback board in minutes,prioritize features and build products your customers will love.
      </div>
      <ButtonLogin  session={session}/>
      </div>
      </section>

      {/*Pricing*/}
      <section className="bg-base-200" id="pricing">
        <div className="py-32 p-8 max-w-3xl mx-auto">
        <p className="text-sm uppercase font-medium text-center text-primary mb-4">Pricing</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">A pricing that adapts to your needs</h2>
        <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
          <div className="flex gap-2 items-baseline">
         <div className="text-4xl font-black">$19</div>
         <div className="uppercase text-sm font-medium opacity-60">/Month</div>
        </div>
        <ul className="my-2 space-y-2">
        {pricingFeaturesList.map((priceItems) => (
            <li className="flex gap-2 items-center" key={priceItems}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-green-600 size-4">
  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
</svg>
{priceItems}</li> ))}
        </ul>
        <ButtonLogin session={session} extraStyle="w-full"  />
        </div>
        </div>
      </section>

       {/*FAQ*/}
       <section className="bg-base-200" id="faq">
       <div className="py-32 p-8 max-w-3xl mx-auto">
        <p className="text-sm uppercase font-medium text-center text-primary mb-4">FAQ</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">Frequently asked questions</h2>

        <ul className="max-w-lg mx-auto">
         {
          [
            {question: "what do i get exactly?",
             answer: "Sparkling water",},

              {question:"is there a redund?",
               answer: "yes",},

               {question:"i have another question",
                answer:"please ask",},
            
          ].map((qa)=>(
            <FAQlistItem key={qa.question} qa={qa}/>
          ))}
        </ul>
        </div>
       </section>
    </main>
  );
}
