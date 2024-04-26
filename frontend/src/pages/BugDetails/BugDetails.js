
import { Box, Container} from "@mui/material"
import { BugComment } from "./details/BugComment";
import { BugHistory } from "./details/BugHistory";
import { BugDescription } from "./details/BugDescription";
import './BugDetails.css'
import { useEffect } from "react";


export const BugDetails = () => { 
  const tokenUser = localStorage.getItem('access_token')

    useEffect(() => {

    }, [tokenUser])

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