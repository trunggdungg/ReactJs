import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import image from '../../../../assets/images'
import { Wrapper as PropperWrapper } from '../../../Propper';
import AccountItem from '../../../AccountItem';


const cx = classNames.bind(styles);// dùng bind có thể sử dụng classNames với styles như sau: cx('header')
function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0); // Giả lập việc gọi API mất 2 giây
    }, []);
    return (

        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <img src={image.logo} alt="TikTok" />
                </div>
                {/* search */}

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (

                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PropperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem /> 
                            </PropperWrapper>
                        </div>
                    )}>
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
                </Tippy>

                <div className={cx('actions')}></div>
            </div>
        </header>

    );
}

export default Header;