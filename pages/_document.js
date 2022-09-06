import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Portfolio full stack app gernerator" />
                <meta name="keywords" content="Portfolio Gernerator, next app, ltuc" />
                <meta name="author" content="Boshra Jaber, Python-d09 team" />
                <meta name="copyright" content="ASAC Team" />
                <meta name="audience" content="Everyone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}