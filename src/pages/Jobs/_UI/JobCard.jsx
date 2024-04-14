import { MapIcon, MapPinIcon } from "@heroicons/react/16/solid";
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
export function JobCard({ job, mode, user, count }) {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    return (
        <Card className="mt-6 w-full">
            <DialogApply open={open} setOpen={setOpen}>
                <ApplyForm job={job} user={user} setOpen={setOpen}/>
            </DialogApply>
            <CardBody
                onClick={() => navigate(`/jobs/${job?._id}`)}
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
                    {job?.description}
                </Typography>

            </CardBody>

            {
                mode !== 'view' &&
                <CardFooter className="pt-0">
                    <Button onClick={() => {
                        setOpen(true)
                    }}>Apply now</Button>
                </CardFooter>
            }

        </Card>
    );
}