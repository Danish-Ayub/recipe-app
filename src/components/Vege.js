import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Vege = () => {
    const [vege, setVege] = useState([]);

    useEffect(() => {
        getVege();
    }, []);

    const getVege = async () => {
        const check = localStorage.getItem('vege');

        if (check) {
            setVege(JSON.parse(check));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=4f1a279363ab46bc83a897613d78104f&number=9&tags=vegetarian`
            );
            const data = await api.json();
            localStorage.setItem('vege', JSON.stringify(data.recipes));
            setVege(data.recipes);
        }
    }

    return (
        <Wrapper
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h3>Vege Picks</h3>
            <Splide options={{
                perPage: 2,
                arrows: false,
                pagination: false,
                gap: '5rem',
            }}>
                {vege.map(recipe => (
                    <SplideSlide key={recipe.id}>
                        <Card>
                            <Link to={'/recipe/' + recipe.id}>
                                <Gradient />
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                            </Link>
                        </Card>
                    </SplideSlide>
                ))}
            </Splide>
        </Wrapper >
    )
}

const Wrapper = styled(motion.div)`
    margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-size: 1;
        font-weight: bold;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Vege;