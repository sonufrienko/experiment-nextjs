import { NextPage } from 'next';
import Head from 'next/head'
import { PageHeader } from "antd"
import Layout from "../components/Layout"


const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Real Place - Next.js app</title>
      </Head>
      <PageHeader className="site-page-header" title="Places" />
    </Layout>
  )
}

export default IndexPage