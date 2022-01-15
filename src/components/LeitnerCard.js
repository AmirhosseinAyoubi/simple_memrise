import React from 'react'
import { AiOutlineSound } from 'react-icons/ai'
import style from "./card.module.css"
function LeitnerCard({ word, image, yesBtnHandler, noBtnHandler, audioHandler, info }) {


    return (
        <div className={style.leitner_content}>
            <div className={style.leitner_info}>
                <h5>leitner box size : {info.leitnerWords.length}</h5>
                <h5>learned wordes : {info.learnedWords.length}</h5>
            </div>

            <div className={style.card}>
                <div className={style.card_content}>
                    <h3 >{word}</h3>
                    <span className={style.sound_icon}>
                        <AiOutlineSound onClick={audioHandler} />
                    </span>
                </div>
                <div className={style.btns}>
                    <button className={`btn  ${style.btn}`} onClick={yesBtnHandler}>Yes</button>
                    <button className={` btn ${style.btn}`} onClick={noBtnHandler}>No</button>
                </div>
            </div>
        </div>
    )
}

export default LeitnerCard
