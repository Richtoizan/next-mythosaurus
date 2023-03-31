import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corporis dolores et consequuntur. Iusto natus accusantium, dolore aliquam, cumque reiciendis, rerum non deleniti voluptate aut autem! Adipisci dicta ducimus laborum!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corporis dolores et consequuntur. Iusto natus accusantium, dolore aliquam, cumque reiciendis, rerum non deleniti voluptate aut autem! Adipisci dicta ducimus laborum!</p>
      <Link className={styles.btn} href="/mythologies">
        See Mythologies
      </Link>
    </div>
  )
}
