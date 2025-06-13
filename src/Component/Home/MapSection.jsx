export default function MapSection() {
  return (
    <section id="map" className="py-10 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-4xl text-2xl font-bold text-center text-[var(--primaryColor)] pt-18 mb-10">Find Us</h2>
        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">

          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.6490859329996!2d-76.7935791258708!3d18.01787465741443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3f89d6507f4f%3A0xeef1cdd5c1234f8e!2sKingston%2C%20Jamaica!5e0!3m2!1sen!2sjm!4v1718128000000!5m2!1sen!2sjm"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[450px] border-0"
          ></iframe>
          
        </div>
      </div>
    </section>
  );
}
