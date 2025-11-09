import { AuthForm } from "./AuthForm/AuthForm"

export const Register = ({setIsAuth}) => {
    return <AuthForm setIsAuth={setIsAuth} isSignUp/>
}