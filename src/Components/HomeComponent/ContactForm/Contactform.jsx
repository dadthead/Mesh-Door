import React, { useState } from "react";

export default function UniqueBusinessContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null); // To store submitted data

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) errs.email = "Valid email required";
    if (!form.phone.match(/^\d{10}$/)) errs.phone = "10 digit phone required";
    if (!form.message.trim()) errs.message = "Please enter a message";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(form); // Save submitted data to show above
      setForm({ name: "", email: "", phone: "", message: "" }); // Clear form
      setErrors({});
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row bg-gradient-to-r from-white to-[#94fbf6] p-8 md:p-16 ">
      {/* Left Form Side */}
      <div className="md:w-1/2  bg-opacity-90  p-10  flex flex-col justify-center">
        <h2 className="text-4xl font-extrabold text-[#44b4af] mb-6">Get in Touch</h2>
        <p className="mb-10 text-gray-700 font-medium">
          Have questions or want to discuss any work ? Send us a message!
        </p>

        {/* Show submitted data above the form */}
        {submittedData && (
          <div className="mb-8 p-4  border-[#44b4af] text-[#096b69]">
            <h3 className="font-semibold text-lg mb-2">Submission Summary</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              id="name"
              className={`peer block w-full appearance-none border-b-2 bg-transparent py-8 px-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#44b4af] ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Full Name"
            />
            <label
              htmlFor="name"
              className={`absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-[#44b4af] peer-focus:text-sm`}
            >
              Full Name
            </label>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              id="email"
              className={`peer block w-full appearance-none border-b-2 bg-transparent py-8 px-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#44b4af] ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Email Address"
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-[#44b4af] peer-focus:text-sm"
            >
              Email Address
            </label>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              id="phone"
              className={`peer block w-full appearance-none border-b-2 bg-transparent py-8 px-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#44b4af] ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Phone Number"
            />
            <label
              htmlFor="phone"
              className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-[#44b4af] peer-focus:text-sm"
            >
              Phone Number
            </label>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              id="message"
              rows="4"
              className={`peer block w-full resize-none appearance-none border-b-2 bg-transparent py-8 px-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#44b4af] ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your Message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-[#44b4af] peer-focus:text-sm"
            >
              Your Message
            </label>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#44b4af] text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-[#369b97] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Info Side */}
      <div className="md:w-1/2 flex flex-col justify-center  px-18 mt-0">
        <h3 className="text-4xl text-[#44b4af] font-bold mb-6 underline  underline-offset-3 ">Our Office</h3>
        <p className="mb-4 max-w-md px-2 text-xl  leading-relaxed">
          Plot No.200,<br />
          Gokul Plots,<br />
          Near Hanuman Temple, <br/>
          Hafeespet, Hyderabad - 500085.
        </p>
        <p className="mb-4 max-w-md px-2 text-lg  leading-relaxed">
          Phone: +91 70754 16949<br />
          Email: contact@business.com
        </p>
        <p className="max-w-lg  leading-relaxed px-2 italic">
          We are here to help you 24/7. Reach out to us anytime!
        </p>
      </div>
    </div>
  );
}
