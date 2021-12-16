/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* Importação do CSS */
import "./App.css";

/* Importação do Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";

/* Importação da logo da DT3 */
import Logo from "./assets/logos/Logo1.png";

/* Importação dos ícones das redes sociais */
import Instagram from "./assets/icons/instagram.svg";
import Facebook from "./assets/icons/facebook.svg";
import Twitter from "./assets/icons/twitter.svg";
import Youtube from "./assets/icons/youtube.svg";

/* Importação da imagem das avaliações */
import rate from "./assets/icons/rate.png";

/* Importação das imagens menores do Carousel */
import CarouselRhinoBlue from "./assets/carousel/carousel-blue.png";
import CarouselRhinoGreen from "./assets/carousel/carousel-green.png";
import CarouselRhinoOrange from "./assets/carousel/carousel-orange.png";
import CarouselRhinoRed from "./assets/carousel/carousel-red.png";
import CarouselRhinoWhite from "./assets/carousel/carousel-white.png";
import CarouselRhinoBlack from "./assets/carousel/carousel-black.png";

/* Importação das imagens maiores do Carousel */
import RhinoBlack from "./assets/cadeiras-semFundo/Rhino-Black.png";
import RhinoRed from "./assets/cadeiras-semFundo/Rhino-Red.png";
import RhinoBlue from "./assets/cadeiras-semFundo/Rhino-Blue.png";
import RhinoOrange from "./assets/cadeiras-semFundo/Rhino-Orange.png";
import RhinoGreen from "./assets/cadeiras-semFundo/Rhino-Green.png";
import RhinoWhite from "./assets/cadeiras-semFundo/Rhino-White.png";

/* Importação da imagem principal */
import Capa from "./assets/capas/capa.jpg";

/* Importação das imagens de especificações */
import Design from "./assets/capas/design.jpg";
import Construção from "./assets/capas/construção.jpg";
import VideoFrog from "./assets/capas/video.mp4";
import Garantia from "./assets/capas/garantia.jpg";
import RhinoLateral from "./assets/capas/Rhino-Lateral.svg";
import RhinoFrontal from "./assets/capas/Rhino-Frontal.svg";

/* Importação dos componentes usados da biblioteca do React-Bootstrap */
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  Tabs,
  Tab,
  Table,
} from "react-bootstrap";

