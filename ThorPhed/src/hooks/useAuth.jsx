import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const useAuth = () => {
    const { user } = useSelector((state) => state.auth);

    const [auth, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        user ? setAuth(true) : setAuth(false);
        setLoading(false);
    }, [user])
    return {auth, loading};
};