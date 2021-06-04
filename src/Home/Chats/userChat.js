import './chat.css'
import './MockChat/mockChat'
import MockChat from './MockChat/mockChat'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const UserChat = ({user, closeUserChatBox}) => {
    return(
        <div>
            <div style={{ display: 'flex' }} className="user-chat user-chat-heading" >
                <div style={{display:'flex'}}>
                    <img src={user.profilepicture} className="profile-pic-style" />
                    <div style={{color:'white'}}>{user.name}</div>
                </div>
                <div className="cursor" onClick={()=>closeUserChatBox(user.id)}>
                    <CloseOutlinedIcon className="close"/>
                </div>
            </div>
            <MockChat/>
        </div>
    );
}

export default UserChat;