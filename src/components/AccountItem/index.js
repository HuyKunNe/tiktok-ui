import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/9ce21962088d23b9fb91f28782d4c2d7.jpeg?x-expires=1656608400&x-signature=3Wo4vZaCpxM7I%2BPBVF8%2FSNm9UOk%3D"
            alt="MADProduction"
         />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>Nguyen Van A</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('usernames')}>nguyenvana</span>
         </div>
      </div>
   );
}

export default AccountItem;
