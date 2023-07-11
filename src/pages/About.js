import AboutBanner from "../component/AboutBanner";
import AboutUs from "../component/AboutUs";
import WhyUs from "../component/WhyUs";
import ExpertsInField from "../component/ExpertsInField";
import MeetWithUs from "../component/MeetWithUs";
import OurStaff from "../component/OurStaff";
import Footer from "../component/Footer";

const About = () => {
    return (
        <div className="About">
            <AboutBanner />
            <AboutUs />
            <WhyUs />
            <ExpertsInField />
            <MeetWithUs />
            <OurStaff />
            <Footer />
        </div>
    )
}

export default About;