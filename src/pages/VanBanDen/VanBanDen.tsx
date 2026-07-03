import classNames from 'classnames/bind';
import { FC } from 'react';
import styles from './VanBanDen.module.scss';

const cx = classNames.bind(styles);

interface VanBanDenProps {}

const VanBanDen: FC<VanBanDenProps> = () => {
    return (
        <div className={cx('page')}>
            <div className={cx('card')}>
                <h2>📥 Văn bản đến — Tổng quan</h2>
                <p>
                    Module <strong>Văn bản đến</strong> là nơi bạn tiếp nhận, đọc và xử lý các văn
                    bản được gửi đến cho bạn hoặc đơn vị.
                </p>
                <p>
                    Trong menu bên trái, bấm <span className={cx('path')}>VĂN BẢN ĐẾN</span> để mở
                    rộng danh sách con:
                </p>
                <table>
                    <tr>
                        <th>Chức năng con</th>
                        <th>Ý nghĩa</th>
                    </tr>
                    <tr>
                        <td>Văn bản chờ xử lý</td>
                        <td>
                            Danh sách văn bản mới chuyển đến bạn, <strong>chưa xử lý xong</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Văn bản đã xử lý</td>
                        <td>
                            Văn bản bạn <strong>đã chuyển tiếp</strong> hoặc{' '}
                            <strong>đã hoàn thành</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Văn bản bị trả lại</td>
                        <td>
                            Văn bản bạn chuyển nhưng người nhận <strong>trả lại</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Văn bản nhận để biết</td>
                        <td>
                            Văn bản gửi cho bạn <strong>chỉ để nắm thông tin</strong> (không cần xử
                            lý)
                        </td>
                    </tr>
                    <tr>
                        <td>Tra cứu VB đến tôi</td>
                        <td>
                            Tìm kiếm nâng cao trong <strong>toàn bộ</strong> VB đến của bạn
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default VanBanDen;
