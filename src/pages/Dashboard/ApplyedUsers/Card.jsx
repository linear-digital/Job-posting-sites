import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function SimpleCard({ user }) {

    return (
        <Card className="mt-6 w-full">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {user?.user?.name}
                </Typography>
                <Typography color="blue-gray" className="mb-2">
                    Email : {user?.user?.email}
                </Typography>
                <Typography color="blue-gray" className="mb-2">
                    Phone Number : {user?.user?.phone}
                </Typography>
                <Typography>
                   Message:  {
                        user?.message
                    }
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 gap-3">
                <Button>
                    <a href={`tel:${user?.user?.phone}`}>
                        Call Now
                    </a>
                </Button>
                <Button className="ml-3">
                    <a href={`mailto:${user?.user?.email}`}>
                        Send Mail
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}