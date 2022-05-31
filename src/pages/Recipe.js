import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Recipe = () => {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=4f1a279363ab46bc83a897613d78104f`
        );
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails(params.name);
    }, [params.name]);

    return (
        <Wrapper
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button
                    onClick={() => setActiveTab('instructions')}
                    className={`${activeTab === 'instructions' ? 'active' : ''}`}>
                    Instructions
                </Button>
                <Button
                    onClick={() => setActiveTab('ingredients')}
                    className={activeTab === 'ingredients' ? 'active' : ''}>
                    Ingredients
                </Button>
                <div>
                    {activeTab === 'instructions' && (
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                        </div>
                    )}
                    {activeTab === 'ingredients' && (
                        <div>
                            <ul>
                                {details.extendedIngredients.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            {item.original}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </Info>
        </Wrapper>
    );
}

const Wrapper = styled(motion.div)`
    margin: 10rem 0 5rem 0;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background-color: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
    p {
        font-size: 1.2rem;
        margin-top: 2rem;
    }
`;

export default Recipe;