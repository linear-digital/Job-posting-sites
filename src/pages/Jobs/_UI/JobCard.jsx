import { EyeIcon, MapPinIcon } from "@heroicons/react/16/solid";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import moment from 'moment'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DialogApply from "./Dialog";
import { ApplyForm } from "./ApplyForm";
import { api } from "../../../components/axios/instance";
import toast from "react-hot-toast";
import ApplyedUsers from "../../Dashboard/ApplyedUsers/ApplyedUsers";
export function JobCard({ job, mode, user, count, adminMode, refetch }) {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const navigate = useNavigate()
    const handleDelete = async () => {
        try {
            const confirm = window.confirm("Are you sure you want to complete this job? After complet this job no one can apply for it.")
            if (!confirm) return
            const res = await api.put(`/jobs/${job?._id}`, { status: "completed" })
            toast.success(res.data.message)
            refetch && refetch()
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong")
            setError(error?.response?.data?.message || "Something went wrong")
        }
    }
    const editHandler = () => {
        navigate(`/panel/jobs/${job?._id}`)
    }
    const applyForJob = (job) => {
        if (!user) {
            return document.getElementById('my_modal_1').showModal()
        }
        setOpen(true)
    }
    return (
        <Card className="mt-6 w-full">
            {
                open && <DialogApply open={open} setOpen={setOpen}>
                    <ApplyForm job={job} user={user} setOpen={setOpen} />
                </DialogApply>
            }
            {
                open2 && <DialogApply open={open2} setOpen={setOpen2}>
                    {/* Applyed users */}
                    <ApplyedUsers job={job} />
                </DialogApply>
            }

            <CardBody
                onClick={() => {
                    !adminMode && navigate(`/jobs/${job?._id}`)
                }}
            >
                {/* title  */}
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {job?.title}
                </Typography>
                {/* user name and date */}
                <div className="flex items-center mb-2">
                    <h2 className="text-sm font-semibold text-blue-gray">
                        {job?.user?.name}
                    </h2>
                    <h2 className="text-sm ml-3 text-blue-gray">({
                        moment(job?.createdAt).fromNow()
                    })</h2>
                </div>
                <Typography color="blue-gray" className="mb-2 text-sm flex">
                    <MapPinIcon height={16} />   {job?.location}
                </Typography>
                <Typography>
                    {job?.salary?.start}$ - {job?.salary?.end}$ Per Month
                </Typography>
                <Typography>
                    {job?.description}
                </Typography>

            </CardBody>
            {
                job?.status !== "completed" ?
                    <>

                        {
                            adminMode ?
                                <CardFooter className="pt-0 flex gap-3">
                                    <Button onClick={() => {
                                        editHandler()
                                    }}>Edit</Button>
                                    <Button
                                        className="flex items-center gap-2"
                                        color="green" onClick={() => {
                                            setOpen2(true)
                                        }}>Who applyed <EyeIcon height={20} /></Button>
                                    <Button

                                        color="red" onClick={() => {
                                            handleDelete()
                                        }}>Completed ?</Button>

                                </CardFooter>
                                :
                                <CardFooter className="pt-0">
                                    <Button onClick={() => {
                                        applyForJob()
                                    }}>Apply now</Button>
                                </CardFooter>
                        }
                    </>
                    :
                    <CardFooter className="pt-0">
                        <Button color="green">Completed</Button>
                    </CardFooter>
            }

        </Card>
    );
}