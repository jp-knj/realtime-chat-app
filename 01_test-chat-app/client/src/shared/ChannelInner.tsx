import React, { useState } from 'react';
import { MessageList, MessageInput, Thread, Window, useChannelActionContext, Avatar, useChannelStateContext, useChatContext } from 'stream-chat-react';


export const GiphyContext = React.createContext({});

export const ChannelInner = ({ setIsEditing }):JSX.Element => {
    const [giphyState, setGiphyState] = useState<boolean>(false);
    const { channel, watcher_count } = useChannelStateContext();
    console.log(channel)
    // const { sendMessage } = useChannelActionContext();
    //
    // const overrideSubmitHandler = (message) => {
    //     let updatedMessage = {
    //         attachments: message.attachments,
    //         mentioned_users: message.mentioned_users,
    //         parent_id: message.parent?.id,
    //         parent: message.parent,
    //         text: message.text,
    //     };
    //
    //     if (giphyState) {
    //         updatedMessage = { ...updatedMessage, text: `/giphy ${message.text}` };
    //     }
    //
    //     if (sendMessage) {
    //         sendMessage(updatedMessage);
    //         setGiphyState(false);
    //     }
    // };

    return(
        <GiphyContext.Provider value={{ giphyState, setGiphyState }}>
            <Window>
                <TeamChannelHeader setIsEditing={setIsEditing} />
            </Window>
        </GiphyContext.Provider>
        //     <div style={{ display: 'flex', width: '100%' }}>
        //         <Window>
        //             <MessageList />
        //             <MessageInput overrideSubmitHandler={overrideSubmitHandler} />
        //         <Thread />
        //     </div>
    );
};

const TeamChannelHeader = ({ setIsEditing }) => {
    const { channel, watcher_count } = useChannelStateContext();
    const { client } = useChatContext();

    const MessagingHeader = () => {
        console.log(channel)
        console.log(client)

    //     const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);
    //     const additionalMembers = members.length - 3;

    //     if(channel.type === 'messaging') {
    //         return (
    //             <div className='team-channel-header__name-wrapper'>
    //                 {members.map(({ user }, i) => (
    //                     <div key={i} className='team-channel-header__name-multi'>
    //                         <Avatar image={user.image} name={user.fullName || user.id} size={32} />
    //                         <p className='team-channel-header__name user'>{user.fullName || user.id}</p>
    //                     </div>
    //                 ))}
    //
    //                 {additionalMembers > 0 && <p className='team-channel-header__name user'>and {additionalMembers} more</p>}
    //             </div>
    //         );
    //     }
    //
        return (
            <div className='team-channel-header__channel-wrapper'>
                <p className='team-channel-header__name'># </p>
                <span style={{ display: 'flex' }} onClick={() => setIsEditing(true)}>

                </span>
            </div>
        );
    };

    const getWatcherText = (watchers: number|undefined):string => {
        if (!watchers) return 'No users online';
        if (watchers === 1) return '1 user online';
        return `${watchers} users online`;
    };

    return (
        <div className='team-channel-header__container'>
            <MessagingHeader />
            <div className='team-channel-header__right'>
                <p className='team-channel-header__right-text'>{getWatcherText(watcher_count)}</p>
            </div>
        </div>
    );
};
