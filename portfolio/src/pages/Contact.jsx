import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const response = await fetch("https://formspree.io/f/xojyaojp", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section className="max-w-4xl mx-auto mt-20 md:mt-28 px-4 py-10 text-center min-h-[60vh]">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
        Contact Me
      </h1>
      <p className="text-base md:text-lg mb-8">Feel free to reach out!</p>

      {submitted ? (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg">
          Thank you! Your message has been sent.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-violet-500 text-white py-3 rounded-lg hover:bg-violet-700 transition"
          >
            Send Message
          </button>
        </form>
      )}

      <div className="mt-10">
        <p className="text-base md:text-lg">9803659437</p>
        <p className="text-base md:text-lg">pariks2345@gmail.com</p>
      </div>
    </section>
  );
}

export default Contact;
