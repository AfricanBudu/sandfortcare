
const Hero = () => {
  return (
    <div className="relative bg-hero-image bg-center bg-no-repeat px-14 bg-cover w-full h-[100vh] text-[#FFFFFF]">
      <nav className="py-4 relative">
        <div className="relative flex justify-between items-center font-Regular_Grotesk">
            <div className=" font-Semibold_Grotesk capitalize font-bold text-4xl text-[#DDDAC2] ">SANDFORTCARE</div>
            <div>
                <button className="bg-[#16656F] font-General_Sans font-medium flex items-center justify-center rounded-full px-9 py-3 text-2xl">Get started</button>
            </div>
        </div>
      </nav>
        <div className="relative hero-text mt-[40vh] w-[600px]">
            <p className="font-General_Sans font-medium text-4xl leading-[2.815rem]">
                Caring for Seniors Across Borders, Compassionate elder care, no matter the distance.
            </p>
            <div className="mt-[4vh]">
                <button className="bg-[#16656F] font-General_Sans text-[#FFFFFF] font-medium flex items-center justify-center rounded-full px-9 py-3 text-2xl">Join us today</button>
            </div>
        </div>
    </div>
  )
}

export default Hero;
