// This component is used in app.js for the Contact section

function Contact() {
  // State for form data
  const [contactForm, setContactForm] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for form submission
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    // Simulate form submission with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-white py-20" data-id="nkodbvhj9" data-path="components/Contact.js">
            <div className="container mx-auto px-4 md:px-6" data-id="1awb8g2yz" data-path="components/Contact.js">
                <div className="max-w-5xl mx-auto" data-id="3sqi7ok49" data-path="components/Contact.js">
                    <div className="text-center mb-16" data-id="pnkabs6dw" data-path="components/Contact.js">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4" data-id="87kar2pew" data-path="components/Contact.js">
                            Contact <span className="text-primary-blue" data-id="zvvv2padn" data-path="components/Contact.js">Us</span>
                        </h2>
                        <div className="w-24 h-1 bg-primary-gold mx-auto mb-6" data-id="eh6ykk20z" data-path="components/Contact.js"></div>
                        <p className="text-lg text-neutral-700 max-w-3xl mx-auto" data-id="uk1o0p4np" data-path="components/Contact.js">
                            Have questions or need more information? We're here to help you.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10" data-id="b08rzmwoa" data-path="components/Contact.js">
                        {/* Contact Form */}
                        <div data-id="bi56bjzh1" data-path="components/Contact.js">
                            <div className="bg-neutral-50 rounded-xl p-6 md:p-8 shadow-sm" data-id="gm2vwvo96" data-path="components/Contact.js">
                                <h3 className="text-2xl font-heading font-semibold mb-6" data-id="atz1x37u3" data-path="components/Contact.js">Send Us a Message</h3>
                                
                                {submitSuccess &&
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg" data-id="2j5726bd7" data-path="components/Contact.js">
                                        <div className="flex items-center" data-id="7na8g6bfb" data-path="components/Contact.js">
                                            <i className="fas fa-check-circle mr-2" data-id="ze3p0uhl5" data-path="components/Contact.js"></i>
                                            <span data-id="47zdq12j3" data-path="components/Contact.js">Your message has been sent successfully! We'll get back to you soon.</span>
                                        </div>
                                    </div>
                }
                                
                                {submitError &&
                <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg" data-id="ahr4icsrs" data-path="components/Contact.js">
                                        <div className="flex items-center" data-id="27z3z1o2i" data-path="components/Contact.js">
                                            <i className="fas fa-exclamation-circle mr-2" data-id="hyen47tud" data-path="components/Contact.js"></i>
                                            <span data-id="tj9airt1v" data-path="components/Contact.js">There was an error sending your message. Please try again later.</span>
                                        </div>
                                    </div>
                }
                                
                                <form onSubmit={handleSubmit} data-id="kbhuanvm4" data-path="components/Contact.js">
                                    <div className="space-y-4" data-id="kk3ssnnc7" data-path="components/Contact.js">
                                        <div data-id="6jhlnlzk4" data-path="components/Contact.js">
                                            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1" data-id="0p3ru947x" data-path="components/Contact.js">Your Name *</label>
                                            <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                        placeholder="Enter your name"
                        required data-id="wp394ztax" data-path="components/Contact.js" />

                                        </div>
                                        
                                        <div data-id="hw42u0kk9" data-path="components/Contact.js">
                                            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1" data-id="d093f0x5o" data-path="components/Contact.js">Email Address *</label>
                                            <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                        placeholder="Enter your email"
                        required data-id="gh4y2mzxy" data-path="components/Contact.js" />

                                        </div>
                                        
                                        <div data-id="lwvfuw0nj" data-path="components/Contact.js">
                                            <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1" data-id="yazu1ti3k" data-path="components/Contact.js">Subject *</label>
                                            <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                        placeholder="Enter subject"
                        required data-id="ipbge63lz" data-path="components/Contact.js" />

                                        </div>
                                        
                                        <div data-id="mli7owzad" data-path="components/Contact.js">
                                            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1" data-id="xkfmczkfp" data-path="components/Contact.js">Message *</label>
                                            <textarea
                        id="message"
                        name="message"
                        value={contactForm.message}
                        onChange={handleInputChange}
                        rows="5"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                        placeholder="Enter your message"
                        required data-id="q24x3e204" data-path="components/Contact.js">
                      </textarea>
                                        </div>
                                        
                                        <div data-id="zzqq5kkf4" data-path="components/Contact.js">
                                            <button
                        type="submit"
                        className="w-full py-3 bg-primary-blue text-white rounded-lg hover:bg-secondary-blue transition-colors flex items-center justify-center"
                        disabled={isSubmitting} data-id="sp2t6ris6" data-path="components/Contact.js">

                                                {isSubmitting ?
                        <>
                                                        <span className="mr-2" data-id="gquguniws" data-path="components/Contact.js">Sending...</span>
                                                        <i className="fas fa-circle-notch fa-spin" data-id="ywkyu1svd" data-path="components/Contact.js"></i>
                                                    </> :

                        <>
                                                        Send Message
                                                        <i className="fas fa-paper-plane ml-2" data-id="9zipoczg0" data-path="components/Contact.js"></i>
                                                    </>
                        }
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        {/* Contact Information */}
                        <div data-id="vt4hj7vrc" data-path="components/Contact.js">
                            <div className="bg-primary-blue text-white rounded-xl p-6 md:p-8 shadow-sm h-full" data-id="l919wvhyo" data-path="components/Contact.js">
                                <h3 className="text-2xl font-heading font-semibold mb-6" data-id="uu3q7f664" data-path="components/Contact.js">Contact Information</h3>
                                
                                <div className="space-y-6" data-id="bvh02f53n" data-path="components/Contact.js">
                                    <div className="flex items-start" data-id="n295n1lnf" data-path="components/Contact.js">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0" data-id="gxl6yjfvy" data-path="components/Contact.js">
                                            <i className="fas fa-map-marker-alt text-primary-gold" data-id="wh7tbnd4x" data-path="components/Contact.js"></i>
                                        </div>
                                        <div data-id="ad8aj2783" data-path="components/Contact.js">
                                            <h4 className="font-medium text-lg mb-1" data-id="o99uw3lax" data-path="components/Contact.js">Address</h4>
                                            <p className="text-white/80" data-id="p9ltnxiuy" data-path="components/Contact.js">
                                                CMSC UI Office<br data-id="k8n8zti2j" data-path="components/Contact.js" />
                                                Faculty of Economics and Business<br data-id="jt8oi3mum" data-path="components/Contact.js" />
                                                Universitas Indonesia<br data-id="j3bzlixe8" data-path="components/Contact.js" />
                                                Depok, West Java 16424
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start" data-id="fgpamme3l" data-path="components/Contact.js">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0" data-id="6dy5a0c4k" data-path="components/Contact.js">
                                            <i className="fas fa-envelope text-primary-gold" data-id="f2oj34n14" data-path="components/Contact.js"></i>
                                        </div>
                                        <div data-id="lq34dbxtx" data-path="components/Contact.js">
                                            <h4 className="font-medium text-lg mb-1" data-id="6620ctgx0" data-path="components/Contact.js">Email</h4>
                                            <p className="text-white/80" data-id="pwsi3ga0j" data-path="components/Contact.js">
                                                General Inquiries: <a href="mailto:info@stocksummit2025.id" className="hover:text-primary-gold transition-colors" data-id="deqi6tawf" data-path="components/Contact.js">info@stocksummit2025.id</a><br data-id="7hxoc481s" data-path="components/Contact.js" />
                                                Registration: <a href="mailto:register@stocksummit2025.id" className="hover:text-primary-gold transition-colors" data-id="cwvjk7ym1" data-path="components/Contact.js">register@stocksummit2025.id</a><br data-id="gffvch03y" data-path="components/Contact.js" />
                                                Partnership: <a href="mailto:partnership@stocksummit2025.id" className="hover:text-primary-gold transition-colors" data-id="pmiysx7r3" data-path="components/Contact.js">partnership@stocksummit2025.id</a>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start" data-id="r0lh9vpz7" data-path="components/Contact.js">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0" data-id="d1gr9ikcz" data-path="components/Contact.js">
                                            <i className="fas fa-phone-alt text-primary-gold" data-id="3mmunn6cg" data-path="components/Contact.js"></i>
                                        </div>
                                        <div data-id="lpq08n86x" data-path="components/Contact.js">
                                            <h4 className="font-medium text-lg mb-1" data-id="avbpdf1ga" data-path="components/Contact.js">Phone</h4>
                                            <p className="text-white/80" data-id="wsymhse6k" data-path="components/Contact.js">
                                                Helpdesk: +62 812-3456-7890<br data-id="640rx9ar0" data-path="components/Contact.js" />
                                                Office: (021) 7272-1234
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start" data-id="2mckh4kwn" data-path="components/Contact.js">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0" data-id="8i4p30wiu" data-path="components/Contact.js">
                                            <i className="far fa-clock text-primary-gold" data-id="ktaotboev" data-path="components/Contact.js"></i>
                                        </div>
                                        <div data-id="rkrt1ql97" data-path="components/Contact.js">
                                            <h4 className="font-medium text-lg mb-1" data-id="8cbpvm3rj" data-path="components/Contact.js">Office Hours</h4>
                                            <p className="text-white/80" data-id="i0g6k1atn" data-path="components/Contact.js">
                                                Monday - Friday: 9:00 AM - 5:00 PM<br data-id="jb56y8qro" data-path="components/Contact.js" />
                                                Saturday: 10:00 AM - 2:00 PM<br data-id="xa58dlxul" data-path="components/Contact.js" />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="pt-4" data-id="a3l6km5ct" data-path="components/Contact.js">
                                        <h4 className="font-medium text-lg mb-3" data-id="6j0q8mpg0" data-path="components/Contact.js">Follow Us</h4>
                                        <div className="flex space-x-4" data-id="ytp6w43sd" data-path="components/Contact.js">
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-gold transition-colors" data-id="41pnjnu69" data-path="components/Contact.js">
                                                <i className="fab fa-instagram" data-id="uvgjw24am" data-path="components/Contact.js"></i>
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-gold transition-colors" data-id="3dqvqgn0h" data-path="components/Contact.js">
                                                <i className="fab fa-twitter" data-id="6ojizpqww" data-path="components/Contact.js"></i>
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-gold transition-colors" data-id="68s1sd3g3" data-path="components/Contact.js">
                                                <i className="fab fa-linkedin-in" data-id="6j5ts0som" data-path="components/Contact.js"></i>
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-gold transition-colors" data-id="ng5vnzbn3" data-path="components/Contact.js">
                                                <i className="fab fa-youtube" data-id="qdvjatyyv" data-path="components/Contact.js"></i>
                                            </a>
                                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-gold transition-colors" data-id="c0itac5p5" data-path="components/Contact.js">
                                                <i className="fab fa-line" data-id="ksa3vpnqj" data-path="components/Contact.js"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Map */}
                    <div className="mt-16" data-id="dqy0elmvo" data-path="components/Contact.js">
                        <div className="rounded-xl overflow-hidden shadow-sm h-[400px]" data-id="4da8w4w3g" data-path="components/Contact.js">
                            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2230424802613!2d106.8226300147643!3d-6.364302695396369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec6b07b68ea5%3A0x17da46bdf9308386!2sFaculty%20of%20Economics%20and%20Business%20Universitas%20Indonesia!5e0!3m2!1sen!2sid!4v1627984882543!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="CMSC UI Location" data-id="ysx953oa1" data-path="components/Contact.js">
              </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

}