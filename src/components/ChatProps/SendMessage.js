import React, { useState } from 'react'
import { db, auth } from '../ChatProps/firebase'
import firebase from "firebase/compat/app";
import { Button } from 'react-bootstrap';

const SendMessage = () => {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        // scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input style={{ width: '78%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%'}} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Send</Button>
                </div>
            </form>
        </div>
    );
};

export default SendMessage;