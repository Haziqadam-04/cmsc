// This component is used in app.js for site navigation

function Header({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`} data-id="4n8w9x616" data-path="components/Header.js">
            <div className="container mx-auto px-4 md:px-6" data-id="fipcjh5gi" data-path="components/Header.js">
                <div className="flex items-center justify-between" data-id="a73bzuj9y" data-path="components/Header.js">
                    {/* Logo */}
                    <a href="#" className="flex items-center" data-id="w4k0q1081" data-path="components/Header.js">
                        <div className="text-primary-blue font-bold text-xl md:text-2xl font-heading" data-id="75ieqgvp5" data-path="components/Header.js">
                            <span className="text-primary-blue" data-id="niuor9eti" data-path="components/Header.js">CMSC</span>
                            <span className="text-primary-gold" data-id="c7po3d9pj" data-path="components/Header.js">UI</span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8" data-id="zsjgphxqh" data-path="components/Header.js">
                        <a href="#about" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" data-id="44cadjk82" data-path="components/Header.js">About</a>
                        <a href="#competition" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" data-id="5oekjk5mg" data-path="components/Header.js">Competition</a>
                        <a href="#timeline" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" data-id="ta8ullnc5" data-path="components/Header.js">Timeline</a>
                        <a href="#prizes" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" data-id="orpaa76ks" data-path="components/Header.js">Prizes</a>
                        <a href="#registration" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" data-id="5azc0mnp2" data-path="components/Header.js">Register</a>
                        <a href="#faq" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" data-id="4hzpanoj6" data-path="components/Header.js">FAQ</a>
                        <a href="#contact" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" data-id="9pc6c4srq" data-path="components/Header.js">Contact</a>
                        <a href="#registration" className="btn-primary" data-id="9qszlftrx" data-path="components/Header.js">Register Now</a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
            className="md:hidden text-neutral-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu" data-id="qosaaougu" data-path="components/Header.js">

                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} data-id="4elzfd6v4" data-path="components/Header.js"></i>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`} data-id="506yp09y4" data-path="components/Header.js">
                    <nav className="flex flex-col space-y-4 pb-4" data-id="4bxlyj2a8" data-path="components/Header.js">
                        <a href="#about" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" onClick={toggleMenu} data-id="nxcldlngl" data-path="components/Header.js">About</a>
                        <a href="#competition" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" onClick={toggleMenu} data-id="uydpejhuw" data-path="components/Header.js">Competition</a>
                        <a href="#timeline" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" onClick={toggleMenu} data-id="grfkgdvqz" data-path="components/Header.js">Timeline</a>
                        <a href="#prizes" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" onClick={toggleMenu} data-id="ivsw4ecac" data-path="components/Header.js">Prizes</a>
                        <a href="#registration" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" onClick={toggleMenu} data-id="yfe11zzsb" data-path="components/Header.js">Register</a>
                        <a href="#faq" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" onClick={toggleMenu} data-id="e4pjta3k8" data-path="components/Header.js">FAQ</a>
                        <a href="#contact" className="text-neutral-800 hover:text-primary-blue transition-colors duration-300" onClick={toggleMenu} data-id="914alkdhl" data-path="components/Header.js">Contact</a>
                        <a href="#registration" className="btn-primary text-center" onClick={toggleMenu} data-id="tc5l7bmep" data-path="components/Header.js">Register Now</a>
                    </nav>
                </div>
            </div>
        </header>);

}