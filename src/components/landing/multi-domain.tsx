import { Globe, Server, Shield } from "lucide-react";

export default function MultiDomain() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Multi-Domain Support</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Scale your chatbot across multiple domains with ease
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
            <Globe className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-4">Domain Flexibility</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Deploy your chatbot across multiple domains and subdomains with seamless integration
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
            <Server className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-4">Centralized Management</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Manage all your chatbot instances from a single dashboard with domain-specific analytics
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
            <Shield className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-4">Domain Security</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Enterprise-grade security with domain-level access controls and data isolation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
