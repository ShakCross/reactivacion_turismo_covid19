import React from 'react'
import styles from './categoria.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faImage } from "@fortawesome/free-solid-svg-icons";

export default {
    title: 'Categoria'
};

export const CategoriaTexto = ({content}) => {
    return (
        <button className={styles.wrapper_button}>
            {content}
        </button>
    )
}

export const CategoriaVideo = () => {
    return (
        <button className={styles.wrapper_circle}>
            <FontAwesomeIcon icon={faPlay} />
        </button>
    )
}

export const CategoriaImagen = () => {
    return (
        <button className={styles.wrapper_circle}>
            <FontAwesomeIcon icon={faImage} />
        </button>
    )
}