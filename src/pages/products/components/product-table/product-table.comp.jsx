import React from 'react';
import './product-table.style.css';
import '../ProductCategoryRow/product-category.comp';
import ProductCategory from '../ProductCategoryRow/product-category.comp';
import ProductRow from '../Product-Row/product-row.comp';

const SchoolTable = (props) => {
    return (
        <div className="product-table-container">
            <ProductCategory categoryName="Programming"/>
            <table className="table-school">
                <th>
                    <ProductRow />
                    <td>Name Student</td>
                    <td>Grades</td>
                    <td>Gender</td>
                </th>
                <tr>
                    <tr>
                        <ProductRow/>
                    </tr>
                </tr>
            </table>
        </div>
    );
}


const Students = [
    {nameStudent: "Pepito", grade: "5", gender: "Male"},
    {nameStudent: "Maria", grade: "9", gender: "Female"},
    {nameStudent: "Carlos", grade: "5", gender: "Male"},
    {nameStudent: "Juana", grade: "4", gender: "Female"},
    {nameStudent: "Jose", grade: "9", gender: "Male"},
];

export default SchoolTable;