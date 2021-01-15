import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message'
import './App.css';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, SetUsername] = useState('');
  


  useEffect(() => {
    SetUsername(prompt('Please ! Enter your name.'))

  }, [])

  // This Lines of Code will snaps the data in database 
  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => (doc.data())))
      });
  }, [])

  const sendMessage = (e) => {
    setMessages([...messages, { username: username, text: input }
    ]);
    e.preventDefault();
    // input data will store in data base
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');

  }

  return (
    <div className="App">
     
      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKF3iZyKNl9_qj_t6EhPY-mnbe8rNFVWUgLA&usqp=CAU"/>
      <h1>Messenger</h1>
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formControl">
        <Input className="app_input" type="text" placeholder="Enter a message..." value={input} onChange={e => setInput(e.target.value)} />
        <IconButton className="app_IconButton" type='submit' disabled={!input} onClick={sendMessage}>
          <SendIcon/>
        </IconButton>
        
        </FormControl>


      </form>
      <FlipMove>
        {
          messages.map(message => {

            return <Message username={ username} message={message} />
          })

        }
      </FlipMove>


    </div>
  );
}

export default App;
