import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <h1 className={styles.welcome}><Typewriter options={{ strings: 'Welcome to Yes or No Poll',delay:55  , autoStart: true }} /></h1>
      <h1 className={styles.des}>This website is made to create your own questions and share those questions with your friends and family and even with students</h1>
      <button className={styles.answer}><Link href="/Question">Create your own question</Link></button>
      <button className={styles.question}><Link href="/Solve">Solve Questions</Link></button>
    </>
  )
}
