
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
const ContactMe = () => {

    return (

        <div className="border-2 bg-[#C2D9FF] py-[50px] my-[20px] px-[30px]">

            <h1 className="font-bold text-center text-5xl">Contact Me</h1>

            <div className="flex flex-col lg:flex-row pt-[50px]">

                <div className="flex-1 flex ">


                    <div className=" font-bold lg:mt-[140px]">


                        <div className="lg:ml-[55px] mt-[10px] flex gap-2 lg:text-[25px] lg:justify-center items-center">
                            <p className=""> <FaLinkedin /></p>
                            <Link className="text-blue-700 font-bold" to="https://www.linkedin.com/in/ifthikhar-ahmed-rizve-2787322a1/" target="_blank">Linkedin Profile</Link>
                        </div>

                        <div className="lg:ml-[55px] mb-[30px] mt-[10px] flex gap-2 lg:text-[25px] items-center">
                            <p className=""> <SiGmail /></p>
                            <Link className="text-blue-700 font-bold" to="iifthikhar.ahmed.rizve001@gmail.com" target="_blank">ifthikhar.ahmed.rizve001@gmail.com</Link>
                        </div>




                    </div>

                </div>

                <div className="flex-1 text-black space-y-3" >


                    <p>Your Name : </p>
                    <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs  border-2" />
                    <br />

                    <p className="pt-[10px]">Your Email : </p>
                    <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs  border-2" />

                    <p className="pt-[10px]">Your Message : </p>
                    <textarea className="textarea border-2 w-full min-h-[200px]  input-bordered " placeholder="Type Your Message"></textarea>

                    <button className="btn btn-primary w-full">Submit</button>



                </div>
            </div>




        </div>

    );
};

export default ContactMe;