import '../styles/Card.css'
import IconUser from '../styles/Icon/icon-user.png'
import IconDelete from '../styles/Icon/icon-delete.png'
import IconEdit from '../styles/Icon/icon-edit.png'
import Modal from './Modal'
import styled from 'styled-components';
import React, { useState } from "react";


const Card = (props) => {

    const [estadoModal, setEstadoModal] = useState(false);
  
    const Eliminar = async () => {
        fetch(`http://localhost:3000/api/user/delete?id=${props.id}`, { method: 'DELETE' })
            .then(res => res.json)
            .then(res => { console.log("Se elimino") })
            .catch((err) => console.error(err))
        props.update(false)
    }
    return (
        <>
            <div className='Container-Card'>
                <div className='Container-Icon-User-Card'><img src={IconUser}></img></div>
                <div className='Container-Items-Card'>
                    <div className='Item-Name-Card'><h1>{props.username}</h1></div>
                    <div className='Item-Email-Card'><p>Email: {props.email}</p></div>
                    <div className='Item-Phone-Card'><p>Phone: {props.phone_number}</p></div>
                </div>
                <div className='Container-Icon-Edit-Card'><a className='Button-card'onClick={() => setEstadoModal(!estadoModal)} ><img src={IconEdit}></img></a></div>
                <div className='Container-Icon-Delete-Card'><a className='Button-card' onClick={() => (Eliminar(), props.update(true))} ><img src={IconDelete}></img></a></div>
                <div>
                <Modal
                    estate={estadoModal}
                    cambiarstate={setEstadoModal}
                    id={props.id}
                    username1 = {props.username}
                    email1 = {props.email}
                    password1 = {props.password}
                    phone_number1 = {props.phone_number}
                >
                    <Contenido id={props.id}>
                    </Contenido>
                </Modal>
            </div>
            </div>
        </>
    )
}

export default Card;




const Contenido = styled.div`
`;
