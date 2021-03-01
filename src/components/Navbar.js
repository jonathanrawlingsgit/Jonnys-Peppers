import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {GiPalmTree} from 'react-icons/gi'
import {FaShoppingCart} from 'react-icons/fa'
import styled from 'styled-components';
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to='/'>
                    
                </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to='/' className='nav-link'>
                            <GiPalmTree alt="store"/>
                                products
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <FaShoppingCart className="fas fa-cart-plus" />
                            </span>
                            
                            My Cart
                        </ButtonContainer>
                    </Link>
            </NavWrapper>
        )
    }
}
    const NavWrapper = styled.nav`
        background: var(--mainBlue);
        .nav-link{
            color:var(--mainwhite)!important;
            font-size:1.3rem;
            text-transform: capitalize!important
        }
`;

