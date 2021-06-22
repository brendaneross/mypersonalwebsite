import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

/*export async function getServerSideProps(context) {
    // the context is request params at request time
    // ttfb is slower
    // SWR hook would work too
    return {
        props: {
            // props for your component
        }
    }
}*/

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hi, I&apos;m <strong>Brendan</strong> and I am a self-taught software engineer.</p>
                <p>
                    Feel free to reach out to me at
                    <a href="#"
                       className={homeStyles.cryptedmail}
                       data-name="brendan.e.ross"
                       data-domain="gmail"
                       data-tld="com"
                       onClick={ function() {
                           window.location.href = 'mailto:' +
                               this.dataset.name + '@' +
                               this.dataset.domain + '.' +
                               this.dataset.tld;
                           return false;
                           }
                       }
                    ></a>.
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
               <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}