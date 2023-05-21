import Header from "../components/Header";
import SectionMain from "@/components/SectionMain";
import SectionFull from "@/components/SectionFull";
import { Inter } from "next/font/google";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen bg-[url('/imagem1.webp')] bg-cover bg-center bg-no-repeat">
      <div className="w-full absolute">
        <Header />
      </div>
      <SectionMain />
      <Section2
        imagem="/imagem2.webp"
        title={"TRANSMISSÃO, CHAMADAS DE VÍDEO, JOGOS ON-LINE E MUITO MAIS"}
        content1="Com a Starlink, os usuários podem se envolver em atividades que historicamente não eram possíveis com a internet via satélite."
        content2="O serviço de alta velocidade e baixa latência da Starlink é possível por meio da maior constelação mundial de satélites mais avançados, que operam em uma órbita baixa ao redor da Terra."
        buttonText1="SAIBA MAIS"
      />
      <Section3
        imagem="/imagem3.webp"
        title={"AUTOINSTALAÇÃO FÁCIL"}
        content1="O seu Kit Starlink vem com tudo o que você precisa para se conectar em minutos, incluindo a sua Starlink, um roteador Wi-Fi, cabos e a base."
        content2={`Clique aqui para ver as especificações técnicas da Starlink.`}
        buttonText1="VISUALIZAR INSTALAÇÂO"
      />
      <Section2
        imagem="/imagem4.webp"
        title={"SEM CONTRATOS, TESTE DE 30 DIAS"}
        content1="Contratos de longo prazo impedem que ambas as partes façam alterações sensatas quando necessário."
        content2="Os contratos firmados com a Starlink são justos para ambas as partes. A Starlink pode ajustar termos e preços conforme necessário e os clientes podem cancelar a qualquer momento, por qualquer motivo."
        content3="Experimente qualquer produto Starlink por 30 dias e, se não estiver satisfeito, devolva o equipamento e receba um reembolso total."
        buttonText1="PEDIR AGORA"
      />
      <SectionFull
        title="VIAJE COM A STARLINK"
        imagem="/imagem5.webp"
        content1="Os usuários da Starlink podem ter o mesmo serviço de baixa latência e de alta velocidade que têm em casa, em qualquer local. A Starlink oferece serviço com o complemento de Portabilidade."
        content2="Para aqueles que adoram viajar, a Starlink Viagem permite que seus usuários pausem e reativem o serviço com base em suas necessidades individuais de viagem."
        buttonText1="SAIBA MAIS"
      />
      <Section2
        imagem="/imagem6.webp"
        title={"GERENCIE A STARLINK DESDE O APLICATIVO MÓVEL"}
        content1="O aplicativo da Starlink também ajuda você a personalizar as configurações, receber atualizações, acessar a Assistência, e ver dados de desempenho em tempo real como velocidade de download, latência e tempo de atividade."
        content2="Baixe o aplicativo para determinar o melhor local para configurar antes de instalar. A Starlink precisa de uma visão clara do céu para se conectar aos satélites."
        buttonText1="BAIXAR PARA IOS"
        buttonText2="BAIXAR PARA ANDROID"
      />
      <Section3
        imagem="/imagem8.webp"
        title={"GERENCIE A STARLINK DESDE O APLICATIVO MÓVEL"}
        content1="O aplicativo da Starlink também ajuda você a personalizar as configurações, receber atualizações, acessar a Assistência, e ver dados de desempenho em tempo real como velocidade de download, latência e tempo de atividade."
        content2="Baixe o aplicativo para determinar o melhor local para configurar antes de instalar. A Starlink precisa de uma visão clara do céu para se conectar aos satélites."
        buttonText1="SAIBA MAIS"
      />
    </div>
  );
}
