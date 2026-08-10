import { NavLink, useLocation } from "react-router";
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
    const location = useLocation();

    const links = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/gallery", label: "Gallery" },
        { to: "/message", label: "Message" },
    ];

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
                <ButtonGroup
                    orientation="vertical"
                    variant="text"
                    className="btngrp"
                >
                    {links.map(({ to, label }) => {
                        const isActive = location.pathname === to;

                        return (
                            <Button
                                key={to}
                                component={NavLink}
                                to={to}
                                onClick={(e) => {
                                    if (isActive) {
                                        e.preventDefault();
                                        return;
                                    }
                                    setOpen(false);
                                }}
                            >
                                {label}
                            </Button>
                        );
                    })}
                </ButtonGroup>
            </nav>
        </Drawer>
    );
}
