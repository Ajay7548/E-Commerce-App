import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useShop } from "../context/ShopContext";
import ProductItems from "../components/ProductItems";
import { useNavigate } from "react-router-dom";
import { FaFilter } from "react-icons/fa"; // Filter Icon
import SearchBox from "../components/SearchBox";

const Collection = () => {
  const { products, search, showSearch } = useShop();
  const [productCollection, setProductCollection] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const navigate = useNavigate();

  // Toggle Category Selection
  const toggleCategory = (event) => {
    const value = event.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Toggle Subcategory Selection
  const toggleSubCategory = (event) => {
    const value = event.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Apply Filters
  const applyFilter = () => {
    let filteredProducts = [...products];

    // Search Filter
    if (showSearch && search) {
      filteredProducts = filteredProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category Filter
    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((item) => category.includes(item.category));
    }

    // Subcategory Filter
    if (subCategory.length > 0) {
      filteredProducts = filteredProducts.filter((item) => subCategory.includes(item.subCategory));
    }

    setProductCollection(filteredProducts);
  };

  // Sort Products by Price
  const sortPrice = () => {
    let sortedProducts = [...productCollection];

    switch (sortType) {
      case "lowToHigh":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }

    setProductCollection(sortedProducts);
  };

  // Navigate to Product Page
  const handleClick = (id) => {
    navigate(`/Product/${id}`);
  };

  // Update product collection when products change
  useEffect(() => {
    setProductCollection(products);
  }, [products]);

  // Apply filters when category, subcategory, or search changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  // Apply sorting when sort type changes
  useEffect(() => {
    sortPrice();
  }, [sortType]);

  return (
    <div className="grid md:grid-cols-[1fr_3fr] pt-10 gap-6">
      {/* Left Side - Filters */}
      <div className="flex flex-col">
        {/* <SearchBox/> */}
        {/* FILTER HEADER */}
        <button
          className="flex items-center gap-2 text-xl font-semibold cursor-pointer md:hidden"
          onClick={() => setShowFilter(!showFilter)}
        >
          <FaFilter />
          Filters
        </button>

        {/* Filter Options */}
        <div className={`md:flex flex-col gap-4 pt-3 transition-all duration-300 ${showFilter ? "block" : "hidden"}`}>
          {/* Category Filter */}
          <div className="border dark:border-gray-800 border-gray-300 px-4 py-6 rounded-md">
            <p className="font-mdeium text-black dark:text-white text-lg">CATEGORIES</p>
            <div className="flex flex-col gap-2 dark:text-white text-gray-600 text-sm mt-2">
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat}>
                  <input onChange={toggleCategory} className="mr-2 cursor-pointer" type="checkbox" value={cat} /> {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div className="border dark:border-gray-800 border-gray-300 px-4 py-6 rounded-md">
            <p className="font-mdeium text-black dark:text-white text-lg">TYPE</p>
            <div className="flex flex-col gap-2 dark:text-white text-gray-600 text-sm mt-2">
              {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                <label key={type}>
                  <input onChange={toggleSubCategory} className="mr-2 cursor-pointer" type="checkbox" value={type} /> {type}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Products */}
      <div>
        <div className="flex items-center justify-between">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* Sorting Dropdown */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border dark:border-gray-700 dark:text-white border-gray-300 px-2 py-2 rounded-md text-sm"
          >
            <option value="relevant " className=" dark:bg-gray-900">Sort by: Relevant</option>
            <option value="lowToHigh " className=" dark:bg-gray-900">Sort by: Low to High</option>
            <option value="highToLow " className=" dark:bg-gray-900">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {productCollection.length > 0 ? (
            productCollection.map((item) => (
              <ProductItems
                key={item._id}
                onClick={() => handleClick(item._id)}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))
          ) : (
            <p className="col-span-full text-center  text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
                              