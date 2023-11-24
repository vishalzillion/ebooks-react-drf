import React, { useEffect } from 'react';
import axios from 'axios';
import { Channel, ChannelList, SendBirdProvider } from '@sendbird/uikit-react';
import { useState,useContext} from 'react';
import '@sendbird/uikit-react/dist/index.css';
import { UserContext } from '../../Context';

const App = () => {

    const { userData } = useContext(UserContext);
   
    const APP_ID = process.env.REACT_APP_APP_ID ;
    const USER_ID = userData.username
    const [currentChannelUrl, setCurrentChannelUrl] = useState('');
    const [userList, setUserList] = useState([]);
    const authToken = process.env.REACT_APP_AUTH_TOKEN 
    const [selectedUsers, setSelectedUsers] = useState([]);
    

    

    return (
        <div className="App">
            <SendBirdProvider appId={APP_ID} userId={USER_ID} theme='dark'>
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

export default App;
