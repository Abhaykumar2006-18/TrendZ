import React from "react";

const About = () => {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* HERO */}
      <section className="relative h-[70vh] w-full p-8">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop"
          className="w-full h-full object-cover "
          alt="TrendZ Fashion"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] uppercase">
              TrendZ
            </h1>
            <p className="text-gray-200 mt-4 tracking-widest text-sm sm:text-base">
              Fashion with Class
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-6 md:px-16 lg:px-24 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          About Our Brand
        </h2>

        <p className="text-gray-600 leading-8 text-base md:text-lg">
          TrendZ is a modern fashion destination created for individuals who
          value style, confidence, and elegance. Our platform brings together
          premium fashion collections that reflect both global trends and
          timeless designs.
        </p>

        <p className="text-gray-600 leading-8 mt-5 text-base md:text-lg">
          We believe fashion is not just about clothing — it is a way to express
          personality. That’s why every product at TrendZ is carefully selected
          to deliver comfort, quality, and a refined sense of style.
        </p>
      </section>

      {/* SPLIT SECTION */}
      <section className="grid md:grid-cols-2">
        
        {/* IMAGE */}
        <div>
          <img
            src="https://media.istockphoto.com/id/688398000/photo/dresses-hanged-in-a-clothing-store.jpg?s=612x612&w=0&k=20&c=tfmN4c9k3yx9Us3E8N1g9Mesd96HxyNFmGhJKQ5hShs="
            className="w-full h-full object-cover p-8 "
            alt="Fashion Store"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col justify-center px-8 md:px-14 py-12 bg-gray-50">
          <h2 className="text-3xl font-semibold mb-5">Our Vision</h2>
          <p className="text-gray-600 leading-7 mb-4">
            Our vision is to become a leading fashion platform that combines
            affordability with premium quality. We aim to redefine how people
            experience online fashion shopping.
          </p>

          <p className="text-gray-600 leading-7">
            By focusing on modern design and customer satisfaction, TrendZ is
            building a brand that represents trust, elegance, and innovation.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our Values
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="p-8 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-gray-600 leading-7">
              Every product is carefully curated to meet high standards of
              quality, durability, and comfort.
            </p>
          </div>

          <div className="p-8 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Modern Style</h3>
            <p className="text-gray-600 leading-7">
              We bring you the latest fashion trends that align with global
              styles and modern lifestyles.
            </p>
          </div>

          <div className="p-8 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Customer First</h3>
            <p className="text-gray-600 leading-7">
              Our customers are our priority, and we strive to deliver a seamless
              and satisfying shopping experience.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className=" text-black py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Experience Fashion with Class
        </h2>

        <p className="text-black mb-6 text-sm md:text-base">
          Discover collections that define elegance and confidence.
        </p>

        <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Explore Collection
        </button>
      </section>

      {/* FOOTER INFO */}
     

    </div>
  );
};

export default About;