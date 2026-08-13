import { Box, TextField, Typography } from "@mui/material";
import "./app.css";

export default function App() {
    return (
        <Box className="container">
            <Typography variant="h1" sx={{ fontSize: 60 }}>
                Please Login
            </Typography>

            <Box sx={{ mt: 4, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
              <TextField
                label="Username"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                sx={{ mb: 2 }}
              />
            </Box>
        </Box>
    );
}
