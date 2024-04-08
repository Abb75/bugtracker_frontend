
import { BugsCount } from './BugsCount';
import { Grid } from '@mui/material';
import {Container} from '@mui/system';
import { Bugs } from './BugListProject';
import { ProjectDetails } from './ProjectDetails';
import { ButtonAddBug } from './ButtonAddBug';
import { ButtonAddMember } from './ButtonAddMember';
import './ProjectPage.css'
import ChatWindow from '../chat/chat';

export const ProjectDetailsPage = () => {
  //const tokenUser = localStorage.getItem('access_token')


   
      return (
       
        <Container id="ProjectContainer" style={{height: 'auto'}}  >
    <Grid marginTop={'50px'} marginBottom={'10px'} container spacing={1}  >
        <Grid  item>
          <ButtonAddBug />
        </Grid>
        <Grid item >
          <ButtonAddMember  />
        </Grid>
      </Grid>
      
     
    <div  style={{ marginBottom:'350px'}}>
   

       <ProjectDetails  />
        <BugsCount />
        <Bugs /> 
        

    </div>
        <ChatWindow />
    
    </Container>
     
     
      )}
      
      
                      


