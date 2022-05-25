import React,{useState} from 'react'
import Script from 'next/script'
import Head from 'next/head'
function Solve() {
 const [ques, setQues] = useState(``)
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
    <h1>{ques}</h1>
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
   })
  }
 }
export default Solve