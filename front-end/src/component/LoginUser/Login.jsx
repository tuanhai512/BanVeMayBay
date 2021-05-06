import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

export default function Login() {  
    const {register,
        handleSubmit,
        formState:{errors},
    } = useForm();

    const onSubmit = async (data) => {
        try{
            const response = await axios.post('http://localhost:3001/', data);
            console.log(`response`,response);
        }
        catch(error)
        {
           console.log(`error.response.data.message`,error.response.data.message);
        }
      
    }

    const handleUserProfileClick = async() => {
        try {
            const response = await axios.get('http://localhost:3001?email=sdsdsd@gmail.com');
            console.log(`response.data.profile`,response.data.profile);
        } catch (error) {
            console.log(`error.response.data.message`,error.response.data.message);
        }
    }
    return (
        <>
        <form method='post' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='email'>Email</label>
            <input {... register("email",{required:true})}/>
            <span style={{color:'red'}}>
                {errors.email && 'Email not required'}
            </span>

            <label htmlFor='password'>Password</label>
            <input type='password' {... register("password")}/>

            <button type='submit'>Login</button>

        </form>
        <button onClick={handleUserProfileClick}>Get user profile</button>
        </>
    );
}


