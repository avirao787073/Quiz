import React from 'react';
import Header from './component/Header/Header';
import Fotter from './component/Fotter/Fotter';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { useState } from 'react';
// import axios from 'axios';

import './App.css';
import axios from 'axios';
// import { data } from 'browserslist';

function App() {

  
const [name, setName] = useState();

const [questions, setQuestions] = useState();
const [score, setScore] = useState(0);

  // const fetchQuestions = async (category="",difficulty="") =>{

  //   const {data}= await axios.get(
  //     `https://opentdb.com/api.php?amount=10${
  //       category && `&category=${category}`}
  //       ${difficulty && `&difficulty=${difficulty}`}&type=multiple`
  //   );
  //   console.log(data)
  //   setQuestions(data.results);

  // }

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
      // console.log(data);
      //as we are getting question in results
    setQuestions(data.results);
  };
  return (
    <BrowserRouter>
     <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
          <Home name={name} setName={setName} fetchQuestions={fetchQuestions} />
          </Route>

          <Route path="/quiz" exact>
          <Quiz 
          name={name}
          questions={questions}
          setQuestions={setQuestions}
          score={score}
          setScore={setScore}
          />
          </Route>

          <Route path="/result">
            <Result name={name} score={score} />
          </Route>
        </Switch>
        
    </div>
    <Fotter />
    </BrowserRouter>
  

  );
}

export default App;
