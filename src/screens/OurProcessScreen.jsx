import React from "react";

const OurProcessScreen = () => {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-[#f00a56] mb-12">
          Our Process
        </h1>

        {/* Introduction Section */}
        <div className="bg-[#f00a56] text-white p-8 rounded-3xl shadow-lg mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-md leading-relaxed">
            Recipe Hub is a modern web application built using React and
            Tailwind CSS. It allows users to explore a wide variety of healthy
            and tasty recipes using the Spoonacular API. With a beautiful
            design, responsive layout, and smooth user experience, this student
            project aims to make recipe discovery enjoyable and educational.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Step Card */}
          {[
            {
              title: "Step 1: UI/UX Design",
              desc: "We designed an elegant and responsive interface using Tailwind CSS with a focus on readability, layout spacing, and engaging visual elements.",
            },
            {
              title: "Step 2: API Integration",
              desc: "We integrated Spoonacular's public recipe API using fetch in React to retrieve live recipe data based on random picks and user queries.",
            },
            {
              title: "Step 3: Home & Carousel",
              desc: "The HomeScreen includes a food carousel that displays popular recipe banners with transitions and highlights.",
            },
            {
              title: "Step 4: Search & Results",
              desc: "Users can search specific recipes in the Services page and get beautifully displayed results including summary, image, and view button.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-full shadow-xl hover:scale-105 transition duration-300 hover:shadow-[#f00a56] border-2 border-[#f00a56] flex items-center">
              <div className="text-left pl-6">
                <h3 className="text-xl font-bold text-[#f00a56] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Outro Message */}
        <div className="text-center mt-16">
          <p className="italic text-gray-600">
            "Recipe Hub is built by students for recipe lovers, making cooking
            easier, healthier, and tastier—one search at a time."
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProcessScreen;
