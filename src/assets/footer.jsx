
const Footer = () => {
  return (
    <div className="px-14 py-5 flex flex-col gap-y-20 justify-center items-start bg-[#16656F] text-[#FFFFFF]">
      <div className="flex flex-col py-14 gap-y-7">
        <p className="underline underline-offset-[1.25rem] decoration-[3px] font-Medium_Grotesk text-[3.25rem]">Contact us</p>
        <p className="font-medium font-General_Sans text-[2rem] text-[#E5E5E5]">
        Our dedicated team looks forward to <br/>hearing from you and will respond <br/>promptly to your message
        </p>
        <p className="font-semibold font-General_Sans text-4xl">Email: Contact@sandfortcare.com</p>
        <p className="font-semibold font-General_Sans text-4xl">Phone Number: +447513752791</p>
      </div>
      <div className="flex justify-center items-center w-full">
        <p className="font-medium font-General_Sans text-3xl">Copyright 2024 All Rights Reserved by Sandfortcare</p>
      </div>
    </div>
  )
}

export default Footer;
