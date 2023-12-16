
import { FaLinkedin } from "react-icons/fa";
const ContactMe = () => {

    return (

        <div className="border-2 bg-[#C2D9FF] py-[50px] my-[20px] px-[30px]">

            <h1 className="font-bold text-center text-5xl">Contact Me</h1>

            <div className="flex flex-col lg:flex-row pt-[50px]">

                <div className="flex-1 flex ">


                    <div className=" font-bold">
                      <p className="text-[25px]"> <FaLinkedin /></p>

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