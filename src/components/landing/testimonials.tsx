import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    image: "/testimonials/avatar1.png",
    content: "Implementing this chatbot solution across our multiple domains has significantly improved our customer service efficiency by 60%."
  },
  {
    name: "Michael Chen",
    role: "Product Manager at InnovateCo",
    image: "/testimonials/avatar2.png",
    content: "The multi-domain support is fantastic. We're running chatbots on 12 different domains, all managed from one dashboard."
  },
  {
    name: "Emma Davis",
    role: "Customer Success at SaaS Global",
    image: "/testimonials/avatar3.png",
    content: "The AI capabilities are impressive. Our customers love the natural conversations and quick problem resolution."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Trusted by leading companies worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 mr-4">
                  {/* Add actual images later */}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
