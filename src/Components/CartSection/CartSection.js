import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { upateCart } from '../../Redux/actions/cart';

const CartSectionWrapper = styled.div`
    max-width: 100%;
    display: flex;
    background-color: #fff;
    border-bottom: 1px dotted black;
    justify-content: space-between;
`;

const CartSectionImage = styled.img`
    max-width: 70px;
    max-height: 70px;
`;

const CartSectionImageWrapper = styled.div`
    display: flex;
`;

const CartSectionItemName = styled.h6`
    font-size: 0.9rem;
`;

const CartSectionContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

const CartSectionCountWrapper = styled.div`
    display: flex;
`;

const CartSectionButton = styled.div`
    padding: 0.1rem 0.5rem;
    border-radius: 4px;
    border: 1px solid #eee;
    background-color: #d42559;
    color: #fff;
    cursor: pointer;
`;

const CartSectionTitle = styled.p`
    font-size: 0.8rem;
    color: #212121;
`;



export default function CartSection({imageURL,name,id,count,price}){
    const dispatch = useDispatch();
    return(
        <CartSectionWrapper data-testid='cart-section'>
            <CartSectionImageWrapper>
                <CartSectionImage src={imageURL} alt='cart-image'/>
                <CartSectionContent>
                    <CartSectionItemName>{name}</CartSectionItemName>
                        <CartSectionCountWrapper>
                            <CartSectionButton onClick={()=>dispatch(upateCart(id,'remove'))}>-</CartSectionButton>
                            <CartSectionTitle>{count} </CartSectionTitle>
                            <CartSectionButton onClick={()=>dispatch(upateCart(id,'add'))}>+</CartSectionButton>
                            <CartSectionTitle>{` X ${price}`} </CartSectionTitle>
                        </CartSectionCountWrapper>
                </CartSectionContent>
            </CartSectionImageWrapper>
            
            <CartSectionTitle>{`Rs. ${count * price}`}</CartSectionTitle>
        </CartSectionWrapper>
    )
}