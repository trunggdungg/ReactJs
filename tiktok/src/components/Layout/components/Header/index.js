import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import image from '../../../../assets/images'

const cx = classNames.bind(styles);// dùng bind có thể sử dụng classNames với styles như sau: cx('header')
function Header() {
    return (

        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <img src={image.logo} alt="TikTok" />
                </div>
                {/* search */}
                <div className={cx('search')}>
                    <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* loading */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    {/* search */}
                    <button className={cx('search-button')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('actions')}></div>
            </div>
        </header>

    );
}

export default Header;