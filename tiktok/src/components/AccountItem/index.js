import classNames  from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function AccountItem(){
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s" alt="Account Avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Account Name</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>@username</p>
            </div>
        </div>
    );
}

export default AccountItem;