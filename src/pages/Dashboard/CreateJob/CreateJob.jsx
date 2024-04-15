import React from 'react';
import { Editor } from "primereact/editor";
import { InputFeild } from '../../../components/InputFeilds/InputFeilds';
import { Input, Button } from '@material-tailwind/react';
import { useState } from 'react';
import { Textarea } from '@material-tailwind/react';
import useCurrentUser from './../../../components/hooks/useCurrentUser';
import { api } from '../../../components/axios/instance';
import toast from 'react-hot-toast';

const CreateJob = () => {

    const [jobDetails, setJobDetails] = useState({
        title: '',
        location: '',
        description: '',
        salary: {
            start: 10,
            end: 20
        },
        details: '',

    })
    const user = useCurrentUser()
    const handleCreateJob = async () => {
        const newJobPost = {
            ...jobDetails,
            user
        }
        try {
            const res = await api.post('/jobs', newJobPost)
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong")
        }   
    }
    return (
        <div className='bg-white w-full min-h-screen p-5'>
            <h1 className='lg:text-3xl text-base font-semibold text-gray-800'>Create A Job Post</h1>

            <div >
                <InputFeild
                    label={"Job Title"}
                    className={"mt-5"}
                    name={"title"}
                    placeholder={"Job Title"}
                    value={jobDetails.title}
                    onChange={(e) => setJobDetails({ ...jobDetails, title: e.target.value })}
                />
                <InputFeild
                    label={"Location"}
                    className={"mt-5"}
                    name={"location"}
                    placeholder={"Location"}
                    value={jobDetails.location}
                    onChange={(e) => setJobDetails({ ...jobDetails, location: e.target.value })}
                />
                <div className="mt-5">
                    <Textarea label="Sort Description"
                        name='description'
                        value={jobDetails.description}
                        onChange={(e) => setJobDetails({ ...jobDetails, description: e.target.value })}
                    />
                </div>
                <div className='mt-5'>
                    <label className='pb-2 font-normal'>
                        Job description
                    </label>
                    <Editor value={jobDetails.details} onTextChange={(e) => {
                        setJobDetails({ ...jobDetails, details: e.htmlValue })
                    }}
                        style={{ height: '320px' }}
                    // headerTemplate={header}
                    />
                </div>
                <Button className='mt-5' onClick={handleCreateJob}>
                    Publish Job
                </Button>
            </div>
        </div>
    );
};

export default CreateJob;
