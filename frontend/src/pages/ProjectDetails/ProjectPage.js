import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetProjectDetails } from '../../redux/actions/projectActions';
import { useDispatch } from 'react-redux';
import { BugsCount } from './BugsCount';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { Bugs } from './BugListProject';
import { ProjectDetails } from './ProjectDetails';
import { ButtonAddBug } from './ButtonAddBug';
import { ButtonAddMember } from './ButtonAddMember';
import './ProjectPage.css';
import ChatWindow from '../chat/chat';
import { GetBugProjectApi } from '../../redux/actions/bugActions';

export const ProjectDetailsPage = () => {
  console.log('DETAILSSSSSSS');
  const dispatch = useDispatch();
  const { id } = useParams();    
  const tokenUser = localStorage.getItem('access_token');

  /*
  useEffect(() => {
   
    console.log(id)
    const dispatchProjectDetails = async() => {
      try {
        await dispatch(GetProjectDetails(tokenUser, id));
       
      } catch(error) {
        throw error;
      }
    
      dispatchProjectDetails();
}}, [dispatch]);
*/


 console.log(id)
return (
  
      <Container id="ProjectContainer" style={{ height: 'auto' }}>
        <Grid marginTop={'50px'} marginBottom={'10px'} container spacing={1}>
          <Grid item>
            <ButtonAddBug />
          </Grid>
          <Grid item>
            <ButtonAddMember />
          </Grid>
        </Grid>

        <div style={{ marginBottom: '350px' }}>
          <ProjectDetails />
       
          <Bugs />
        </div>
        <ChatWindow />
      </Container>
    
);;

}
