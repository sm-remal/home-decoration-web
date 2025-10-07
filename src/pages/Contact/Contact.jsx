import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", form);
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Hero Section */}
            <section className="text-center py-12 bg-blue-50 border-b border-gray-200">
                <h1 className="text-3xl md:text-5xl font-semibold text-gray-800">
                    Contact Us
                </h1>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    Have any questions or feedback? We’d love to hear from you!
                    Our team is always here to help.
                </p>
            </section>

            {/* Contact Content */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-12">
                {/* Left Side — Contact Info */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Whether you have a question about products, orders, or anything else,
                        our friendly support team is just one message away.
                    </p>

                    <div className="space-y-4 text-gray-700">
                        <div>
                            <h4 className="font-medium text-lg">📍 Address</h4>
                            <p className="text-gray-600">House 45, Road 7, Dhanmondi, Dhaka</p>
                        </div>

                        <div>
                            <h4 className="font-medium text-lg">📞 Phone</h4>
                            <p className="text-gray-600">+880 15187-39165</p>
                        </div>

                        <div>
                            <h4 className="font-medium text-lg">✉️ Email</h4>
                            <p className="text-gray-600">remal.mozzem@gmail.com</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-7">
                            <Link
                                to="https://www.facebook.com/shahmozzem.remal"
                            >
                                <span><FaFacebook size={30} /></span>
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/sm-remal/"

                            >
                                <span><FaLinkedin size={30} /></span>
                            </Link>
                            <Link
                                to="https://github.com/sm-remal"

                            >
                                <span><FaGithub size={30} /></span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Side — Contact Form */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    {submitted ? (
                        <div className="text-center py-12">
                            <h3 className="text-2xl font-semibold text-green-600 mb-2">
                                🎉 Thank You!
                            </h3>
                            <p className="text-gray-600 mt-5">
                                Your message has been sent successfully.
                                We'll get back to you soon.
                            </p>
                            <button
                                className="btn btn-secondary btn-sm mt-10"
                                onClick={() => setSubmitted(false)}
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-secondary  w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-[300px] my-10">
                <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9196068962013!2d90.36650987508906!3d23.750885188807944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bffb6b64a9b5%3A0x1e3f8e34e1c2fbd5!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1712587612327!5m2!1sen!2sbd"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
