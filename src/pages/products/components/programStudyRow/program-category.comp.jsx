import React from 'react';
import './program-category.style.css';

const ProductCategory = (props) => {
    return (
    <div className="school-container">
        {props.categoryName}
    </div>
    );
}

export default ProductCategory;