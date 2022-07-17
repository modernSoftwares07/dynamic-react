import React from "react";

const RowEntry = (props) => {
    return (
        
            <tr>
                <td>{props.name}</td>
                <td>{props.phone}</td>
            </tr>
        
    )
}

export default RowEntry