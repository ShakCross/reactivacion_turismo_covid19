import React from "react";
import styles from "./footer.module.scss";
import {
  faFacebookF,
  faWhatsapp,
  faTwitter,
  faInstagram,
  faYoutube,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iperu from "assets/img/iperu.webp";
import promperu from "assets/img/promperu.webp";
import marcaperu from "assets/img/perumarca.webp";
// import SubscribeInput from 'components/footer/subscribe-input/SubscribeInput'
import Text from "components/general/text/Text";
import SocialICon from "components/footer/social-icon/SocialIcon";
import SubFooter from "components/footer/subfooter/SubFooter";
import { ButtonFooterSubscribe } from "components/general/button/button.stories.js";

const Footer = () => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.inner__wrapper}>
          <div className={styles.wsp__mobile}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/051944492314"
            >
              <button className={styles.button_ws}>
                <FontAwesomeIcon icon={faWhatsapp} />
                <div className={styles.button__div}>Asistencia al viajero</div>
              </button>
            </a>
            <div className={styles.help__mobile}>
              <Text className={styles.h5} content="¿Necesitas ayuda?" />
              <p className={styles.ayuda_p}>Escríbenos las 24 horas</p>
            </div>
          </div>
          <div className={styles.wrapper__links}>
            <div className={styles.inner_wrapper__links}>
              <Text className={styles.h5} content="Información para tu viaje" />
              <ul className={styles.list}>
                <a
                  className={styles.list__link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://export.promperu.gob.pe/emailing/2019/feb/pdf/feriados_2019.pdf"
                >
                  <li>Lista de Feriados</li>
                </a>
                <a
                  className={styles.list__link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.senamhi.gob.pe/"
                >
                  <li>Clima y Pronóstico del Tiempo</li>
                </a>
                <a
                  className={styles.list__link}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.sernanp.gob.pe/"
                >
                  <li>Áreas Naturales Protegidas</li>
                </a>
              </ul>
            </div>
          </div>
          <div className={styles.wrapper__help}>
            <div className={styles.inner_wrapper__help}>
              <div className={styles.wsp}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/051944492314"
                >
                  <button className={styles.button_ws}>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <div className={styles.button__div}>
                      Asistencia al viajero
                    </div>
                  </button>
                </a>
                <div>
                  <Text className={styles.h5} content="¿Necesitas ayuda?" />
                  <p className={styles.ayuda_p}>Escríbenos las 24 horas</p>
                </div>
              </div>
              <div className={styles.social}>
                <Text className={styles.h5} content="Síguenos" />
                <ul className={styles.social_list}>
                  <SocialICon
                    xclassname="fb"
                    xsvg="fb_svg"
                    name={faFacebookF}
                    target="https://www.facebook.com/pages/Visit-Peru/524042817717056"
                  />
                  <SocialICon
                    xclassname="tw"
                    xsvg="tw_svg"
                    name={faTwitter}
                    target="https://twitter.com/conoceelperu"
                  />
                  <SocialICon
                    xclassname="in"
                    xsvg="in_svg"
                    name={faInstagram}
                    targettarget="https://www.instagram.com/ytuqueplanes/"
                  />
                  <SocialICon
                    xclassname="you"
                    xsvg="you_svg"
                    name={faYoutube}
                    target="http://www.youtube.com/visitperu"
                  />
                  <SocialICon
                    xclassname="spo"
                    xsvg="spo_svg"
                    name={faSpotify}
                    target="https://open.spotify.com/user/yt%C3%BAqu%C3%A9planes/playlist/7pTRlBhxN2YhkEqtwu0T4k"
                  />
                </ul>
                <div className={styles.wrapper__perulogos__mobile}>
                  <div className={styles.inner_wrapper__perulogos}>
                    <div>
                      <img
                        className={styles.perulogos}
                        src={iperu}
                        alt="iperu-logo"
                      />
                    </div>
                    <div>
                      <img
                        className={styles.perulogos}
                        src={promperu}
                        alt="promperu-logo"
                      />
                    </div>
                    <div>
                      <img
                        className={styles.perulogos}
                        src={marcaperu}
                        alt="marca-peru-logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.wrapper__subscribe}>
            <div className={styles.inner_wrapper__subscribe}>
              <div className={styles.h5}>
                <Text content="¡Suscríbete para recibir nuevas ofertas y novedades!" />
              </div>
              {/* <SubscribeInput /> */}
              <div className={styles.sub_button}>
                <ButtonFooterSubscribe />
              </div>
              <div className={styles.wrapper__perulogos}>
                <div className={styles.inner_wrapper__perulogos}>
                  <div>
                    <img
                      className={styles.perulogos}
                      src={iperu}
                      alt="iperu-logo"
                    />
                  </div>
                  <div>
                    <img
                      className={styles.perulogos}
                      src={promperu}
                      alt="promperu-logo"
                    />
                  </div>
                  <div>
                    <img
                      className={styles.perulogos}
                      src={marcaperu}
                      alt="marca-peru-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
    </footer>
  );
};

export default Footer;
