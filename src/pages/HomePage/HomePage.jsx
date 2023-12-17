import About from "../About/About";
import Bannar from "../Bannar/Bannar";
import CP from "../CP/CP";
import ContactMe from "../ContactMe/ContactMe";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import WD from "../WD/WD";


const HomePage = () => {
    return (
        <div>

            {/* HomePage */}
            <Bannar></Bannar>
            <About></About>
            <Skills></Skills>
            <CP></CP>
            <WD></WD>
            <Education></Education>
            <ContactMe></ContactMe>
            <Footer></Footer>
            

        </div>
    );
};

export default HomePage;