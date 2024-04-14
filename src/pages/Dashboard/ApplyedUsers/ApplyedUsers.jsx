import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { api } from '../../../components/axios/instance';
import {  SimpleCard } from './Card';


const ApplyedUsers = ({ job }) => {
    const { isLoading, data: users, refetch } = useQuery({
        queryKey: ["ap-users", job?._id],
        queryFn: async () => {
            const passbook = await api.get(`/jobs/jobapply/${job?._id}`);
            return passbook.data
        }
    })
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    
    return (
        <div className='w-full'>
            {
                users?.map(user => {
                    return (
                        <SimpleCard user={user}/>
                    )
                })
            }
        </div>
    );
};

export default ApplyedUsers;