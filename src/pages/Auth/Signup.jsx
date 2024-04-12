import React from 'react';
import ImageAuth from './_UI/ImageAuth';
import { Input, Button, Select, Option } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import { api } from './../../components/axios/instance';

const Signup = () => {
    const [loading, setLoading] = React.useState(false);
    const [role, setRole] = React.useState('');
    const [error, setError] = useState(false);
    const formHandler = async (e) => {
        e.preventDefault();

        try {
            if (!role) {
                return setError(true);
            }
            setError(false);
            setLoading(true);
            const allData = new FormData(e.target);
            const data = Object.fromEntries(allData.entries());
            const newUser = { ...data, role };
            // sending a new user to backend 
            const response = await api.post('/user/register', newUser)
            toast.success(response.data?.message)
            setLoading(false);

        } catch (error) {
            setLoading(false);
            toast.error(error?.response?.data?.message || "Something went wrong")
        }
    }
    return (
        <div>
            {/* component */}
            <div className="flex h-screen">
                {/* Left Pane */}
                <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
                    <div className="max-w-md text-center">
                        <ImageAuth />
                    </div>
                </div>
                {/* Right Pane */}
                <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign up now</h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Create a new account to get access to all features </h1>


                        <form onSubmit={formHandler} className="space-y-4">
                            {/* Your form elements go here */}
                            <div>
                                <Input size="md" label="Full Name" name='name' required type='text' />
                            </div>
                            <div>
                                <Input size="md" label="Email" name='email' required type='text' />
                            </div>
                            <div>
                                <Input size="md" label="Phone Number" name='phone' required type='text' />
                            </div>
                            <div>
                                <Input size="md" label="Password" name='password' required type='password' icon={true} />
                            </div>
                            <div>
                                <Select error={error} value={role} onChange={(e) => setRole(e)} label="Join as" required>
                                    <Option value='recruiter'>Recruiter</Option>
                                    <Option value='user'>User</Option>
                                </Select>
                            </div>
                            <div>
                                <Button loading={loading} type='submit'>Create Account</Button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>Alrady Have account? <Link to="/login" className="text-black hover:underline">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;