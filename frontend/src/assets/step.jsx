
const Step = () => {
  return (
    <div className="px-[3.89vw] my-[8.89vw]">
        <header className="font-Semibold_Grotesk text-header sm:text-xl sm:text-start text-[#16656F] sm:tracking-tight uppercase">
        Start The Journey To Your <br/>
        Parent&apos;s Wellbeing In 3 Steps
        </header>
        <div className="grid my-[4.45vw] sm:mt-[10vw] place-items-center gap-y-[11.12vw] sm:gap-y-[22vw]">
            <div className="flex justify-start items-center gap-x-[1.95vw]">
                <div className="sm:w-[55%]">
                    <img src="/images/signup-image.png" alt="" />
                </div>
                <div className="flex items-start gap-x-[1.39vw]">
                    <div className="pt-[0.84vw]">
                        <img src="/images/Polygon 1.png" alt="point" className="sm:w-[2.3vw]" />
                    </div>
                    <div className="grid gap-y-[1.39vw]">
                        <p className="font-Medium_Grotesk text-header sm:text-[16px] leading-none text-[#000000]">Sign up</p>
                        <p className="font-medium font-General_Sans text-[2.23vw] leading-normal text-[#1f1f1fb9]">
                            Register your information <br/> 
                            and details, sign up to be <br/>registered.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-start items-center gap-x-[1.95vw]">
                <div className="flex items-start gap-x-[1.39vw]">
                    <div className="pt-[0.84vw]">
                        <img src="/images/Polygon 1.png" alt="point" className="origin-center rotate-180 sm:w-[2.3vw]" />
                    </div>
                    <div className="grid gap-y-[1.39vw]">
                        <p className="font-Medium_Grotesk text-header sm:text-[16px] leading-none text-[#000000]">Select Care Plan</p>
                        <p className="font-medium font-General_Sans text-[2.23vw] leading-normal text-[#1f1f1fb9]">
                            Select your preferred care plan <br/>choose Hospital or Healthcare <br/>provider across the country.
                        </p>
                    </div>
                </div>
                <div className="sm:w-[55%]">
                    <img src="/images/care-plan.png" alt="" />
                </div>
            </div>
            <div className="flex justify-start items-center gap-x-[1.95vw]">
                <div className="sm:w-[55%]">
                    <img src="/images/payment.png" alt="" />
                </div>
                <div className="flex items-start gap-x-[1.39vw]">
                    <div className="pt-[0.84vw]">
                        <img src="/images/Polygon 1.png" alt="point" className="sm:w-[2.3vw]"/>
                    </div>
                    <div className="grid gap-y-[1.39vw]">
                        <p className="font-Medium_Grotesk text-header sm:text-[16px] leading-none text-[#000000]">Make Payment</p>
                        <p className="font-medium font-General_Sans text-[2.23vw] leading-normal text-[#1f1f1fb9]">
                            Make payment for your <br/> 
                            selected care plan.
                        </p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Step;
