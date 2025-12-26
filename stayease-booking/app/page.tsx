import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#B6D9E0] text-[#143944] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Perfect Stay
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover homes, apartments, and unique places to stay around the world
        </p>

        {/* Search Inputs */}
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Where do you want to go?"
            className="flex-1 px-4 py-3 rounded-md border border-[#335765]"
          />
          <input
            type="date"
            className="px-4 py-3 rounded-md border border-[#335765]"
          />
          <button className="bg-[#7F543D] text-white px-6 py-3 rounded-md hover:bg-[#47242B] font-semibold">
            Search
          </button>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#335765] mb-8 text-center">
          Featured Listings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Listing Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
            <div className="h-48 bg-[#DBE2DC] flex items-center justify-center text-[#65727D]">
              Listing 1 Image
            </div>
            <h3 className="text-xl font-semibold text-[#143944] mt-4">
              Listing 1 Name
            </h3>
            <p className="text-[#65727D]">Location 1</p>
            <p className="text-[#7F543D] font-bold">Price 1</p>
          </div>

          {/* Listing Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
            <div className="h-48 bg-[#DBE2DC] flex items-center justify-center text-[#65727D]">
              Listing 2 Image
            </div>
            <h3 className="text-xl font-semibold text-[#143944] mt-4">
              Listing 2 Name
            </h3>
            <p className="text-[#65727D]">Location 2</p>
            <p className="text-[#7F543D] font-bold">Price 2</p>
          </div>

          {/* Listing Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
            <div className="h-48 bg-[#DBE2DC] flex items-center justify-center text-[#65727D]">
              Listing 3 Image
            </div>
            <h3 className="text-xl font-semibold text-[#143944] mt-4">
              Listing 3 Name
            </h3>
            <p className="text-[#65727D]">Location 3</p>
            <p className="text-[#7F543D] font-bold">Price 3</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#DBE2DC] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#335765] mb-4">
          Why Choose LockWind
        </h2>
        <p className="text-[#143944] max-w-2xl mx-auto text-lg">
          LockWind makes finding the perfect place easy, safe, and enjoyable.
          Explore trusted homes, experience local comfort, and stay your way.
        </p>
      </section>
    </>
  );
}
