import React from 'react';
import './About.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>About Us</h1>
                    <p>We are committed to saving lives through blood donation and improving healthcare outcomes globally.</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p>Our mission is to simplify the blood donation process and make it accessible for everyone. We believe that together, we can ensure that no one in need of blood ever has to wait.</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact">
                <h2>Contact Us</h2>
                <div className="contact-content">
                    <p>If you have any questions or would like to get involved, feel free to reach out!</p>
                    <a href="mailto:info@bloodbank.com" className="btn">Email Us</a>
                    <a href="tel:+1234567890" className="btn">Call Us</a>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
