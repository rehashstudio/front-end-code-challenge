import Head from 'next/head';
import styles from './Index.module.scss';

export const IndexPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Padaster Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div>Rehash Code Challenge</div>
        <div>your name</div>
        <div>WebSockets message here</div>
        <div>RESTful API query results</div>
      </div>
    </>
  )
}

export default IndexPage;