import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';


const UsersForm = ({addUser,userSelected, updateUser}) => {

    const {register, handleSubmit, reset} = useForm();
    useEffect(() => {
        if(userSelected){
            reset(userSelected);
        }
    }, [userSelected]);
    
    const submit = (data) => {
        console.log(data);
        if(userSelected) 
        {updateUser(data); 
        } else {
            addUser(data); 
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className='input-ctn'>
                <label htmlFor='first_name'>Nombre: </label>
                <input 
                    type="text" 
                    id='first_name' 
                    placeholder='First Name'
                    {...register("first_name")}    
                ></input>
            </div>
            <div className='input-ctn'>
                <label htmlFor='last_name'>Apellido: </label>
                <input 
                    type="text" 
                    id='last_name' 
                    placeholder='Last Name'
                    {...register("last_name")}
                ></input>
            </div>
            <div className='input-ctn'>
                <label htmlFor='email'>Email: </label>
                <input 
                    type="text" 
                    id='email' 
                    placeholder='Email'
                    {...register("email")}
                ></input>
            </div>
            <div className='input-ctn'>
                <label htmlFor='password'>Contraseña: </label>
                <input 
                    type="password" 
                    id='password' 
                    placeholder='password'
                    {...register("password")}
                ></input>
            </div>
            <div className='input-ctn'>
                <label htmlFor='birthday'>Fecha de nacimiento: </label>
                <input 
                    type="date" 
                    id='birthday' 
                    placeholder='mm/dd/aa'
                    {...register("birthday")}
                ></input>
            </div>
            <button className='btn-create'>{userSelected ? 'Actualizar Producto' : <span className='addCircle' class="material-symbols-outlined">add_circle</span>}</button>
        </form>
        
    );
};

export default UsersForm;