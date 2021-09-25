import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { auth } from '../ChatProps/firebase'

const SignOut = () => {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <Button variant="info" style={{ padding: '10px 30px', margin: '10px', fontSize: '15px', borderRadius: '0', fontWeight: '600', color: 'black' }}><Link to="/" style={{textDecoration:'none', color: 'black'}}>Go Home</Link></Button>
            <Button variant="primary" style={{ padding: '10px 30px', margin: '10px', fontSize: '15px', borderRadius: '0', fontWeight: '600', color: 'white' }} onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut