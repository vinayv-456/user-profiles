import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import './Header.css'

const Header = (props) => {
    const [switchModal, setSwitchModal] = useState(false);
    let [loadUsers, setLoadUsers] = useState([]);
    useEffect(()=>{
        if(props?.users.length>0)
        {
            let userCount = 0;
            const tempLoadUsers = props.users.filter((user)=>{
                console.log(user.id > props.user.id, userCount);
                let condition
                switch (props.user.id) {
                    case 1:
                        condition = (user.id === props.user.id+1) || (user.id === props.user.id+2);
                        break;
                    case (props.users.length):
                        condition = (user.id === props.user.id-2) || (user.id === props.user.id-1);
                        break;
                    default:
                        condition = (user.id === props.user.id+1) || (user.id === props.user.id-1);
                        break;
                }
                
                if(condition)
                userCount++;
                return condition && (userCount<=2)
            } )
            setLoadUsers(tempLoadUsers);
        }
    }, [props.user])
    return (
    <div>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'15px'}}>
            <div style={{fontSize:'1.2rem'}}>{props.heading}</div>
            
            <div style={{display:'flex', cursor:'pointer'}} onClick={()=>setSwitchModal(!switchModal)}>
                <img className="profile-pic-style" style={{marginTop:'5px'}} src={props.user.profilepicture} ></img>
                <div style={{fontSize:'1.2rem'}}>{props.user.name}</div>
            </div>

        </div>
        <div style={{position:'relative'}}>
        {
            switchModal
            &&
            <div className="modal-div">
                {console.log("props///",props)}
                <img className="active-profile-pic-style" src={props.user.profilepicture} ></img>
                <div>{props.user.name}</div>
                <div style={{color:'#aeb8b4'}}>{props.user.email}</div>
                <div className="line margin-vertical"></div>
                {
                    loadUsers
                    &&
                    loadUsers.map((loadUser, key)=>{
                        return <div key={loadUser.id} className="other-users-container">
                        
                            <div 
                                style={{ display: 'flex'}} 
                                className="cursor"
                                onClick={()=>{setSwitchModal(false); 
                                    props.history.push(`/home/${loadUser.id}`)
                                }}
                            >
                                <img className="profile-pic-style" src={loadUser.profilepicture} ></img>
                                <div>{loadUser.name}</div>
                            </div>
                            {
                                key!==1
                                &&
                                <div className="line margin-vertical"></div>
                            }
                        </div>
                        }
                    )
                }
                {console.log("p", props)}
                <button className="sign-out"
                    onClick={()=>props.history.push('/user-profiles')}
                >
                    Sign out
                </button>
                
                
            </div>    
        }
        </div>
        <div className="line"></div>
    </div>
    );
}

export default Header