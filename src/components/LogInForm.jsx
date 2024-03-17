import { useForm } from 'react-hook-form'
import { EmailValidation } from '../validations/EmailValidation';
import { PasswordValidation } from '../validations/PasswordValidation';

const LogInForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const formSubmit = (formData) => console.log(formData);

    return (
        <form onSubmit={handleSubmit(formSubmit)}>

            {errors.email && <p>{errors.email.message}</p>}
            <input placeholder='Enter your email' {...register('email', EmailValidation)} />

            {/* <input type="email" placeholder='Enter your email' {...register('email', { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid Email address' } })} /> */}

            {errors.password && <p>{errors.password.message}</p>}
            <input type="password" placeholder='Enter your password' {...register('password', PasswordValidation)} />

            {/* <input type="password" placeholder='Enter your password' {...register('password', { required: true, validate: { trimCheck: value => value.trim() !== '' || 'Password can not be empty or spaces only' } })} /> */}

            <button>
                Submit
            </button>
        </form>
    )
}

export default LogInForm