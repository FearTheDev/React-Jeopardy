import React from 'react';
import {useHistory} from 'react-router-dom';

const CategoryButton = ({title, id}) =>{

    const history = useHistory();

    const handleClick = () =>{
        history.push(`/category/${id}`);
    };

    return(
            <button onClick={handleClick}>{title}</button>
    );
}

export default CategoryButton;