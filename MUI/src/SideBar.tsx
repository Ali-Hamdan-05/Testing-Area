import { NavLink, useNavigate } from "react-router";
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
                <ButtonGroup
                    orientation="vertical"
                    variant="text"
                    className="btngrp"
                >
                    <Button>
                        <NavLink
                            to="/home"
                            onClick={() => setOpen(false)}
                            className="Nav"
                        >
                            Home
                        </NavLink>
                    </Button>

                    <Button>
                        <NavLink
                            to="/about"
                            onClick={() => setOpen(false)}
                            className="Nav"
                        >
                            About
                        </NavLink>
                    </Button>

                    <Button>
                        <NavLink
                            to="/gallery"
                            onClick={() => setOpen(false)}
                            className="Nav"
                        >
                            Gallery
                        </NavLink>
                    </Button>

                    <Button>
                        <NavLink
                            to="message"
                            onClick={() => setOpen(false)}
                            className="Nav"
                        >
                            Message
                        </NavLink>
                    </Button>
                </ButtonGroup>
            </nav>
        </Drawer>
    );
}
