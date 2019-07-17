import App, { Container } from "next/app"
import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import Head from "next/head"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Open Sans', sans-serif;
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
`

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        
        return (
            <Container>
                <ThemeProvider theme={theme}>
                    <>
                        <GlobalStyle/>
                        <Head>
                            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap" rel="stylesheet"/> 
                        </Head>
                        <Component {...pageProps} />
                    </>
                </ThemeProvider>
            </Container>
        )
    }
}