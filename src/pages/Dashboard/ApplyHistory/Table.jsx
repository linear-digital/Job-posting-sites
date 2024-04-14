import { Card, Typography } from "@material-tailwind/react";
import moment from "moment";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Date", "Job", "Status"];


export function DefaultTable({ data }) {

    return (
        <Card className="h-full w-full overflow-scroll mt-5">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => {
                        const isLast = index === data.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                        return (
                            <tr key={index}>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {moment(item?.createdAt).format("MMMM Do YYYY, h:mm a")}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        <Link to={`/jobs/${item?.job?._id}`}>
                                            {item?.job?.title}
                                        </Link>
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-semibold"
                                    >
                                        {
                                            item.status === "completed" ? <span 
                                            className="text-red-500"
                                            >
                                                "Hired Someone"
                                            </span> : <span className="text-amber-800">
                                            Pending
                                            </span>
                                        }
                                    </Typography>
                                </td>


                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}