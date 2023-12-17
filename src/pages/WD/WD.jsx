import { Link } from "react-router-dom";


const WD = () => {
    return (
        <div className="border-2 border-[#EEE7DA] p-[50px]  my-[50px]">
            <h1 className="font-bold text-center text-5xl my-[40px]  ">Web Development Career</h1>

            <div className="text-[20px] font-bold ml-[30px] mb-[30px]">
                <li> HTML</li>
                <li>CSS</li>
                <li>TailwindCSS</li>
                <li>DaisyUI</li>
                <li>Bootstrap</li>
                <li> React</li>
                <li> Node.js</li>
                <li> Express</li>
                <li>Firebase</li>
                <li>JSON Web Token</li>
                <li>MongoDB</li>
             

            </div>

            <button className="btn my-[20px] border-blue-500">
            <Link className="text-blue-700 font-bold " to="https://github.com/2eg4rizve" target="_blank">View Github</Link>
            </button>


            <div className="border-2 border-red-400 p-5 ">

                <p className="text-[25px] font-bold">Library Management System</p>

                <div className="my-[10px]">
                    <Link className="text-blue-700 font-bold" to="https://library-cb6f7.web.app/" target="_blank">Live</Link>
                    <Link className="text-blue-700 font-bold ml-[30px]" to="https://github.com/2eg4rizve/library-client" target="_blank">Client Side Code</Link>
                    <Link className="text-blue-700 font-bold  ml-[30px]" to="https://github.com/2eg4rizve/library-server" target="_blank">Server Side Code</Link>
                </div>

                <p className="mt-[15px] font-bold text-[20px]">Project Details</p>
                <p>
                    Discover a rich array of books spanning genres like Thriller, History, Novel, Drama, and Sci-Fi on our user-friendly website. Our elegant authentication system enables seamless registration via email or Google login, with users greeted by their email address and picture in the navbar upon login. Private routes safeguard exclusive content for authorized users, while a captivating banner section showcases images with an automatic carousel effect.Engage with FAQs for quick insights, explore diverse blogs, and comment in our private Blog section. Animated elements enhance the overall user experience. Dive into detailed book information, effortlessly update or add new books post-login, and easily manage borrowed books. Our platform ensures a hassle-free book borrowing experience, with users conveniently tracking and returning borrowed items.
                </p>

                <p className="mt-[15px] font-bold text-[20px]">Technology I Use</p>
                <p>
                    React , React Router , React hook , Ten Stack Query , HTML, CSS , Tailwindcss , DaisyUi., JavaScript , Express , Node.js,
                    Firebase , JSON Web Token, and MongoDB and many more .
                </p>




            </div>


            <div className="border-2 border-red-400 p-5 mt-[10px]">

                <p className="text-[25px] font-bold">Event Management</p>

                <div className="my-[10px]">
                    <Link className="text-blue-700 font-bold" to="https://assingnment-9.web.app/" target="_blank">Live</Link>
                    <Link className="text-blue-700 font-bold ml-[30px]" to="https://github.com/2eg4rizve/Event-Management" target="_blank">Client Side Code</Link>
                    <Link className="text-blue-700 font-bold  ml-[30px]" to="https://github.com/2eg4rizve/Event-Management" target="_blank">Server Side Code</Link>
                </div>

                <p className="mt-[15px] font-bold text-[20px]">Project Details</p>
                <p>
                    Embark on effortless event planning through our user-friendly platform, featuring a diverse array of Social Events Services. From weddings to corporate events, our secure authentication system, alongside private routes, ensures exclusive access for authorized users. Upon registration or login, users enjoy a personalized touch with their email address and picture displayed in the navbar. Delve into comprehensive service details, grasp our mission through the About and Specialty sections, and easily reach out via the Contact Us session. Explore a captivating Album section, exclusively accessible to authenticated users, showcasing event images categorized for a personalized experience. Uncover transparent pricing with our Tier List of Price and immerse yourself in the festive section, highlighting elements like Foods, Drinks, Music, Dance, Fun, and Games. Let our interactive and engaging website redefine your event planning experience.
                </p>

                <p className="mt-[15px] font-bold text-[20px]">Technology I Use</p>
                <p>
                    HTML, CSS , TailwindCSS , DaisyUi., JavaScript , React , React Router , React hook , Ten Stack Query , Express , Node.js,
                    Firebase , JSON Web Token, and MongoDB and many more .
                </p>




            </div>


            <div className="border-2 border-red-400 p-5 mt-[10px]">

                <p className="text-[25px] font-bold">Technology and Electronic</p>

                <div className="my-[10px]">
                    <Link className="text-blue-700 font-bold" to="https://technology-4b453.web.app/" target="_blank">Live</Link>
                    <Link className="text-blue-700 font-bold ml-[30px]" to="https://github.com/2eg4rizve/technology-client" target="_blank">Client Side Code</Link>
                    <Link className="text-blue-700 font-bold  ml-[30px]" to="https://github.com/2eg4rizve/technology-server" target="_blank">Server Side Code</Link>
                </div>

                <p className="mt-[15px] font-bold text-[20px]">Project Details</p>
                <p>
                    Explore a variety of top Technology and Electronics Brands such as Apple, HP, Samsung, Sony, Google, and Intel on our user-friendly website. Our seamless authentication system allows easy registration via email or Google login, with personalized email and picture display in the navbar upon login or registration. Private routes ensure exclusive access for authorized users, and FAQs provide quick insights.

                    Engage with our captivating website featuring different animations and a beautiful banner section showcasing product images with an automatic carousel effect. Dive into detailed product information, including image, name, brand, type, price, description, and rating upon login. The private Blog section allows users to explore and comment, while logged-in users can access full product details, update or add new products, and manage their cart effortlessly. Simplify your shopping experience by easily viewing, adding, and deleting cart products on our interactive platform.






                </p>

                <p className="mt-[15px] font-bold text-[20px]">Technology I Use</p>
                <p>
                    Express , Node.js, Firebase , JSON Web Token, and MongoDB , HTML, CSS , TailwindCSS , DaisyUi., JavaScript , React , React Router , React hook , Ten Stack Query ,  and many more .
                </p>




            </div>



        </div>
    );
};

export default WD;