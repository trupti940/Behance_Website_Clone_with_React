import React, { useState } from 'react';
import '../styles/JobList.css';

const JobListings = ({ selectedCategory, jobListings }) => {
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering job listings based on selected category and search term
  const filteredJobListings = jobListings.filter((job) => {
    // Filter by category
    if (selectedCategory !== 'All' && job.category !== selectedCategory) {
      return false;
    }

    // Filter by search term
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) // Optional: add location search
    );
  });

  return (
    <div className="job_listings" style={{ marginTop: '0px' }}>
      <div className="job_listings_header">
        <h2>Full-Time Jobs ({filteredJobListings.length})</h2>
        <div className="job_search">
          <input
            type="text"
            placeholder="Search Full-Time Jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="job_cards">
        {filteredJobListings.length > 0 ? (
          filteredJobListings.map((job, index) => (
            <div className="job_card" key={index}>
              <div className="job_company">
                <img src={job.logo} alt={`${job.company} logo`} className="jobcompany_logo" />
                <strong>{job.company}</strong>
              </div>
              <div className="job_location">
                <i className="fa-solid fa-location-dot" style={{ color: '#d0d3d7', marginRight: '5px' }}></i>
                <span>{job.location}</span>
              </div>
              <h3 className="job_title">{job.title}</h3>
              <p className="job_description">{job.description}</p>
              <span className="job_days_ago">{job.daysAgo}</span>
            </div>
          ))
        ) : (
          <p>No jobs found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default JobListings;
