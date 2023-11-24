import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';


interface Props {
  position: number;
  hideSideBar: () => void;
}

export default function SideBar({ position, hideSideBar }: Props) {
  return (
    <div
      style={{ right: position }}
      className={`w-[250px] transition-all duration-300 z-50 min-h-screen fixed top-0 bg-black`}
    >
      <div
        onClick={hideSideBar}
        className="w-8 h-8 mt-10 ml-8 mb-16 cursor-pointer"
      >
        <AiOutlineClose className="text-gray-400" size={32} />
      </div>
      <div className="w-full flex flex-col space-y-8 pl-8 pr-8">
        <Link 
        href="/product/[name]" as={`/product/${"BASE"}`}
        className="text-white font-semibold text-sm cursor-pointer">
          DevSensor {"=>"} Base
        </Link>
        <hr className="border-1 border-gray-600 " />
        <Link 
        href="/product/[name]" as={`/product/${"PRO"}`}
        className="text-white font-semibold text-sm cursor-pointer">
        DevSensor {"=>"} PRO
        </Link>
        <hr className="border-1 border-gray-600" />
        <Link 
        href="/product/[name]" as={`/product/${"WEARABLE"}`}
        className="text-white font-semibold text-sm cursor-pointer">
        DevSensor {"=>"} Wearable
        </Link>
        <hr className="border-1 border-gray-600 " />
      </div>
    </div>
  );
}
