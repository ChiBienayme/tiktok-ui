import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper} from '~/components/Popper';
import AccountItem from '~/components/AccountItem'
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles); // to write post-item, not only camelCase

function Header() {
    const [searchResult, setSearchResult] =  useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 0)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <img src={images.logo} alt="Tiktok" />

                {/* Search */}
                <Tippy 
                    interactive
                    visible={searchResult.length > 0 }
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>

                                    <AccountItem/>
                                    <AccountItem/>
                                    <AccountItem/>
      
                                </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input 
                            placeholder="Search accounts and videos" 
                            spellCheck={false} 
                        />
                        {/* Clear */}
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* Loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        {/* Search button */}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>

                </div>

          
            </div>
        </header>
    );
}

export default Header;