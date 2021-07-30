import './Quiz.css';
import Question from '../../component/Questions/Question';
import { useEffect } from 'react';
import { useState } from 'react'
import { CircularProgress } from '@material-ui/core';

import React from 'react'

const Quiz = ({name,score,questions,setQuestions,setScore}) => {

    const [options, setOptions] = useState()
    const [currQues,setCurrQues]=useState(0)

    useEffect(() => {
       console.log(questions);

       setOptions(questions && handleShuffle([
           questions[currQues]?.correct_answer,
           ...questions[currQues]?.incorrect_answers,

       ]));

    }, [currQues,questions]);

    const handleShuffle=(value)=>{
        return value.sort(()=>Math.random()-0.5
        )
    }
    console.log(options)

    return (
        <div className='quiz'>
           <span className='subtittle'>Welcome {name}</span>
            {questions?(
            <>
            <div className="quizInfo">
                <span>{questions[currQues].category}</span>
                <span>score:{score}</span>
            </div>
            <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            />
            </>
            
            ):(
            <CircularProgress 
                style={{margin:100}}
                color='inherit'
                size={150}
                thickness={1}
            />
            )}
        
        </div>

    )
}

export default Quiz
