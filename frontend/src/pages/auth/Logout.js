
import './DropdownProfile.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logout} from '../../redux/actions/userActions';
import { GetCurrentUser, GetTokenUser } from '../../redux/selectors/userSelectors';
import './Logout.css'

export const HandleLogout = () => {

    const tokenUser = localStorage.getItem('access_token')
    const currentUser =  GetCurrentUser()
    const dispatch = useDispatch()
   
    const navigate = useNavigate()
   

    const HandleLogout = () => {
      
            dispatch(logout())
            
            navigate('/login')
      
    }

    const handleProfileClick = () => {
        navigate('/profile');
      };
      const handlePasswordClick = () => {
        navigate('/change-password');
      };
    
    
 

    return(
   
    <DropdownButton
    id="dropdown-button-dark-example2"
    variant='text'
    menuVariant="white"
    title={currentUser?.first_name}
    style={{ fontFamily: 'inherit', fontSize: '1rem' }}
  >
    
      <Dropdown.Item onClick={handleProfileClick}>My account</Dropdown.Item>
      <Dropdown.Item onClick={handlePasswordClick}>Change password</Dropdown.Item>
   
    <Dropdown.Divider />
    {tokenUser ? (
      <Dropdown.Item as='button' onClick={() => HandleLogout()}>Logout</Dropdown.Item>
    ) : (
      <Dropdown.Item disabled as="button">Logout</Dropdown.Item>
    )}
  </DropdownButton>
);}