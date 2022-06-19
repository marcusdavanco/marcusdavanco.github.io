import { Container, Background, Content } from "./style";

//@ts-ignore
import Asics from "../../assets/asics.svg?component";
//@ts-ignore
import Flormel from "../../assets/flormel.svg?component";
//@ts-ignore
import CaldoBom from "../../assets/caldobom.svg?component";
//@ts-ignore
import KeepRunning from "../../assets/keeprunning.svg?component";
//@ts-ignore
import Shopfisio from "../../assets/shopfisio.svg?component";
//@ts-ignore
import Liebe from "../../assets/liebe.svg?component";
//@ts-ignore
import Leitura from "../../assets/leitura.svg?component";
//@ts-ignore
import Souq from "../../assets/souq.svg?component";
//@ts-ignore
import Livo from "../../assets/livo.svg?component";
//@ts-ignore
import OficialFarma from "../../assets/oficialfarma.svg?component";
//@ts-ignore
import Ikesaki from "../../assets/ikesaki.svg?component";
//@ts-ignore
import IByte from "../../assets/ibyte.svg?component";
//@ts-ignore
import Luar from "../../assets/luarsports.svg?component";
//@ts-ignore
import Ida from "../../assets/ida.svg?component";

export const SocialProof = () => {
  return (
    <Container>
      <h2>These are the companies I've worked with</h2>
      <Background>
        <Content>
          <Asics />
          <Flormel />
          <CaldoBom />
          <KeepRunning />
          <Shopfisio />
          <Liebe />
          <Leitura />
          <Souq />
          <Livo />
          <OficialFarma />
          <Ikesaki />
          <IByte />
          <Luar className="luar" />
          <Ida className="ida" />
        </Content>
      </Background>
    </Container>
  );
};
