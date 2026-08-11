import { Outlet } from "react-router";
import Header from "./Header.tsx";
import { Box, Paper } from "@mui/material";

function App() {
    return (
        <>
            <Header />

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
