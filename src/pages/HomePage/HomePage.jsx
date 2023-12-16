import About from "../About/About";
import Bannar from "../Bannar/Bannar";
import CP from "../CP/CP";
import ContactMe from "../ContactMe/ContactMe";
import Education from "../Education/Education";
import WD from "../WD/WD";


const HomePage = () => {
    return (
        <div>

            {/* HomePage */}
            <Bannar></Bannar>
            <About></About>
            <CP></CP>
            <WD></WD>
            <ContactMe></ContactMe>
            <Education></Education>

        </div>
    );
};

export default HomePage;