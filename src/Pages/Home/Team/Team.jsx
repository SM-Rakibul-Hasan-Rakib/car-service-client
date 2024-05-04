import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";

const Team = () => {
  return (
    <div>
      <h1 className="text-2xl text-center text-orange-500 font-bold">Team</h1>
      <h2 className="font-bold text-3xl mt-3 text-center">Meet Our Team</h2>
      <p className="text-center mt-2">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>
      <div className="grid mt-20 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*  */}
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src={img1}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Car Engine Plug
              </h2>
              <p className="dark:text-gray-800">Engine Expert</p>
            </div>
            <div className="flex justify-between text-3xl">
              <span className="text-blue-500">
                <FaFacebook />
              </span>
              <span className="text-blue-400">
                {" "}
                <span>
                  {" "}
                  <FaSquareXTwitter />
                </span>
              </span>
              <span className="text-blue-800">
                <FaLinkedin />
              </span>
              <span className="text-red-500">
                {" "}
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>

        {/* card-2 */}
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src={img2}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Car Engine Plug
              </h2>
              <p className="dark:text-gray-800">Engine Expert</p>
            </div>
            <div className="flex justify-between text-3xl">
              <span className="text-blue-500">
                <FaFacebook />
              </span>
              <span className="text-blue-400">
                {" "}
                <span>
                  {" "}
                  <FaSquareXTwitter />
                </span>
              </span>
              <span className="text-blue-800">
                <FaLinkedin />
              </span>
              <span className="text-red-500">
                {" "}
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src={img3}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                Car Engine Plug
              </h2>
              <p className="dark:text-gray-800">Engine Expert</p>
            </div>
            <div className="flex justify-between text-3xl">
              <span className="text-blue-500">
                <FaFacebook />
              </span>
              <span className="text-blue-400">
                {" "}
                <span>
                  {" "}
                  <FaSquareXTwitter />
                </span>
              </span>
              <span className="text-blue-800">
                <FaLinkedin />
              </span>
              <span className="text-red-500">
                {" "}
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
