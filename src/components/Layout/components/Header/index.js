import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faCloudUpload, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';


import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles); // to write post-item, not only camelCase

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {   
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language',
                        data: [
                            {   
                                type: 'child language',
                                code: 'en-gb',
                                title: 'English (UK)'
                            },
                            {   
                                type: 'child language',
                                code: 'en-us',
                                title: 'English (US)'
                            },
                        ]
                    }
                },
                {   
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle change language
                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'View profile',
            to: '/@hoa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <img src={images.logo} alt="Tiktok" />

                {/* Search */}
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>

                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content='Upload video' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text> Upload </Button>
                            <Button primary> Log in </Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img 
                                className={cx('user-avatar')} 
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/48fb27ac752a594c29a9db84787f7d0a~c5_100x100.jpeg?x-expires=1683396000&x-signature=2y9pKTOnTZQRbbCSJpbsmWj5Vsw%3D" 
                                alt="nguyenvana"
                            />
                        ) : (
                            <button className={cx('more-btn')}> 
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>

            </div>
        </header>
    );
}

export default Header;
