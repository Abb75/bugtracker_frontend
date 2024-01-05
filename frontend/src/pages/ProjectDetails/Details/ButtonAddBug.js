import { Container, Button ,Box } from "@mui/material"
import { Link } from "react-router-dom"

export const ButtonAddBug = () => {

  return (
    <Box display="start" justifyContent="" mb={2}>
      <Link to={`'https://abb75.github.io/bugtracker_frontend/#/new-bug`} style={{ textDecoration: 'none' }}>
        <Button
          className="rounded-pill"
          color="primary"
          variant="contained"
        >
         Submit bug
        </Button>
      </Link>
    </Box>
  );
      
}
  