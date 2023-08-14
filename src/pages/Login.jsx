import React,{useState} from 'react'
import { supabaseClient } from '../supabase/client' 

const Login = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('submited')
        signInWithEmail()
}
async function signInWithEmail() {
        const { data, error } = await supabaseClient.auth.signInWithOtp({
            email: email,
            options: {
             emailRedirectTo: 'https://localhost:5173',
            },
        })
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <label htmlFor="email" >enter your email</label>
            <input onChange={(e)=>setEmail(e.target.value)} name='email' placeholder='email@site.com' type="email" />
            <button type='submit'>send</button>
        </form>
        
    </div>
  )
}

export default Login