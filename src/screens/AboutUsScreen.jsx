import React from "react";

const teamMembers = [
  {
    name: "Mehak",
    className: "BCA Final Year",
    RollNumber: "2224911",
    branch: "Computer Application",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Anchal Kumari",
    className: "BCA Final Year",
    RollNumber: "2224879",
    branch: "Computer Application",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Nisha Kumari",
    className: "BCA Final Year",
    RollNumber: "2224990",
    branch: "Computer Application",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Meenakshi",
    className: "BCA Final Year",
    RollNumber: "2424910",
    branch: "Computer Application",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
];

const AboutUsScreen = () => {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#f00a56] mb-12">
          About Our Project
        </h1>

        {/* Project Overview */}
        <div className="bg-[#f00a56] text-white p-8 rounded-3xl shadow-lg mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-md leading-relaxed">
            Recipe Hub is a final-year BCA student project developed to provide
            users with a beautiful and responsive platform to explore a variety
            of healthy and delicious recipes. Built using React JS, Tailwind
            CSS, and Spoonacular’s public food API, this project demonstrates
            real-world application of frontend development and API integration
            techniques. The goal is to deliver a fast, interactive, and visually
            appealing recipe discovery experience.
          </p>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-semibold text-[#f00a56] mb-8 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-full text-center shadow-lg hover:shadow-[#f00a56] hover:scale-105 transition duration-300 border-2 border-[#f00a56]">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-black"
              />
              <h3 className="text-xl font-bold text-[#f00a56]">
                {member.name}
              </h3>
              <p className="text-sm text-black/60">{member.className}</p>
              <p className="text-sm text-black/60">{member.branch}</p>
              <p className="text-sm text-black/60">
                Roll No: {member.RollNumber}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="italic text-gray-600">
            "Developed as part of our BCA final year academic journey—combining
            creativity, coding, and culinary love!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
