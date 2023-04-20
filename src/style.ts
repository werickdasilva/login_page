import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

export const Form = styled.form`
    width: 400px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;; 
    padding: 16px 26px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    border-radius: 8px;
`

export const TitleUpper = styled.h1`
    color: #0032aa;
    text-transform: uppercase;
`

export const  Input = styled.input`
    background: #f4f4f4;
    border: none;
    outline: none;
    padding: 8px 4px;
    width: 100%;
    border-radius: 8px;
`

type ButtonProps = {
    primary?: true
}

export const Button = styled.a<ButtonProps>`
    padding: 8px 16px;
    border-radius: 8px;
    background: ${props => props.primary ? '#0032aa' : '#FFF'};
    color: ${props => props.primary ? '#FFF' : '#0032aa'};
    border: 1px solid #0032aa;
    display: inline-block;
    cursor: pointer;

    :hover {
        background: ${props => props.primary ? '#FFF' : '#0032aa'};
        color: ${props => props.primary ? '#0032aa' : '#FFF'};
    }
`

export const BoxButton = styled.div`
    display: flex;
    column-gap: 8px;
    justify-content: end;
`

export const Label = styled.label`
    font-size: 20px;
    font-weight: 400;
    color: rgb(94, 94, 94)  
`