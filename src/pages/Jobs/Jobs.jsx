import React from 'react';
import { JobCard } from './_UI/JobCard';
import useCurrentUser from '../../components/hooks/useCurrentUser';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../components/axios/instance';
const Jobs = ({ filters }) => {
    const user = useCurrentUser()
    const applyForJob = (job) => {
        if (!user) {
            return document.getElementById('my_modal_1').showModal()
        }
        toast.success("Job applied successfully")
    }
    const { isLoading, data: jobs, refetch } = useQuery({
        queryKey: ["jobs", filters],
        queryFn: async () => {
            const passbook = await api.post(`/jobs/filter`, {
                ...filters,
                status: "active"
            });
            return passbook.data
        }
    })
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className='container mx-auto'>
            {
                jobs?.map(job => <JobCard key={job._id} job={job} applyForJob={applyForJob} user={user} refetch={refetch} />)
            }

        </div>
    );
};

export default Jobs;