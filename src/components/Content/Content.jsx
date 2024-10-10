import React, { useState } from "react";
import "../../styles/content.css";
import data from "./data/data.json";
import AssetModal from "./AssetModal";

const Content = () => {
  const [showCategories, setShowCategories] = useState(true);
  const [showFileExtensions, setShowFileExtensions] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedExtensions, setSelectedExtensions] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAsset, setSelectedAsset] = useState(null); // State for selected asset

  const toggleAccordion = (filter) => {
    if (filter === "categories") {
      setShowCategories(!showCategories);
    } else if (filter === "fileExtensions") {
      setShowFileExtensions(!showFileExtensions);
    } else if (filter === "price") {
      setShowPrice(!showPrice);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleExtensionChange = (e) => {
    const value = e.target.value;
    setSelectedExtensions((prev) =>
      prev.includes(value) ? prev.filter((ext) => ext !== value) : [...prev, value]
    );
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCardClick = (asset) => {
    setSelectedAsset(asset); // Set the selected asset
  };

  const handleCloseModal = () => {
    setSelectedAsset(null); // Reset the selected asset to close the modal
  };

  const filteredData = data.filter((asset) => {
    const assetCategory = asset.category.toLowerCase();
    const normalizedSelectedCategory = selectedCategory.toLowerCase();

    const matchesCategory =
      normalizedSelectedCategory === "all" || assetCategory === normalizedSelectedCategory;

    const matchesExtension = selectedExtensions.length === 0 || selectedExtensions.includes(asset.fileType);

    const matchesPrice =
      selectedPrice === "all" ||
      (selectedPrice === "free" && asset.priceType === "free") ||
      (selectedPrice === "paid" && asset.priceType === "premium");

    const matchesSearch = asset.title.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesExtension && matchesPrice && matchesSearch;
  });

  return (
    <div className="asts-asset-browser">
      <div className="asts-banner">
        <div className="asts-banner-content">
          <h1>Browse Assets</h1>
          <p>Find the perfect asset for your next project</p>
        </div>
      </div>
      <div className="asts-main-content">
        <div className="asts-sidebar">
          <div className="asts-filter">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="asts-filter">
            <div
              className="asts-filter-header"
              onClick={() => toggleAccordion("categories")}
            >
              <i className="fas fa-th-large"></i> Categories
            </div>
            {showCategories && (
              <div className="asts-filter-options">
                <div>
                  <label>
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === "all"}
                      onChange={handleCategoryChange}
                    />{" "}
                    All Categories
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="category"
                      value="fonts"
                      checked={selectedCategory === "fonts"}
                      onChange={handleCategoryChange}
                    />{" "}
                    Fonts
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="category"
                      value="templates"
                      checked={selectedCategory === "templates"}
                      onChange={handleCategoryChange}
                    />{" "}
                    Templates
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="category"
                      value="vectors"
                      checked={selectedCategory === "vectors"}
                      onChange={handleCategoryChange}
                    />{" "}
                    Vectors
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="asts-filter">
            <div
              className="asts-filter-header"
              onClick={() => toggleAccordion("fileExtensions")}
            >
              <i className="fas fa-layer-group"></i> File Extensions
            </div>
            {showFileExtensions && (
              <div className="asts-filter-options">
                {["pdf", "jpg", "png", "psd", "gif"].map((ext) => (
                  <div key={ext}>
                    <label>
                      <input
                        type="checkbox"
                        value={ext}
                        checked={selectedExtensions.includes(ext)}
                        onChange={handleExtensionChange}
                      />{" "}
                      {ext.toUpperCase()}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="asts-filter">
            <div
              className="asts-filter-header"
              onClick={() => toggleAccordion("price")}
            >
              <i className="fas fa-tag"></i> Price
            </div>
            {showPrice && (
              <div className="asts-filter-options">
                <button onClick={() => handlePriceChange("all")}>All</button>
                <button onClick={() => handlePriceChange("free")}>Free</button>
                <button onClick={() => handlePriceChange("paid")}>Paid</button>
              </div>
            )}
          </div>
        </div>
        <div className="asts-cards">
          {filteredData.map((asset) => (
            <div className="asts-card" key={asset.id} onClick={() => handleCardClick(asset)}>
              <img src={asset.imageUrl} alt={asset.title} />
              <div className="asts-card-content">
                <h3>{asset.title}</h3>
                <p>{asset.creatorName}</p>
                <div className="asts-card-footer">
                  <span>
                    <i className="fas fa-thumbs-up"></i> {asset.likes}
                  </span>
                  <span>
                    <i className="fas fa-eye"></i> {asset.views}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedAsset && (
        <AssetModal asset={selectedAsset} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Content;
