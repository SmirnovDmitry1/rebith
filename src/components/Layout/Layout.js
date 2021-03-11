import React from 'react'

import logo from '../../assets/icon/logo.svg'

import './Layout.scss'

const Layout = () => {
    return (
        <>
            <div className='header' >
                <div className='content'>
                    <div className='logo'>
                        <img src={logo} alt='err' />
                        <span>Rebirth</span>
                    </div>

                    <div className='routing'>
                        <ul>
                            <li>page 1</li>
                            <li>page 2</li>
                            <li>page 3</li>
                            <li className='authorization' >login</li>
                            <li className='authorization' >sing up</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout