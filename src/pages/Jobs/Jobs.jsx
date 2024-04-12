import React from 'react';
import { JobCard } from './_UI/JobCard';
import useCurrentUser from '../../components/hooks/useCurrentUser';
import toast from 'react-hot-toast';

const Jobs = () => {
    const user = useCurrentUser()
    const applyForJob = (job) => {
        console.log(job)
        if (!user) {
            return document.getElementById('my_modal_1').showModal()
        }
        toast.success("Job applied successfully")
    }
    return (
        <div>
            <JobCard applyForJob={applyForJob} />
        </div>
    );
};

export default Jobs;