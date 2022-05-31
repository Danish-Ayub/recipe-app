import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';

const Category = () => {
    return (
        <List>
            <NavLink to={'/cuisine/italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/american'}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={'/cuisine/thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink to={'/cuisine/japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </NavLink>
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
        margin: 0 1rem;
        text-decoration: none; 
        h4 {
            color: white;
            font-size: 13px;
            font-weight: 300;
            margin-top: 5px;
        }
        &.active {
            background: linear-gradient(to right, #f27121, #e94057);
        }
    }
`;

export default Category;