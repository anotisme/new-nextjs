import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li><Link href='/csr'>Client Side Rendering</Link></li>
        <li><Link href='/ssr'>Server Side Rendering</Link></li>
        <li><Link href='/ssg'>Static Side Generator</Link></li>
        <li><Link href='/isr'>Incremental Side Regeneration</Link></li>
      </ul>
    </div>
  )
}

export default Home
