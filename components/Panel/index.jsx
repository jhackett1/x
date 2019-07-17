import React from "react"
import styled from "styled-components"
import arrow from "./arrow-right.svg"

const Panel = styled.div`
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.15);
    max-width: 400px;
    width: 100%;
    margin: 20px auto;
    /* overflow: hidden; */
`

const Inner = styled.div`
    padding: 30px 30px 40px 30px;
`

const Title = styled.h2`
    font-size: 1.6em;
    margin-bottom: 30px;
    color: ${({theme})=>theme.darkText};
`

const Button = styled.button`
    background-color: ${({theme})=>theme.darkText};
    color: white;
    text-align: uppercase;
    display: block;
    font-weight: bold;
    font-size: 1.1em;
    width: 100%;
    padding: 20px 15px;
    border: none;
    cursor: pointer;
    border-radius: 0px 0px 10px 10px;
    &::after{
        margin-left: 10px;
        content: "";
        display: inline-block;
        height: 15px;
        width: 15px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${arrow});
    }
`

export default ({children}) =>
    <Panel>
        <Inner>
            <Title>Find activities, groups and services near you</Title>
            {children}
        </Inner>
        <Button>Go to recommendations</Button>
    </Panel>