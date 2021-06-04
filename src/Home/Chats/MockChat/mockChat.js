import './mockChat.css'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const mockChat = () => {
    return (
        <div className="container">
            <div className="sender">
                <div className="message">Hi vinay, Hope you are doing good</div>
            </div>
            <div className="reciever">
                <div className="message">yeah, I'm good. How are you doing</div>
            </div>
            <div className="sender">
                <div className="message">Greate, The reason why I have contacted you is regarding insurance</div>
            </div>
            <div className="send">
                <SendOutlinedIcon/>
            </div>
        </div>
    )
}

export default mockChat;