import { Box, styled } from "@mui/material";
import EditForm from "../features/Setup/ClubSetup/EditForm";
import ViewForm from "../features/Setup/ClubSetup/ViewForm";
import PageHeader from "../ui/PageHeader";
import PageBody from "../ui/PageBody";
import { useState } from "react";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';


const ClubSetup = () => {

    const [isEditMode, setIsEditMode] = useState(false);
    const handlePageView = () => {
        setIsEditMode(true)
    }

    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));
    return (
        <Box className="main_view" sx={{ flexGrow: 1, p: 3, pr: 0 }}>
            <DrawerHeader />
            <Box className="page_outer" sx={{ backgroundColor: "rgba(199, 219, 229, 0.25)", borderRadius: "32px", overflow: "hidden" }}>
                <PageHeader title="Club Setup" hasBtn={true} icon={isEditMode ? <SaveOutlinedIcon /> : <CreateOutlinedIcon />} btnText={isEditMode ? "Save Details" : 'Edit Details'} handlePageView={handlePageView} />
                <PageBody>
                    {isEditMode ?
                        <EditForm isEditMode={isEditMode} />
                        :
                        <ViewForm />
                    }
                </PageBody>
            </Box>
        </Box>
    );
};

export default ClubSetup;
