import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import homeStyles from '../../styles/Home.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import React from 'react'

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
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingXl}>Posts</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                {title}
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