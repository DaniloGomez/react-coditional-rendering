import React from 'react';
import SchoolTable from '../product-table/product-table.comp';
import SearchBar from '../search-bar/search-bar.comp';
import './filterable-product-table.style.css';

const FilterableProductTable = () => {
    return (
        <div className="filterable-student-table-container">
            <SearchBar/>
            <SchoolTable/>
        </div>
    );
}

export default FilterableProductTable;