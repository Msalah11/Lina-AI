import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does multi-domain support work?",
    answer: "Our platform allows you to deploy and manage chatbots across multiple domains from a single dashboard. Each domain can have its own configuration, knowledge base, and styling while maintaining centralized control."
  },
  {
    question: "What kind of customization options are available?",
    answer: "You can customize the chatbot's appearance, behavior, and responses for each domain. This includes custom themes, conversation flows, and integration with domain-specific tools and databases."
  },
  {
    question: "How secure is the platform?",
    answer: "We implement enterprise-grade security measures including end-to-end encryption, role-based access control, and regular security audits. Your data is isolated per domain and protected according to industry best practices."
  },
  {
    question: "Can I integrate with existing tools?",
    answer: "Yes, our platform offers extensive integration capabilities with popular CRM systems, help desks, and other business tools. We also provide APIs for custom integrations."
  },
  {
    question: "How does pricing work for multiple domains?",
    answer: "Our pricing is flexible and scales with your needs. You can start with a single domain and add more as you grow. Contact our sales team for custom enterprise plans."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about our platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
