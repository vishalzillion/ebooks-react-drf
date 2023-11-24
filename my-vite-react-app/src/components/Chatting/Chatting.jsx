import React, { useEffect } from 'react';
import axios from 'axios';
import { Channel, ChannelList, SendBirdProvider } from '@sendbird/uikit-react';
import { useState,useContext} from 'react';
import '@sendbird/uikit-react/dist/index.css';
import { UserContext } from '../../Context';

const App = () => {

    const { userData } = useContext(UserContext);
   
    const APP_ID = 'FA4CC3A9-2E8F-4521-A5CE-7E24BD70791B';
    const USER_ID = userData.username
    const [currentChannelUrl, setCurrentChannelUrl] = useState('');
    const [userList, setUserList] = useState([]);
    const authToken = '001a15c42b3f50a4ed2db32d3abd9a191be44ac0'
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
