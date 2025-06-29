// This file serves as the main entry point for the React application

// App component - Main container for all sections of the website
function App() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Handle scroll events for header appearance
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
            <Header isScrolled={isScrolled} />
            <main data-id="3kzq232bi" data-path="app.js">
                <Hero />
                <About />
                <Competition />
                <Timeline />
                <PrizesJury />
                <Registration />
                <Referral />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </React.Fragment>);

}

// Render the React application
ReactDOM.render(<App />, document.getElementById('root'));