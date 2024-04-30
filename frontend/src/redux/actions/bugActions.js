import { Dialpad } from "@mui/icons-material";
import axios from "axios";

import{ ADD_BUG_REQUEST,
        ALL_BUG_DATA_REQUEST,
        ALL_BUG_DATA_SUCCESS,
        ALL_BUG_DATA_FAIL,
        BUG_PROJECT_FAIL,
        BUG_PROJECT_REQUEST,
        BUG_PROJECT_SUCCESS,
        ALL_BUG_DATA_LOGOUT,
        UPDATE_BUG_REQUEST, 
        UPDATE_BUG_SUCCESS, 
        UPDATE_BUG_FAIL, 
        SELECTED_BUG, 
        BUG_HISTORY_SUCCESS,
        BUG_HISTORY_REQUEST, 
        BUG_HISTORY_FAIL, 
        BUG_COMMENT_REQUEST,
        BUG_COMMENT_FAIL,
        BUG_COMMENT_SUCCESS,
        ARCHIVED_BUG_REQUEST,
        ARCHIVED_BUG_SUCCESS,
        ARCHIVED_BUG_FAIL} from "../constants/bugConstants";
import axiosInstance from "../../axios";

const tokenUser = localStorage.getItem('access_token')


export const PostBugProjectApi = (id,formData, ) => async(dispatch) => {   
    dispatch({type:ADD_BUG_REQUEST})
     try {
        const config = {
          headers: { 
             
              'Content-type':  'application/json',
              'Accept': 'application/json',
              Authorization: `Bearer ${tokenUser}`,
             
          }
      } 
      await axiosInstance.post(process.env.REACT_APP_API_URL + `project/${id}/bug/` ,
     {
     
        title : formData.title,
        date : formData.submission_date,
        priority: formData.priority,
        assigned_to: formData.assigned_to,
        description: formData.description,
        created_by: formData.created_by,
        status: 'New',
        project: id
      
      },  config )
      console.log(formData)
    
        
       
      }catch(error){
        console.log(error)
      }
  
    }


   
  export const GetAllBugApi= () => async(dispatch) => {
   try {

        dispatch({type: ALL_BUG_DATA_REQUEST})
        const config = {
            headers: { 
                'Content-type':  'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${tokenUser}`,
                
            } 
        } 
        const {data} = await axiosInstance.get(process.env.REACT_APP_API_URL + 'bug/' , config )
        dispatch({
            type: ALL_BUG_DATA_SUCCESS,
            payload: data
        })
        }catch(error){
            dispatch({
                type: ALL_BUG_DATA_FAIL,
                payload: error
            })
        }
    
    
    }

    export const GetBugProjectApi = (id) => async(dispatch) => {   
        try {
            dispatch({type: BUG_PROJECT_REQUEST})
           
            const config = {
                headers: { 
                 
                    'Content-type':  'application/json',
                    'Accept': 'application/json',
                    Authorization: `Bearer ${tokenUser}`,
                
              }
        
          } 
            
          const {data} = await axiosInstance.get(process.env.REACT_APP_API_URL+ `project/${id}/bug/` , config )
            dispatch({
                type: BUG_PROJECT_SUCCESS,
                payload: data
        })
      
            
           
          }catch(error){
            dispatch({
                type: BUG_PROJECT_FAIL,
                payload: error
            })
          }
      
        }
      
export const DeleteBugProject = () => (dispatch) => {
    dispatch({
        type: ALL_BUG_DATA_LOGOUT
    })
}


export const UpdateBugApi =  (projectId, bugId, value, property) => async(dispatch)   =>  {

  try{
          dispatch({type: UPDATE_BUG_REQUEST})
              const config = {
                  headers: {
                  'Content-type': 'application/json',
                  'Accept': 'application/json',
                  Authorization: `Bearer ${tokenUser}`, 
                  }
              }
          
              const {data} = await axiosInstance.patch(process.env.REACT_APP_API_URL + `project/${projectId}/bug/${bugId}/`, {
                  [property]:  value
      }, config)
      dispatch({
              type: UPDATE_BUG_SUCCESS,
              payload : data
          })

  } catch (error) {
   dispatch({
      type: UPDATE_BUG_FAIL,
      payload: error
   })
  }
}


