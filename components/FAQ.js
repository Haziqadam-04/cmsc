// This component is used in app.js for the FAQ section

function FAQ() {
  // State to track which FAQ items are open
  const [openItems, setOpenItems] = React.useState([0]); // First item open by default

  // Toggle FAQ item
  const toggleItem = (index) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  // FAQ data
  const faqItems = [
  {
    question: "Who can participate in Stock Summit 2025?",
    answer: "Stock Summit 2025 is open to all undergraduate and postgraduate students enrolled in any university or higher education institution in Indonesia and select ASEAN countries. Teams must consist of 3 members from the same institution, though they can be from different departments or faculties."
  },
  {
    question: "What are the different competition categories?",
    answer: "We offer three main categories: Stock Trading Simulation (for all majors), Equity Research Challenge (primarily for finance/economics students), and FinTech Innovation Challenge (open to all majors). Each category has different requirements and evaluation criteria detailed in our competition guidelines."
  },
  {
    question: "How do I register my team?",
    answer: "Registration can be completed through our website by filling out the registration form, submitting required documents (student IDs, recommendation letter if applicable), and paying the registration fee. Early bird registrations receive a 15% discount until February 1, 2025."
  },
  {
    question: "What is the registration fee and what does it include?",
    answer: "Registration fees vary by category: Stock Trading (IDR 350,000), Equity Research (IDR 400,000), and FinTech Challenge (IDR 450,000) per team. The fee includes access to all competition materials, trading simulation tools, mentoring sessions, certificates, and eligibility for prizes."
  },
  {
    question: "Can international students participate?",
    answer: "Yes, international students from ASEAN countries can participate. We have a dedicated international track for the Stock Trading Simulation and Equity Research categories. Special accommodations can be made for remote participation in preliminary rounds, with finalists expected to attend in person."
  },
  {
    question: "How are the competitions judged?",
    answer: "Each category has specific judging criteria. Generally, evaluations are based on analytical skills, strategy development, presentation quality, teamwork, and innovation. Our panel of judges includes industry professionals, academics, and financial experts who will provide detailed feedback."
  },
  {
    question: "Will there be any preparation workshops?",
    answer: "Yes, all registered teams will have access to preparatory webinars and workshops covering competition guidelines, trading strategies, research methodologies, and presentation skills. These will be held in February 2025, with recordings available for those who cannot attend live."
  },
  {
    question: "What are the prizes?",
    answer: "The total prize pool exceeds IDR 50 million across all categories. First place winners receive IDR 25 million, second place IDR 15 million, and third place IDR 10 million, along with trophies, certificates, internship opportunities, and media recognition. Additional special awards carry prizes of IDR 2.5 million each."
  },
  {
    question: "Do I need prior experience in stock trading to participate?",
    answer: "No prior experience is required, especially for the Stock Trading Simulation category which is designed to be accessible to beginners. We provide training materials and resources to help teams prepare. The Equity Research category is more technical and prior knowledge of financial analysis is recommended but not mandatory."
  },
  {
    question: "How does the referral program work?",
    answer: "After registering, you'll receive a unique referral code. Share this code with other potential participants. For each team that registers using your code, you'll receive a 10% discount on your registration fee (up to a maximum of 50%). Referred teams also receive a 10% discount when they use your code."
  }];


  return (
    <section id="faq" className="section bg-pattern py-20" data-id="h3f6bi5t6" data-path="components/FAQ.js">
            <div className="container mx-auto px-4 md:px-6" data-id="t1jsxmjt0" data-path="components/FAQ.js">
                <div className="max-w-4xl mx-auto" data-id="qo9ygzn6g" data-path="components/FAQ.js">
                    <div className="text-center mb-16" data-id="fyu194rw1" data-path="components/FAQ.js">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4" data-id="fnrreot0w" data-path="components/FAQ.js">
                            Frequently Asked <span className="text-primary-blue" data-id="xwt8he7b1" data-path="components/FAQ.js">Questions</span>
                        </h2>
                        <div className="w-24 h-1 bg-primary-gold mx-auto mb-6" data-id="b707ndadh" data-path="components/FAQ.js"></div>
                        <p className="text-lg text-neutral-700 max-w-3xl mx-auto" data-id="9vd9g2cpm" data-path="components/FAQ.js">
                            Find answers to common questions about Stock Summit 2025.
                        </p>
                    </div>
                    
                    {/* FAQ Accordion */}
                    <div className="space-y-4" data-id="heqz85w40" data-path="components/FAQ.js">
                        {faqItems.map((item, index) =>
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300" data-id="dm7u8khff" data-path="components/FAQ.js">

                                <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-5 flex justify-between items-center" data-id="qfzdgxu13" data-path="components/FAQ.js">

                                    <h3 className="font-heading font-semibold text-lg pr-8" data-id="cagsoaxrl" data-path="components/FAQ.js">{item.question}</h3>
                                    <div className={`transform transition-transform duration-300 ${openItems.includes(index) ? 'rotate-180' : 'rotate-0'}`} data-id="yv479fkes" data-path="components/FAQ.js">
                                        <i className="fas fa-chevron-down text-primary-blue" data-id="jpyv7s289" data-path="components/FAQ.js"></i>
                                    </div>
                                </button>
                                <div
                className={`transition-all duration-300 overflow-hidden ${openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} data-id="bljlywixr" data-path="components/FAQ.js">

                                    <div className="p-5 pt-0 text-neutral-700 border-t border-neutral-100" data-id="bamx3pxq0" data-path="components/FAQ.js">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
            )}
                    </div>
                    
                    {/* Additional Help */}
                    <div className="mt-12 bg-primary-blue/5 rounded-xl p-6 text-center" data-id="3zzcaagkr" data-path="components/FAQ.js">
                        <h3 className="font-heading font-semibold text-xl mb-3" data-id="k3v9ngaw8" data-path="components/FAQ.js">Still have questions?</h3>
                        <p className="text-neutral-700 mb-5" data-id="78t4cvgl1" data-path="components/FAQ.js">
                            If you couldn't find the answer to your question, please feel free to contact us directly.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4" data-id="17t26ckl6" data-path="components/FAQ.js">
                            <a
                href="mailto:info@stocksummit2025.id"
                className="inline-flex items-center px-4 py-2 bg-white border border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-white transition-colors" data-id="8eak2k5jg" data-path="components/FAQ.js">

                                <i className="fas fa-envelope mr-2" data-id="xjm5s1pr9" data-path="components/FAQ.js"></i> Email Us
                            </a>
                            <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 bg-white border border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-white transition-colors" data-id="jh4apxt5v" data-path="components/FAQ.js">

                                <i className="fas fa-comment-alt mr-2" data-id="7qx6dfmgq" data-path="components/FAQ.js"></i> Contact Form
                            </a>
                            <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white border border-primary-blue text-primary-blue rounded-lg hover:bg-primary-blue hover:text-white transition-colors" data-id="lnxevgkue" data-path="components/FAQ.js">

                                <i className="fab fa-whatsapp mr-2" data-id="rn033t2ji" data-path="components/FAQ.js"></i> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

}