import React from 'react'
import {MenuItem,TextField,Button} from '@material-ui/core'
import Categories from '../../Data/Categories'
import ErrorMessage from '../../component/ErrorMessage/ErrorMessage'
import { useState } from 'react'
import './Home.css'
// import Categories from './Data/Categories';

import { useHistory } from 'react-router'

const Home=({name,setName,fetchQuestions}) =>{

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const history=useHistory();

    const handleSubmit=()=>{
        if(!name|| !difficulty || !category){
            setError(true)
            return;
        }
        else{
            setError(false);
            fetchQuestions(category,difficulty);
            history.push('/quiz');
        }
    };

    return (
        <div className="content">
            <div className='setting'>
            <span style={{fontSize:30}}></span>

            <div className='select'>
                {error && <ErrorMessage>Please Fill All Field</ErrorMessage>}
                <TextField
                 
                 style={{marginBottom:20 }}  
                 label="Enter Your Name" 
                 variant='outlined'
                 onChange={(e)=> setName(e.target.value)}
                 />

                 <TextField 
                 select
                 label="Select Category"
                 variant="outlined"
                 value={category}
                 onChange={(e)=>setCategory(e.target.value)}
                 style={{marginBottom:30}}
                 
                 >
                     {Categories.map((cate)=>(
                            <MenuItem key={cate.category} value={cate.value}>
                                {cate.category}
                            </MenuItem>
                         ))
                     }
                    
                </TextField>   
                <TextField
                select
                label="Difficulty"
                variant="outlined"
                style={{marginBottom:30 , color:'white'}}
                value={difficulty}
                onChange={(e)=> setDifficulty(e.target.value)}
                
                >
                <MenuItem key='Easy' value='easy'>
                    Easy
                </MenuItem>

                <MenuItem key='Medium' value='medium'>
                    Medium
                </MenuItem>

                <MenuItem key='Hard' value='hard'>
                    Hard
                </MenuItem>
                
                </TextField>
                <Button variant="contained" color='primary' size='large'
                    onClick={handleSubmit}
                >
                    Start Quiz
                </Button>
            </div>
            </div>
            <img src='/quiz.svg' className='banner' alt='quiz-img' ></img>
        </div>
    );
};

export default Home;
