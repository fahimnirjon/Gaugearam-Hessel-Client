import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const IsAdmin = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        enabled: !loading,
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default IsAdmin;