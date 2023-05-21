interface Content {
  imagem: string;
  title: string;
  content1: string;
  content2?: string;
  content3?: string;
  buttonText1: string;
}

export default function SectionFull(props: Content) {
  return (
    <div
      style={{ backgroundImage: `url(${props.imagem})` }}
      className="w-full min-h-screen h-full lg:h-max flex bg-cover bg-center lg:flex-wrap bg-black "
    >
      <div className="w-full h-full lg:h-max flex pt-10 pb-10  items-center lg:pl-6 lg:pr-6 lg:justify-center">
        <div className="max-w-[600px] h-max lg:max-w-[500px] pl-16 lg:pl-0 pb-4 flex flex-col space-y-8">
          <h2 className="text-white font-bold text-[40px] lg:text-[30px] leading-10">
            {props.title}
          </h2>
          <p className="text-white">{props.content1}</p>
          <p className="text-white">{props.content2}</p>
          <p className="text-white">{props.content3}</p>
          <div className="w-full flex space-x-4">
            <button className="max-w-[300px] w-full lg:max-w-full p-3 font-semibold bg-transparent border-2 border-white rounded-md text-white">
              {props.buttonText1}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
