import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss';
import images from '~/assets/images';


const cx = classNames.bind(styles); // to write post-item, not only camelCase

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <img src={images.logo} alt="logo" />

                {/* Search */}
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

                    {/* Search */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('actions')}>

                </div>

            </div>
        </header>
    );
}

export default Header;
