import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import React from 'react'

/*
export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    const allProjectsData = getSortedProjectsData()
    return {
        props: {
            allPostsData,
            allProjectsData
        }
    }
}*/

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

export default function Home() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hi, I&apos;m <strong>Brendan</strong> and I am a self-taught software engineer.</p>
                <p>
                    Feel free to reach out to me at&nbsp;
                    <Link href='mailto:brendan.e.ross@gmail.com'>brendan.e.ross@gmail.com
                    </Link>.
                </p>
            </section>
        </Layout>
    )
}