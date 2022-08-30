import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SubHeader.scss';
const cx = classNames.bind(styles);

function SubHeader() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('outer')}>
                <div className={cx('container')}>
                    <div className={cx('inner')}>
                        <div className={cx('direct-contact')}>
                            <a
                                href={
                                    'https://www.google.com/maps/place/M%E1%BA%A7m+Non+T%C6%B0+Th%E1%BB%A5c+Ph%C6%B0%C6%A1ng+Thy/@10.1190909,106.629646,17z/data=!4m5!3m4!1s0x319ffdfcd72b994d:0xf5477626fd9abaf!8m2!3d10.1190909!4d106.6318347'
                                }
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faMap} />
                                Hiển thị vị trí trên Google Map
                            </a>
                            <a href={'mailto:mamnonphuongthy@gmail.com'}>
                                <FontAwesomeIcon icon={faEnvelope} />
                                mamnonphuongthy@gmail.com
                            </a>
                            <a href={'tel:+84963940669'}>
                                <FontAwesomeIcon icon={faPhone} />
                                0963-940-669
                            </a>
                        </div>
                        <div className={cx('sociale-contact')}></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default SubHeader;
