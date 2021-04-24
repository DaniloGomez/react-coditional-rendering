import React from 'react';
import SchoolTable from '../product-table/product-table.comp';
import './product-category.style.css';
import ProductRow from '../Product-Row/product-row.comp';

const ProductCategory = (props) => {
    return (
    <div className="school-container">
        {props.categoryName}
    </div>
    );
}

export default ProductCategory;