import React, { useEffect, useState } from 'react';

const Popular = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=4f1a279363ab46bc83a897613d78104f&number=9`);
        const data = await api.json();
        console.log(data);
        setPopular(data);
    }

    return (
        <div>Popular</div>
    );
}

export default Popular;