import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <h1>Welcome to Rapid Routify</h1>
        <p>Your Trusted Parcel Management Solution</p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Rapid Routify, we are dedicated to revolutionizing parcel management
          with cutting-edge technology. Our mission is to provide efficient,
          reliable, and secure solutions for businesses and individuals alike.
        </p>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Real-time parcel tracking</li>
          <li>Automated route optimization</li>
          <li>Secure delivery authentication</li>
          <li>User-friendly interface</li>
          {/* Add more features */}
        </ul>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        {/* Add information about your team members */}
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or suggestions? Reach out to our support team at{' '}
          <a href="mailto:support@rapidroutify.com">support@rapidroutify.com</a>.
        </p>
      </section>

      {/* Add more sections as needed for your content */}

      <footer className="footer">
        <p>&copy; 2023 Rapid Routify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
