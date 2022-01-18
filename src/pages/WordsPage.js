import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from "./wordsPage.module.css"
import { WordsContext } from '../context/WordsContextProvider'
import WordsCard from '../components/WordsCard'
import axios from 'axios'
import { Container } from 'react-bootstrap'

function WordsPage() {



    const { level } = useParams()
    const { dispatch } = useContext(WordsContext);
    const [words, setwords] = useState(null)
    const [currentCard, setcurrentCard] = useState(null)

    const get =  () => {
      axios.get("https://mocki.io/v1/dcbf86d4-72e4-49ab-8f2f-2f9b2447f294")
      .then(res=> (setwords(res.data.words[level]) || setcurrentCard(res.data.words[level][0])))
    }

    useEffect(() => {
        get()

    }, [level]);

    const [playSound, setPlaySound] = useState(false)
    const [i, seti] = useState(1)

    let wordsLength = words && words.length
    const nextBtnHandler = () => {
        if (i < wordsLength) {
            setcurrentCard(words[i])
            seti(i => i + 1)

        }
        else if (i === wordsLength) {
            alert("finished")
        }
    }
    const prevBtnHandler = () => {
        if (i < wordsLength && i > 0) {
            setcurrentCard(words[i - 2])
            seti(i => i - 1)
        }
        else if (i === wordsLength) {
            setcurrentCard(words[i - 2])
            seti(i => i - 1)

        }
    }
    const audio = new Audio(currentCard && currentCard.audio)
    const play = () => {
        setPlaySound(true);
        audio.play();
    }

    return (
        <>
            level: {level}
            <Container className={style.container}>
                {
                    currentCard ?
                        <>
                            <WordsCard word={currentCard.word} image={currentCard.image} index={i}
                                wordsLength={wordsLength}
                                prevBtnHandler={prevBtnHandler}
                                nextBtnHandler={nextBtnHandler}
                                audioHandler={play} />
                            <button className={`btn ${style.add_to_leitner}`} onClick={() => dispatch({ type: "ADD_TO_LEITNER", payload: currentCard })}>Add to leitner</button>
                        </> :
                        <p>Loading...</p>
                }
            </Container>
        </>
    )
}

export default WordsPage
