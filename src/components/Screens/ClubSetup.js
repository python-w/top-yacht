import React, { useState } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import CustomDrawer from "../Navigation/CustomDrawer";

const ClubSetup = () => {
  const theme = useTheme();

  const [tabValue, setTabValue] = useState('clubSetup');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  return (
    <Box className="dashboard-view" sx={{ display: "flex" }}>
      <CustomDrawer />
      <Box className="main-view" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box className="clubsetup-view" sx={{ backgroundColor: "rgba(199, 219, 229, 0.25)" }}>
          <Box className="clubsetup-form">
            <Tabs value={tabValue} onChange={handleTabChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
              <Tab value="clubSetup" label="Item One" sx={{ backgroundColor: "#fff" }}/>
            </Tabs>
            <Typography paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.</Typography>
            <Typography paragraph>Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ClubSetup;
