import AboutUs from '../components/AboutUs';
import ExpertsTeam from '../components/ExpertsTeam';
import LandingFooter from '../components/LandingFooter';
import NavBar from '../components/NavBar';

// Main App
export function AboutUsPage() {
  return (
    <div >
      <NavBar />
      <div className="max-w-8xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <AboutUs />
      </div>
      <LandingFooter />
      
    </div>
  );
}