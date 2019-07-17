import React from "react"
import styled from "styled-components"
import marker from "./marker.svg"

const Container = styled.div`
    position: relative;
`

const Label = styled.label`
    display: block;
    color: ${({theme}) => theme.darkText};
    margin-bottom: 7px;
    cursor: pointer;
`

const Input = styled.input`
    width: 100%;
    padding: 13px 13px 13px 45px;
    font-size: 1em;
    border-radius: 5px;
    border: 1px solid ${({theme}) => theme.shadow};
    background-color: ${({theme}) => theme.activeCard};
    color: ${({theme}) => theme.darkText};
    &::placeholder{
        font-weight: bold;
        color: ${({theme}) => theme.lightText};
        opacity: 0.3;
    }
    &:focus{
        border-color: ${({theme}) => theme.focus};
        box-shadow: 0 0 0 1px ${({theme}) => theme.focus};
    }
`

const Icon = styled.img`
    position: absolute;
    left: 15px;
    bottom: 13px;
`

const LocationField = () => 
    <Container>
        <Label htmlFor="location">Town or postcode</Label>
        <Input type="text" name="location" id="location" placeholder="Try 'Aylesbury'"/>
        <Icon alt="" src={marker}/>
    </Container>

export default LocationField