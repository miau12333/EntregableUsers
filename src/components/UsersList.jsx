import React from 'react';

const UsersList = ({dataUsers, deleteUser, editUser}) => {
    return (
        <div>
            <h1>Lista De Usuarios</h1>
            <ul className='list'>
                {dataUsers.map((dataUser)=> (
                <li className='size' key={dataUser.id}>
                    <div>
                    <b>Nombre</b>
                    <h3>{dataUser.first_name} {dataUser.last_name}</h3>
                    </div>
                    <div>
                        <b>Email</b>
                        <p>{dataUser.email}</p>
                    </div> 
                    <div>
                        <b>Fecha de Nacimiento</b>
                        <p>{dataUser.birthday}</p>
                    </div>
                    <button className='btnDelete' onClick={() => deleteUser(dataUser.id)}><span class="material-symbols-outlined">delete</span></button>
                    <button className='btnEdit' onClick={() => editUser(dataUser)}><span class="material-symbols-outlined">edit</span></button>
                </li>
                ))}
                 
            </ul>
        </div>
    );
};

export default UsersList;