import { Link, Outlet } from "react-router";
import Header from "./Header.tsx";
import { Box, Breadcrumbs, Paper } from "@mui/material";
import MuiLink from "@mui/material/Link";

type Path = {
    path: string;
    label: string;
};

const paths: Path[] = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
];

function App() {
    return (
        <>
            <Header />

            <Breadcrumbs separator=">">
                {paths.map((path) => (
                    <MuiLink key={path.path} href={path.path} underline="hover">
                        {path.label}
                    </MuiLink>
                ))}
            </Breadcrumbs>

            <Box
                sx={{
                    display: "flex",
                    height: "100%",
                    gap: 5,
                    m: 2,
                    mt: 4,
                    justifyContent: "flex-start",
                }}
            >
                <Paper
                    sx={{
                        minWidth: 150,
                        flex: 1,
                        maxWidth: 200,
                        backgroundColor: "rgba(140, 155, 157, 0.58)",
                    }}
                    elevation={5}
                    className="Paper"
                >
                    WELCOME
                </Paper>
                <Paper
                    sx={{
                        flex: 5,
                        backgroundColor: "rgba(114, 124, 158, 0.32)",
                    }}
                    variant="outlined"
                    className="Paper"
                >
                    <Outlet />
                </Paper>
            </Box>
        </>
    );
}

export default App;
