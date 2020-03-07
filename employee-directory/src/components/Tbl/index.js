import React from 'react';
import "./style.css";

const Tbl = (props) => {
    return (
        
            <table>
                <tbody>
                <tr>
                    <td>{props.id}</td>
                    <td><div className="img-container">
                        <img src={props.image} alt={props.name} />
                        </div></td>
                    <td>{props.name}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                </tr>
                </tbody>
            </table>
        
    )
}

export default Tbl;