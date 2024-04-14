import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { api } from '../../../components/axios/instance';
import useCurrentUser from '../../../components/hooks/useCurrentUser';
import { DefaultTable } from './Table';

const ApplyHistory = () => {
    const user =  useCurrentUser()
    const { isLoading, data: hostory, refetch } = useQuery({
        queryKey: ["history", user?._id],
        queryFn: async () => {
            const passbook = await api.get(`/jobs/myapply/${user?._id}`);
            return passbook.data
        }
    })
    if(isLoading){
        return <div>Loading</div>
    }
    return (
        <div className='w-full min-h-screen bg-white text-black p-5'>
            <h1 className='text-2xl'>Apply History</h1>
            <DefaultTable data={hostory} />
        </div>
    );
};

export default ApplyHistory;

