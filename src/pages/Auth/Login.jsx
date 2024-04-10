import React from 'react';
import ImageAuth from './_UI/ImageAuth';
import { Input, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
const Login = () => {
    const formHandler = (e) => {
        e.preventDefault();
        const allData = new FormData(e.target);
        const data = Object.fromEntries(allData.entries());
        console.log(data);
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
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">Welcome Back</h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Login to your account </h1>


                        <form onSubmit={formHandler} className="space-y-4">
                            {/* Your form elements go here */}
                            <div>
                                <Input size="md" label="Email / Phone" name='email' required type='text'/>
                            </div>
                            <div>
                                <Input size="md" label="Password" name='password' required type='password' icon={true}/>
                            </div>

                            <div>
                                <Button type='submit'>Login</Button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>Dont't Have account? <Link to="/signup" className="text-black hover:underline">Signup here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;