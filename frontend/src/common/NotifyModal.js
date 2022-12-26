import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import moment from 'moment'
import { isReadNotify, NOTIFY_TYPES, deleteAllNotifies } from '../redux/actions/notifyAction'
import {Avatar, Dropdown} from "flowbite-react";
import {IoNotificationsCircleSharp} from "react-icons/io5";
import {BsFillBellFill, BsFillBellSlashFill} from "react-icons/bs";
import {DropdownDivider} from "flowbite-react/lib/esm/components/Dropdown/DropdownDivider";


const NotifyModal = () => {

    const auth = useSelector(state => state.authReducer)
    const notify = useSelector(state => state.notifyReducer)
    console.log("auth",auth)
    console.log("notify",notify)
    const dispatch = useDispatch()

    const handleIsRead = (msg) => {
        dispatch(isReadNotify({msg, auth}))
    }

    const handleSound = () => {
        dispatch({type: NOTIFY_TYPES.UPDATE_SOUND, payload: !notify.sound})
    }

    const handleDeleteAll = () => {
        const newArr = notify.data.filter(item => item.isRead === false)
        if(newArr.length === 0) return dispatch(deleteAllNotifies(auth.token))

        if(window.confirm(`You have ${newArr.length} unread notices. Are you sure you want to delete all?`)){
            return dispatch(deleteAllNotifies(auth.token))
        }
    }

    return (
        <Dropdown label={<IoNotificationsCircleSharp/>} arrowIcon={false} inline={true}      >
           <Dropdown.Header className="flex justify-between items-center px-3" style={{minWidth: 190}}>
               <h3>Notification</h3>
               {
                   notify.sound
                       ? <BsFillBellFill  onClick={handleSound}  style={{fontSize: '1.2rem', cursor: 'pointer'}}/>

                       : <BsFillBellSlashFill onClick={handleSound}  style={{fontSize: '1.2rem', cursor: 'pointer'}}/>
               }
           </Dropdown.Header>
            <Dropdown.Divider/>
            {
                notify.data.length === 0 &&
                <img src={`/images/chicken.png`} alt="NoNotice" className="w-100" style={{width: '300px', height:'264px'}} />
            }
            <Dropdown.Item>
                <div style={{maxHeight: 'calc(100vh - 200px)', overflow: 'auto'}}>
                    {
                        notify.data.map((msg, index) => (
                            <div key={index} className="px-2 mb-3" >
                                <Link to={`${msg.url}`} className="flex text-dark items-center"
                                      onClick={() => handleIsRead(msg)}>
                                    {/*  <Avatar src={msg.user.avatar} size="big-avatar" />*/}
                                    <Avatar img={msg.user.avatar} rounded={true}/>

                                    <div className="mx-1 grow ">
                                        <div>
                                            <strong className="mr-1">{msg.user.username}</strong>
                                            <span>{msg.text}</span>
                                        </div>
                                        {msg.content && <small>{msg.content.slice(0,20)}...</small>}
                                    </div>

                                    {
                                        msg.image &&
                                        <div style={{width: '30px'}}>
                                            {
                                                msg.image.match(/video/i)
                                                    ? <video src={msg.image} width="100%" />
                                                    : <Avatar src={msg.image} size="medium-avatar" />
                                            }
                                        </div>
                                    }

                                </Link>
                                <small className="text-muted d-flex justify-content-between px-2">
                                    {moment(msg.createdAt).fromNow()}
                                    {
                                        !msg.isRead && <i className="fas fa-circle text-primary" />
                                    }
                                </small>
                            </div>
                        ))
                    }

                </div>
            </Dropdown.Item>
        </Dropdown>


    )
}

export default NotifyModal
