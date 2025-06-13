import {motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function Featured() {
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [selectCategory, setSelectCategory] = useState(null);

  useEffect(() => {
    fetch("/Category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("/Category_Filter_Data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlerCategory = (category) => {
    if (category === "All") {
      setSelectCategory(null);
    } else {
      setSelectCategory(category);
    }
  };

  const filterCategory = selectCategory
    ? data.filter((item) => item.category === selectCategory)
    : data;

  return (
    <div id="skills" className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-12">
        <h1 className="lg:text-4xl text-2xl font-bold text-center text-[var(--primaryColor)] pt-18 mb-10">
          Features Work
        </h1>
        <p className="text-gray-600">
          Duis aute irure dolor in reprehenderit volupte velit esse cillum
          fugiat pariature occaecat cupidatat proident culpa.
        </p>
      </div>

      {/* Category buttons */}
      <div className="grid grid-cols-2 max-w-xl m-auto lg:grid-cols-4 gap-4 justify-center mb-10">
        {category.map((item) => (
          <div key={item.id} className="flex justify-center">
            <NavLink
              onClick={() => handlerCategory(item.category)}
              className={`w-30 text-center py-1 rounded-2xl shadow transition
                
                ${
                  selectCategory === item.category ||
                  (item.category === "All" && selectCategory === null)
                    ? "bg-[var(--primaryColor)] text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-[var(--primaryColor)] hover:text-white transition-colors"
                }
              `}
            >
              {item.category}
            </NavLink>
          </div>
        ))}
      </div>

      {/* Filtered items grid */}
      <AnimatePresence mode="wait">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterCategory.map((item) => (

          <motion.div 
          key={item.id} 
          
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1}}
          exit={{scale: 0}}


          // initial={{ opacity: 0, y: 30 }}
          // animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0, y: -30 }}

          
          transition={{duration: 0.5}}

          className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            <div className="flex p-5 flex-col justify-between">
              <h1 className="text-base">Name: {item.name} </h1>
              <h1 className="text-base text-gray-600">
                Location: {item.location}{" "}
              </h1>
            </div>
          </motion.div>

        ))}
      </div>

      </AnimatePresence>


    </div>
  );
}
