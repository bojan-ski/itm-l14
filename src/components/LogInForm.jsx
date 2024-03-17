import { useState } from 'react'

const LogInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    

    const changePassword = (newPassword) => {
        // console.log(newPassword)
        newPassword = newPassword.trim()

        if (newPassword !== '' && newPassword.length >= 3) {
            setPasswordError('')
            setPassword(newPassword)
        }else{
            setPasswordError('Please provided a value password')
        }
    }
    // console.log(password);


    return (
        <form>
            <input type="email" placeholder='Enter your email' />

            <p>{passwordError}</p>
            <input type="password" placeholder='Enter your password' onChange={e => changePassword(e.target.value)} />

            <button>
                Submit
            </button>
        </form>
    )
}

export default LogInForm