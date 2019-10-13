import React from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const CategoryList = ({categories}) =>{

    return (
        <div className="app-category-list">
            {categories.map((category) =>{
                return(<Link to={`/category/${category.id}`} key={category.id}>{category.title}</Link>);
            })}
        </div>
    );
};


const mapStateToProps = state =>{
    return {
        categories: state.jeopardyDataReducer.categories,
    };
};

export default connect(mapStateToProps, {})(CategoryList);