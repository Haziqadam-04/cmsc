// This component is used in app.js for the Registration section

function Registration() {
  // State for form handling
  const [formStep, setFormStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    teamName: '',
    university: '',
    category: '',
    leadName: '',
    leadEmail: '',
    leadPhone: '',
    member1Name: '',
    member1Email: '',
    member2Name: '',
    member2Email: '',
    referralCode: '',
    agreeToTerms: false
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Move to next form step
  const nextStep = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
    // Scroll to top of form
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Move to previous form step
  const prevStep = (e) => {
    e.preventDefault();
    setFormStep(formStep - 1);
    // Scroll to top of form
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Move to confirmation step
    setFormStep(4);
  };

  // Generate registration code
  const registrationCode = 'SS25-' + Math.random().toString(36).substring(2, 8).toUpperCase();

  return (
    <section id="registration" className="section bg-pattern py-20" data-id="9lsap4x6s" data-path="components/Registration.js">
            <div className="container mx-auto px-4 md:px-6" data-id="0an4indra" data-path="components/Registration.js">
                <div className="max-w-4xl mx-auto" data-id="jrq1i62i0" data-path="components/Registration.js">
                    <div className="text-center mb-16" data-id="cf1102q6l" data-path="components/Registration.js">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-900 mb-4" data-id="j53cxtwu3" data-path="components/Registration.js">
                            <span className="text-primary-blue" data-id="qcjel8qs1" data-path="components/Registration.js">Registration</span>
                        </h2>
                        <div className="w-24 h-1 bg-primary-gold mx-auto mb-6" data-id="9l8t5ax67" data-path="components/Registration.js"></div>
                        <p className="text-lg text-neutral-700 max-w-3xl mx-auto" data-id="co0rpigc9" data-path="components/Registration.js">
                            Register your team for Stock Summit 2025 and prepare to showcase your financial talents.
                        </p>
                    </div>
                    
                    {/* Registration Steps */}
                    <div className="mb-10" data-id="4qrl9hw1z" data-path="components/Registration.js">
                        <div className="flex flex-wrap justify-center" data-id="k751vejzz" data-path="components/Registration.js">
                            <div className={`w-full sm:w-1/4 text-center px-2 mb-4 ${formStep >= 1 ? 'opacity-100' : 'opacity-50'}`} data-id="gggx01nal" data-path="components/Registration.js">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${formStep >= 1 ? 'bg-primary-blue text-white' : 'bg-neutral-300'}`} data-id="52xm68n8j" data-path="components/Registration.js">
                                    <i className="fas fa-users" data-id="vjmy4r9kr" data-path="components/Registration.js"></i>
                                </div>
                                <p className="text-sm font-medium" data-id="6plt59lqz" data-path="components/Registration.js">Team Information</p>
                            </div>
                            <div className={`w-full sm:w-1/4 text-center px-2 mb-4 ${formStep >= 2 ? 'opacity-100' : 'opacity-50'}`} data-id="ipgvoqj6n" data-path="components/Registration.js">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${formStep >= 2 ? 'bg-primary-blue text-white' : 'bg-neutral-300'}`} data-id="qv8kixrjt" data-path="components/Registration.js">
                                    <i className="fas fa-user-check" data-id="lc1n6ud5q" data-path="components/Registration.js"></i>
                                </div>
                                <p className="text-sm font-medium" data-id="zgq6leltg" data-path="components/Registration.js">Member Details</p>
                            </div>
                            <div className={`w-full sm:w-1/4 text-center px-2 mb-4 ${formStep >= 3 ? 'opacity-100' : 'opacity-50'}`} data-id="2tvjm55gb" data-path="components/Registration.js">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${formStep >= 3 ? 'bg-primary-blue text-white' : 'bg-neutral-300'}`} data-id="q59fxm2p4" data-path="components/Registration.js">
                                    <i className="fas fa-credit-card" data-id="67zkwtd7z" data-path="components/Registration.js"></i>
                                </div>
                                <p className="text-sm font-medium" data-id="nfqmyinkj" data-path="components/Registration.js">Payment</p>
                            </div>
                            <div className={`w-full sm:w-1/4 text-center px-2 mb-4 ${formStep >= 4 ? 'opacity-100' : 'opacity-50'}`} data-id="k221uresz" data-path="components/Registration.js">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${formStep >= 4 ? 'bg-primary-gold text-white' : 'bg-neutral-300'}`} data-id="2nzv5zuwl" data-path="components/Registration.js">
                                    <i className="fas fa-check" data-id="mnwav994j" data-path="components/Registration.js"></i>
                                </div>
                                <p className="text-sm font-medium" data-id="2c7ptquf9" data-path="components/Registration.js">Confirmation</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Registration Form */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden" data-id="50b1vgoyc" data-path="components/Registration.js">
                        {/* Step 1: Team Information */}
                        {formStep === 1 &&
            <form onSubmit={nextStep} data-id="n4z3p9ll6" data-path="components/Registration.js">
                                <div className="p-6 md:p-8" data-id="k52r2kand" data-path="components/Registration.js">
                                    <h3 className="text-2xl font-heading font-semibold mb-6" data-id="vvvm8rd9t" data-path="components/Registration.js">Team Information</h3>
                                    
                                    <div className="space-y-4" data-id="0kfbjeo2j" data-path="components/Registration.js">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="sy0dyxxxr" data-path="components/Registration.js">
                                            <div data-id="sfy7qnc7m" data-path="components/Registration.js">
                                                <label htmlFor="teamName" className="block text-sm font-medium text-neutral-700 mb-1" data-id="mzlbfz6sv" data-path="components/Registration.js">Team Name *</label>
                                                <input
                        type="text"
                        id="teamName"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                        placeholder="Enter your team name"
                        required data-id="72uy7gfqh" data-path="components/Registration.js" />

                                            </div>
                                            <div data-id="wzmq39vw0" data-path="components/Registration.js">
                                                <label htmlFor="university" className="block text-sm font-medium text-neutral-700 mb-1" data-id="ew5cn45tz" data-path="components/Registration.js">University/Institution *</label>
                                                <input
                        type="text"
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                        placeholder="Enter your university name"
                        required data-id="evksnhkdj" data-path="components/Registration.js" />

                                            </div>
                                        </div>
                                        
                                        <div data-id="wxrxny83c" data-path="components/Registration.js">
                                            <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-1" data-id="ge2fpmsu2" data-path="components/Registration.js">Competition Category *</label>
                                            <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                      required data-id="i8615vdsl" data-path="components/Registration.js">

                                                <option value="" data-id="kvnnlemul" data-path="components/Registration.js">Select a category</option>
                                                <option value="stock-trading" data-id="j6uicrfoz" data-path="components/Registration.js">Stock Trading Simulation</option>
                                                <option value="research" data-id="h3fqhbqaw" data-path="components/Registration.js">Equity Research Challenge</option>
                                                <option value="fintech" data-id="0yofomlc4" data-path="components/Registration.js">FinTech Innovation Challenge</option>
                                            </select>
                                        </div>
                                        
                                        <div className="bg-neutral-50 p-4 rounded-lg" data-id="r6s6296fm" data-path="components/Registration.js">
                                            <h4 className="font-medium mb-2" data-id="tuemazo49" data-path="components/Registration.js">Registration Fees:</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm" data-id="s1cay457n" data-path="components/Registration.js">
                                                <div className="p-3 bg-white rounded border border-neutral-200" data-id="t6ss5m4o3" data-path="components/Registration.js">
                                                    <div className="font-semibold" data-id="l8ie8d5iv" data-path="components/Registration.js">Stock Trading</div>
                                                    <div data-id="hp0szdplt" data-path="components/Registration.js">IDR 350,000/team</div>
                                                </div>
                                                <div className="p-3 bg-white rounded border border-neutral-200" data-id="3vle8jrls" data-path="components/Registration.js">
                                                    <div className="font-semibold" data-id="vq2uprpl0" data-path="components/Registration.js">Equity Research</div>
                                                    <div data-id="yz6tsmt56" data-path="components/Registration.js">IDR 400,000/team</div>
                                                </div>
                                                <div className="p-3 bg-white rounded border border-neutral-200" data-id="4e0lzdhlg" data-path="components/Registration.js">
                                                    <div className="font-semibold" data-id="aip0a86yi" data-path="components/Registration.js">FinTech Challenge</div>
                                                    <div data-id="kz82he927" data-path="components/Registration.js">IDR 450,000/team</div>
                                                </div>
                                            </div>
                                            <p className="text-xs text-neutral-500 mt-2" data-id="dvh3uf218" data-path="components/Registration.js">* Early bird discount: 15% off until February 1, 2025</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 flex justify-end" data-id="twfuovdu3" data-path="components/Registration.js">
                                    <button
                  type="submit"
                  className="px-6 py-2 bg-primary-blue text-white rounded-lg hover:bg-secondary-blue transition-colors" data-id="rru16chx4" data-path="components/Registration.js">

                                        Next Step <i className="fas fa-arrow-right ml-2" data-id="gcwtwpn2r" data-path="components/Registration.js"></i>
                                    </button>
                                </div>
                            </form>
            }
                        
                        {/* Step 2: Team Members */}
                        {formStep === 2 &&
            <form onSubmit={nextStep} data-id="r40dr1sxf" data-path="components/Registration.js">
                                <div className="p-6 md:p-8" data-id="znt68lwuo" data-path="components/Registration.js">
                                    <h3 className="text-2xl font-heading font-semibold mb-6" data-id="j4h6wv963" data-path="components/Registration.js">Team Members</h3>
                                    
                                    <div className="space-y-6" data-id="8syld4lsy" data-path="components/Registration.js">
                                        {/* Team Leader */}
                                        <div className="border-b border-neutral-200 pb-4" data-id="fgxzgw1ym" data-path="components/Registration.js">
                                            <h4 className="font-medium mb-3" data-id="3i1owieq8" data-path="components/Registration.js">Team Leader Information</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="c5xvdj7e7" data-path="components/Registration.js">
                                                <div data-id="pnnlq6v2p" data-path="components/Registration.js">
                                                    <label htmlFor="leadName" className="block text-sm font-medium text-neutral-700 mb-1" data-id="ny4yvbjce" data-path="components/Registration.js">Full Name *</label>
                                                    <input
                          type="text"
                          id="leadName"
                          name="leadName"
                          value={formData.leadName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                          placeholder="Enter team leader's name"
                          required data-id="50zvtga9o" data-path="components/Registration.js" />

                                                </div>
                                                <div data-id="8bdrr76eu" data-path="components/Registration.js">
                                                    <label htmlFor="leadEmail" className="block text-sm font-medium text-neutral-700 mb-1" data-id="hsk606hrs" data-path="components/Registration.js">Email Address *</label>
                                                    <input
                          type="email"
                          id="leadEmail"
                          name="leadEmail"
                          value={formData.leadEmail}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                          placeholder="Enter team leader's email"
                          required data-id="irmujmd72" data-path="components/Registration.js" />

                                                </div>
                                            </div>
                                            <div className="mt-3" data-id="e3xartxck" data-path="components/Registration.js">
                                                <label htmlFor="leadPhone" className="block text-sm font-medium text-neutral-700 mb-1" data-id="jjsu1r7o3" data-path="components/Registration.js">Phone Number *</label>
                                                <input
                        type="tel"
                        id="leadPhone"
                        name="leadPhone"
                        value={formData.leadPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                        placeholder="Enter team leader's phone number"
                        required data-id="ljawdhh92" data-path="components/Registration.js" />

                                            </div>
                                        </div>
                                        
                                        {/* Team Member 1 */}
                                        <div className="border-b border-neutral-200 pb-4" data-id="lz9lj0gzt" data-path="components/Registration.js">
                                            <h4 className="font-medium mb-3" data-id="kocxkgsmh" data-path="components/Registration.js">Team Member 1</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="ukrrctyht" data-path="components/Registration.js">
                                                <div data-id="zwj35igzb" data-path="components/Registration.js">
                                                    <label htmlFor="member1Name" className="block text-sm font-medium text-neutral-700 mb-1" data-id="oi94bki1m" data-path="components/Registration.js">Full Name *</label>
                                                    <input
                          type="text"
                          id="member1Name"
                          name="member1Name"
                          value={formData.member1Name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                          placeholder="Enter member's name"
                          required data-id="96eernn31" data-path="components/Registration.js" />

                                                </div>
                                                <div data-id="s894bfc9h" data-path="components/Registration.js">
                                                    <label htmlFor="member1Email" className="block text-sm font-medium text-neutral-700 mb-1" data-id="vbif6mkob" data-path="components/Registration.js">Email Address *</label>
                                                    <input
                          type="email"
                          id="member1Email"
                          name="member1Email"
                          value={formData.member1Email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                          placeholder="Enter member's email"
                          required data-id="k10919w7g" data-path="components/Registration.js" />

                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Team Member 2 */}
                                        <div data-id="9mzd0cl2h" data-path="components/Registration.js">
                                            <h4 className="font-medium mb-3" data-id="wtv3e3h5s" data-path="components/Registration.js">Team Member 2</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="njw6ecpc1" data-path="components/Registration.js">
                                                <div data-id="614pv5ofw" data-path="components/Registration.js">
                                                    <label htmlFor="member2Name" className="block text-sm font-medium text-neutral-700 mb-1" data-id="zsifce68o" data-path="components/Registration.js">Full Name *</label>
                                                    <input
                          type="text"
                          id="member2Name"
                          name="member2Name"
                          value={formData.member2Name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                          placeholder="Enter member's name"
                          required data-id="esemkxdsi" data-path="components/Registration.js" />

                                                </div>
                                                <div data-id="zg6i43a9x" data-path="components/Registration.js">
                                                    <label htmlFor="member2Email" className="block text-sm font-medium text-neutral-700 mb-1" data-id="8rjrkwwfd" data-path="components/Registration.js">Email Address *</label>
                                                    <input
                          type="email"
                          id="member2Email"
                          name="member2Email"
                          value={formData.member2Email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                          placeholder="Enter member's email"
                          required data-id="cf79lw0kv" data-path="components/Registration.js" />

                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Referral Code */}
                                        <div className="pt-2" data-id="hblvkfy3h" data-path="components/Registration.js">
                                            <label htmlFor="referralCode" className="block text-sm font-medium text-neutral-700 mb-1" data-id="0e800jxt3" data-path="components/Registration.js">Referral Code (if any)</label>
                                            <input
                      type="text"
                      id="referralCode"
                      name="referralCode"
                      value={formData.referralCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                      placeholder="Enter referral code for discount" data-id="r82lxzav4" data-path="components/Registration.js" />

                                            <p className="text-xs text-neutral-500 mt-1" data-id="9c44t54xt" data-path="components/Registration.js">* Get a 10% discount with a valid referral code</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 flex justify-between" data-id="3tefrg3y7" data-path="components/Registration.js">
                                    <button
                  type="button"
                  className="px-6 py-2 bg-neutral-200 text-neutral-800 rounded-lg hover:bg-neutral-300 transition-colors"
                  onClick={prevStep} data-id="ez9wppuc3" data-path="components/Registration.js">

                                        <i className="fas fa-arrow-left mr-2" data-id="ekowrvjim" data-path="components/Registration.js"></i> Previous
                                    </button>
                                    <button
                  type="submit"
                  className="px-6 py-2 bg-primary-blue text-white rounded-lg hover:bg-secondary-blue transition-colors" data-id="joq89v7w6" data-path="components/Registration.js">

                                        Next Step <i className="fas fa-arrow-right ml-2" data-id="8nwk302bl" data-path="components/Registration.js"></i>
                                    </button>
                                </div>
                            </form>
            }
                        
                        {/* Step 3: Payment */}
                        {formStep === 3 &&
            <form onSubmit={handleSubmit} data-id="95hblsi3l" data-path="components/Registration.js">
                                <div className="p-6 md:p-8" data-id="j0d75kjq8" data-path="components/Registration.js">
                                    <h3 className="text-2xl font-heading font-semibold mb-6" data-id="l2df00mnt" data-path="components/Registration.js">Payment Information</h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="oarf7nkqb" data-path="components/Registration.js">
                                        <div data-id="9dxe96p57" data-path="components/Registration.js">
                                            <h4 className="font-medium mb-4" data-id="p92zi73y2" data-path="components/Registration.js">Payment Details</h4>
                                            
                                            <div className="bg-neutral-50 p-4 rounded-lg mb-6" data-id="r1y9w3tjp" data-path="components/Registration.js">
                                                <div className="flex justify-between mb-2" data-id="zl1o1xcm8" data-path="components/Registration.js">
                                                    <span className="text-neutral-700" data-id="5ovj37q1m" data-path="components/Registration.js">Registration Fee:</span>
                                                    <span className="font-medium" data-id="8g53ydzhs" data-path="components/Registration.js">IDR 400,000</span>
                                                </div>
                                                <div className="flex justify-between mb-2" data-id="fmrxpzotd" data-path="components/Registration.js">
                                                    <span className="text-neutral-700" data-id="pbllai8hw" data-path="components/Registration.js">Referral Discount:</span>
                                                    <span className="font-medium text-green-600" data-id="b7j7rtlih" data-path="components/Registration.js">- IDR 40,000</span>
                                                </div>
                                                <div className="flex justify-between mb-2" data-id="eqlvbhpkr" data-path="components/Registration.js">
                                                    <span className="text-neutral-700" data-id="es06pi0av" data-path="components/Registration.js">Transaction Fee:</span>
                                                    <span className="font-medium" data-id="i1uolwz2y" data-path="components/Registration.js">IDR 5,000</span>
                                                </div>
                                                <div className="border-t border-neutral-300 my-2 pt-2 flex justify-between" data-id="5zbg37run" data-path="components/Registration.js">
                                                    <span className="font-semibold" data-id="fxne3arwf" data-path="components/Registration.js">Total Amount:</span>
                                                    <span className="font-bold text-primary-blue" data-id="yzcmr89vq" data-path="components/Registration.js">IDR 365,000</span>
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-4" data-id="m9lz5lbmd" data-path="components/Registration.js">
                                                <div data-id="i1vfbg5tb" data-path="components/Registration.js">
                                                    <h5 className="font-medium mb-2" data-id="10ghwtolf" data-path="components/Registration.js">Bank Transfer Information</h5>
                                                    <div className="bg-white border border-neutral-200 rounded-lg p-4" data-id="sxdz32cyi" data-path="components/Registration.js">
                                                        <div className="mb-2" data-id="uv3ocd9ih" data-path="components/Registration.js">
                                                            <span className="block text-sm text-neutral-500" data-id="6c5bc4aqw" data-path="components/Registration.js">Bank Name</span>
                                                            <span className="font-medium" data-id="4czl99698" data-path="components/Registration.js">Bank Central Asia (BCA)</span>
                                                        </div>
                                                        <div className="mb-2" data-id="v2g822x53" data-path="components/Registration.js">
                                                            <span className="block text-sm text-neutral-500" data-id="16s2owb7h" data-path="components/Registration.js">Account Number</span>
                                                            <span className="font-medium" data-id="62yaukn1n" data-path="components/Registration.js">1234-5678-90</span>
                                                        </div>
                                                        <div data-id="73n43c40b" data-path="components/Registration.js">
                                                            <span className="block text-sm text-neutral-500" data-id="29blh7o7d" data-path="components/Registration.js">Account Name</span>
                                                            <span className="font-medium" data-id="5twsuawqv" data-path="components/Registration.js">CMSC Universitas Indonesia</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="pt-4" data-id="oc324414y" data-path="components/Registration.js">
                                                    <div className="flex items-start mb-4" data-id="4tc8pey0r" data-path="components/Registration.js">
                                                        <input
                            type="checkbox"
                            id="agreeToTerms"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                            className="mt-1 mr-2"
                            required data-id="1tgmsgscy" data-path="components/Registration.js" />

                                                        <label htmlFor="agreeToTerms" className="text-sm text-neutral-700" data-id="ppzhgi860" data-path="components/Registration.js">
                                                            I agree to the <a href="#" className="text-primary-blue hover:underline" data-id="1art3wtdp" data-path="components/Registration.js">Terms and Conditions</a> and have read the <a href="#" className="text-primary-blue hover:underline" data-id="fcpb9lmvt" data-path="components/Registration.js">Privacy Policy</a>
                                                        </label>
                                                    </div>
                                                    
                                                    <p className="text-xs text-neutral-500 mt-2" data-id="qk4jrlala" data-path="components/Registration.js">
                                                        * Please complete your payment within 24 hours to secure your registration
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col items-center justify-center text-center" data-id="pho7hkzln" data-path="components/Registration.js">
                                            <div className="bg-white p-4 border-2 border-primary-gold rounded-lg mb-4" data-id="bqx2bd07q" data-path="components/Registration.js">
                                                <h5 className="font-semibold mb-3" data-id="570xqdzef" data-path="components/Registration.js">Scan for Payment</h5>
                                                <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://stocksummit2025.id/payment/12345"
                        alt="Payment QR Code"
                        className="w-48 h-48 mx-auto" data-id="rn5xln6nv" data-path="components/Registration.js" />

                                                <p className="text-sm mt-3" data-id="xm3du9oqf" data-path="components/Registration.js">
                                                    Scan this QR code to make payment via mobile banking apps.
                                                </p>
                                            </div>
                                            
                                            <p className="text-sm text-neutral-700" data-id="lbn2mnwz7" data-path="components/Registration.js">
                                                After payment, you'll receive a confirmation email with additional instructions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 flex justify-between" data-id="ny5pemlsb" data-path="components/Registration.js">
                                    <button
                  type="button"
                  className="px-6 py-2 bg-neutral-200 text-neutral-800 rounded-lg hover:bg-neutral-300 transition-colors"
                  onClick={prevStep} data-id="0yos5g1ab" data-path="components/Registration.js">

                                        <i className="fas fa-arrow-left mr-2" data-id="ux8g51ic3" data-path="components/Registration.js"></i> Previous
                                    </button>
                                    <button
                  type="submit"
                  className="px-6 py-2 bg-primary-gold text-neutral-900 rounded-lg hover:bg-secondary-gold transition-colors" data-id="hl1l9hws8" data-path="components/Registration.js">

                                        Complete Registration <i className="fas fa-check ml-2" data-id="eyw2veh8a" data-path="components/Registration.js"></i>
                                    </button>
                                </div>
                            </form>
            }
                        
                        {/* Step 4: Confirmation */}
                        {formStep === 4 &&
            <div className="p-6 md:p-8 text-center" data-id="6dlwo5afg" data-path="components/Registration.js">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6" data-id="6tiudqufq" data-path="components/Registration.js">
                                    <i className="fas fa-check text-2xl" data-id="xufnltxz3" data-path="components/Registration.js"></i>
                                </div>
                                
                                <h3 className="text-2xl font-heading font-semibold mb-3" data-id="ury6jhvlj" data-path="components/Registration.js">Registration Complete!</h3>
                                <p className="text-neutral-700 mb-6" data-id="qdw87ar9c" data-path="components/Registration.js">
                                    Your team has been successfully registered for Stock Summit 2025.
                                </p>
                                
                                <div className="bg-neutral-50 p-6 rounded-lg mb-6 inline-block mx-auto" data-id="3v9jgoyuz" data-path="components/Registration.js">
                                    <h4 className="font-medium mb-2" data-id="dyli7oqio" data-path="components/Registration.js">Your Registration Code</h4>
                                    <div className="text-2xl font-mono bg-white py-2 px-4 border border-neutral-300 rounded" data-id="xrde1tkx2" data-path="components/Registration.js">
                                        {registrationCode}
                                    </div>
                                    <p className="text-sm text-neutral-500 mt-2" data-id="zod1obmgu" data-path="components/Registration.js">
                                        Please save this code for future reference
                                    </p>
                                </div>
                                
                                <div className="text-left bg-blue-50 p-4 rounded-lg border-l-4 border-primary-blue mb-6" data-id="5fm4khijy" data-path="components/Registration.js">
                                    <h4 className="font-medium mb-2" data-id="djcn4dc2k" data-path="components/Registration.js">Next Steps:</h4>
                                    <ol className="list-decimal pl-5 space-y-1 text-sm" data-id="qm004s00h" data-path="components/Registration.js">
                                        <li data-id="mt3cpq4ky" data-path="components/Registration.js">Check your email for detailed instructions</li>
                                        <li data-id="bf8wlcm2d" data-path="components/Registration.js">Complete your team profile before February 15, 2025</li>
                                        <li data-id="npv0sa0mw" data-path="components/Registration.js">Join our orientation webinar on March 1, 2025</li>
                                        <li data-id="t75ixygvr" data-path="components/Registration.js">Start preparing for the preliminary round!</li>
                                    </ol>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row justify-center gap-4" data-id="j5ew4elmd" data-path="components/Registration.js">
                                    <a
                  href="#"
                  className="px-6 py-3 bg-primary-blue text-white rounded-lg hover:bg-secondary-blue transition-colors" data-id="l37f48d8r" data-path="components/Registration.js">

                                        <i className="fas fa-download mr-2" data-id="tlai4ntpp" data-path="components/Registration.js"></i> Download Registration PDF
                                    </a>
                                    <a
                  href="#"
                  className="px-6 py-3 bg-neutral-200 text-neutral-800 rounded-lg hover:bg-neutral-300 transition-colors" data-id="m1qisrbno" data-path="components/Registration.js">

                                        <i className="fas fa-share mr-2" data-id="ah9e987yc" data-path="components/Registration.js"></i> Share Your Registration
                                    </a>
                                </div>
                            </div>
            }
                    </div>
                </div>
            </div>
        </section>);

}