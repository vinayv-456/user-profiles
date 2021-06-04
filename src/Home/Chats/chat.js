import { useState } from 'react';
import './chat.css'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import UserChat from './userChat';

const Chat = (props) =>{
    const [expandedView, setExpandedView] = useState(false);
    const [openedChats, setOpenedChats] = useState([]);
    const [openedChatsNo, setopenedChatsNo] = useState(0); 
    const status = () => {
        const random = Math.floor(Math.random() * 2);
        return(
            random === 1
            ?
            <div className="online dot"> </div>
            :
            <div className="offline dot"> </div>
        )
    }
    const handleChats = (user) => {
        if(openedChats.indexOf(user)===-1)
        {
            setopenedChatsNo(()=>openedChatsNo+1);
            let len = openedChats.length;
            let temp = [...openedChats];
            console.log(openedChatsNo, len, openedChatsNo%3)
            len>0 ? temp[openedChatsNo%2] = user : temp[0] = user
            console.log(temp);
            setOpenedChats([...temp]);
        }
    }
    const loadUsersList = () => {
        return <div className="users">
            {
                props.users.map((user)=>{
                    if(props.user.id !== user.id)
                    {
                        return <div key={user.id} style={{display:'flex', justifyContent:'space-between'}}
                                className="cursor"
                                onClick={() => handleChats(user)}
                            >
                            <div style={{display:'flex'}}>
                                <div>
                                    {/* {console.log("kkk", openedChats)} */}
                                    <img src={user.profilepicture} className="profile-pic-style"/>
                                </div>
                                <div>{user.name}</div>
                            </div>
                            {status()}
                        </div>
                    }
                })
            }
        </div>
    }

    const closeUserChatBox = (id) =>{
        setopenedChatsNo(()=>openedChatsNo-1);
        let temp = [...openedChats];
        temp = temp.filter((ele)=>{return ele.id!=id})
        setOpenedChats([...temp]);
    }

    return(
        <div className="chat-container">
            {
                expandedView
                &&
                openedChats.map((user) => <UserChat user={user} closeUserChatBox={closeUserChatBox}/> )
                
            }
            <div>
                <div className="chat-header cursor" onClick={()=>setExpandedView(!expandedView)}>
                    <div style={{display:'flex'}}>
                        <ModeCommentOutlinedIcon fontSize="small" className="chat-icon"/>
                        <div style={{color:'white', fontWeight:'600'}}>Chat</div>
                    </div>
                    {
                        !expandedView
                        ?
                        <KeyboardArrowUpIcon className="expand-icon"/>
                        :
                        <KeyboardArrowDownIcon className="expand-icon"/>
                    }
                    {/* {console.log("users", props)} */}
                </div>
                {expandedView && loadUsersList()}
            </div>

            {/* </div> */}
        </div>
    )
}

export default Chat;