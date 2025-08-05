import classNames from "classnames/bind";
import styles from './Propper.module.scss';

const cx = classNames.bind(styles); // dùng bind có thể sử dụng classNames với styles như sau: cx('wrapper')

function Wrapper({ children,}) {
    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    );
}

export default Wrapper;