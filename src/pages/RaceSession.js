import { Box, styled } from "@mui/material"
import PageHeader from '../ui/PageHeader'
import PageBody from '../ui/PageBody'

export default function RaceSession() {
    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));
    return (
        <Box className="main_view">
            <DrawerHeader />
            <Box className="page_outer">
                <PageHeader title="Race Session" />
                <PageBody>
                    <p>Page Content</p>
                </PageBody>
            </Box>
        </Box>
    );
}
