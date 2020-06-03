import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { Button } from 'antd';
import styled from 'styled-components';

const ButtonPrimary = styled(Button)`
  border-radius: 20px;
  height: 50px;
  
  &.green {
    border-color: green;
    background-color: green;

    &:hover {
      border-color: red;
      background-color: red;
    }
  }
`

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <ButtonPrimary
          type={'primary'}
        >
          Primary Button
        </ButtonPrimary>

        <ButtonPrimary
          className={'green'}
          type={'primary'}
        >
          Primary Button Green
        </ButtonPrimary>
      </section>
    </Layout>
  )
}
