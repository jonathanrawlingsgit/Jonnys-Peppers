import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaPepperHot} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
import styled from 'styled-components';
import {ButtonContainer} from './Button';



export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-lg navbar-dark px-sm-5">
                <Link to='/'>
                    
                </Link>
                    <ul className="navbar-nav align-items-right">
                        <li className="nav-item ml-5">
                            <Link to='/' className='nav-link'>
                            <FaPepperHot class="pepper" alt="store"/>
   
                            </Link>
                    
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <FaShoppingCart className="cart" />
                            </span>
                            
                            <h5>Cart</h5>
                        </ButtonContainer>
                    </Link>
            </NavWrapper>
        )
    }
}
    const NavWrapper = styled.nav`
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-radius: 0px;
        background: transparent;
        z-index: 1;
        position: sticky !important;
        top: 0;
        
        }
        .pepper {
            color: #53FEC0;
            
            
        }
        .pepper:hover {
            transform: scale(1.4);
            transition:all 0.8s ease-in-out;
            color: #FEF753;
        }
`

