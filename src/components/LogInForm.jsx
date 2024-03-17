import { useForm } from 'react-hook-form'

const LogInForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (formData) => console.log(formData);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {errors.email && <p>{errors.email.message}</p>}
            <input type="email" placeholder='Enter your email' {...register('email', { required: true , pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid Email address'}})} />

            {errors.password && <p>{errors.password.message}</p>}
            <input type="password" placeholder='Enter your password' {...register('password', { required: true, validate: {trimCheck: value => value.trim() !== '' || 'Password can not be empty or spaces only'} })} />

            <button>
                Submit
            </button>
        </form>
    )
}

export default LogInForm