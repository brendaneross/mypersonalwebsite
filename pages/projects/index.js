import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import homeStyles from '../../styles/Home.module.css'
import { getSortedProjectsData } from '../../lib/projects'
import Link from 'next/link'
import Date from '../../components/date'
import React from 'react'

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData()
    return {
        props: {
            allProjectsData
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

export default function Home({ allProjectsData }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingXl}>Projects</h2>
                <ul className={utilStyles.list}>
                    {allProjectsData.map(({ id, date, title, blurb, stack }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/projects/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <p>{blurb}</p>
                            <p className={utilStyles.headingMd}>
                                <small>{stack}</small>
                            </p>
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