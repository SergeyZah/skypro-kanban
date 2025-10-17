import { AuthForm } from "./AuthForm/AuthForm"

export const Login = ({setIsAuth}) => {
    return <AuthForm setIsAuth={setIsAuth} isSignUp={false}/>
}