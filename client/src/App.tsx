import React, { useState } from 'react'
import { StreamChat} from "stream-chat";
import { Chat } from 'stream-chat-react'
import {Cookie} from "universal-cookie";

import './App.css';
import { ChannelContainer, ChannelListContainer} from "./shared";

const apiKey = '8395ppc483r3'
const client:StreamChat<StreamChatGenerics>  = StreamChat.getInstance(apiKey);

const App = () => {
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