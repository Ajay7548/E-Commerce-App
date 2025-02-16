import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useShop } from "../context/ShopContext";
import ProductItems from "../components/ProductItems";

const Collection = () => {
  const { products } = useShop();
  const [ProductCollection, setProductCollection] = useState([]);
  const [showFilter, setShowFilter] = useState(false); // Boolean state for filter visibility
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (event) => {
    const value = event.target.value; // No destructuring
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const toggleSubCategory = (event) => {
    const value = event.target.value; // No destructuring
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    // 1️⃣ Create a copy of the original products array
    // This ensures we do not modify the original product list.
    let filteredProduct = [...products];
  
    // 2️⃣ Filter by selected category (if any)
    if (category.length > 0) {
      filteredProduct = filteredProduct.filter((item) => 
        category.includes(item.category) // Keep only items where category matches selected categories
      );
    }
  
    // 3️⃣ Filter by selected subcategory (if any)
    if (subCategory.length > 0) {
      filteredProduct = filteredProduct.filter((item) => 
        subCategory.includes(item.subCategory) // Keep only items where subcategory matches selected subcategories
      );
    }
  
    // 4️⃣ Update state with filtered products
    // This will re-render the component to show only the filtered products.
    setProductCollection(filteredProduct);
  };
  
  
  useEffect(() => {
    setProductCollection(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]); // Ensure products are considered

  // console.log("Rendering ProductCollection:", ProductCollection);

  
  return (
    <div className="grid md:grid-cols-[1fr_3fr]  pt-10 gap-6">
      {/* Left side */}
      <div className="flex flex-col">
        {/* FILTER HEADER WITH DROPDOWN ICON */}
        <p
          className=" text-xl flex items-center cursor-pointer gap-2 pt-2  "
          onClick={() => setShowFilter(!showFilter)} // Toggle state on click
        >
          FILTERS
          <img
            className={`h-4 block sm:hidden transition-transform duration-300 ${
              showFilter ? "rotate-90" : "rotate-0"
            }`}
            src="/src/assets/frontend_assets/dropdown_icon.png"
            alt=""
          />
        </p>

        {/* {showFilter */}
        {/* md:flex for by default visible of category ant type  */}
        <div
          className={`flex flex-col md:pt-8 pt-3 gap-4 ${
            showFilter ? "" : "hidden"
          } md:flex `}
        >
          {/* CATEGORIES FILTER */}
          <div
            className={`border border-gray-300 px-4 py-3 flex flex-col gap-2 `}
          >
            <p className="font-medium text-sm">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-gray-500 text-sm py-1">
              <label>
                <input
                  onChange={toggleCategory}
                  className="mr-2"
                  type="checkbox"
                  name="category"
                  value="Men"// should matched with label  eaxct spelling with [prodcuts]
                />{" "}
                Men
              </label>
              <label>
                <input
                  onChange={toggleCategory}
                  className="mr-2"
                  type="checkbox"
                  name="category"
                  value="Women"// should matched with label eaxct spelling with [prodcuts]
                />{" "}
                Women
              </label>
              <label>
                <input
                  onChange={toggleCategory}
                  className="mr-2"
                  type="checkbox"
                  name="category"
                  value="Kids"// should matched with label eaxct spelling with [prodcuts]
                />{" "}
                Kids
              </label>
            </div>
          </div>

          {/* TYPE FILTER */}
          <div
            className={`border border-gray-300 px-4 py-3 flex flex-col gap-2   `}
          >
            <p className="font-medium text-sm">TYPE</p>
            <div className="flex flex-col gap-2 text-gray-500 text-sm py-1">
              <label>
                <input
                  onChange={toggleSubCategory}
                  className="mr-2"
                  type="checkbox"
                  name="type"
                  value="Topwear"// should matched with label eaxct spelling with [prodcuts]
                />{" "}
                Topwear
              </label>
              <label>
                <input
                  onChange={toggleSubCategory}
                  className="mr-2"
                  type="checkbox"
                  name="type"
                  value="Bottomwear"// should matched with label eaxct spelling with [prodcuts]
                />{" "}
                Bottomwear
              </label>
              <label>
                <input
                  onChange={toggleSubCategory}
                  className="mr-2"
                  type="checkbox"
                  name="type"
                  value="Winterwear"// should matched with label eaxct spelling with [prodcuts]
                />{" "}
                Winterwear
              </label>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>

      {/* Right side */}
      <div className="">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
          </div>

          <div className="mb-4 ">
            {/* <label className="mr-2 font-semibold"></label> */}
            <select className="border border-gray-300 px-1 text-base py-2   rounded-sm">
              <option value="lowToHigh">Sort by: Relavent</option>
              <option value="lowToHigh">Sort by: Low to High</option>
              <option value="highToLow">Sort by: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {ProductCollection.map((item, index) => {
            return (
              <ProductItems
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
