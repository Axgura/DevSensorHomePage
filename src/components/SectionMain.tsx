export default function Section1() {
  return (
    <div className="max-w-[660px] min-h-screen felx items-center justify-center m-auto">
      <div className="w-max h-[90px] relative flex m-auto  items-center space-x-8 ">
        <div className="w-[90px] h-[40px] flex lg2:hidden lg:opacity-90 bg-[url('/logo_x_white.png')] bg-cover bg-center"></div>
        <a className="text-white hover:underline font-roboto font-semibold lg:hidden text-sm">
          RESIDENCIAL
        </a>
        <a className="text-white hover:underline font-roboto font-semibold lg:hidden text-sm">
          COMERCIAL
        </a>
        <a className="text-white hover:underline font-roboto font-semibold lg:hidden text-sm">
          VIAGEM
        </a>
        <a className="text-white hover:underline font-roboto font-semibold lg:hidden text-sm">
          MARITÍMA
        </a>
        <a className="text-white hover:underline font-roboto font-semibold lg:hidden text-sm">
          AVIAÇÃO
        </a>
        <a className="text-white hover:underline font-roboto font-semibold lg:hidden text-sm">
          IOT
        </a>
      </div>
      <div className="w-full min-h-[calc(100vh-90px)] flex place-content-between flex-col pt-8 pb-8 space-y-8">
        <div className="w-full flex pl-6 pr-6 flex-col justify-center space-y-8">
          <h2 className="text-center font-roboto text-white font-bold text-5xl">
            PEDIR UMA STARLINK
          </h2>
          <p className="max-w-[566px] text-white text-center m-auto">
            Internet de banda larga de alta velocidade e baixa latência em
            locais remotos e rurais em todo o mundo. Custo único do equipamento
            a partir de R$ 2.000 mais internet a partir de R$ 230, sem incluir
            impostos.
          </p>
        </div>
        <div className="w-full h-max pl-6 pr-6 flex lg:flex-wrap lg:space-y-4 lg: lg:space-x-0 space-x-4">
          <input
            className="w-full outline-none bg-[#ffffff2d] text-sm text-white placeholder-gray-300 p-4 rounded-md border-2 "
            type="text"
            placeholder="ENDEREÇO DE SERVIÇO"
          />
          <button className="min-w-[190px] bg-white lg:w-full font-semibold rounded-md text-black text-sm p-4">
            SAIBA MAIS
          </button>
        </div>
      </div>
    </div>
  );
}
