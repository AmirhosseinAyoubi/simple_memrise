import React, { useState, useContext, useEffect } from 'react'
import LeitnerCard from '../components/LeitnerCard'
import style from "./leitner.module.css"
import { Line } from 'rc-progress';
import { WordsContext } from '../context/WordsContextProvider';
import { Link } from 'react-router-dom';



function Leitner() {
    const { state, dispatch } = useContext(WordsContext);
    const [start, setstart] = useState(false)
    const [progressBar, setProgressBar] = useState(localStorage.getItem("progressing") ?
        (localStorage.getItem("progressing") == "true" ? true : false) : false)
    const [timePercent, settimePercent] = useState(
        localStorage.getItem("remainingTime") ? Number(localStorage.getItem("remainingTime")) : 0)
    const [words, setwords] = useState(state.leitnerWords)

    const [currentCard, setcurrentCard] = useState(words && words[0])
    const [i, seti] = useState(1)
    let learned = []
    let wordsLength = words && words.length

    const [playSound, setPlaySound] = useState(false)




    const yesBtnHandler = () => {
        if (i < wordsLength) {
            words[i - 1].level++
            dispatch({ type: "ADD_TO_LEITNER", payload: words[i - 1] })
            setcurrentCard(words[i])

            if (words[i - 1].level === 5) {
                learned.push(words[i - 1].word)
                dispatch({ type: "ADD_TO_LEARNED_WORDS", payload: words[i - 1] })
                dispatch({ type: "REMOVE_FROM_LEITNER", payload: words[i - 1] })
                delete words[i - 1]

            }
            seti(i => i + 1)

        }
        else if (i === wordsLength) {
            words[i - 1].level++
            dispatch({ type: "ADD_TO_LEITNER", payload: words[i - 1] })
            if (words[i - 1].level === 5) {
                learned.push(words[i - 1].word)
                dispatch({ type: "ADD_TO_LEARNED_WORDS", payload: words[i - 1] })
                dispatch({ type: "REMOVE_FROM_LEITNER", payload: words[i - 1] })
                delete words[i - 1]
                setcurrentCard(null)
            }
            seti(i => i + 1)


            setstart(false)
            setwords(words.filter(item => item && item))
            wordsLength = words.length
            if (words.find(item => item && item)) {
                console.log("here");
                setcurrentCard(words.find(item => item && item))
                seti(1)
                setProgressBar(true)
                const progressInterval = setInterval(() => {
                    settimePercent(prev => prev + 1000)
                }, 1000)
                setTimeout(() => {
                    setProgressBar(false)
                    clearInterval(progressInterval)
                    settimePercent(0)
                }, 3000)
            }
            else {
                alert("finished")
            }


        }
    }
    const noBtnHandler = () => {
        if (i < wordsLength) {
            words[i - 1].level = 1
            dispatch({ type: "ADD_TO_LEITNER", payload: words[i - 1] })
            setcurrentCard({ word: words[i].word, image: words[i].image })
            seti(i => i + 1)
        }
        else if (i === wordsLength) {
            words[i - 1].level = 1
            dispatch({ type: "ADD_TO_LEITNER", payload: words[i - 1] })
            seti(i => i + 1)
            setstart(false)
            setwords(words.filter(item => item && item))
            wordsLength = words.length
            if (words.find(item => item && item)) {
                setcurrentCard(words.find(item => item && item))
                seti(1)
                setProgressBar(true)
                const progressInterval = setInterval(() => {
                    settimePercent(prev => prev + 1000)
                }, 1000)
                setTimeout(() => {
                    setProgressBar(false)
                    clearInterval(progressInterval)
                    settimePercent(0)
                }, 3000)
            }
            else {
                alert("finished")
            }
        }
    }
    const audio = new Audio(currentCard && currentCard.audio)
    const play = () => {
        setPlaySound(true);
        audio.play();
    }

    return (
        <div className={style.leitner_container}>

            {
                progressBar ?
                    <div className={style.progressbar_container}>
                        <h3>Remaining time : {((3000 - timePercent) / 60000).toFixed(2)} minutes</h3>
                        <Line className={style.progressBar} percent={(timePercent / 3000) * 100} strokeWidth={3} strokeColor="#D3D3D3" />
                    </div>

                    : currentCard ? <LeitnerCard

                        audioHandler={play}
                        word={currentCard.word}
                        image={currentCard.image}
                        yesBtnHandler={yesBtnHandler}
                        noBtnHandler={noBtnHandler}
                        info={state} />
                        :
                        <div>
                            <h3>Leitner is empty</h3>
                            <Link to={"/"}>back to home page</Link>
                        </div>

            }



        </div>
    )
}

export default Leitner