export const UpdateUserBugApi =  (projectId, bugId, user) => async(dispatch) => {
    dispatch({type: UPDATE_BUG_REQUEST})
        try {
        const config = {
            headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${tokenUser}`, 
            }
        }
  
      const {data} = await axiosInstance.patch(process.env.REACT_APP_API_URL + `project/${projectId}/bug/${bugId}/`, {
        assigned_to : user
      }, config)
      dispatch({
        type: UPDATE_BUG_SUCCESS,
        payload : data
    })

    } catch (error) {
        dispatch({
            type: UPDATE_BUG_FAIL,
            payload: error
         })
   
    }
  }


  export const selectedBug = (bug) => (dispatch) => {
       dispatch({
                type: SELECTED_BUG,
                payload: bug,
     })

    }



    export const GetBugHistoryApi = (projectId, bugId) => async(dispatch) => {   
     
       try {
           dispatch({type: BUG_HISTORY_REQUEST})
           const config = {
               headers: { 
                
                   'Content-type':  'application/json',
                   'Accept': 'application/json',
                   Authorization: `Bearer ${tokenUser}`,
               
             }
       
         } 
           
         const {data} = await axiosInstance.get(process.env.REACT_APP_API_URL + `project/${projectId}/bug/${bugId}/history/` , config )
           dispatch({
               type: BUG_HISTORY_SUCCESS,
               payload: data
       })
        return data[0]
           
          
         }catch(error){
           dispatch({
               type:BUG_HISTORY_FAIL,
               payload: error
           })
         }
     
       }
       export const GetBugCommentsApi = (projectId, bugId) => async(dispatch) => {   
     
        try {
            dispatch({type: BUG_COMMENT_REQUEST})
            const config = {
                headers: { 
                 
                    'Content-type':  'application/json',
                    'Accept': 'application/json',
                    Authorization: `Bearer ${tokenUser}`,
                
              }
        
          } 
            
          const {data} = await axiosInstance.get(process.env.REACT_APP_API_URL + `project/${projectId}/bug/${bugId}/comment/` , config )
            dispatch({
                type: BUG_COMMENT_SUCCESS,
                payload: data
        })
         return data[0]
            
           
          }catch(error){
            dispatch({
                type:BUG_COMMENT_FAIL,
                payload: error
            })
          }
      
        }
      
     
export const PostBugCommentApi = async(projectId,bugId,formData) => {   
         try {
           
            const config = {
              headers: { 
                 
                  'Content-type':  'application/json',
                  'Accept': 'application/json',
                  Authorization: `Bearer ${tokenUser}`,
                 
              }
          } 
          await axiosInstance.post(process.env.REACT_APP_API_URL + `project/${projectId}/bug/${bugId}/comment/` ,
         {
            created_by : formData.created_by,
            related_bug : formData.related_bug,
            description: formData.description,
            created_at : formData.created_at

          
          },  config )
        
            
           
          }catch(error){
              throw error          }
      
        }
    

     
export const DeleteBugCommentApi = async(projectId,bugId,commentId) => {   
          
    try {
      const config = {
        headers: { 
            'Content-type':  'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${tokenUser}`,
            
        }
      } 
    await axiosInstance.delete(process.env.REACT_APP_API_URL + `project/${projectId}/bug/${bugId}/comment/${commentId}/`, config)
    
    }catch(error){
      throw error
    }

  }




   
  export const GetBugIdProjectApi = async(bugId, projectId) =>  {
    try {
 
         
         const config = {
             headers: { 
                 'Content-type':  'application/json',
                 'Accept': 'application/json',
                 Authorization: `Bearer ${tokenUser}`,
                 
             } 
         } 
         const {data} = await axiosInstance.get(process.env.REACT_APP_API_URL + `project${projectId}/${bugId}/` , config )
         
         
         }catch(error){
            throw error
             
         }
     
     
     }






export const DeleteBugApi = async(bugId,projectId) => {   
  try {
    const config = {
      headers: { 
          'Content-type':  'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer ${tokenUser}`,
      }
    } 
  await axiosInstance.delete(process.env.REACT_APP_API_URL + `project/${projectId}/bug/${bugId}/`, config)
  
  }catch(error){
    throw error
  }

}



   




export const GetBugArchivedApi = () => async(dispatch) => {   
        try {
           dispatch({type: ARCHIVED_BUG_REQUEST})
           const config = {
             headers: { 
                
                 'Content-type':  'application/json',
                 'Accept': 'application/json',
                 Authorization: `Bearer ${tokenUser}`,
                
             }
         } 
          const {data}=  await axiosInstance.get(process.env.REACT_APP_API_URL + 'archived-bug/' , config )
          dispatch({type: ARCHIVED_BUG_SUCCESS,
                    payload: data})
           
         }catch(error){
            dispatch({type: ARCHIVED_BUG_FAIL})
         }
     
       }


            
    export const UpdateBugArchivedApi = async (projectId, bugId, value, user) => {
      try {
        const config = {
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${tokenUser}`, 
          }
        }
    
        await axiosInstance.patch(process.env.REACT_APP_API_URL + `project/${projectId}/bug/${bugId}/`, {
          is_archived : value,
          archived_by : user
        }, config)
  
      } catch (error) {
            throw error      }
    }

