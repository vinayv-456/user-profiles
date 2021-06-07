import { Link, Redirect, Route, Switch, withRouter } from "react-router-dom"
import './Home.css'
import './CommingSoon/CommingSoon'
import CommingSoon from "./CommingSoon/CommingSoon"
import Header from './Header/Header';
import Profile from './Profile/Profile';
import Chat from './Chats/chat'
import { useEffect, useRef, useState } from "react";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = (props) => {
    const [users, setUsers] = useState(props.users);
    const [path, setPath] = useState();
    const [user, setUser] = useState({});
    const dummy = useRef();

    useEffect(() => {
        setUsers(props.users);
    }, [props.users])

    const loadUserDetails = (id) => {
        if (users.length > 0) {
            const temp = users.filter((user) => user.id == id)
            setUser(temp[0]);
        }
    }

    useEffect(() => {
        const temp = props.location.pathname.split('/');
        setPath(temp[temp.length - 1]);

        dummy.current.scrollIntoView({behavior: 'smooth'});
    }, [props.location.pathname])

    useEffect(() => {
        loadUserDetails(props.match.params.id);
    }, [props.match.params.id, users])

    return <div>
        <span ref={dummy}></span>
        <div style={{ display: 'flex', padding: '35px', position: 'relative' }}>
            <div className="menu-container">
                <div style={{ display: 'flex', flexDirection: 'column', color: 'white', width: '100%', margin: '20px' }}>
                    <Link className="link" to={`${props.match.url}/profile`}>
                        <div className={(path === "profile" || path === '') ? "active-link" : "links"}>
                            <div className="menu-item">
                                <div>Profile</div>
                                {
                                    (path == "profile" || path === '')
                                    &&
                                    <KeyboardArrowRightIcon className="arrow-icon" />
                                }
                            </div>
                        </div>
                    </Link>
                    <div className="line"></div>
                    <Link className="link" to={`${props.match.url}/posts`}>
                        <div className={path != "posts" ? "links" : "active-link"}>
                            <div className="menu-item">
                                <div>Posts</div>
                                {
                                    path == "posts"
                                    &&
                                    <KeyboardArrowRightIcon className="arrow-icon" />
                                }
                            </div>
                        </div>
                    </Link>
                    <div className="line"></div>
                    <Link className="link" to={`${props.match.url}/gallery`}>
                        <div className={path != "gallery" ? "links" : "active-link"}>
                            <div className="menu-item">
                                <div>Gallery</div>
                                {
                                    path == "gallery"
                                    &&
                                    <KeyboardArrowRightIcon className="arrow-icon" />
                                }
                            </div>
                        </div>
                    </Link>
                    <div className="line"></div>
                    <Link className="link" to={`${props.match.url}/todo`}>
                        <div className={path != "todo" ? "links" : "active-link"}>
                            <div className="menu-item">
                                <div>ToDo</div>
                                {
                                    path == "todo"
                                    &&
                                    <KeyboardArrowRightIcon className="arrow-icon" />
                                }
                            </div>
                        </div>
                    </Link>
                </div>
                {/* </ul> */}
            </div>

            <div style={{ width: '80vw', height: '100vh', marginLeft: '30px', marginRight: '30px' }}>
                <Header {...props} user={user} users={users} />
                {
                    Object.keys(user).length === 0
                        ?
                        <div className="center">
                            <CircularProgress />
                        </div>
                        :
                        <div>
                            <Switch>
                                <Route path={`/home/:id/posts`}
                                    render={(props) => (
                                        <CommingSoon {...props} />
                                    )}
                                />
                                <Route path={`/home/:id/gallery`}
                                    render={(props) => (
                                        <CommingSoon {...props} />
                                    )}
                                />
                                <Route path={`/home/:id/todo`}
                                    render={(props) => (
                                        <CommingSoon {...props} />
                                    )}
                                />
                                <Route path={`/home/:id/`}
                                    render={(props) => (
                                        <Profile {...props} user={user} />
                                    )}
                                />
                            </Switch>
                            <Route path={`/home/:id/`}
                                render={(props) => (
                                    <Chat {...props} user={user} users={users} />
                                )}
                            />
                        </div>
                }
            </div>
        </div>
    </div>
}

export default withRouter(Home);