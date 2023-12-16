/* eslint-disable react/no-unescaped-entities */


const Bannar = () => {
    return (
        <div className="bg-[#F3F8FF]  py-[120px] flex flex-col lg:flex-row justify-center items-center gap-10 rounded-full">

            <div className="ml-[50px]  flex-1">
                <p className="text-[30px] font-bold"> Hello I'm </p>
                <p className="text-[50px] font-bold"> Ifthikhar Ahmed Rizve</p>
                <p className="text-[40px] font-bold"> Competitive Programmer &</p>
                <p className="text-[40px] font-bold"> Web Developer</p>


            </div>
            <div className="flex-1">

                <div className="flex">
                    <img className="h-[300px] rounded-full" src="/src/assets/images/Rizve.jpeg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Bannar;