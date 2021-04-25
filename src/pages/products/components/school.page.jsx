import React from 'react';
import FilterableProductTable from './filter-students-table/filter-student-table.comp'
import './school.page.style.css';

const SchoolPage = () => {
    return (
        <div>
            <h1>SCHOOL SYSTEM</h1>
            <FilterableProductTable/>            
        </div>
    );
}
export default SchoolPage;