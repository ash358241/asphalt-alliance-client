import React from 'react';
import Chat from '../ChatProps/Chat';
import Signin from '../ChatProps/Signin';
import { auth } from '../ChatProps/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const ChatBox = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            {user ? <Chat /> : <Signin />}
        </div>
    );
};

export default ChatBox;