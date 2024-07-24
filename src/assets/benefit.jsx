
const Benefit = () => {

    const benefits = [
        {
            id: '1',
            icon: 'care',
            title: 'Personalized care and support plan',
            description: "Our personalized care and support plans prioritize the uniqueness of your parent's. Care plans are tailored ot the individual needs, health conditions and lifestyle of each parent."
        },

        {
            id: '2',
            icon: 'regular',
            title: 'Regular Health Check Up',
            description: "Our proactive approach towards maintaining your parent well-being, regular health check-up can help detect potential health issues early on, allowing for timely intervention and prevention"
        },

        {
            id: '3',
            icon: 'remote',
            title: 'Remote Consultation',
            description: "Your parent receive 24 hours access to medical advice and guidance from the comfort of their home, reducing the need for in-person visits."
        },

        
    ]

  return (
    <div className="text-center px-[3.89vw] mb-10">
      <header className="font-Semibold_Grotesk text-header leading-none text-[#16656F]">BENEFITS OF JOINING <br className="lg:hidden"/>US TODAY</header>
      <div className="flex justify-between items-center mt-8 gap-x-[2.22vw] text-start  sm:overflow-x-scroll">
        {benefits.map((item) => (
            <div key={item.id} className="flex-1 bg-[#16656F] w-[29.24vw] h-[32.15vw] sm:min-w-[45vw] sm:w-[50.87vw] sm:h-[47.55vw] rounded-[1.67vw] sm:rounded-[3vw] p-[2.22vw] sm:p-[3vw] sm:py-[5vw] flex flex-col">
                <div className="h-[40%]">
                    <div className="mb-[1.4vw]">
                        <img src={`/images/${item.icon}.png`} alt="" className="sm:w-4" />
                    </div>
                    <div className="">
                        <header className="text-[#FFFFFF] font-semibold font-General_Sans text-benefitTitle leading-none">{item.title}</header>
                    </div>
                </div>
                <div>
                    <p className="text-[#D9D9D9] text-benefitDescription leading-tight">{item.description}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Benefit;
