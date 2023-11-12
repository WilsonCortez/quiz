import { Question } from "../types/Questions"

type Props = {
    questions: Question[];
    answers: number[];
}

export const Results = ({questions, answers}: Props) => {

    return(
        <div>
           {questions.map((item, key) => (
                <div key={key} className="md-3">
                      <div className="font-bold">{key + 1}. {item.question}</div>
                      <div>
                            <span> {item.answer === answers[key] ? 'Acertou' : 'Errou'} - </span>
                            {item.options[item.answer]}
                      </div>
                </div>
              
           ))}
        </div>
    )

}