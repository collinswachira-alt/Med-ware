import { useState } from 'react';
import { MessageCircle, Plus, Minus, User, CrossIcon } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  services: FAQItem[];
  account: FAQItem[];
}

type CategoryKey = keyof FAQCategory;

export const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('services');
  const [openIndex, setOpenIndex] = useState(0);

  const categories: Array<{ id: CategoryKey; label: string; icon: typeof User; color: string }> = [
    {
      id: 'services',
      label: "Services",
      icon: CrossIcon,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'account',
      label: "Account",
      icon: User,
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const faqs = {
    services: [
      {
        question: "Do you offer emergency services?",
        answer: "Absoultely! We provide 24/7 emergency services to ensure that our patients receive immediate care when they need it most.",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      }
    ],
    account: [
      {
        question: "Why should I create an account?",
        answer: "An Account provides resources to help you manage and track various relations eg. Appointments.",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ]
  };

  const currentFaqs = faqs[activeCategory];
  const activeTab = categories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-24 bg-global-bg-primary  relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-5 py-2 backdrop-blur-sm mb-6">
            <MessageCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400 tracking-widest">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-global-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-global-text-secondary">
            Find answers to common questions about our services and your account.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenIndex(0);
                }}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? `bg-linear-to-r ${category.color} dark:text-white text-slate-900 shadow-lg shadow-cyan-500/30`
                    : 'bg-global-bg-secondary text-global-text-primary hover:bg-global-bg-secondary border border-global-border-primary'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.label}</span>
                {isActive && (
                  <div
                    className={`absolute inset-0 rounded-xl bg-linear-to-r ${category.color} opacity-20 blur-lg -z-10`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {currentFaqs.map((faq: FAQItem, i: number) => (
            <div
              key={i}
              className={`bg-global-bg-primary-solid backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                  : 'border-global-border-primary hover:border-cyan-500/30'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="text-lg font-semibold text-global-text-primary group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors pr-4">
                  {faq.question}
                </span>
                <div
                  className={`shrink-0 w-10 h-10 rounded-lg  ${
                    activeTab?.color || 'from-cyan-500 to-blue-500'
                  } bg-opacity-10 flex items-center justify-center transition-all ${
                    openIndex === i ? 'rotate-180 bg-opacity-20' : ''
                  }`}
                >
                  {openIndex === i ? (
                    <Minus className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-cyan-400" />
                  )}
                </div>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-6 text-global-text-secondary leading-relaxed border-t border-global-border-primary pt-4 animate-slideDown">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;