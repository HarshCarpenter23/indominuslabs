import Lottie from "react-lottie-player";
import animationData from "../assets/Animation - 1731382855191.json";
import { FadeIn } from "./FadeIn";

const EMauth = () => {
  return (
    <FadeIn>
      <div
        id="emauth"
        className="flex min-h-screen flex-col items-center justify-between px-4 lg:px-24 py-10 lg:py-24 mt-10 md:mt-0"
      >
        <div className="flex flex-col gap-8 lg:gap-12 w-full mb-[70px] justify-center items-start text-left">
          {/* Full-width container */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-12">
            {/* Left Side: Text */}
            <div className="lg:w-1/2 ">
              <h2 className="text-3xl lg:text-5xl font-bold mt-2 leading-tight bg-gradient-to-r from-[#F97B20] to-[#F97B20] text-transparent bg-clip-text">
                Em Auth
              </h2>

              <h2 className="text-2xl lg:text-4xl font-bold mt-2 leading-tight">
                Protect your digital world with{" "}
                <span className="neon-text">password-less </span>
                authentication.
              </h2>
              <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                Experience seamless security. Say goodbye to passwords and hello
                to a safer digital life.
              </p>
              {/* <div className='flex gap-11  items-end'>
              <Image
                src={CSAImg} // replace with correct path
                width={120}
                height={140}
                alt="Fido Certified"
                className="mt-5  h-16.5"
              />

              <Image
                src={TrophyImg} // replace with correct path
                width={70}
                height={100}
                alt="Fido Certified"
                className="mt-5 h-14.2"
              />

              <Image
              
                src={Fido} // replace with correct path
                width={150}
                height={300}
                alt="Fido Certified"
                className="mt-8 h-13.5"
              />

              

              <Image
                src={DeepTechImg} // replace with correct path
                width={100}
                height={300}
                alt="Fido Certified"
                className="mt-5 h-12"
              />


            </div> */}
            </div>

            {/* Right Side: Image */}
            <div className="lg:w-1/2 flex justify-center relative mt-6 lg:mt-0">
              <Lottie
                loop
                animationData={animationData}
                play
                style={{ width: 300, height: 300 }} // Adjust as needed
              />
            </div>
          </div>

          {/* Stats Section Full-Width */}
          <div className="w-full bg-gradient-to-r from-[#F97B20] to-[#F97B20] py-4 lg:py-4 text-gray-800 mt-8 flex justify-around rounded-lg px-6 lg:px-16 font-sans shadow-sm">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#1D2043]">100%</span>
              <span className="text-sm text-[#0C101A]">Password-Free</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#1D2043]">35+</span>
              <span className="text-sm text-[#0C101A]">Experts on Board</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#1D2043]">6+</span>
              <span className="text-sm text-[#0C101A]">Identity</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#1D2043]">2+</span>
              <span className="text-sm text-[#0C101A]">Awards</span>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default EMauth;
