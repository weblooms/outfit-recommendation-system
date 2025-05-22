import React, { useState } from "react";
import Button from "../common/Button";
import PopupModal from "./PopupModel";
import { dummyOutfitSuggestions } from "../../mockData/dummyResponseData";
const Outfit: React.FC = () => {
  const [gender, setGender] = useState<string>("male");
  const [bodyType, setBodyType] = useState<string>("slim");
  const [season, setSeason] = useState<string>("summer");
  const [occasion, setOccasion] = useState<string>("date-night");
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = () => {
    // In future this will be API call
    setShowPopup(true);
  };
  return (
    <div className="min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/online-shopping-concept_23-2151896838.jpg?semt=ais_hybrid&w=740')",
      }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-60 min-h-screen p-6 flex flex-col max-w-md mx-auto rounded-lg">
        <h2 className="text-white text-3xl font-extrabold mb-8 text-center drop-shadow-md">
          Choose your style here...
        </h2>

        {/* Gender Radio */}
        <div className="mb-6">
          <label className="block text-pink-400 font-semibold mb-2">Gender</label>
          <div className="flex space-x-8">
            {["male", "female"].map((g) => (
              <label
                key={g}
                className={`cursor-pointer py-2 px-6 rounded-full border-2 font-semibold select-none 
                  ${gender === g ? "bg-pink-600 border-pink-600 text-white" : "border-pink-400 text-pink-300 hover:bg-pink-700 hover:text-white transition"}`}
              >
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={gender === g}
                  onChange={() => setGender(g)}
                  className="hidden"
                />
                {g.charAt(0).toUpperCase() + g.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Body Type Dropdown */}
        <div className="mb-6">
          <label className="block text-pink-400 font-semibold mb-2">Body Type</label>
          <select
            value={bodyType}
            onChange={(e) => setBodyType(e.target.value)}
            className="w-full p-3 rounded-md bg-black text-white border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600"
          >
            <option value="slim">Slim</option>
            <option value="rectangular">Rectangular</option>
            <option value="athletic">Athletic</option>
          </select>
        </div>

        {/* Season Chips */}
        <div className="mb-6">
          <label className="block text-pink-400 font-semibold mb-2">Season</label>
          <div className="flex space-x-4">
            {["summer", "winter", "rainy"].map((s) => (
                
              <button
                key={s}
                type="button"
                onClick={() => setSeason(s)}
                className={`px-4 py-2 rounded-full font-semibold text-sm 
                  ${season === s ? "bg-pink-600 text-white" : "bg-pink-900 text-pink-400 hover:bg-pink-700 hover:text-white transition"}`}
              >
               
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Occasion Chips */}
        <div className="mb-10">
          <label className="block text-pink-400 font-semibold mb-2">Occasion</label>
          <div className="flex flex-wrap gap-3">
            {["date-night", "office", "party-wear", "casual"].map((o) => (
              <button
                key={o}
                type="button"
                onClick={() => setOccasion(o)}
                className={`px-5 py-2 rounded-full font-semibold text-sm 
                  ${occasion === o ? "bg-pink-600 text-white" : "bg-pink-900 text-pink-400 hover:bg-pink-700 hover:text-white transition"}`}
              >
                {o
                  .split("-")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" ")}
              </button>
            ))}
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center">
          <Button
            label="Search here!!"
            variant="green"
            onClick={handleSearch}
          />
        </div>
            {showPopup && (
        <PopupModal
          items={dummyOutfitSuggestions}
          onClose={() => setShowPopup(false)}
        />
      )}
      </div>
    </div>
  );
};

export default Outfit;
