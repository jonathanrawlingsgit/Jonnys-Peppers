import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transformation:capitalize;
    font-size:1.4rem;
    background:white;
    border:0.05rem solid black;
    border-color: ${props => props.cart ? "black" : "black"};
    color: ${prop => prop.cart ? "black" : "black"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor:pointer;
    margin:0.2rem 0.5rem 0;
    transition:all 0.8s ease-in-out;

    &:hover{
        background-color: white;
        color: orange;
    }
    &:focus {
        outline:none;
    }
    `;
