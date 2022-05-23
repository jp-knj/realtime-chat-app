import React, { useState } from 'react'
import { StreamChat} from "stream-chat";
import { Chat } from 'stream-chat-react'
import Cookie from "universal-cookie";

import './App.css';
import { ChannelContainer, ChannelListContainer, Auth} from "./shared/main";
const apiKey = '8395ppc483r3'
const client:StreamChat<StreamChatGenerics>  = StreamChat.getInstance(apiKey);
const cookies = new Cookie();
const authToken = cookies.get("token");

if(authToken) {
    client.connectUser({
        token: cookies.get('token'),
        username: cookies.get('username'),
        id: cookies.get('userId'),
        hashedPassword: cookies.get('hashedPassword')
    }, authToken)
}
const App = () => {
    if(!authToken) return <Auth />
    return (
        <div className="app__wrapper">
            <Chat client={client} theme={"team light"}>
                <ChannelContainer/>
                <ChannelListContainer/>
            </Chat>
        </div>
    );
};

export default App;