"use client"

import { QuestionIten } from './components/QuestionIten';
import { Results } from './components/Results';
import { questions } from './data/questions';
import {useState} from 'react'

export default function Home() {

    const [currentQestion, setCurrentQuetion] =  useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);
    const title: string = "Quiz de Culinária";

    const loadNextQuestion = () =>{
        if(questions[currentQestion + 1]){
          setCurrentQuetion(currentQestion + 1)
        }else{
          setShowResult(true)
        }
    }

    const handlleAnswered = (answer: number): void =>{
        setAnswers([...answers, answer])
        loadNextQuestion();
    }
    const handllClea = (): void =>{
      setCurrentQuetion(0)
      setAnswers([])
      setShowResult(false)
    }

  return (
      <div className="w-full h-screen flex justify-center items-center bg-blue-600">
          <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
            <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
            <div className="p-5">
              {!showResult && 
               <QuestionIten
                  question={questions[currentQestion]}
                  counter={currentQestion + 1}
                  onAnswer={handlleAnswered}
                />
              }
            </div>
            {showResult &&
              <Results 
                  questions={questions}
                  answers={answers}
              />
            }
            <div className="p-5 text-center border-t border-gray-300">
                {!showResult &&
                  `${currentQestion + 1} de ${questions.length} Pergunta ${questions.length === 1 ? '' : 's'}`
                }
                {showResult &&
                  <button className="px-3 py-2 rounded-md bg-blue-800 text-white" onClick={handllClea}>Reiniciar Quiz</button>

                }
            </div>
          </div>
      </div>
  )
}
