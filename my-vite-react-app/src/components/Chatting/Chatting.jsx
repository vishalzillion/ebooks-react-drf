import React, { useEffect } from 'react';
import axios from 'axios';
import { Channel, ChannelList, SendBirdProvider } from '@sendbird/uikit-react';
import { useState,useContext} from 'react';
import '@sendbird/uikit-react/dist/index.css';
import { UserContext } from '../../Context';

const  Chatting = () => {

    const { userData } = useContext(UserContext);
   
    const APP_ID = import.meta.env.VITE_APP_ID;   //your sendbird app id goes here
    const USER_ID = userData.username
    const [currentChannelUrl, setCurrentChannelUrl] = useState('');
    const [userList, setUserList] = useState([]);
    const authToken = import.meta.env.VITE_AUTH_TOKEN; // your sendbird token goes here
    const [selectedUsers, setSelectedUsers] = useState([]);
    

    

    return (
        <div className="App">
            <SendBirdProvider appId={APP_ID} userId={USER_ID} theme='light'>
                <>
                    <Channel className="channel" channelUrl={currentChannelUrl} />
                    <ChannelList
                        onChannelSelect={(channel) => {
                            if (channel?.url) {
                                setCurrentChannelUrl(channel.url);
                            }
                        }}
                    />
                </>
            </SendBirdProvider>
        </div>
    );
};

export default Chatting;
