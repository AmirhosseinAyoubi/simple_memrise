import React, { useContext, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import { WordsContext } from '../context/WordsContextProvider'
import { AiOutlineSound } from "react-icons/ai"
import { Link } from 'react-router-dom';

function LearendWords() {
    const { state } = useContext(WordsContext);
    const [playSound, setplaySound] = useState(false)


    const play = (word) => {
        const audio = new Audio(word.audio)
        setplaySound(true);
        audio.play();
    }
    return (
        <Container>
            {state.learnedWords.length > 0 ?
                <>
                    <h5 className='text-light mt-5'>you learned This words</h5>
                    {
                        state.learnedWords ? <Table striped bordered hover variant="dark" className='mt-5'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Word</th>
                                    <th>Pronunciation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.learnedWords.map((item, index) => {
                                    return <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.word}</td>
                                        <td><AiOutlineSound onClick={() => play(item)} /></td>
                                    </tr>
                                })}


                            </tbody>
                        </Table> : <Link to={"/"}>back to home page</Link>}</>
                : <>
                    <h5 className='text-light mt-5'>You haven't learned anything yet</h5>
                    <Link to={"/"}>Back to home page</Link>
                </>
            }
        </Container>
    )
}

export default LearendWords
