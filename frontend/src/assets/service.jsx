
const Service = () => {
  return (
    <div className="px-[3.89vw] my-14 mt-[11.12vw] sm:mt-[20vw] mb-20">
      <header className="text-[#16656F] font-Semibold_Grotesk text-header sm:text-xl lg:mb-[1.95vw]">OUR SERVICES</header>
      <p className="font-medium font-General_Sans text-[2.22vw] text-[#1f1f1fb9] sm:leading-snug sm:mb-[0.8vw] mb-[1.95vw]">We offer healthcare <br/>services which include:</p>
      <div className="bg-service bg-contain bg-center bg-no-repeat sm:bg-none flex justify-between text-center font-Semibold_Grotesk text-[2.153vw] sm:text-[2.5vw] text-[#FFFFFF]">
        <div className="grid gap-y-[7.78vw] pt-[2.78vw] pb-[8.89vw] sm:pt-[5vw] sm:pb-[5vw] sm:gap-y-[3vw]">
            <div className="flex justify-center items-center w-[33.5vw] h-[7.708vw] sm:w-[43.6vw] sm:h-[10vw] px-[2.5vw] bg-[#16656F] rounded-[3.3vw]">REGULAR HEALTH CHECK</div>
            <div className="flex justify-center items-center w-[33.5vw] h-[7.708vw] sm:w-[43.6vw] sm:h-[10vw] px-[2.5vw] bg-[#16656F] rounded-[3.3vw]">REMOTE CONSULTATION</div>
            <div className="flex justify-center items-center w-[33.5vw] h-[7.708vw] sm:w-[43.6vw] sm:h-[10vw] px-[2.5vw] bg-[#16656F] rounded-[3.3vw]">PARENT WELLNESS REPORT</div>
        </div>
        <div className="grid gap-y-[7.78vw] pt-[8.89vw] pb-[2.78vw] sm:pt-[5vw] sm:pb-[5vw] sm:gap-y-[3vw]">
            <div className="flex justify-center items-center w-[33.5vw] h-[7.708vw] sm:w-[43.6vw] sm:h-[10vw] px-[2.5vw] bg-[#16656F] rounded-[3.3vw]">MEDICATION MANAGEMENT</div>
            <div className="flex justify-center items-center w-[33.5vw] h-[7.708vw] sm:w-[43.6vw] sm:h-[10vw] px-[2.5vw] bg-[#16656F] rounded-[3.3vw]">NUTRITION AND MEAL PLANING</div>
            <div className="flex justify-center items-center w-[33.5vw] h-[7.708vw] sm:w-[43.6vw] sm:h-[10vw] px-[2.5vw] bg-[#16656F] rounded-[3.3vw]">PERSONALIZED CARE AND SUPPORT PLAN</div>
        </div>
      </div>
    </div>
  )
}

export default Service;
