import React from 'react';
import {useParams, useHistory} from 'react-router-dom';

const Category = props =>{

    let {id} = useParams();
    let history = useHistory();


    console.log(id);
    console.log(history);

    return (
        <div>
            <h2>Category o_O</h2>
        </div>
    );
};

export default Category;