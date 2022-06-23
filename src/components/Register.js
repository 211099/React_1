import '../styles/Register.css'
import React, { useState } from "react";

const Register = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [paswword, setPaswword] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")

    const agregar = async () => {
        const data = fetch(`http://localhost:3000/api/user/register?username=${userName}&email=${email}&password=${paswword}&phone_number=${phoneNumber}`, { method: 'POST' })
            .then((res) => console.log(res))
            .catch((err) => console.error(err));
    };

    return (
        <div className="Container-Register">
            <div className='Container-Form-Register'>
                <div className='Title-Form-Register'>
                    <h1>REGISTRO</h1>
                </div>
                <div>
                    <label htmlFor="userName"> </label>
                    <input type="text" placeholder='Nombre' id="userName" onChange={(event) => { setUserName(event.target.value); }} />
                </div>
                <div>
                    <label htmlFor="password"> </label>
                    <input type="password" placeholder='Contraseña' id="password" onChange={(event) => { setPaswword(event.target.value); }} />
                </div>
                <br></br>
                <a className='Button-Form-Register' onClick={() => agregar()}>Add</a>
            </div>

        </div>
    )
}

export default Register;