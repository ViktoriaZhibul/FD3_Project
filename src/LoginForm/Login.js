import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginForm from './LoginForm';
import { setUser } from "./../redux/userSlice";

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                }));
            })
            .catch(console.error)
    }

    return (
        <LoginForm 
            title={"Войти"}
            handleClick={handleLogin}
            
         />
    )
}

export default Login;