
import './App.css';
import TextField from '@material-ui/core/TextField'; 
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from "firebase";
function App() {
const [todoInput, settodoInput] = useState("");

function addtodo(e) {e.preventDefault();

  db.collection("todo").add({
    inprogress: true,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    todo: todoInput,

  });

}

  return (
    <div className="App">

      <div style={{
        display: "flex",
        flexDirection: "column",
         justifyContent: "center",
         alignItems: "center"
         }}>

      <h1>
         TO DOs App
      </h1>

      <form>
      <TextField 
      id="standard-basic"
      label="Write a to do" 
      value={todoInput}
      onChange={(e)=>settodoInput(e.target.value) }
      style={{maxWidth:"300px",width:"90vw"}} 
      />
      <Button type="submit" variant="contained" onClick={addtodo} style={{display:'none'}}>Default</Button>
      </form>

      </div>
    </div>
  );
}

export default App;
