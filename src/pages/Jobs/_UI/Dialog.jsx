
import { Button } from "@material-tailwind/react";
import { Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import React, { useState } from "react";

const DialogApply = ({ open, setOpen , children, header}) => {
    
    const handleOpen = () => setOpen(!open);
    return (
        <div className="bg-white blur-sm">
            <Dialog open={open} handler={handleOpen}>
                {
                    header && <DialogHeader>{header}</DialogHeader>
                }
                <DialogBody>
                    {children}
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

export default DialogApply;