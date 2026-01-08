const HowItWorks = () => {
  
    return (
  <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The process for securing a doctor's appointment is condensed into three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>

            {[
              {
                step: '1',
                title: 'Find Your Specialist',
                description: 'Browse our board-certified internal medicine physicians with over 10 years of experience.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                step: '2',
                title: 'Book Your Appointment',
                description: 'Use our user-friendly system to select a date and time that fits your schedule.',
                color: 'from-sky-500 to-blue-500'
              },
              {
                step: '3',
                title: 'Attend with Confidence',
                description: 'Get appointment confirmation and experience compassionate, high-quality care.',
                color: 'from-blue-600 to-sky-600'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 relative z-10`}>
                    <span className="text-2xl md:text-3xl font-bold text-white">0{item.step}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default HowItWorks;