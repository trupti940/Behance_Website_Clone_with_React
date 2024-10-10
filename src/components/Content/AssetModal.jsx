import React, { useEffect } from "react";
import "../../styles/assetModal.css"; // Ensure you have the appropriate CSS file for modal styling

const AssetModal = ({ asset, onClose }) => {
  useEffect(() => {
    // Disable scrolling on the body when modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to enable scrolling when modal is closed
    return () => {
      document.body.style.overflow = "unset"; // or you can use "auto"
    };
  }, []);

  return (
    <div className="asstmod-modal-overlay" onClick={onClose}>
      <div className="asstmod-modal-content" onClick={(e) => e.stopPropagation()} style={{ marginTop: "10vh" }}>
        <button className="asstmod-close-modal" onClick={onClose}>
        <i class="fa-regular fa-circle-xmark fa-beat"></i>
        </button>
        <div className="asstmod-modal-container" style={{ display: "flex", height: "90vh" }}>
          <div className="asstmod-modal-main" style={{ flexGrow: 1, overflowY: "hidden", height: "100%" }}>
            <h2>{asset.title}</h2>
            <p>Creator: {asset.creatorName}</p>
            <div className="asstmod-modal-images" style={{ display: "flex", flexDirection: "column", height: "calc(100% - 50px)", overflowY: "auto" }}>
              {asset.additionalImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Additional view ${index + 1}`}
                  style={{ width: "100%", margin: 0, flexShrink: 0 }}
                />
              ))}
            </div>
          </div>
          <nav className="sidebar">
            <div className="n-profile" onMouseEnter={() => {}} onMouseLeave={() => {}}>
              <button>
                <img
                  src="https://mir-s3-cdn-cf.behance.net/user/50/bae8791272723445.66a2223992876.jpg"
                  alt="Profile"
                />
              </button>
              <div className="plus-icon">
                <i className="fa-solid fa-plus"></i>
              </div>
              <span>Follow</span>
            </div>
            <div className="btn-white">
              <button>
                <i className="fa-sharp fa-solid fa-envelope"></i>
              </button>
              <span>Hire</span>
            </div>
            <div className="btn-white">
              <button>
                <i className="fa-solid fa-screwdriver-wrench"></i>
              </button>
              <span>Tools</span>
            </div>
            <div className="btn-white">
              <button>
                <i className="fa-solid fa-floppy-disk"></i>
              </button>
              <span>Save</span>
            </div>
            <div className="btn-white">
              <button>
                <i className="fa-solid fa-share-from-square"></i>
              </button>
              <span>Share</span>
            </div>
            <div className="btn-white">
              <button className="btn-black">
                <i className="fa-solid fa-thumbs-up"></i>
                <p className="btn-text">711</p>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AssetModal;
