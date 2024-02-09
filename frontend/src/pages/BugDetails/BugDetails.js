
import { Box, Container} from "@mui/material"
import { BugComment } from "./details/BugComment";
import { BugHistory } from "./details/BugHistory";
import { BugDescription } from "./details/BugDescription";
import './BugDetails.css'

export const BugDetails = () => { 

      return (
        <Container id='BugDetails' maxWidth="lg">
          
            <BugDescription/>
            <Box display="flex" justifyContent="space-between" marginTop="20px" marginBottom="20px">
              <BugComment  />
              <BugHistory/>
            </Box>

        </Container>
      );
    }