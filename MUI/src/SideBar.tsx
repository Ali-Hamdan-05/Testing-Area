import { NavLink } from "react-router";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

export default function SideBar({
    isOpen,
    setOpen,
}: {
    readonly isOpen: boolean;
    readonly setOpen: (toggle: boolean) => void;
}) {
    return (
        <Drawer
            open={isOpen}
            onClose={() => setOpen(false)}
            anchor="left"
            variant="temporary"
        >
            <Toolbar />
            <nav>
                <h1>Navigation</h1>
                <ButtonGroup orientation="vertical" variant="text" className="btngrp">
                    <Button onClick={() => setOpen(false)}>
                        <NavLink to="/home">Home</NavLink>
                    </Button>

                    <Button onClick={() => setOpen(false)}>
                        <NavLink to="/about">About</NavLink>
                    </Button>

                    <Button onClick={() => setOpen(false)}>
                        <NavLink to="/gallery">Gallery</NavLink>
                    </Button>

                    <Button onClick={() => setOpen(false)}>
                        <NavLink to="/msg">Message To You</NavLink>
                    </Button>

                </ButtonGroup>
            </nav>
        </Drawer>
    );
}
