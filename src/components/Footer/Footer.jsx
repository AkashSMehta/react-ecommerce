import React from 'react';
import css from './Footer.module.css';
import Logo from '../../assets/logo.png';
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />

            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="" />
                    <span>amazon</span>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>111 North Avenue Orlando, FL 32801</span>
                        </span>

                        <span className={css.pngLine}>
                            {" "}
                            <PhoneIcon className={css.icon} />
                            <a href='tel:9999999999'>9999999999</a>
                        </span>

                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon} />
                            <a href='mailto:support@amazon.in'>support@amazon.in</a>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            Sign In
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon} />
                            <a href='/about'>
                                <p>About Us</p>
                            </a>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon} />
                            <p>Safety Privacy & Terms</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className={css.copyRight}>
                <span>Copyright ©2023 by Amazon Inc.</span>
                <span>All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer