import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Button } from 'antd';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <Button type="primary">Primary Button</Button>
      </section>
    </Layout>
  )
}
