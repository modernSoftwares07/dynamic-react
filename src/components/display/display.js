import React,{useState,useEffect} from "react";
import Card from "../Card/card";
import './display.css'
import RowEntry from "../rowEntry/rowEntry";
const Display = () =>{
    const [name,setName] = useState('');
    const [phoneNo,setPhoneNO] = useState('');
    const [contactList,setContactList] = useState([]);

    const handleNameInput = (val) => {
        setName(val);
    }
    const handlePhoneInput = (val) => {
        setPhoneNO(val);
    }
    const handleClick = () => {
        let updatedList = [...contactList]
        updatedList.push({ name: name, phone: phoneNo});
        setContactList(updatedList);
    }

    let rowEntry = contactList.map(data => <RowEntry
    key = {data.phone}
    name = {data.name}
    phone = {data.phone}
    />)

    useEffect(() => {
        console.log(`new records inserted, name: ${name}, contact: ${phoneNo}`);
    }, [contactList])

    return(
        <div>
        <Card >
            <div className="form-content">
                <p>Name:</p>
                <input  id="name" type="text" onChange={(event) => 
                    handleNameInput(event.target.value)}/>
                <p>Phone no:</p>
                <input id = "contact" type="text" onChange={(event) => 
                    handlePhoneInput(event.target.value)}/>
                <br/>
                 <button type="submit" value="submit" className="button" 
                    onClick={(event) => handleClick()} >Submit</button>
            </div>
        </Card>

        <table id="contactTable" className = "table-conetent">
                <tbody>
                 <tr>
                    <th>Name</th>
                     <th>Contact No</th>
                </tr>
            {rowEntry}
            </tbody>
        </table>
        </div>
    )
}

export default Display;