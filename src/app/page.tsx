import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <ul>
          <li>
            <Link href="/multi-step-form">multi-step-form</Link>
          </li>
          <li>
            <Link href="/space-tourism-website">space-tourism-website</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
