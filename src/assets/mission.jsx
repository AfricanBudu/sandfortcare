
const Mission = () => {
  return (
    <div className="relative my-[4.5vw] px-14 font-General_Sans">
      <div className="">
        <p className=" font-semibold text-[#7A7878] text-mission1 sm:text-center w-[98%]">
            Sandfortcare, <span className="text-[#16656F]">pioneering Nigeria’s first elderly care solutions</span>, giving your <span className="text-[#16656F]">loved ones</span> the care they deserve.
        </p>
      </div>
      <div className="mt-[7.78vw] flex justify-center items-start sm:flex-col-reverse sm:items-center sm:gap-y-[3vw]">
        <div className="flex-1">
            <p className=" font-medium text-[#16656F] text-[2.22vw]">
                We are dedicated to providing comprehensive elderly care solutions in Nigeria, 
                committed to delivering compassionate and personalized support for your loved ones.
            </p>
        </div>
        <div className="flex justify-center items-center flex-1 font-medium text-[1.67vw] leading-[2.22vw] text-[#7A7878] gap-x-4">
            <div className="flex-1">
                <p className="text-[#16656F] text-[5.64vw] leading-none font-semibold">4000+</p>
                <p>
                Hospitals & clinics <br/>available to clients
                </p>
            </div>
            <div className="flex-1">
                <p className="text-[#16656F] text-[5.64vw] leading-none font-semibold">36</p>
                <p>
                States included, <br/>nationwide delivery
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
