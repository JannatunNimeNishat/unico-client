import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useCheckRole = () => {
    const { user, loading } = useAuth();

    const { data: role = 'user', isLoading: roleLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/check-role/${user?.email}`)
            console.log(res.data);
            return res.data
        }
    });
    return [role, roleLoading]
}

export default useCheckRole;