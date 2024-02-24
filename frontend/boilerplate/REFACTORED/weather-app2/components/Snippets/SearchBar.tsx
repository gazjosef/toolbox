import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";

interface FormProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<FormProps> = ({ setCity, setCountry }) => {
  const [inputCity, setInputCity] = useState("");
  const [inputCountry, setInputCountry] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(inputCity);
    setCountry(inputCountry);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="weather-app__title |  border-2 border-solid rounded-[5px] w-full | flex items-center overflow-hidden"
    >
      <input
        type="text"
        name="city"
        placeholder="E.g Sydney.."
        className="w-full p-[6px] text-xs"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
      />
      <input
        type="text"
        name="country"
        placeholder="E.g AU.."
        className="w-full p-[6px] text-xs"
        value={inputCountry}
        onChange={(e) => setInputCountry(e.target.value)}
      />
      <button type="submit" className="bg-sky-500 rounded-[5px] ">
        <IconContext.Provider
          value={{ className: "h-[15px] w-[15px] text-white" }}
        >
          <FaSearch />
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default SearchBar;
