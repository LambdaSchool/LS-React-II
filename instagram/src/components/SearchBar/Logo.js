import React from 'react';

let Logo = () => {
    return (
        <div className="logoBox">
            <img alt="logo" className="logo" src={require('./assets/logo.png')}/>
            <img alt="wordmark" className="wordmark" src={require('./assets/ig.png')} />
        </div>
    )
}

export default Logo;