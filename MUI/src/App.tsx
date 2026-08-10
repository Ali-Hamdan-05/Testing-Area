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
                    sx={{ minWidth: 150, flex: 1 }}
                    elevation={2}
                    className="Paper"
                >
                    WELCOME
                </Paper>
                <Paper sx={{ width: 400, flex: 5 }} variant="outlined" className="Paper">
                    <Outlet />
                </Paper>
            </Box>
        </>
    );
}

export default App;
