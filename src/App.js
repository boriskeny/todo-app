import './App.css';
import React, {useState,useEffect} from 'react'
import {Button,FormControl,InputLabel,Input} from '@material-ui/core'
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState(['Faire du shopping','Monter ma boîte','M\'éclater'])
  const [input, setInput] = useState('')
  
  //ce code lorsque l'app charge, on doit lire la db and recup les new todos comme ils sont ajoutés/supp
  useEffect(() => {
    //ce code travaille quand app.js charge
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  },[])

  const addTodo = (event)=>{
    event.preventDefault()
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('')
  }
  return (
    <div className="App">
      <h1>Choses à faire vite vite🎉!</h1>
      <FormControl>
        <InputLabel>✔ Ecris une Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} variant="contained" type='submit' color="primary" onClick={addTodo}>Add Todo</Button>

      <ul>
        {todos.map((todo)=>(
          <Todo text={todo}/>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
