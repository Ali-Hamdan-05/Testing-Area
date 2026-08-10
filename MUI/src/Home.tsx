import {
    Accordion,
    Box,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Home() {

    const contents = [
        {id:1, summary: "Who Are We", details: "Just Some Interns Testing Exciting New Stuff They Learned."},
        {id: 2, summary: "Our Goals", details: "Learn, Grow, And Gain Hands On Experience in Software Engineering."},
        {id: 3, summary: "Our Methods", details: "Keep Up With The Fast Pace of Innovation, And Bring The Best Out Of Us."},
        {id:4, summary: "Our Thanks", details: "To DualCom Consulting For Providing Us With This Chance To Grow And Improve."}
    ]

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <Typography variant="h2" sx={{ fontSize: 35 }}>
                Welcome To Testing Area
            </Typography>

            <Typography variant="body1" sx={{ textAlign: "center" }}>
                This a testing area, have fun poking around. hopefully nothing
                Breaks.
            </Typography>
            <Box>
                {contents.map(({id, summary, details}) => (
                    <Accordion key={id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        {summary}
                    </AccordionSummary>
                    <AccordionDetails>{details}</AccordionDetails>
                </Accordion>
                ))}
            </Box>
        </Box>
    );
}
