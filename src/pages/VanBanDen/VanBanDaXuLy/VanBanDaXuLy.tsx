import { FC } from 'react';
import Image from '~/components/Image';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './VanBanDaXuLy.module.scss';

const cx = classNames.bind(styles);

interface VanBanDaXuLyProps {}

const VanBanDaXuLy: FC<VanBanDaXuLyProps> = () => {
    return (
        <div className={cx('page')}>
            <div className={cx('card')}>
                <h2>📥 Văn bản đã xử lý</h2>
                <p>
                    <span className={cx('path')}>VĂN BẢN ĐẾN → Văn bản đã xử lý</span>
                </p>
                <div className={cx('img-box')}>
                    <div className={cx('image-wrapper')}>
                        <Image src={images.vbDenDaXuLy} alt="Văn bản đến đã xử lý" />
                        <div className={cx('cap')}>Hình 2.2 - Danh sách văn bản đã xử lý</div>
                    </div>
                </div>
                <p>
                    Hiển thị tất cả văn bản bạn <strong>đã chuyển tiếp</strong> hoặc{' '}
                    <strong>bấm hoàn thành</strong>. Bạn vẫn có thể:
                </p>
                <ul>
                    <li>Xem lại chi tiết, đọc file đính kèm</li>
                    <li>Xem biểu đồ luân chuyển (ai đã xử lý, chuyển tiếp cho ai)</li>
                    <li>Lưu văn bản vào hồ sơ công việc</li>
                    <li>Xuất danh sách ra file Excel để báo cáo</li>
                </ul>
            </div>
        </div>
    );
};

export default VanBanDaXuLy;
