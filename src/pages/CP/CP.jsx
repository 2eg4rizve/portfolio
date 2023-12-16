import { Link } from "react-router-dom";


const CP = () => {


    return (
        <div className="border-2 border-[#EEE7DA] p-[50px] ">
            <h1 className="text-4xl font-bold text-center mb-[30px]">Competitive Programmer Career</h1>
            <div className="text-[20px] font-bold">
                <li>Computational Problem Solving</li>
                <li>Algorithm</li>
                <li>Data Structure</li>
                <li>Object-oriented programming</li>
                <li>Overall, 3500+ problems were solved on different Online Judges</li>
                <li>I actively engage in over 300+ contests .</li>
            </div>

            <p className="mt-[20px]"></p>

            <div className="grid grid-cols-1 lg:grid-cols-3 font-bold">

                <div className="border-2 border-[#EEE7DA] px-[30px] pt-[50px] h-[250px]">
                    <p>CodeForces</p>
                    <p>I_Am_Riz</p>
                    <p>Max Rating- 1473 (specialist)</p>
                    <p>participated in 95+ contests</p>
                    <p>Solved 400+ problem</p>
                    <Link className="text-blue-700 font-bold" to="https://codeforces.com/profile/I_Am_Riz" target="_blank">View Profile</Link>


                </div>
                <div className="border-2 border-[#EEE7DA] px-[30px] pt-[50px] h-[250px]">

                    <p>CodeForces</p>
                    <p>2eg4rizve</p>
                    <p>Max Rating- 1323 (pupil)</p>
                    <p>participated in 90+ contests</p>
                    <p>Solved 2200+ problem</p>

                    <Link className="text-blue-700 font-bold" to="https://codeforces.com/profile/2eg4rizve" target="_blank">View Profile</Link>

                </div>
                <div className="border-2 border-[#EEE7DA] px-[30px] pt-[50px] h-[250px]">

                    <p>CodeChef</p>
                    <p>rizve</p>
                    <p>Max Rating- 1724 (3 Star)</p>
                    <p>participated in 40+ contests</p>
                    <p>Solved 250+ problem</p>

                    <Link className="text-blue-700 font-bold" to="https://www.codechef.com/users/rizve" target="_blank">View Profile</Link>


                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 font-bold">

                <div className="border-2 border-[#EEE7DA] px-[30px] pt-[50px] h-[250px]">
                    <p>LeetCode</p>
                    <p>2eg4rizve</p>
                    <p>Solved 300+ problem</p>
                    <Link className="text-blue-700 font-bold" to="https://leetcode.com/2eg4rizve/" target="_blank">View Profile</Link>


                </div>
                <div className="border-2 border-[#EEE7DA] px-[30px] pt-[50px] h-[250px]">

                    <p> LightOJ</p>
                    <p>2eg4rizve</p>
                    <p>Solved 100+ problem</p>

                    <Link className="text-blue-700 font-bold" to="https://lightoj.com/user/2eg4rizve" target="_blank">View Profile</Link>

                </div>
                <div className="border-2 border-[#EEE7DA] px-[30px] pt-[50px] h-[250px]">

                    <p> CSES</p>
                    <p>2eg4rizve</p>
                    <p>Solved 70+ problem</p>

                    <Link className="text-blue-700 font-bold" to="https://cses.fi/user/60134" target="_blank">View Profile</Link>


                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 font-bold">
                <div className="border-2 border-[#EEE7DA] px-[30px] pt-[50px] h-[250px]">
                    <p>UVA</p>
                    <p>2eg4rizve</p>
                    <p>Solved 5+ problem</p>
                    <Link className="text-blue-700 font-bold" to="https://leetcode.com/2eg4rizve/" target="_blank">View Profile</Link>


                </div>
                <div className="border-2 border-[#EEE7DA] px-[30px] pt-[50px] h-[250px]">

                    <p> VJudge</p>
                    <p>2eg4rizve</p>
                   
                    <p>Solved 300+ problem</p>

                    <Link className="text-blue-700 font-bold" to="https://vjudge.net/user/2eg4rizve" target="_blank">View Profile</Link>

                </div>

                <div className="border-2 border-[#EEE7DA] px-[30px] pt-[50px] h-[250px]">

                    <p> AtCoder</p>
                    <p>2eg4rizve</p>
                    <p>Max Rating- 661 (Brown)</p>
                    <p>participated in 45+ contests</p>
                    <p>Solved 350+ problem</p>

                    <Link className="text-blue-700 font-bold" to="https://atcoder.jp/users/2eg4rizve" target="_blank">View Profile</Link>

                </div>

            </div>



        </div>
    );
};

export default CP;