function App() {
  function alterarImagem(imagem) {
    /* Pegando a imagem grande */
    var foto = document.querySelector("#imagem-grande");
    /* Alterando a imagem grande, variando sobre as cores */
    foto.setAttribute("src", imagem);
  }

  return (
    <div className="hotsite">
      <header className="navbar">
        <Container>
          <Row className="logo">
            <Col>
              <a href="#">
                <img src={Logo} />
              </a>
            </Col>
          </Row>
          <Row className="nav-links">
            <Col>
              <a href="https://www.dt3sports.com.br/">Loja</a>
              <a href="#section-3">Especificações</a>
              <a href="#footer">Redes sociais</a>
            </Col>
          </Row>
        </Container>
      </header>

      <main>
        <div className="section-1">
          <div className="infos-cadeira">
            <h2>Cadeira Gamer DT3sports Rhino</h2>
            <h3>Elite Series</h3>
            <div className="rate">
              <img src={rate} />
            </div>
            <div className="description">
              <ul>
                <li>Apoio de braço 4D ajustável.</li>
                <li>
                  Estrutura 100% de aço reforçado para suportar maior peso.
                </li>
                <li>
                  Estofamento de couro sintético PU “Premium Label Edition” com
                  maior espessura.
                </li>
                <li>
                  Rodas especiais de 75mm super resistentes para piso ou
                  carpete.
                </li>
                <li>
                  Duas almofadas inclusas para apoio lombar e pescoço. Ambas com
                  logos bordados.
                </li>
                <li>Mecanismo Frog com trava do sistema rocking.</li>
              </ul>
            </div>

            <div className="comprar">
              <div className="price">
                <h2>
                  <strong>R$</strong> 2.699,91
                </h2>
              </div>
              <a href="https://www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-rhino/">
                <button>ADQUIRA AGORA</button>
              </a>
            </div>
          </div>

          <div className="imagens-cadeira">
            <div className="imagem-grande">
              <img id="imagem-grande" src={RhinoBlack} />
            </div>
            <div className="carousel-cadeira">
              <Carousel indicators={false}>
                <CarouselItem>
                  <img
                    src={CarouselRhinoBlack}
                    onClick={() => alterarImagem(RhinoBlack)}
                  />
                  <img
                    src={CarouselRhinoWhite}
                    onClick={() => alterarImagem(RhinoWhite)}
                  />
                  <img
                    src={CarouselRhinoRed}
                    onClick={() => alterarImagem(RhinoRed)}
                  />
                  <img
                    src={CarouselRhinoOrange}
                    onClick={() => alterarImagem(RhinoOrange)}
                  />
                  <img
                    src={CarouselRhinoGreen}
                    onClick={() => alterarImagem(RhinoGreen)}
                  />
                  <img
                    src={CarouselRhinoBlue}
                    onClick={() => alterarImagem(RhinoBlue)}
                  />
                </CarouselItem>
              </Carousel>
            </div>
          </div>
        </div>

        <div className="section-2">
          <img src={Capa} />
        </div>

        <div id="section-3">
          <Tabs defaultActiveKey="design" id="uncontrolled-tab-example">
            <Tab eventKey="design" title="Design" className="design">
              <img src={Design} />
              <h2>Design</h2>
              <p>
                A costura com padrão hexagonal da Rhino complementa o estilo
                racing com um toque refinado.
              </p>
            </Tab>
            <Tab
              eventKey="construção"
              title="Construção"
              className="construção"
            >
              <h1>A VERDADEIRA HEAVY DUTY</h1>
              <div className="construção-infos">
                <div className="construção-texto">
                  <h2>Estrutura 100% aço durabilidade garantida</h2>
                  <p>
                    A Rhino tem estrutura mais larga e reforçada para aguentar
                    até 200kg. Produzida com solda automatizada e aço sólido de
                    25mm de diâmetro, tem sua durabilidade assegurada mesmo após
                    6 anos de uso pela garantia na estrutura.
                  </p>
                  <h2>Espuma que não perde o formato</h2>
                  <p>
                    – Espuma injetada de densidade 65g/m³ para durabilidade,
                    ergonomia e conforto.
                  </p>
                  <p>
                    – A alta tecnologia torna a espuma dimensionalmente estável,
                    não perdendo o formato mesmo após longos períodos de uso.
                  </p>
                </div>
                <div className="construção-imagem">
                  <img src={Construção} />
                </div>
              </div>
            </Tab>
            <Tab eventKey="Sistema-Frog" title="Sistema Frog">
              <div className="frog">
                <div className="frog-texto">
                  <h2 id="frog-title">Sistema Frog</h2>
                  <p id="frog-text">
                    A exclusividade de poder travar em qualquer ângulo. O
                    mecanismo frog, proporciona a mesma sensação que as
                    clássicas poltronas de avô dão, onde você sente o seu corpo
                    totalmente em repouso sem forçar a musculatura para atingir
                    a posição ideal e mais confortável.
                  </p>
                </div>
                <div className="frog-gif">
                  <video
                    autoplay="1"
                    loop="1"
                    preload="auto"
                    src={VideoFrog}
                    width="100%"
                  ></video>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Garantia" title="Garantia">
              <div className="garantia">
                <div className="garantia-imagem">
                  <img src={Garantia} />
                </div>
                <div className="garantia-texto">
                  <h2>Todas as cadeiras da Elite Series contam com:</h2>
                  <p>6 anos na estrutura de aço</p>
                  <p>3 anos na base e rodinhas</p>
                  <p>2 anos no cilíndro de gás</p>
                  <p>1 ano nas demais partes</p>
                </div>
              </div>
            </Tab>
            <Tab eventKey="especificações" title="Especificações">
              <div className="especificações">
                <div className="especificações-imagens">
                  <img src={RhinoFrontal} />
                  <img src={RhinoLateral} />
                </div>
                <div className="especificações-table">
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Revestimento</td>
                        <td>Couro PU Premium</td>
                      </tr>
                      <tr>
                        <td>Estrutura</td>
                        <td>100% Aço 2.0mm</td>
                      </tr>
                      <tr>
                        <td>Densidade do estofamento</td>
                        <td>65D</td>
                      </tr>
                      <tr>
                        <td>Espessura do assento</td>
                        <td>12cm</td>
                      </tr>
                      <tr>
                        <td>Braço</td>
                        <td>4D</td>
                      </tr>
                      <tr>
                        <td>Almofadas</td>
                        <td>Pescoço e lombar</td>
                      </tr>
                      <tr>
                        <td>Cilindro</td>
                        <td>Classe 4, 100mm</td>
                      </tr>
                      <tr>
                        <td>Rodas</td>
                        <td>Nylon com acabamento em PU, 75mm</td>
                      </tr>
                      <tr>
                        <td>Certificações</td>
                        <td>BIFMA, EN 1335, TUV</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </main>

      <footer id="footer">
        <div className="redes-sociais">
          <div className="redes-sociais-texto">
            <h2>Siga-nos nas redes sociais</h2>
            <h3>
              Publicamos constantemente nas nossas redes sociais promoções,
              atualizações de produto, lançamentos, eventos e outras coisas
              incríveis!
            </h3>
          </div>
          <div className="redes-sociais-icons">
            <img src={Facebook} />
            <img src={Instagram} />
            <img src={Twitter} />
            <img src={Youtube} />
            /dt3sports
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
