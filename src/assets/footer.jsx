
const Footer = () => {
  return (
    <div className="px-[3.9vw] py-[1.39vw] flex flex-col gap-y-[5.56vw] justify-center items-start bg-[#16656F] font-General_Sans text-[#FFFFFF]">
      <div className="flex flex-col py-[3.9vw] gap-y-[1.95vw]">
        <p className="underline underline-offset-[1.43vw] decoration-[3px] sm:decoration-[1px] font-Medium_Grotesk text-footerHeader">Contact us</p>
        <p className="font-medium text-contactMsg text-[#E5E5E5]">
        Our dedicated team looks forward to <br/>hearing from you and will respond <br/>promptly to your message
        </p>
        <p className="font-semibold text-[2.5vw]">Email: Contact@sandfortcare.com</p>
        <p className="font-semibold text-[2.5vw]">Phone Number: +447513752791</p>
      </div>
      <div className="flex justify-center items-center w-full">
        <p className="font-medium text-2.08vw">Copyright 2024 All Rights Reserved by Sandfortcare</p>
      </div>
    </div>
  )
}

export default Footer;
