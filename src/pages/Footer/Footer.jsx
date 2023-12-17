import { FaLinkedin,  FaSearchLocation } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <aside className="items-center ">
                    <p>Ifthikhar Ahmed Rizve</p>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

                    <div className="space-y-2">

                        <div className="flex gap-2 lg:justify-center items-center">
                            <p className=""> <FaLinkedin /></p>
                            <Link className="text-blue-700 font-bold" to="https://www.linkedin.com/in/ifthikhar-ahmed-rizve-2787322a1/" target="_blank">Linkedin Profile</Link>
                        </div>

                        <div className="flex  gap-2 items-center ">
                            <p className=""> <SiGmail /></p>
                            <Link className="text-blue-700 font-bold" to="iifthikhar.ahmed.rizve001@gmail.com" target="_blank">ifthikhar.ahmed.rizve001@gmail.com</Link>
                        </div>

                        <div className="flex gap-2 items-center">
                            <p className=""> <FaSearchLocation /></p>
                            <Link className="text-blue-700 font-bold" to="iifthikhar.ahmed.rizve001@gmail.com" target="_blank">Halishahar, Chattogram , Bangladesh</Link>
                        </div>
                        
                    </div>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;