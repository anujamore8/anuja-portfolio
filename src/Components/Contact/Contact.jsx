import "./Contact.css";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
    const [form, setForm] = useState({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
        console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
        console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        console.log("Form Data:", form);

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log("SUCCESS:", result);

            setStatus("success");

            setForm({
                from_name: "",
                from_email: "",
                subject: "",
                message: "",
            });

        } catch (error) {

            console.error("FULL ERROR:", error);
            console.log("STATUS:", error.status);
            console.log("TEXT:", error.text);

            alert(`Status: ${error.status}\n${error.text}`);

            setStatus("error");
        }

        setLoading(false);
    };

    return (
        <section className="contact section" id="contact">

            <div className="container">

                <div className="section-heading">

                    <span className="section-subtitle">
                        CONTACT
                    </span>

                    <h2>
                        Let's Connect
                    </h2>

                    <p className="section-description">
                        I'm always open to discussing Data Science,
                        Machine Learning, Data Analytics,
                        internships, full-time opportunities,
                        and exciting projects.
                    </p>

                </div>

                <div className="contact-wrapper">

                    {/* Left */}

                    <div
                        className="contact-info"
                        data-aos="fade-right"
                    >

                        <div className="contact-card">

                            <FaEnvelope className="contact-icon" />

                            <h3>Email</h3>

                            <a href="mailto:anujamore288@gmail.com">
                                anujamore288@gmail.com
                            </a>

                        </div>

                        <div className="contact-card">

                            <FaMapMarkerAlt className="contact-icon" />

                            <h3>Location</h3>

                            <p>Pune, Maharashtra</p>

                        </div>

                        <div className="contact-card">

                            <FaGithub className="contact-icon" />

                            <h3>GitHub</h3>

                            <a
                                href="https://github.com/anujamore8"
                                target="_blank"
                                rel="noreferrer"
                            >
                                github.com/anujamore8
                            </a>

                        </div>

                        <div className="contact-card">

                            <FaLinkedin className="contact-icon" />

                            <h3>LinkedIn</h3>

                            <a
                                href="https://www.linkedin.com/in/anuja-more-67169a347/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Anuja More
                            </a>

                        </div>

                    </div>

                    {/* Right */}

                    <div
                        className="contact-form-container"
                        data-aos="fade-left"
                    >

                        <form
                            onSubmit={sendEmail}
                            className="contact-form"
                        >

                            <input
                                type="text"
                                name="from_name"
                                placeholder="Your Name"
                                value={form.from_name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                name="from_email"
                                placeholder="Your Email"
                                value={form.from_email}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={form.subject}
                                onChange={handleChange}
                                required
                            />

                            <textarea
                                rows="6"
                                name="message"
                                placeholder="Write your message..."
                                value={form.message}
                                onChange={handleChange}
                                required
                            />

                            <button
                                type="submit"
                                className="contact-btn"
                                disabled={loading}
                            >
                                <FaPaperPlane />

                                {loading
                                    ? "Sending..."
                                    : "Send Message"}
                            </button>

                            {status === "success" && (
                                <p className="success-message">
                                    ✅ Message sent successfully!
                                </p>
                            )}

                            {status === "error" && (
                                <p className="error-message">
                                    ❌ Failed to send message.
                                </p>
                            )}

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Contact;