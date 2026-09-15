const Gallery = () => {
  return (
    <section className="bg-white px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#AE2580]">
            Gallery
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#252525] md:text-5xl">
            Our <span className="text-[#AE2580]">Gallery</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            A glimpse of our clinic and care environment.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-72 overflow-hidden rounded-3xl bg-[#F3EEF1] md:h-80"
            >
              {/* Client image will be added here */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;