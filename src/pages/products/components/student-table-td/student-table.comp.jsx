import React from 'react';
import './student-table.style.css';
import '../programStudyRow/program-category.comp';
import ProductCategory from '../programStudyRow/program-category.comp';
import ProductRow from '../data-Row/data-row.comp';

const SchoolTable = (props) => {
    return (
        <div className="product-table-container">
            <ProductCategory categoryName="Programming"/>
            <table className="table-school">
                
                <th className="header">
                    <td>Name Student</td>
                </th>
                <th>
                    <td>Grades</td>
                </th>
                <th>
                    <td>Gender</td>
                </th>
                <tbody className="table-school-body">
                    <tr>
                        <td>
                            <ProductRow student={{
                                nameStudent:"Pepito"
                            }}
                            />
                        </td>
                        <td>
                            <ProductRow student={{
                                grades:"4.3"
                                }}
                                />
                        </td>
                        <td>
                            <ProductRow student={{
                                gender:"Male"
                                }}
                                />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ProductRow student={{
                                nameStudent:"Maria"
                            }}
                            />
                        </td>
                        <td>
                            <ProductRow student={{
                                grades:"3.5"
                                }}
                                />
                        </td>
                        <td>
                            <ProductRow student={{
                                gender:"Female"
                                }}
                                />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ProductRow student={{
                                nameStudent:"Carlos"
                            }}
                            />
                        </td>
                        <td>
                            <ProductRow student={{
                                grades:"2.5"
                                }}
                                />
                        </td>
                        <td>
                            <ProductRow student={{
                                gender:"Male"
                                }}
                                />
                        </td>
                    </tr>
                </tbody>
                
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