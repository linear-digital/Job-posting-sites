import React from 'react';
import useCurrentUser from '../../../components/hooks/useCurrentUser';
import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { InputFeild } from '../../../components/InputFeilds/InputFeilds';
import { api } from '../../../components/axios/instance';
import toast from 'react-hot-toast';

const Profile = () => {
    const user = useCurrentUser()
    const [userInfo, setUserInfo] = useState({})
    useEffect(() => {
        setUserInfo(user)
    }, [user])
    const updateProfile = async () => {
        try {
            const res = await api.put(`/user/${userInfo?._id}`, userInfo)
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong")
        }
    }
    return (
        <div className='p-5 bg-white min-h-screen text-blue-gray-900'>
            <h1 className='text-2xl font-semibold'>User Infomation</h1>
            <div className='mt-10 max-w-2xl w-full'>
                <div className='mb-5'>
                    <label className='text-sm text-gray-600'>Email Address</label>
                    <p className='mt-1 text-[15px]'>
                        {userInfo?.email}
                    </p>
                </div>
                <div className='mb-5'>
                    <label className='text-sm text-gray-600'>
                        User Role
                    </label>
                    <p className='mt-1 capitalize text-[15px]'>
                        {userInfo?.role}
                    </p>
                </div>

                <InputFeild variant="static"
                    label="Name"
                    className={"mb-5"}
                    value={userInfo?.name}
                    placeholder={"Your Name"}
                    onChange={(e) => {
                        if (e) {
                            setUserInfo({ ...userInfo, name: e.target.value })
                        }
                    }}
                />
                <InputFeild variant="static"
                    className={"mb-5"}
                    label="Location"
                    placeholder={"Your Location"}
                    value={userInfo?.location}
                    onChange={(e) => setUserInfo({ ...userInfo, location: e.target.value })}
                />
                <InputFeild variant="static"
                    className={"mb-5"}
                    label="Phone Number"
                    placeholder={"Phone Number"}
                    value={userInfo?.phone}
                    onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                />
                <Button onClick={updateProfile}>
                    Update Profile
                </Button>
            </div>
        </div>
    );
};

export default Profile;