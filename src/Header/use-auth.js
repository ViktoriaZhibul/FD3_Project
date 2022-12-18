import { useSelector } from "react-redux";

export function useAuth() {
    const {email, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        id
    };
}