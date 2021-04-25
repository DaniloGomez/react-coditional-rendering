import React from 'react';
import SchoolTable from '../student-table-td/student-table.comp';
import './data-row.style.css';

const ProductRow = (props) => {
    return (
        <div className="student-row-container">
        <tr>
                {props.student.nameStudent}
        </tr>
        <tr>
            {
            props.student.grades < "3"
            ?
            <div className="bad">
                {props.student.grades}
            </div>
            :
            <div>
                {props.student.grades}
            </div>
            }
        </tr>
        <tr>
        {
                props.student.gender === "Male"
                ?
                    <div className="Male">{props.student.gender}
                        <img src="https://cdn0.iconfinder.com/data/icons/avatar-vol-2-4/512/9-128.png"
                        height="70px" width="84px"
                        />
                    </div>
                :
                    props.student.gender === "Female"
                    ?
                        <div className="female">
                            {props.student.gender}
                            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-128.png"
                                height="70px" width="84px"/>
                        </div>
                        :
                        <div>
                            {props.student.gender}
                        </div>
                }
        </tr>
        </div>
    );
}


export default ProductRow;