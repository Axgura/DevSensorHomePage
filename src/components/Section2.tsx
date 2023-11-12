interface Content {
  imagem: string;
  title: string;
  content1: string;
  content2?: string;
  content3?: string;
  buttonText1: string;
  buttonText2?: string;
}

export default function Section2(props: Content) {
  return (
    <div className="w-full min-h-screen h-full lg:h-max flex lg:flex-wrap bg-black ">
      <div
        style={{ backgroundImage: `url(${props.imagem})` }}
        className={`w-full h-full lg:min-h-[500px] bg-cover`}
      ></div>
      <div className="w-full h-full lg:h-max flex pt-10 pb-10 items-center lg:pl-8 lg:pr-8 lg:justify-center">
        <div className="max-w-[650px] h-max lg:max-w-[500px] pl-24 lg:pl-0 flex flex-col space-y-8">
          <h2 className="text-white font-bold text-[40px] lg:text-[26px] leading-10">
            {props.title}
          </h2>
          <p className="text-white">{props.content1}</p>
          <p className="text-white">{props.content2}</p>
          <p className="text-white">{props.content3}</p>
          <div className="w-full flex space-x-4 lg:flex-wrap lg:space-x-0 lg:space-y-4">
            <button className="max-w-[300px] w-full lg:max-w-full p-3 font-semibold bg-black border-2 border-white text-white">
              {props.buttonText1}
            </button>
            {props.buttonText2 ? (
              <button className="w-[300px] lg:w-full p-3 font-semibold bg-black border-2 border-white text-white">
                {props.buttonText2}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
