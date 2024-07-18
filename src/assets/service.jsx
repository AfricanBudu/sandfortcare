
const Service = () => {
  return (
    <div className="px-14 my-14 mt-40 mb-20">
      <header className="text-[#16656F] font-Semibold_Grotesk text-5xl mb-7">OUR SERVICES</header>
      <p className="font-medium font-General_Sans text-3xl text-[#1f1f1fb9] mb-7">We offer healthcare <br/>services which include:</p>
      <div className="bg-service bg-contain bg-center bg-no-repeat flex justify-between text-center font-Semibold_Grotesk text-3xl text-[#FFFFFF]">
        <div className="grid gap-y-28 pt-10 pb-32">
            <div className="flex justify-center items-center w-[481px] h-[111px] bg-[#16656F] rounded-[3rem]">REGULAR HEALTH CHECK</div>
            <div className="flex justify-center items-center w-[481px] h-[111px] bg-[#16656F] rounded-[3rem]">REMOTE CONSULTATION</div>
            <div className="flex justify-center items-center w-[481px] h-[111px] bg-[#16656F] rounded-[3rem]">PARENT WELLNESS REPORT</div>
        </div>
        <div className="grid gap-y-28 pt-32 pb-10">
            <div className="flex justify-center items-center w-[481px] h-[111px] bg-[#16656F] rounded-[3rem]">MEDICATION MANAGEMENT</div>
            <div className="flex justify-center items-center w-[481px] h-[111px] bg-[#16656F] rounded-[3rem]">NUTRITION AND MEAL PLANING</div>
            <div className="flex justify-center items-center w-[481px] h-[111px] bg-[#16656F] rounded-[3rem]">PERSONALIZED CARE AND SUPPORT PLAN</div>
        </div>
      </div>
    </div>
  )
}

export default Service;
