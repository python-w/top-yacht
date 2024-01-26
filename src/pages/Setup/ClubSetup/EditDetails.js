import { Box, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PageHeader from "../../../ui/PageHeader";
import PageBody from "../../../ui/PageBody";
import EditForm from "../../../features/Setup/ClubSetup/EditForm";

const ClubSetupEditDetails = () => {
  const theme = useTheme();
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    minHeight: 80
  }));
  return (
    <Box className="main_view" sx={{ pl: [theme.breakpoints.up("xs")] ? 0 : 3, pr: 0 }}>
      <DrawerHeader />
      <Box className="page_outer" sx={{ backgroundColor: "rgba(199, 219, 229, 0.25)", borderRadius: "32px", overflow: "hidden" }}>
        <PageHeader title="Club Setup" hasBtn={true} btnText="Save Details" />
        <PageBody>
          <EditForm />
        </PageBody>
      </Box>
    </Box>
  );
};

export default ClubSetupEditDetails;
