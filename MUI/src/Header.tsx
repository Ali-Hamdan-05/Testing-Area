import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Toolbar from "@mui/material/Toolbar";
import SideBar from "./SideBar.tsx";
import { useState } from "react";

function Header() {
    const [open, setOpen] = useState(false);

    function toggleSideBar(toggle: boolean): void {
        setOpen(toggle);
    }

    return (
        <header>
            <AppBar
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: "rgb(89, 103, 148)",
                    position: "relative",
                }}
            >
                <Toolbar className="ToolBar">
                    <div>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{ mr: 1 }}
                            onClick={() => toggleSideBar(!open)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <h1>Nav</h1>
                    </div>

                    <h2>New</h2>

                    <h1>Testing Site</h1>

                    <h2>Content</h2>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 1 }}
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <SideBar isOpen={open} setOpen={toggleSideBar} />
        </header>
    );
}

export default Header;
