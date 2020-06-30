import React from "react";
import styles from "./notas.module.scss";
import Text from "components/general/text/Text";
import {
  CardNotasSm,
  CardNotasLg,
  CardNotasLgAnchor
} from "components/general/card/card.stories.js";
import data from "data/notas.json";

const Notas = () => {
  return (
    <section className={styles.wrapper}>
      <Text className={styles.title} content="#PrimeroMiSalud #VamosAVolver" />
      <Text
        className={styles.subtitle}
        headingLevel="h2"
        content="Dale	un vistazo a estos contenidos	desde	la	
        comodidad	de tu	hogar. Viaja por el Perú y descubre	sus	lugares	turísticos con un	
        solo click"
      />
      <div className={styles.card_container}>
        {data
          .slice(0, 5)
          .map((post) =>
            post.id == 1 || post.id == 6 ? (
              post.categoria === "Infografía" ? (
                <CardNotasLg
                  key={post.id}
                  title={post.titulo}
                  category={post.categoria}
                  slug={"/notas" + post.slug}
                  alt={post.alt}
                  image={post.imagen}
                  content="Ver infografía"
                />
              ) : (
                <CardNotasLg
                  key={post.id}
                  title={post.titulo}
                  category={post.categoria}
                  slug={"/notas" + post.slug}
                  alt={post.alt}
                  image={post.imagen}
                  content="Ver nota"
                />
              )
            ) : post.categoria === "Infografía" ? (
              <CardNotasSm
                key={post.id}
                title={post.titulo}
                category={post.categoria}
                slug={"/notas" + post.slug}
                alt={post.alt}
                image={post.imagen}
                content="Ver infografía"
              />
            ) : (
              <CardNotasSm
                key={post.id}
                title={post.titulo}
                category={post.categoria}
                slug={"/notas" + post.slug}
                alt={post.alt}
                image={post.imagen}
                content="Ver nota"
              />
            )
          )}
        <CardNotasLgAnchor
          anchor
          title="Estas son las Rutas Cortas del Perú que podrás disfrutar pronto"
          category=""
          slug="https://www.ytuqueplanes.com/rutas-cortas"
          alt="rutas-cortas"
          image="http://mmsolutions.com.pe/img/landing-reactivacion/rupac-lima.jpg"
          content="Elige tu ruta"
        />
      </div>
    </section>
  );
};

export default Notas;
