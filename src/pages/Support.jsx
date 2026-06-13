import React from "react";

const Support = () => {
  return (
    <div className="w-full bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base uppercase tracking-[0.25em] text-purple-600 font-semibold mb-3">
            TrendZ Support
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900">
            We’re Here to Help
          </h1>
          <p className="mt-5 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-7">
            Need help with your order, payment, delivery, return, or account?
            Our support team is always ready to assist you and make your shopping
            experience smooth and reliable.
          </p>
        </div>
      </section>

      {/* Support Cards */}
      <section className="py-16 px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Order Support</h2>
            <p className="text-gray-600 leading-7 text-sm sm:text-base">
              Get help related to your placed orders, order tracking, shipping
              updates, and order confirmation details.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Payment Help</h2>
            <p className="text-gray-600 leading-7 text-sm sm:text-base">
              Facing payment issues? Contact us for support regarding failed
              payments, refunds, billing, and transaction concerns.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Returns & Exchange</h2>
            <p className="text-gray-600 leading-7 text-sm sm:text-base">
              Need to return or exchange a product? Our team will guide you
              through the complete process quickly and easily.
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3">Account Support</h2>
            <p className="text-gray-600 leading-7 text-sm sm:text-base">
              We help with login issues, password reset, profile updates, and
              account-related questions for a hassle-free experience.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-gray-600">
              Find answers to the most common questions.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">
                How can I track my order?
              </h3>
              <p className="text-gray-600 leading-7">
                You can track your order from your account dashboard or through
                the tracking link sent to your registered email or phone number.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">
                Can I return a product?
              </h3>
              <p className="text-gray-600 leading-7">
                Yes, products can be returned within the return policy period if
                they meet the required conditions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">
                What if my payment fails?
              </h3>
              <p className="text-gray-600 leading-7">
                If your payment fails, please try again after checking your bank
                details or contact our support team for assistance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">
                How do I contact TrendZ support?
              </h3>
              <p className="text-gray-600 leading-7">
                You can contact us through phone, email, or the support form
                available on this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="uppercase tracking-[0.2em] text-purple-600 font-semibold mb-3">
              Contact Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">
              Need More Help?
            </h2>
            <p className="text-gray-600 leading-7 mb-6">
              Our team is available to solve your problems and answer your
              queries. Reach out to us anytime and we’ll get back to you as soon
              as possible.
            </p>

            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Phone:</span> 8958366236
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                theukgaming425@gmail.com
              </p>
              <p>
                <span className="font-semibold">Brand:</span> TrendZ
              </p>
            </div>
          </div>

          <div className="bg-white border rounded-2xl shadow-md p-6 sm:p-8">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-600 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-900 text-white py-3 rounded-lg font-medium hover:bg-purple-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Strip */}
      <section className="bg-zinc-900 text-white py-8 px-5 sm:px-8 md:px-12 lg:px-20 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">
          TrendZ Support Center
        </h3>
        <p className="text-gray-300 text-sm sm:text-base">
          Fashion with Class — Always here to support you.
        </p>
      </section>
    </div>
  );
};

export default Support;