
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
    <div className="text-center px-14 mb-10">
      <header className="font-Semibold_Grotesk text-5xl text-[#16656F]">BENEFITS OF JOINING US TODAY</header>
      <div className="flex justify-between items-center mt-8 gap-x-8 text-start">
        {benefits.map((item) => (
            <div key={item.id} className="flex-1 bg-[#16656F] h-auto min-h-[30rem] rounded-3xl p-8 grid gap-y-5">
                <div>
                    <div className="mb-7">
                        <img src={`/images/${item.icon}.png`} alt="" />
                    </div>
                    <div className="">
                        <header className="text-[#FFFFFF] font-semibold font-General_Sans text-3xl">{item.title}</header>
                    </div>
                </div>
                <div>
                    <p className="text-[#D9D9D9] text-2xl">{item.description}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Benefit;
