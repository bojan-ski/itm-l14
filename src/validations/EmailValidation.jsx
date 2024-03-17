// export const EmailValidation = {
//     required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid Email address' }
// }

export const EmailValidation = {
    required: true,
    minLength: { value: 10, message: 'The entered email address must be at least 10 characters long' }, pattern: { value: /^[a-zA-Z0-9._%+-]+@gmail.com$/, message: 'The entered email address must be a @gmail.com' },
    validate: {
        notAdmin: value => value !== 'admin@gmail.com' || 'The entered email address cannot be admin@gmail.com',
        notTest: value => value !== 'test@gmail.com' || 'The entered email address cannot be test@gmail.com'
    }
}


// LINK ZA REACT HOOK FORM DOCS KAO DOKAZ DA NISAM KORISTIO AI -> https://www.react-hook-form.com/api/useform/register/