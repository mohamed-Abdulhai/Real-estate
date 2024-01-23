import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Signup() {
  const PassworedRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const [error ,setError]=useState(null);
    

    
    let users ={
        userName :'',
        email:'',
        password:'',
        phone:'',
    };
        let validationSchema = Yup.object({
        userName:Yup.string().min(4 , "name minlength is 4").max(20,"name maxlength is 20").required("name is required"),
        email:Yup.string().required('email is required').email('eniter valid email'),
        phone:Yup.string().required('phone is required').min(9).max(11),
        password: Yup.string().matches(PassworedRegExp, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character').required('Password is required'),
    });


    async function submiyForm(val){
        
        let {data} =await axios.post('http://localhost:3000/api/auth/signup',val).catch((error)=>{
        
        setError(error.response.data.message);

        });
    console.log(data);
    // if(data.message === 'success'){
        
    // }
    
    };
    let formik =useFormik({
        initialValues:users,
        validationSchema,
        onSubmit:submiyForm,
    });

    

    return (
    <div className='p-3 max-w-lg mx-auto '>
            <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>
            {error  !==null ? <div className='text-red-600 text-xl '> {error}</div> : '' } 
      <form className='flex flex-col ' onSubmit={formik.handleSubmit}>
                <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} id='userName' placeholder='User name' className='border p-3 rounded-lg my-2' />
                {formik.errors.userName && formik.touched.userName? <div className='text-red-600'>{formik.errors.userName}</div> : ''}
                <input type="email" onBlur={formik.handleBlur} onChange={formik.handleChange} id='email' placeholder='Email' className='border p-3 rounded-lg my-2' />
                {formik.errors.email && formik.touched.email? <div className='text-red-600'>{formik.errors.email}</div> : ''}
                <input type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} id='password' placeholder='Password' className='border p-3 rounded-lg my-2' />
                {formik.errors.password && formik.touched.password? <div className='text-red-600'>{formik.errors.password}</div> : ''}
                <input type="tel" onBlur={formik.handleBlur} onChange={formik.handleChange} id='phone' placeholder='Phone' className='border p-3 rounded-lg my-2' />
                {formik.errors.phone && formik.touched.phone? <div className='text-red-600'>{formik.errors.phone}</div> : ''}
        <button type="submit" className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
        <div>
          <p><span>Have an Account? </span> <span><Link to={'/sign-in'} className='text-red-500'>Sign in</Link></span></p>
        </div>
      </form>
    </div>
  );
}
