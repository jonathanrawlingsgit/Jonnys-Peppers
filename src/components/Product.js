import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
// import { ProductConsumer } from '../context'
import PropTypes from 'prop-types';
import { ProductConsumer } from '../context';



export default class Product extends Component {
    render() {
        const { id, title, img, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    
                    <ProductConsumer>
                        {(value) => ( <div 
                            className="img-container p-5"
                            onClick={() => 
                            value.handleDetail(id)
                        }
                        >
                    <Link to="/details">
                        <img src={img} 
                             alt="product"
                             className="card-img-top" />
                     </Link>
                        <button 
                            className="cart-btn"
                            disabled={inCart ? true : false}
                            onClick={() => {
                                value.addToCart(id);
                                value.openModal(id);
                            }}
                            >
                                {inCart ? (
                                    <p className="text-capitalize mb-0" disabled>
                                        {" "}
                                        in cart
                                    </p>
                                ) : (
                                    <FaShoppingCart className="fas fa-cart-plus" />
                                )}
                                </button>
                                </div>)}
                          
                                </ProductConsumer>
                    {/* Card Footer */}
                    <div className='card-footer d-flex justify-content-center'>
                        <p id='footer' className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            
                            
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.number,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired 
}

const ProductWrapper = styled.div `
    .card{
       
        transition:all 1s linear;
        border-radius: 10px;
background: #e0e0e0;
box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
        
        
            
    }
    .card-footer #footer{
       color: black;
    }
    &:hover{
        .card{
            border-radius: 10px;
            background: linear-gradient(145deg, #f0f0f0, #cacaca);
            box-shadow:  20px 20px 60px #bebebe,
                         -20px -20px 60px #ffffff;
        }
        
    }
    .img-container {
        position: relative;
        overflow: hidden;

        
    }
    .card-img-top {
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.2);
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: black;
        border: none;
        color: white;
        font-size: 1.4rem;
        
        transform:translate(100%, 100%)
    }
    .img-container:hover .cart-btn{
        transform: translate(0, 0);
    }
    .cart-btn:hover {
        color:  orange;
        cursor: pointer;
    }

   
    
`;
