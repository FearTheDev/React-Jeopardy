import React from 'react';

import {connect} from 'react-redux';
import {CategoryButton} from './';

const CategoryList = ({categories}) =>{

    return (
        <div className="app-category-list">
            {categories.map((category) =>{
                return <CategoryButton key={category.id} {...category} />;
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