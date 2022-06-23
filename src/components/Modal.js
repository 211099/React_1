import styled from 'styled-components';
import React, { useState } from 'react'


const Modal = ({ estate, cambiarstate, id, username1, email1, password1, phone_number1}) => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPaswword] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
  
  
    const UpdateName = async () => {
        fetch(`http://localhost:3000/api/user/update?id=${id}&username=${userName}&email=${email1}&password=${password1}&phone_number=${phone_number1}`, { method: 'PUT' })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    const UpdateEmail = async () => {
        fetch(`http://localhost:3000/api/user/update?id=${id}&username=${username1}&email=${email}&password=${password1}&phone_number=${phone_number1}`, { method: 'PUT' })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    const UpdatePassword = async () => {
        fetch(`http://localhost:3000/api/user/update?id=${id}&username=${username1}&email=${email1}&password=${password}&phone_number=${phone_number1}`, { method: 'PUT' })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    const UpdatePhone = async () => {
        fetch(`http://localhost:3000/api/user/update?id=${id}&username=${username1}&email=${email1}&password=${password1}&phone_number=${phoneNumber}`, { method: 'PUT' })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

   

    return (
        <>
            {estate &&
                <Overlay>
                    <ContainerModal>
                        <HeaderModal>
                            <h1>Actualizar Datos {username1}</h1>
                        </HeaderModal>
                        <ButtonClose onClick={() => cambiarstate(!estate)}>
                            x
                        </ButtonClose>
                        <ContainerForm>
                            <label htmlFor="userName"> </label>
                            <input type="text" id="userName" placeholder='Nombre' onChange={(event) => { setUserName(event.target.value); }} />
                            <ButtonUpdate type="submit" onClick={() => {UpdateName()}}>Actualizar</ButtonUpdate>
                            <label htmlFor="email"> </label>
                            <input type="text" id="email" placeholder='Correo' onChange={(event) => { setEmail(event.target.value); }}/>
                            <ButtonUpdate type="submit" onClick={() => {UpdateEmail()}}>Actualizar</ButtonUpdate>
                            <label htmlFor="password"> </label>
                            <input type="password" id="password" placeholder='Contraseña' onChange={(event) => { setPaswword(event.target.value); }}/>
                            <ButtonUpdate type="submit" onClick={()=>{UpdatePassword()}}>Actualizar</ButtonUpdate>
                            <label htmlFor="phone_number"> </label>
                            <input type="text" id="phone_number" placeholder='Numero Telefonico' onChange={(event) => { setphoneNumber(event.target.value);}} />
                            <ButtonUpdate type="submit" onClick={()=>{UpdatePhone()}}>Actualizar</ButtonUpdate>
                        </ContainerForm>
                    </ContainerModal>
                </Overlay>
            }
        </>
    )
}

export default Modal;

const Overlay = styled.div`
    width: 100vh;
    height: 100vh;
    position: fixed;
    top: 50%;
    left: 3%;
`;
const ContainerModal = styled.div`
    width: 500px;
    min-height: 200px;
    background-color: #485461f6;
    background-image: linear-gradient(315deg, #333d4794 0%, #28353ba4 74%);
    position: relative;
    border-radius:5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding:20px;
`;
const HeaderModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid #E8E8E8;
h1{
    font-weight: 500;
    font-size: 30px;
    color: #ffff;
    font-family: 'Roboto', sans-serif;
}
`;
const ButtonClose = styled.div`
    position:absolute;
    top: 20px;
    right: 20px;
    background: #5d9df0;
    border-radius: 9px;
    box-shadow: #5E5DF0 0 10px 20px -10px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 8px 14px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;
    word-break: break-word;
    border: 0; `;

const ContainerForm = styled.div`
        min-width: 350px;
        max-width: 490px;
        height: 40%;
        background-color: #485461f6;
        background-image: linear-gradient(315deg, #333d4794 0%, #28353ba4 74%);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        input{
        width: 260px;
        height: 35px;
        border-radius: 99px;
        margin: 0 0 10px 0;
        padding: 0 0 0 10px;
        font-size: 17px;
    }
    `
    const ButtonUpdate = styled.button`
        background: #5d9df0;
        border-radius: 9px;
        box-shadow: #5E5DF0 0 10px 20px -10px;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        opacity: 1;
        outline: 0 solid transparent;
        padding: 8px 14px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: fit-content;
        word-break: break-word;
        border: 0; `;
    
