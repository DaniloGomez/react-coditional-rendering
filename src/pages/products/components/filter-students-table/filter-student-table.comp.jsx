import React from 'react';
import SchoolTable from '../student-table-td/student-table.comp';
import SearchBar from '../search-bar/search-bar.comp';
import './filter-student-table.style.css';

const FilterableProductTable = () => {
    return (
        <div className="filterable-student-table-container">
            <SearchBar/>
            <SchoolTable/>
        </div>
    );
}

export default FilterableProductTable;