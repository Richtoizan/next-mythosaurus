import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corporis dolores et consequuntur. Iusto natus accusantium, dolore aliquam, cumque reiciendis, rerum non deleniti voluptate aut autem! Adipisci dicta ducimus laborum!</p>

      <Link href="/greek">
        Greek
      </Link>
      
      <Footer />
    </div>
  )
}
