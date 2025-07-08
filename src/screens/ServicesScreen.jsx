import React, { useState } from "react";

const API_KEY = "6feb1e7a1ae04c0f9512803eaf58ab82";

const ServicesScreen = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setRecipes([]);

    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=8&addRecipeInformation=true&apiKey=${API_KEY}`
      );
      const data = await res.json();

      if (data.results && data.results.length > 0) {
        setRecipes(data.results);
      } else {
        setError("No recipes found. Try a different keyword.");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching recipe data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#f00a56] mb-10">
          Search Recipes by Name
        </h1>

        {/* Search Bar */}
        <div className="flex items-center gap-2 mb-8">
          <input
            type="text"
            placeholder="e.g. Pasta, Chicken, Salad..."
            className="w-full px-4 py-3 rounded-xl border border-[#f00a56] focus:outline-none focus:ring-2 focus:ring-[#f00a56]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-[#f00a56] text-white px-5 py-3 rounded-xl hover:bg-white hover:text-[#f00a56] border-2 border-[#f00a56] transition-all">
            Search
          </button>
        </div>

        {/* Loader and Errors */}
        {loading && (
          <p className="text-center text-gray-500 font-semibold">
            Loading recipes...
          </p>
        )}
        {error && (
          <p className="text-center text-red-500 font-medium">{error}</p>
        )}

        {/* Results */}
        {recipes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recipes.map((recipe) => (
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
        )}
      </div>
    </div>
  );
};

export default ServicesScreen;
