import { Textarea } from "@material-tailwind/react";
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { api } from "../../../components/axios/instance";
import toast from "react-hot-toast";

export function ApplyForm({ job, user, setOpen }) {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const applyHandler = async () => {
        const newApply = {
            job: job?._id,
            user: user?._id,
            message,
        }
        try {
            const res = await api.post('/jobs/apply', newApply)
            toast.success(res.data.message)
            setOpen(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong")
            setError(error?.response?.data?.message || "Something went wrong")
        }
    }
    return (
        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Apply Now
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                For : {job?.title}
            </Typography>
            <form className="mt-8 mb-2 w-full">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Name
                    </Typography>
                    <Input
                        size="lg"
                        defaultValue={user?.name}
                        readOnly
                        placeholder="Your Name"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        value={user?.email}
                        readOnly
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Contact Number
                    </Typography>
                    <Input
                        size="lg"
                        readOnly
                        placeholder="Contact Number"
                        value={user?.phone}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Write a message
                    </Typography>
                    <Textarea label="Message" value={message} onChange={(e) => setMessage(e.target.value)} />

                </div>
<p className="text-red-500 text-sm">
    {error}
</p>
                <Button className="mt-6" fullWidth onClick={applyHandler}>
                    Apply
                </Button>
            </form>
        </Card>
    );
}