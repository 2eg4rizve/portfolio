/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const Bannar = () => {
    return (
        <div className="bg-[#F3F8FF]  py-[120px] flex flex-col lg:flex-row justify-center items-center gap-10 rounded-full">

            <div className="ml-[50px]  flex-1">
                <p className="text-[30px] font-bold"> Hello I'm </p>
                <p className="text-[50px] font-bold"> Ifthikhar Ahmed Rizve</p>
                <p className="text-[40px] font-bold"> Competitive Programmer &</p>
                <p className="text-[40px] font-bold"> Web Developer</p>

                <div className="lg:ml-[40px] mt-[50px]">
                    <Link className="text-blue-700 font-bold" to="https://drive.google.com/file/d/1GXeokeylH7hBOfbWTNoE67xLId27HG4P/view" target="_blank">View Resume</Link>
                </div>
                <div className="lg:ml-[55px] mt-[10px]">
                    <Link className="text-blue-700 font-bold" to="https://www.linkedin.com/in/ifthikhar-ahmed-rizve-2787322a1/" target="_blank">Linkedin Profile</Link>

                </div>

            </div>
            <div className="flex-1">

                {/* <div className="flex justify-center items-center">
                    <img className="h-[300px] rounded-full" src="./src/assets/images/Rizve.jpeg" alt="" />
                </div> */}

                <div className="flex justify-center items-center">
                    <img className="h-[300px] rounded-full" src="https://i.ibb.co/3rsPVWr/Rizve.jpg" alt="" />
                </div>




            </div>
        </div>
    );
};

export default Bannar;