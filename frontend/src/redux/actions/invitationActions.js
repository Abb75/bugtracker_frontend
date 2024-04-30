import { PROJECT_DETAILS_SUCCESS, PROJECT_DETAILS_REQUEST, PROJECT_DETAILS_FAIL } from "../constants/projectConstants"
import axiosInstance from "../../axios"
import axios from 'axios'
import { INVITATION_USER_FAIL, INVITATION_USER_REQUEST, INVITATION_USER_SUCCESS } from "../constants/invitationConstants"
import { INVITATION_REQUEST } from "../constants/userConstants"

const tokenUser = localStorage.getItem('access_token')
export const GetInvitationUser = (tokenUser) => async(dispatch) => {
console.log(tokenUser)
  try {
 
         dispatch({type: INVITATION_USER_REQUEST})
         const config = {
             headers: { 
                 'Content-type':  'application/json',
                 'Accept': 'application/json',
                 Authorization: `Bearer ${tokenUser}`,
                 
             } 
         } 
        const {data} = await axiosInstance.get(process.env.REACT_APP_API_URL + 'guests/' , config )
         dispatch({
             type: INVITATION_USER_SUCCESS,
             payload: data
         })
         }catch(error){
             dispatch({
                 type: INVITATION_USER_FAIL,
                 payload: error
             })
         }
     
     
     }
     



     export const ConfirmInvitationUserByProjectApi = async(value, projectId, invitationId, tokenUser) => {
        try{
        
      
          const config = {
      
            headers: { 
                'Content-type':  'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${tokenUser}`,
            
            }}
               await  axiosInstance.patch(process.env.REACT_APP_API_URL + `project/${projectId}/invitation/${invitationId}/` , {
                accepted : value } , config )
            
             
            
           
        }catch(error){
         
        }
      }


      export const DeleteGuestUserInvitationProjectApi = async(projectId, invitationId, tokenUser)  => {   
        try {
         
           const config = {
             headers: { 
                
                 'Content-type':  'application/json',
                 'Accept': 'application/json',
                 Authorization: `Bearer ${tokenUser}`,
                
             }
           
         } 
          
           await axiosInstance.delete(process.env.REACT_APP_API_URL + `project/${projectId}/invitation/${invitationId}/`, config )
           
           
         }catch(error){
           throw error
         }
      
       }
      
       export const PostInvitationApi = (project_id, formData, tokenUser) => async(dispatch) => {   
        try {
           dispatch({type: INVITATION_REQUEST})
           const config = {
             headers: { 
                
                 'Content-type':  'application/json',
                 'Accept': 'application/json',
                 Authorization: `Bearer ${tokenUser}`,
                
             }
           
      
         } 
          
           await axiosInstance.post(process.env.REACT_APP_API_URL + `project/${project_id}/invitation/` ,{
             name : formData.name,
             role : formData.role,
             email : formData.email,
             project : project_id,
             invited_by : formData.invited_by
           
            
           }, config )
           
           
         }catch(error){
           throw error
         }
      
       }
      

