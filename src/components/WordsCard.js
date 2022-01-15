import React from 'react'
import style from "./wordsCard.module.css"
import { AiOutlineSound } from "react-icons/ai"

function WordsCard({ word, image, index, wordsLength, prevBtnHandler, nextBtnHandler, audioHandler }) {
    return (
        <div className={style.card}>
            <div className={style.card_content}>
                {image ? <img src={image} alt={word} /> : <p>Loading</p>}
                <span className={style.sound_icon}>
                    <AiOutlineSound onClick={audioHandler} />
                </span>
                <h3 >{word}</h3>


            </div>
            <div className={style.btns}>
                <button className={`btn  ${style.btn}`}
                    onClick={prevBtnHandler} disabled={index < 2 && true}>Prev</button>
                <button className={` btn ${style.btn}`}
                    onClick={nextBtnHandler} disabled={index > wordsLength - 1 && true}>Next</button>
            </div>
        </div>
    )
}

export default WordsCard
