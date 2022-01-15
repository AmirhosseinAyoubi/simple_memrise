import React, { createContext, useReducer } from 'react'

const initialState = {
    leitnerWords: (localStorage.getItem("leitner") && localStorage.getItem("leitner").length > 0) ?
        JSON.parse(localStorage.getItem("leitner")) : [],
    learnedWords: (localStorage.getItem("learnedWords") && localStorage.getItem("learnedWords").length > 0) ?
        JSON.parse(localStorage.getItem("learnedWords")) : []
}
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_LEITNER":
            const exist = state.leitnerWords.find(x => x.id === action.payload.id)
            if (exist) {
                return {
                    ...state,
                    leitnerWords: [...state.leitnerWords.filter(x => x.word !== exist.word), action.payload]
                }

            }
            else {

                return {
                    ...state,
                    leitnerWords: [...state.leitnerWords, action.payload]
                }
            }

        case "REMOVE_FROM_LEITNER":
            const newLeitnerWords = state.leitnerWords.filter(x => x.id !== action.payload.id)
            console.log(newLeitnerWords);
            if (!newLeitnerWords.length > 0) {
                return {
                    ...state,
                    leitnerWords: []
                }
            }
            else {
                return {
                    ...state,
                    leitnerWords: [...newLeitnerWords]
                }
            }
        case "ADD_TO_LEARNED_WORDS":
            const isExist = state.learnedWords.find(x => x.id === action.payload.id)
            if (isExist) {
                return {
                    ...state,
                    learnedWords: [...state.learnedWords.filter(x => x.id !== isExist.id), action.payload]
                }
            }
            else {

                return {
                    ...state,
                    learnedWords: [...state.learnedWords, action.payload]
                }
            }

        default:
            return state
    }
}
export const WordsContext = createContext()

function WordsContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    localStorage.setItem("leitner", JSON.stringify(state.leitnerWords))
    localStorage.setItem("learnedWords", JSON.stringify(state.learnedWords))

    return (
        <WordsContext.Provider value={{ state, dispatch }}>
            {children}
        </WordsContext.Provider>
    )
}

export default WordsContextProvider
