import Link from 'next/link';



export default function Section1() {


  return (
    <div className="max-w-[660px] min-h-screen felx items-center justify-center m-auto">
      <div className="w-max h-[90px] relative flex m-auto  items-center space-x-8 ">
        {/* <div className="w-[90px] h-[40px] flex lg2:hidden lg:opacity-90 bg-[url('/devsensor_logo_image.png')] bg-cover bg-center"></div> */}

        <Link 
        className="text-white cursor-pointer hover:underline font-roboto font-semibold lg:hidden text-sm"
        href="/product/[name]" as={`/product/${"BASE"}`}>
          BASE
        </Link>

        <Link 
        className="text-white cursor-pointer hover:underline font-roboto font-semibold lg:hidden text-sm"
        href="/product/[name]" as={`/product/${"PRO"}`}>
          PRO
        </Link>

        <Link 
        className="text-white cursor-pointer hover:underline font-roboto font-semibold lg:hidden text-sm"
        href="/product/[name]" as={`/product/${"WEARABLE"}`}>
          WEARABLE
        </Link>

      </div>

      <div className="w-full min-h-[calc(100vh-90px)] flex place-content-between flex-col pt-8 pb-8 space-y-8">
        <div className="w-full flex pl-6 pr-6 flex-col justify-center space-y-8">
          <h2 className="text-center uppercase p-2 mt-18 font-roboto text-white font-bold text-4xl">
           Health, Posture and Productivity.
          </h2>
          <p className="max-w-[566px] text-white text-center m-auto text-semibold">
          Improve and maintain your posture while being productive.
          </p>
        </div>
        <div className="w-full h-max pl-6 pr-6 flex lg:flex-wrap lg:space-y-4 lg: lg:space-x-0 space-x-4">
          <input
            className="w-full outline-none bg-[#ffffff2d] font-semibold text-base text-white placeholder-gray-300 p-4 border-2 "
            type="text"
            placeholder="SERVICE ADDRESS"
          />
          <button 
          className="m-1 max-w-[300px] w-full lg:max-w-full p-6 font-semibold bg-white border-2 border-black  text-black"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
