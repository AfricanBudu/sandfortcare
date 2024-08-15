import { plans } from "./plansData";
import PlanCard from "./components/PlanCard";

import { useState } from "react";
import { useParams } from "react-router-dom";

const PricingPage = () => {

  const { category } = useParams();
  
  const selectedPlans = plans.find(plan => plan.category === category);

  const [paymentOption, setPaymentOPtion] = useState('monthly');
  
  return (
    <div className="relative h-full w-full pt-[5.625vw]">
      <div className="header text-center color-primary">
        <h1 className="font-Medium_Grotesk text-6xl text-payment">Plans & Pricing</h1>
        <h4 className="font-General_Sans text-paymentCap">Choose your preferred care plan</h4>
      </div>
      <div className="flex flex-col items-center mt-[5vw]">
        <div className="font-General_Sans flex items-center justify-center px-[18.75vw]">
          <ul className="flex items-center justify-center gap-x-[3.2vw] text-pricing font-medium text-[#727373]">
            <div 
              onClick={() => {setPaymentOPtion('monthly')}} 
              className="color-primary underline underline-offset-[1vw] decoration-2"
            >
              Monthly Payment
            </div>
            <div onClick={() => {setPaymentOPtion('halfYearly')}}>Half-year Payment</div>
            <div onClick={() => {setPaymentOPtion('annual')}}>Annual Payment</div>
          </ul>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-[2.4vw] mb-[5vw] lg:px-[4vw] font-Medium_Grotesk sm:gap-y-10 md:gap-y-5 gap-[4.2vw]">
          {selectedPlans.options.map((selectedPlan) => (
            <PlanCard key={selectedPlan.type}
              type={selectedPlan.type}
              category={category}
              prices={selectedPlan.prices}
              paymentOption={paymentOption}
              deliverables={selectedPlan.deliverables}
            />
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingPage;
