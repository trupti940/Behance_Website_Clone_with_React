import React, { useState } from 'react';
import '../styles/jobModal.css'; // Add custom styles for the modal

const PostJobModal = ({ onClose, onPostJob }) => {
  const [description, setDescription] = useState('');

  // Form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      company: e.target.company.value,
      logo: e.target.logo.value,
      location: e.target.location.value,
      title: e.target.title.value,
      description,
      daysAgo: 'Just now',
      category: e.target.category.value,
    };

    onPostJob(newJob); // Pass new job to the JobPage component
    onClose(); // Close the modal after submission
  };

  // Handle textarea input
  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    const wordCount = value.split(/\s+/).filter((word) => word).length;

    // Limit to 30 words
    if (wordCount <= 30) {
      setDescription(value);
    }
  };

  return (
    <div className="pm-modal_background">
      <div className="pm-modal_container">
        <button className="pm-close_modal" onClick={onClose}>&times;</button>
        <h2>Post a Full-Time Job</h2>
        <form onSubmit={handleFormSubmit} className="pm-form">
          <label>
            Company Name:
            <input type="text" name="company" required />
          </label>
          <label>
            Company Logo URL:
            <input type="url" name="logo" required />
          </label>
          <label>
            Job Title:
            <input type="text" name="title" required />
          </label>
          <label>
            Job Location:
            <input type="text" name="location" required />
          </label>
          <label>
            Job Description (max 30 words):
            <textarea
              name="description"
              rows="4"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </label>
          <label>
            Job Category:
            <input type="text" name="category" required />
          </label>
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
};

export default PostJobModal;
