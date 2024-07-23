
const Goal = () => {
  return (
    <div className="flex justify-between items-center px-[3.89vw] my-[7.78vw] gap-x-10 sm:flex-col sm:items-start">
      <header className=" font-Semibold_Grotesk text-[#16656F] text-header text-start leading-none mb-[4.5vw] lg:hidden">OUR GOAL</header>
      <div className="flex-1 ">
        <img src="/images/medium-shot-black-nurses-work 1.png" alt="our goal" className="sm:w-[70%]"/>
      </div>
      <div className="flex-1 font-General_Sans">
        <header className=" font-Semibold_Grotesk text-[#16656F] text-header leading-none sm:hidden">OUR GOAL</header>
        <p className="font-medium text-goal text-[#1f1f1fb9] mt-6 ">
        Sandfortcare is dedicated to delivering holistic care for elderly parents, 
        encompassing their medical, emotional, and social needs. Our commitment to 
        fostering independence and ensuring safety is upheld by a nationwide team 
        of professionals.
        </p>
      </div>
    </div>
  )
}

export default Goal;
