import styled from 'styled-components';

export const ButtonContainer = styled.button`
  
    font-size:1.4rem;
    font-weight: 600;
    background:#53FEC0;
    border:0.05rem solid black;
    border-color: ${props => props.cart ? "black" : "black"};
    color: ${prop => prop.cart ? "black" : "black"};
    border-radius: 0.2rem;
    padding: 0.2em 0.5em;
    cursor:pointer;
    margin:0.2rem 0.5rem 0;
    transition:all 0.8s ease-in-out;

    &:hover{
        background-color: #FEF753;
        color: black;
    }
    &:focus {
        outline:none;
    }
    `;
