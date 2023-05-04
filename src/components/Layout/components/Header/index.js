import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles); // to write post-item, not only camelCase

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            {/* Logo */}
            {/* Search */}
        </div>
    </header>;
}

export default Header;
