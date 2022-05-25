import React,{useState,useEffect} from 'react'
import css from '../styles/Home.module.css'
import Script from 'next/script'
function Question() {
 const [input, setInput] = useState("")
 const [ques, setQues] = useState("")
 async function yess() {
    const firebaseConfig = {
     apiKey: "AIzaSyBvJ0C2HTqBeCbeUzlXHN0RKbu9yY0V6-I",
     authDomain: "yes-or-no-poll.firebaseapp.com",
     databaseURL: "https://yes-or-no-poll-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "yes-or-no-poll",
     storageBucket: "yes-or-no-poll.appspot.com",
     messagingSenderId: "343064111259",
     appId: "1:343064111259:web:fac1a7dd14664208defe3e",
     measurementId: "G-53LJ1K0GKQ"
   };
   firebase.initializeApp(firebaseConfig)
   let qid=Math.floor(Math.random()*9999999999)
   firebase.database().ref(`Questions/${qid}`).set({
      Question:input,
      Answer: "Yes"
   })
    setQues(`Your question id is: ${qid}`)
  }
  async function noo() {
    const firebaseConfig = {
     apiKey: "AIzaSyBvJ0C2HTqBeCbeUzlXHN0RKbu9yY0V6-I",
     authDomain: "yes-or-no-poll.firebaseapp.com",
     databaseURL: "https://yes-or-no-poll-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "yes-or-no-poll",
     storageBucket: "yes-or-no-poll.appspot.com",
     messagingSenderId: "343064111259",
     appId: "1:343064111259:web:fac1a7dd14664208defe3e",
     measurementId: "G-53LJ1K0GKQ"
   };
   firebase.initializeApp(firebaseConfig)
   let qid=Math.floor(Math.random()*9999999999)
   firebase.database().ref(`Questions/${qid}`).set({
      Question:input,
      Answer: "No"
   })
    setQues(`Your question id is: ${qid}`)
  }
  return (
    <>
        <Script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></Script>
    <Script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-database.js"></Script>
      <input value={input} className={css.input} onChange={(e)=>{setInput(e.target.value)}} type="text" />
      <button onClick={yess} className={css.yes}>Yes</button>
      <button onClick={noo} className={css.no}>No</button>
      <h1 className={css.id}>{ques}</h1>
    </>
  )
}
export default Question