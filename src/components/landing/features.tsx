import Image from "next/image";
import { Brain, Fingerprint, Gauge, Globe, MessageSquare, Shield, Sparkles, Users } from "lucide-react";

function FeatureItem({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Understanding",
      description: "Natural language processing that understands context and nuance, providing human-like responses to complex queries."
    },
    {
      icon: Fingerprint,
      title: "Personalized Experience",
      description: "AI that learns from each interaction to provide increasingly personalized and relevant responses to your customers."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and data protection measures to keep your conversations and customer data safe."
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate with customers in over 100 languages with real-time translation and cultural awareness."
    },
    {
      icon: Gauge,
      title: "Real-time Analytics",
      description: "Track engagement, response times, and customer satisfaction with detailed analytics and insights."
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Integration",
      description: "Seamlessly integrate with popular platforms including WhatsApp, Messenger, Slack, and more."
    },
    {
      icon: Sparkles,
      title: "Custom AI Training",
      description: "Train your AI with your business knowledge base for more accurate and brand-aligned responses."
    },
    {
      icon: Users,
      title: "Collaborative Workspace",
      description: "Enable team collaboration with shared inboxes, conversation assignments, and internal notes."
    }
  ];

  return (
    <div id="otherFeatures" className="relative z-20 py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features for Modern Businesses</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transform your customer service with AI-powered automation while maintaining the human touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 dark:to-transparent rounded-3xl py-12 px-10 lg:py-24 lg:px-16 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Responsive Design</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Your chatbot will look stunning and function flawlessly on all devices, from desktops to
                tablets to mobile phones. We've optimized every interaction for the best user experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">Adaptive layouts for all screen sizes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">Performance-optimized for mobile devices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">Smooth animations and transitions</span>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="p-2 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 rounded-[32px] max-w-[300px] lg:absolute lg:top-[-50px]">
                <div className="absolute inset-x-0 bottom-0 h-20 w-full bg-gradient-to-b from-transparent via-gray-100 to-gray-100 dark:via-zinc-800/70 dark:to-gray-800 scale-[1.1] pointer-events-none"></div>
                <div className="bg-white dark:bg-black dark:border-gray-700 border border-gray-200 rounded-[24px] overflow-hidden max-h-[450px]">
                  <Image
                    alt="AI Chatbot Interface"
                    loading="lazy"
                    className="rounded-2xl lg:rounded-[24px]"
                    src="/images/mobile.png"
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                    width={1920}
                    height={1040}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
