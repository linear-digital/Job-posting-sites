import { MapIcon, MapPinIcon } from "@heroicons/react/16/solid";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function JobCard({applyForJob}) {

    return (
        <Card className="mt-6 w-full">
            <CardBody>
                {/* title  */}
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Medical Nurse in Norway (Europe)
                </Typography>
                {/* user name and date */}
                <div className="flex items-center ">
                    <h2 className="text-sm font-semibold text-blue-gray">John Doe</h2>
                    <h2 className="text-sm ml-3 text-blue-gray">(5d ago)</h2>
                </div>
                <Typography  color="blue-gray" className="mb-2 text-sm flex">
                  <MapPinIcon height={16}/>   123 Main Street, New York, NY
                </Typography>
                <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button onClick={()=> applyForJob({name : "no"})}>Apply now</Button>
            </CardFooter>
        </Card>
    );
}