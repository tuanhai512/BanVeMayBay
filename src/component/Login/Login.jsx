import React from 'react';
import {useForm} from 'react-hook-form';


export default function Login() {  
    const {register,
        handleSubmit,
        formState:{errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(`data`,data);
    }
    return (
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
    );
}


