import { useState } from "react";
import { Question } from "../types/Questions"

type Props = {
    question: Question;
    counter: number;
    onAnswer: (answer: number) => void
}

export const QuestionIten = ({question, counter, onAnswer}: Props) => {

    const [selecteAnswer, setSelecteAnswer] = useState<number | null >(null)
    const checkQuestion = (key: number): void => {
       if(selecteAnswer === null){
            setSelecteAnswer(key);
            
            setTimeout(() => {
                onAnswer(key);
                setSelecteAnswer(null)
            }, 2000);
        
       }
    }

    return(
        <div>
            <div className="text-2xl font-bold mb-5">{counter}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        key={key}
                        onClick={()=> checkQuestion(key)}
                        className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-100 border-blue-300

                        ${selecteAnswer !== null ? 'cursor-auto hover:opacity-100' : 'hover:opacity-60'}
                        ${selecteAnswer !== null && selecteAnswer === question.answer && selecteAnswer === key && 'bg-green-100 border-green-300'}
                        ${selecteAnswer !== null && selecteAnswer !== question.answer && selecteAnswer === key && 'bg-red-100 border-red-300'}
                        `}
                    >{item}</div>
                ))}
            </div>            
        </div>
    )
}