// export const PasswordValidation = {
//     required: true, validate: { trimCheck: value => value.trim() !== '' || 'Password can not be empty or spaces only' }
// }

export const PasswordValidation = {
    required: true, 
    minLength: { value: 5, message: 'The entered password must be at least 4 characters long' }, 
    maxLength: { value: 16, message: 'The entered password must not have than 16 characters' }, 
    validate: { 
        trimCheck: value => value.trim() !== '' || 'Password can not be empty or spaces only', containsUppercase: value => /[A-Z]/.test(value) || 'The entered password must contain an uppercase letter',
        containsSymbol: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'The entered password must contain a symbol',
        notAdmin: value => value !== 'admin' || 'The entered password cannot be "admin" ',
        not123456: value => value !== '123456' || 'The entered password cannot be "123456"',
    }
}

// LINK ZA REACT HOOK FORM DOCS KAO DOKAZ DA NISAM KORISTIO AI -> https://www.react-hook-form.com/api/useform/register/