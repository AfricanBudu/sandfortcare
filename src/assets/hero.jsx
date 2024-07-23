import { Squash as Hamburger } from 'hamburger-react';

const Hero = () => {
  return (
    <div className="relative bg-hero-image bg-center bg-no-repeat px-[3.9vw] bg-cover w-full h-[100vh] sm:h-[50vh] text-[#FFFFFF]">
      <nav className="py-4 relative">
        <div className="relative flex justify-between items-center font-Regular_Grotesk">
            <div className=" font-Semibold_Grotesk capitalize font-bold text-bname text-[#DDDAC2] ">SANDFORTCARE</div>
            <div>
                <div className="lg:hidden">
                  <Hamburger />
                </div>
                <button className="sm:hidden bg-[#16656F] font-General_Sans font-medium flex items-center justify-center rounded-full px-9 py-3 text-2xl">Get started</button>
            </div>
        </div>
      </nav>
        <div className="relative hero-text mt-[16vw] w-[600px]">
            <p className="font-General_Sans font-medium text-hero-welcome lg:leading-[2.815rem]">
                Caring for Seniors Across Borders, <br/>Compassionate elder care, no <br/>matter the distance.
            </p>
            <div className="mt-[4vh]">
                <button className="bg-[#16656F] font-General_Sans text-[#FFFFFF] font-medium flex items-center justify-center rounded-full px-[2.5vw] py-[0.83vw] text-button">Join us today</button>
            </div>
        </div>
    </div>
  )
}

export default Hero;
