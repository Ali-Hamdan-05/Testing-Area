import {
    Accordion,
    Box,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Home() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h2" sx={{ fontSize: 35 }}>
                Welcome To Testing Area
            </Typography>

            <Typography variant="body1" sx={{ textAlign: "center" }}>
                This a testing area, have fun poking around. hopefully nothing
                Breaks.
            </Typography>
            <Box>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        H1
                    </AccordionSummary>
                    <AccordionDetails>h1h1h1</AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        H2
                    </AccordionSummary>
                    <AccordionDetails>h2h2h2</AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        H3
                    </AccordionSummary>
                    <AccordionDetails>h3h3h3</AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        H4
                    </AccordionSummary>
                    <AccordionDetails>h4h4h4</AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
}
