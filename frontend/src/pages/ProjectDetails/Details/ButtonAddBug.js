import { Container, Button ,Box } from "@mui/material"
import { Link, useParams } from "react-router-dom"

export const ButtonAddBug = () => {
  const {id} = useParams()

  return (
    <Box display="start" justifyContent="" mb={2}>
      <Link to={`https://abb75.github.io/bugtracker_frontend/#/project/${id}/new-bug`} style={{ textDecoration: 'none' }}>
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
  