import classNames from 'classnames/bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('outer')}>
                <div className={cx('container')}>
                    <div className={cx('inner')}>
                        <div className={cx('logo')}>
                            <img src={require('~/resources/logo-mamnonphuongthy.png')} alt="logo-mam-non-phuong-thy" />
                            <h1 className={cx('logo-title')}>MẦM NON PHƯƠNG THY</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
