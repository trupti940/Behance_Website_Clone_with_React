import React from "react";
import "../styles/modal.css"; // Ensure you have a proper CSS file for modal styles

const Modal = ({
  showModal,
  closeModal,
  position,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`modal ${showModal ? "visible" : ""}`}
      aria-hidden={!showModal}
      aria-modal={showModal}
      style={{ top: position.top, left: position.left }} // Set the position dynamically
      onClick={closeModal} // Modal closes when the user clicks outside the modal content
      onMouseEnter={onMouseEnter} // Keep the modal open on mouse enter
      onMouseLeave={onMouseLeave} // Optionally hide the modal on mouse leave
    >
      <div
        className="modal-content"
        role="dialog"
        aria-labelledby="modal-heading"
        aria-describedby="modal-description"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <img
          src="https://mir-s3-cdn-cf.behance.net/user/100/bae8791272723445.66a2223992876.jpg"
          alt="Tonic Black's Profile"
          className="modal-profile-image"
        />
        <h2 id="modal-heading">Tonic Black</h2>
        <div className="location" id="modal-description">
          <i className="fas fa-location-dot"></i> Minsk, Belarus
        </div>
        <div className="tags">
          <button className="tag-1" aria-label="Freelance job status">
            Freelance
          </button>
          <button className="tag-2" aria-label="Full-time job status">
            Full-Time
          </button>
        </div>

        {/* Updated Stats Section */}
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">1.6k</span>
            <span className="stat-label">Appreciations</span>
          </div>
          <div className="stat-item divider">
            <span className="stat-number">87</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">9.8k</span>
            <span className="stat-label">Project Views</span>
          </div>
        </div>

        <div className="modal-buttons">
          <button className="follow-btn" aria-label="Follow Tonic Black">
            <i className="fas fa-plus"></i> Follow
          </button>
          <button className="hire-btn" aria-label="Hire Tonic Black">
            <i className="fas fa-envelope"></i> Hire
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
