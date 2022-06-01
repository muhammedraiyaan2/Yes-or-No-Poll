import React,{useState,useEffect} from 'react'
import Script from 'next/script'
import Head from 'next/head'
import css from '../styles/Home.module.css'
function Solve() {
 const [ques, setQues] = useState("")
 const [ans, setAns] = useState(false)
 const [ans1, setAns1] = useState(``)
 const yr =()=>{
   if(ans){
     setAns1(`${ans}`)
   }
   if(ans=="Yes"){
    document.getElementById("theAnswer").style.color="green"
   }
   else if(ans=="No"){
    document.getElementById("theAnswer").style.color="red"
   }
 }
 const nr =()=>{  
      setAns1(`${ans}`)
      if(ans=="Yes"){
        document.getElementById("theAnswer").style.color="green"
       }
       else if(ans=="No"){
        document.getElementById("theAnswer").style.color="red"
       }
    }

return (
 <>
 <Head>
  <script>
  document.getElementById("b").click()
  </script>
 </Head>
            <Script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></Script>
    <Script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-database.js"></Script>
    <button hidden onClick={cli} id="b"></button>
    <h1 className={css.qT}>{ques}</h1>
    <button onClick={yr} className={css.yes}>Yes</button>
    <button onClick={nr} className={css.no}>No</button>
    <h1 id="theAnswer" className={css.theAns}>The answer is: {ans1}</h1>
    </>
  )
  function cli(){
   let qid=prompt("Enter question id")
   const firebaseConfisg = {
    apiKey: "AIzaSyBvJ0C2HTqBeCbeUzlXHN0RKbu9yY0V6-I",
    authDomain: "yes-or-no-poll.firebaseapp.com",
    databaseURL: "https://yes-or-no-poll-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "yes-or-no-poll",
    storageBucket: "yes-or-no-poll.appspot.com",
    messagingSenderId: "343064111259",
    appId: "1:343064111259:web:fac1a7dd14664208defe3e",
    measurementId: "G-53LJ1K0GKQ"
   } 
  firebase.initializeApp(firebaseConfisg) 
   firebase.database().ref(`Questions/${qid}`).once("value",function(snapshot){
    let data=snapshot.val()
    setQues(data.Question)
    setAns(data.Answer)
   })
  }
 }
export default Solve