import React from 'react'

const AppInfo = () => {
  const features = [
    {
      title: "Comprehensive College Management",
      description:
        "Dotnext offers a robust solution that allows colleges to efficiently manage all their administrative tasks in one place. From student attendance and results to fee management and beyond, our platform simplifies operations and enhances productivity.",
    },
    {
      title: "Multi-College Support",
      description:
        "Our system is designed to cater to multiple institutions, allowing each college to customize and control their unique administrative processes. This flexibility ensures that every college can optimize its workflow, making Dotnext a versatile choice for diverse educational environments.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Ease of use is at the core of Dotnext's design. Our intuitive interface ensures that administrators, faculty, and students can navigate and utilize the system with minimal training, leading to a more seamless adoption and a smoother day-to-day experience.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 -mt-32">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          Why we stand out
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <div className="text-blue-500 text-4xl mb-4">⦿</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppInfo;
