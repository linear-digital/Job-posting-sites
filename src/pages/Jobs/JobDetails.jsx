import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { JobCard } from './_UI/JobCard';
import { api } from '../../components/axios/instance';
import useCurrentUser from '../../components/hooks/useCurrentUser';
import toast from 'react-hot-toast';

const JobDetails = () => {
    const {id} = useParams();
    const { isLoading, data: job, refetch } = useQuery({
        queryKey: ["job", id],
        queryFn: async () => {
            const passbook = await api.get(`/jobs/${id}`);
            return passbook.data
        }
    })
    const { isLoading: isLoading2, data: applys } = useQuery({
        queryKey: ["apply", id],
        queryFn: async () => {
            const passbook = await api.get(`/jobs/apply/${id}`);
            return passbook.data
        }
    })
    const user = useCurrentUser()
    const applyForJob = (job) => {
        if (!user) {
            return document.getElementById('my_modal_1').showModal()
        }
        toast.success("Job applied successfully")
    }
    if(isLoading || isLoading2){
        return <h1 className='text-white'>Loading...</h1>
    }
    return (
        <div className='container mx-auto bg-white min-h-screen p-5'>
             <JobCard key={job?._id} job={job}  applyForJob={applyForJob} user={user} count={applys?.count || 0}/>
             
             <h1 className='my-5 text-xl font-semibold'>Details</h1>
             <div 
             dangerouslySetInnerHTML={{__html: job?.details}}>

             </div>
        </div>
    );
};

export default JobDetails;