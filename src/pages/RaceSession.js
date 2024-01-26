import { Box } from "@mui/material"
import PageHeader from '../ui/PageHeader'
import PageBody from '../ui/PageBody'

export default function RaceSession() {
    return (
        <Box className="main_view" sx={{ flexGrow: 1, p: 3, pr: 0 }}>
            <Box className="page_outer" sx={{ backgroundColor: "rgba(199, 219, 229, 0.25)", borderRadius: "32px", overflow: "hidden" }}>
                <PageHeader title="Race Session" />
                <PageBody>
                    <p>Page Content</p>
                </PageBody>
            </Box>
        </Box>
    )
}
