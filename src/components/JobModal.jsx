import React, { useState, useEffect } from 'react';
import '../styles/jobModal.css'; // Add custom styles for the modal
import PostJobModal from './PostJobModal'; // Import the new modal component

const JobModal = ({ onClose, onPostJob }) => {
  const [isPostJobModalOpen, setPostJobModalOpen] = useState(false);

  // Close the modal when the Escape key is pressed
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  // Open the Post Job modal
  const handleOpenPostJobModal = () => {
    setPostJobModalOpen(true);
  };

  // Close the Post Job modal
  const handleClosePostJobModal = () => {
    setPostJobModalOpen(false);
  };

  return (
    <div className="jp-modal_background">
      <div className="jp-modal_container">
        <button className="jp-close_modal" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div className="jp-modal_content">
          <div className="jp-modal_card">
            <h6>Freelance</h6>
            <h1>Hire a Freelancer</h1>
            <p>Find the perfect creator in minutes.</p>
            <ul className='jp-points'>
              <li><i className="fa-solid fa-id-card-clip"></i> Get proposals from creators matching your needs</li>
              <li><i className="fa-solid fa-calendar"></i> Discuss, share files & schedule video calls</li>
              <li><i className="fa-solid fa-money-check-dollar"></i> Pay seamlessly and securely with a credit card</li>
            </ul>
            <button onClick={() => alert('Finding a freelancer...')}>Find a Freelancer Today</button>
          </div>
          <div className="jp-modal_card">
            <h6>Full-Time</h6>
            <h1>Post a Full-Time Job</h1>
            <p>Promote your full-time opportunity.</p>
            <ul className='jp-points'>
              <li><i className="fa-solid fa-tower-broadcast"></i> Share your job opportunity with millions of designers</li>
              <li><i className="fa-solid fa-file-arrow-up"></i> Redirect applications to your favorite external tool</li>
              <li><i className="fa-solid fa-wand-magic-sparkles"></i> Job posts are free and expire after 30 days</li>
            </ul>
            <button onClick={handleOpenPostJobModal}>Post a Full-Time Job</button>
          </div>
        </div>

        {/* Open Post Job Modal */}
        {isPostJobModalOpen && (
          <PostJobModal
            onClose={handleClosePostJobModal}
            onPostJob={onPostJob}
          />
        )}
      </div>
    </div>
  );
};

export default JobModal;
