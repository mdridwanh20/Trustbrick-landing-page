const testimonials = [
  {
    name: "Jade Thompson",
    role: "Homeowner",
    rating: 5,
    quote:
      "TrustBrick made our dream home a reality. Their team was professional, transparent, and always on time.",
  },
  {
    name: "Mark Green",
    role: "Project Manager, GovBuild",
    rating: 4,
    quote:
      "From planning to execution, they delivered quality beyond expectations. A reliable partner for public projects.",
  },
  {
    name: "Lana Stewart",
    role: "Architect, Stewart Designs",
    rating: 5,
    quote:
      "Working with them was seamless. They understand structure, design, and how to bring visions to life.",
  },
];

const StarRating = ({ count }) => (
  <div className="flex mb-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-10 lg:py-16">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-4xl text-2xl font-bold text-center text-[var(--primaryColor)] pt-18 mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition border border-gray-100"
            >
              <StarRating count={item.rating} />
              <p className="text-gray-600 text-base italic mb-4">
                “{item.quote}”
              </p>
              <div className="text-sm text-gray-800 font-semibold">
                — {item.name},{" "}
                <span className="text-gray-500 font-normal">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
