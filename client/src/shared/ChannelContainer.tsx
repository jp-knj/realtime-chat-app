import React, { useState } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

export const SideBar = ({ logout }) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src="" alt="Hospital" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src="" alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const Header = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">英語学習アプリ</p>
    </div>
)
export const ChannelContainer = () => {
    return (
        <>
            <SideBar />
            <div className="channel-list__list__wrapper">
                <Header />
            </div>
        </>
    );
};
