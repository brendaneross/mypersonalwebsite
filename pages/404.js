import Layout, {siteTitle} from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>404-Page Not Found</title>
            </Head>
            <h1 className={utilStyles.headingLg}>404</h1>
            <p className={utilStyles.headingMd}>Whoops, This Page Is Not Found</p>
        </Layout>
    )
}