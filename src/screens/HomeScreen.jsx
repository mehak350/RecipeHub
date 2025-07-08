import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { useEffect, useState } from "react";

import { Carousel } from "react-responsive-carousel";

const API_KEY = "6feb1e7a1ae04c0f9512803eaf58ab82";

const Loader = () => (
  <div className="flex items-center justify-center h-screen bg-white">
    <div className="w-12 h-12 border-4 border-[#f00a56] border-dashed rounded-full animate-spin"></div>
  </div>
);

const HomeScreen = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [healthyRecipes, setHealthyRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [randomRes, healthyRes] = await Promise.all([
          fetch(
            `https://api.spoonacular.com/recipes/random?number=5&apiKey=${API_KEY}`
          ),
          fetch(
            `https://api.spoonacular.com/recipes/complexSearch?diet=healthy&number=8&addRecipeInformation=true&apiKey=${API_KEY}`
          ),
        ]);

        const randomData = await randomRes.json();
        const healthyData = await healthyRes.json();

        setCarouselData(randomData.recipes);
        setHealthyRecipes(healthyData.results);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-white text-black">
      {/* Banner Carousel */}
      <div className="pt-6 px-4">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3500}
          transitionTime={800}
          className="rounded-xl overflow-hidden">
          {carouselData.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="h-[400px] object-cover w-full"
              />
              <div className="absolute bg-white/80 p-4 rounded-xl max-w-xl bottom-10 left-1/2 transform -translate-x-1/2 text-center shadow-xl">
                <h2 className="text-xl md:text-2xl font-bold mb-1">
                  {item.title}
                </h2>
                <p className="text-sm italic mb-1">
                  {item.extendedIngredients
                    .slice(0, 3)
                    .map((ing) => ing.name)
                    .join(", ")}
                </p>
                <p className="text-xs">
                  {item.summary.replace(/<[^>]*>/g, "").slice(0, 120)}...
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Healthy Recipes List */}
      <div className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Top Healthy & Tasty Recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {healthyRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-[#f00a56] text-black rounded-2xl overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{recipe.title}</h3>
                <p className="text-sm mb-2">
                  {recipe.summary.replace(/<[^>]*>/g, "").slice(0, 80)}...
                </p>
                <a
                  href={recipe.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 px-4 py-1 bg-black text-white rounded-full transition hover:bg-white hover:text-[#f00a56]">
                  View Recipe
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
