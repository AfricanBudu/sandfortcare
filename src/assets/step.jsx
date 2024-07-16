
const Step = () => {
  return (
    <div className="px-14 my-32">
        <header className="font-Semibold_Grotesk text-5xl text-[#16656F] uppercase">
        Start The Journey To Your <br/>
        Parent&apos;s Wellbeing In 3 Steps
        </header>
        <div className="grid my-16 gap-y-40">
            <div className="flex justify-start items-center gap-x-7">
                <div>
                    <img src="/images/signup-image.png" alt="" />
                </div>
                <div className="flex items-start gap-x-5 flex-shrink-0">
                    <div className="pt-3">
                        <img src="/public/images/Polygon 1.png" alt="point" />
                    </div>
                    <div className="grid gap-y-5">
                        <p className="font-Medium_Grotesk text-5xl text-[#000000]">Sign up</p>
                        <p className="font-medium font-General_Sans text-[2rem] leading-normal text-[#1f1f1fb9]">
                            Register your information <br/> 
                            and details, sign up to be <br/>registered.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-start items-center gap-x-7">
                <div className="flex items-start gap-x-5 flex-shrink-0">
                    <div className="pt-3">
                        <img src="/public/images/Polygon 1.png" alt="point" className="origin-center rotate-180" />
                    </div>
                    <div className="grid gap-y-5">
                        <p className="font-Medium_Grotesk text-5xl text-[#000000]">Select Care Plan</p>
                        <p className="font-medium font-General_Sans text-[2rem] leading-normal text-[#1f1f1fb9]">
                            Select your preferred care plan <br/>choose Hospital or Healthcare <br/>provider across the country.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="/images/care-plan.png" alt="" />
                </div>
            </div>
            <div className="flex justify-start items-center gap-x-7">
                <div className="">
                    <img src="/images/payment.png" alt="" />
                </div>
                <div className="flex items-start gap-x-5 flex-shrink-0">
                    <div className="pt-3">
                        <img src="/public/images/Polygon 1.png" alt="point" />
                    </div>
                    <div className="grid gap-y-5">
                        <p className="font-Medium_Grotesk text-5xl text-[#000000]">Make Payment</p>
                        <p className="font-medium font-General_Sans text-[2rem] leading-normal text-[#1f1f1fb9]">
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
