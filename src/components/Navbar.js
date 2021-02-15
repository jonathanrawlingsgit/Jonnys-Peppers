import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {GiPalmTree} from 'react-icons/gi'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <GiPalmTree />

                </Link>
            </nav>
        )
    }
}
