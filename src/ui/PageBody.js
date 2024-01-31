import { Box } from "@mui/material";
import { Scrollbars } from 'rc-scrollbars';

export default function PageBody({ children }) {
  return (
    <Scrollbars autoHide>
      <Box className="page_container">
        <Box className="page_inner">{children}</Box>
      </Box>
    </Scrollbars>
  );
}
