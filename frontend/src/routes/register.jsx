import { useState } from "react";
import axios from 'axios';
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

const Register = () => {

  const statesInNigeria = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", 
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", 
    "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", 
    "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", 
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    parentSelection: '',
    ageSelection: '',
    state: '',

  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, 
      [name]: value,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/api/users", formData, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log(response.data)
  }

  return (
    <div className="relative w-full h-[100vh] sm:bg-[#16656F] flex">
      <div className="relative pt-[5vw] bg-[#16656F] sm:hidden lg:flex flex-col items-center justify-between text-center h-full w-[40%]">
        <header className="font-Bold_Grotesk text-[43px] text-[#ffffffcc] text-center">SANDFORTCARE</header>
        <div className="flex items-center justify-end">
          <img src="/images/register-image.png" alt="a happy caregiver" className="h-[70vh]"/>
        </div>
      </div>
      <div className="relative sm:w-full lg:w-[60%] lg:pt-[5vw] lg:pl-[5.7vw] lg:pr-[4.2vw] flex flex-col lg:h-full">
        <header className="sm:hidden text-center text-[#16656F] leading-[1.2] text-[43px] font-Medium_Grotesk">
          We are Always Ready to Help You Book An Appointment
        </header>
        <div className="sm:pl-[5.7vw] bg-white sm:h-[50vw] sm:py-[9.7vw] sm:rounded-bl-[15vw] sm:inline-flex sm:flex-col sm:justify-between sm:items-start">
          <ArrowLeftIcon color="#16656F" className="size-8 lg:hidden"/>
          <h1 className="text-start sm:text-[#16656F] text-[#545454] font-Medium_Grotesk text-3xl sm:leading-none mt-[4vw]">Create <br className="lg:hidden"/>Account</h1>
        </div>
        <div className="flex items-center sm:justify-center sm:mt-[4.5vw]">
          <form onSubmit={handleSubmit} action="" className="flex flex-col sm:gap-y-3 gap-y-[1vw] sm:w-[80vw] lg:w-[47vw] sm:text-white/75 lg:text-[#9C9C9C] font-General_Sans font-medium text-[16px]">
            <div className="lg:flex sm:flex-col w-full justify-between">
              <label className="flex flex-col">
                First Name
                <input className="sm:w-full lg:w-[20vw] sm:bg-[#16656F] rounded-md sm:border-white/60 lg:border-black/20 border-[0.3px] py-1.5 pl-7 pr-20 text-gray-900 focus:ring-1 focus:ring-emerald-400 focus:outline-emerald-500" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </label>
              <label className="flex flex-col">
                Last Name
                <input className="sm:w-full lg:w-[20vw] sm:bg-[#16656F] rounded-md sm:border-white/60 lg:border-black/20 border-[0.3px] py-1.5 pl-7 pr-20 text-gray-900 focus:ring-1 focus:ring-emerald-400 focus:outline-emerald-500" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </label>
            </div>
            <div className="lg:flex sm:flex-col w-full justify-between">
              <label className="flex flex-col">
                email
                <input className="sm:w-full lg:w-[20vw] sm:bg-[#16656F] rounded-md sm:border-white/60 lg:border-black/20 border-[0.3px] py-1.5 pl-7 pr-20 text-gray-900 focus:ring-1 focus:ring-emerald-400 focus:outline-emerald-500" type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <label className="flex flex-col">
                Phone Number
                <input className="sm:w-full lg:w-[20vw] sm:bg-[#16656F] rounded-md sm:border-white/60 lg:border-black/20 border-[0.3px] py-1.5 pl-7 pr-20 text-gray-900 focus:ring-1 focus:ring-emerald-400 focus:outline-emerald-500" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </label>
            </div>
            <div className="flex w-full justify-between">
              <label className="flex flex-col" htmlFor="">
                Both Parents
                <select className="sm:w-[35vw] lg:w-[20vw] sm:bg-[#16656F] rounded-md sm:border-white/60 lg:border-black/20 border-[0.3px] bg-transparent py-1.5 pl-2 pr-4 sm:text-white/75 lg:text-gray-500 focus:ring-1 focus:ring-emerald-400 focus:outline-emerald-500" name="parentSelection" id="" value={formData.parentSelection} onChange={handleChange} required>
                  <option value="Both Parents">Both Parents</option>
                  <option value="Father Only">Father Only</option>
                  <option value="Mother Only">Mother Only</option>
              </select>
              </label>
              <label className="flex flex-col" htmlFor="">
                Parent&apos;s Age
                <select className="sm:w-[35vw] lg:w-[20vw] sm:bg-[#16656F] rounded-md sm:border-white/60 lg:border-black/20 border-[0.3px] bg-transparent py-1.5 pl-2 pr-4 sm:text-white/75 lg:text-gray-500 focus:ring-1 focus:ring-emerald-400 focus:outline-emerald-500" name="ageSelection" id="" value={formData.ageSelection} onChange={handleChange} required>
                  <option value="50 - 60">50 - 60</option>
                  <option value="60 - 70">60 - 70</option>
                  <option value="80 and above">80 and above</option>
                  <option value="Not specified">Not specified</option>
                </select>
              </label>
            </div>
            <div className="w-full ">
              <label className="flex flex-col " htmlFor="">
                Select State
                <select className="rounded-md sm:border-white/60 lg:border-black/20 border-[0.3px] sm:bg-[#16656F] bg-transparent py-1.5 pl-2 pr-7 sm:text-white/75 text-gray-500 focus:ring-1 focus:ring-emerald-400 focus:outline-emerald-500" name="state" id="" value={formData.state} onChange={handleChange} required>
                  {statesInNigeria.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </label>
            </div>
            <button className="w-full sm:mt-[7.3vw] py-1.5 sm:bg-white lg:bg-[#16656F] sm:text-[#16656F] lg:text-white rounded-md" type="submit">Send Application</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
