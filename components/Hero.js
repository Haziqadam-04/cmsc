// This component is used in app.js for the hero section

function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center bg-gradient-to-r from-primary-blue to-secondary-blue pt-16" data-id="geu57zmdv" data-path="components/Hero.js">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10" data-id="5nbq46s70" data-path="components/Hero.js">
                <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-primary-gold" data-id="vrbqdo9if" data-path="components/Hero.js"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-primary-gold" data-id="8j3w3lzyu" data-path="components/Hero.js"></div>
                <div className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-primary-gold" data-id="dsgj1d7js" data-path="components/Hero.js"></div>
                <div className="absolute top-3/4 left-1/3 w-20 h-20 rounded-full bg-primary-gold" data-id="wimnhj25s" data-path="components/Hero.js"></div>
                
                {/* Graph-like pattern */}
                <svg className="absolute bottom-0 left-0 w-full h-48 opacity-20" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg" data-id="bciewe2br" data-path="components/Hero.js">
                    <path d="M0,150 C300,120 500,180 800,120 C1000,80 1200,150 1200,150 L1200,200 L0,200 Z" fill="#D4AF37" data-id="ne2koz5sn" data-path="components/Hero.js" />
                </svg>
            </div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10 py-16" data-id="as43nuvku" data-path="components/Hero.js">
                <div className="max-w-5xl mx-auto text-center" data-id="ho83pfm1h" data-path="components/Hero.js">
                    {/* Organization Name */}
                    <h3 className="text-primary-gold font-heading text-xl md:text-2xl mb-4 font-semibold tracking-wider fade-in" data-id="uqp0vdsh2" data-path="components/Hero.js">CMSC UI PRESENTS</h3>
                    
                    {/* Event Title */}
                    <h1 className="text-white font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight slide-in-left" data-id="ezvuq4cg9" data-path="components/Hero.js">
                        STOCK SUMMIT 
                        <span className="text-primary-gold" data-id="6q7p6buxe" data-path="components/Hero.js">2025</span>
                    </h1>
                    
                    {/* Tagline */}
                    <p className="text-white text-xl md:text-2xl lg:text-3xl mb-10 slide-in-right font-light" data-id="ay0njye99" data-path="components/Hero.js">
                        Rising Star, Rising Nation
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 fade-in" style={{ animationDelay: "0.3s" }} data-id="g63y3kv24" data-path="components/Hero.js">
                        <a href="#registration" className="btn-primary text-lg md:text-xl px-8 py-4 w-full sm:w-auto" data-id="wlj6yf7fx" data-path="components/Hero.js">
                            Register Now
                        </a>
                        <a href="#competition" className="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-blue text-lg md:text-xl px-8 py-4 w-full sm:w-auto" data-id="osub4dmev" data-path="components/Hero.js">
                            Learn More
                        </a>
                    </div>
                    
                    {/* Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-white" data-id="e4s2c67vg" data-path="components/Hero.js">
                        <div className="p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm" data-id="a51sbpsxc" data-path="components/Hero.js">
                            <h4 className="text-primary-gold text-3xl md:text-4xl font-bold" data-id="e63agzj5k" data-path="components/Hero.js">10+</h4>
                            <p className="text-sm md:text-base" data-id="5xzlsrjfa" data-path="components/Hero.js">Universities</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm" data-id="oi3xdnsft" data-path="components/Hero.js">
                            <h4 className="text-primary-gold text-3xl md:text-4xl font-bold" data-id="mvxvlwci4" data-path="components/Hero.js">500+</h4>
                            <p className="text-sm md:text-base" data-id="uv4z5fa9b" data-path="components/Hero.js">Participants</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm" data-id="xvczojjnw" data-path="components/Hero.js">
                            <h4 className="text-primary-gold text-3xl md:text-4xl font-bold" data-id="of9kjw5mk" data-path="components/Hero.js">50M+</h4>
                            <p className="text-sm md:text-base" data-id="qxcgp3y1a" data-path="components/Hero.js">Prize Pool</p>
                        </div>
                        <div className="p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm" data-id="22yyt5a7p" data-path="components/Hero.js">
                            <h4 className="text-primary-gold text-3xl md:text-4xl font-bold" data-id="j2r2hj6f0" data-path="components/Hero.js">5</h4>
                            <p className="text-sm md:text-base" data-id="09z7oww4u" data-path="components/Hero.js">Competition Categories</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

}