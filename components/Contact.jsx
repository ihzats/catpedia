import React from 'react'

export default function Contact() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              placeholder="Nidie"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder="Pets@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>

    )
}
