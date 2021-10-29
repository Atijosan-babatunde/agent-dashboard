import React from 'react';
import { Link } from 'react-router-dom';


export const NavigationTop = () => {
    return(
        <div class="side-menu">
        <div class="brand-name">
            <div class="logo">
                <Link to="#" class="brand-logo">
                    <img src="asset/img/Logotype.png" alt="" class="logo" />
                </Link>
            </div>
            <div class="profile-details">
                <div class="image1">
                    <img src="asset/img/image 2.png" alt="" class="mw-100 mh-100 rounded-circle"/>
                </div>
                <div class="text">
                    <h4 class="profile-name">Social prefect tours </h4>
                    <p class="profile-mail">socialprefect@gmail.com</p>
                </div>
            </div>
            <ul>
                <li class="menu-item">
                    <Link to ="/" class="menu-link active">
                        <span class="icon"><i class="fa fa-envelope"></i></span>
                        <span class="menu-text">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/client" class="menu-link">
                        <span class="icon"><i class="fa fa-user"></i></span>
                        <span class="menu-text">Client Applications</span>
                    </Link>
                </li>
                <li>
                    <Link to="/ticketed" class="menu-link">
                        <span class="icon"><i class="fa fa-envelope"></i></span>
                        <span class="menu-text">Ticketed Customers</span>
                    </Link>
                </li>
                <li>
                    <Link to="/campaigns" class="menu-link">
                        <span class="icon"><i class="fa fa-user"></i></span>
                        <span class="menu-text">Campaigns</span>
                    </Link>
                </li>
                <hr/>
                <li>
                    <Link to="/transaction" class="menu-link">
                        <span class="icon"><i class="fa fa-user"></i></span>
                        <span class="menu-text">Transaction Payout</span>
                    </Link>
                </li>
                <li>
                    <Link to="/account" class="menu-link">
                        <span class="icon"><i class="fa fa-user"></i></span>
                        <span class="menu-text">Account</span>
                    </Link>
                </li>
                <li>
                    <Link to="/customer" class="menu-link">
                        <span class="icon"><i class="fa fa-user"></i></span>
                        <span class="menu-text">Customer Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="#" class="menu-link-out">
                    <span class="icon-out"><i class="fa fa-sign-out"></i></span>
                    <span class="menu-text">Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
    )
}