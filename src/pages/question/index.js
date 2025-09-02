import { useEffect, useState } from "react";
import * as request from "../../service/question"
function Question(){
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        const fetData = async () => {
            const type = "easy"
            const data = await request.questions(type)
            setQuestions(data);
            console.log(data);
        }
        fetData()
    },[])

    return <div>{
        questions.map((item) => (
            <div key={item.id}>
                <h3>{item.content}</h3>
                <ul>
                    {item.answers.map((answer) => (
                        <li key={answer.id}>{answer.content}</li>
                    ))}
                </ul>
            </div>
        ))
    }</div>
}
export default Question;