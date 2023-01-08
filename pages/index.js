import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            VidCrib
          </p>
          <p>
            <Link href='/stream'>Streams</Link>
          </p>
          <p>
            <Link href='/videos'>Videos</Link>
          </p>
          <div>
            <p 
              className={styles.description}
            >
            Connect Wallet
            </p>
          </div>
        </div>

        <div className={styles.center}>
        <p>
          WELCOME TO VIDCRIB
        </p>
        </div>
      </main>
    </>




  )
}