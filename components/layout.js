import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Simple from '../components/Nav/navbar'

const name = 'Brendan Ross'
export const siteTitle = 'Brendan Ross'

export default function Layout({ children, home }) {
    return (
        <>
        <Head />
    <div className={styles.containerXL}>
        <Simple className={utilStyles.navBar}></Simple>
        <header className={styles.header}>
                    {home ? (
                        <>
                            <Image
                                priority
                                src="/images/profile.jpeg"
                                className={utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt={name}
                            />
                            <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">

                                    <Image
                                        priority
                                        src="/images/profile.jpeg"
                                        className={utilStyles.borderCircle}
                                        height={108}
                                        width={108}
                                        alt={name}
                                    />
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/" className={utilStyles.colorInherit}>
                                    {name}
                                </Link>
                            </h2>
                        </>
                    )}
                </header>
        <div className={styles.container}>
            <main>{children}</main>
        </div>
        {!home && (
                <footer className={styles.footer}>
                    <div className={styles.backToHome}>
                        <Link href="/">
                            ← Back to home
                        </Link>
                    </div>
                </footer>
                )}
        </div>
        </>
    )
}