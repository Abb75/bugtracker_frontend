import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { useSelector } from 'react-redux';

export const BoxCountProject = () => {

    const countProject = useSelector(state => state.project.project )

    const filterProjectData = countProject?.filter(
      project => project.is_archived === false)
    
    return(

<Box 
            display="flex" justifyContent="flex" marginTop="100px" paddingRight="30px" >
<Paper elevation={4} sx={{ backgroundColor: '#F2B16F', marginLeft: '3px', marginBottom:'10px', width: '350px', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'primary.contrastText',  boxShadow: '1px 1px 7px rgba(0.0, 0.0, 0.0, 0.1)' }}>
  <Box textAlign="center">
    <Typography color={'black'} variant="h4" component="h2">
     {filterProjectData?.length ??  '0'}
    </Typography>
 
    <Typography color={'black'} style={{ fontWeight: 'bold', fontFamily: 'inherit'}}>
   Active Project(s)

    </Typography>
    
    
    
  </Box>
  
</Paper>

</Box>

    )
}

