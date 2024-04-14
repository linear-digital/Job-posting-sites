import React from 'react';
import useCurrentUser from '../../../components/hooks/useCurrentUser';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../../components/axios/instance';

const Myposts = () => {
    const user= useCurrentUser()
    const { isLoading, data } = useQuery({
        queryKey: ["my-posts", user?._id],
        queryFn: async () => {
            const passbook = await api.get(`/jobs?user=${user?._id}`);
            return passbook.data
        }
    })
    return (
        <div className="w-full min-h-screen bg-white p-5">
            <h1 className='lg:text-2xl font-semibold text-xl'>
                My Job Posts
            </h1>
        </div>
    );
};

export default Myposts;