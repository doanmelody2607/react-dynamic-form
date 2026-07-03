import classNames from 'classnames/bind';
import { FC } from 'react';
import styles from './OutgoingDoc.module.scss';

const cx = classNames.bind(styles);

interface OutgoingDocProps {}

const OutgoingDoc: FC<OutgoingDocProps> = () => {
    return (
        <div className={cx('page')}>
            <div className={cx('card')}>
                <h2>📤 Văn bản đi — Tổng quan</h2>
                <p>
                    Module <strong>Văn bản đi</strong> giúp bạn soạn thảo, trình ký và theo dõi tiến
                    trình phát hành văn bản.
                </p>
                <table>
                    <tr>
                        <th>Chức năng con</th>
                        <th>Ý nghĩa</th>
                    </tr>
                    <tr>
                        <td>Dự thảo của tôi</td>
                        <td>
                            Các văn bản bạn đang soạn, <strong>chưa trình ký</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>VB ký duyệt</td>
                        <td>
                            Văn bản đã trình, đang <strong>chờ lãnh đạo ký</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>Tra cứu VB đi</td>
                        <td>Tìm kiếm toàn bộ VB đi bạn tham gia</td>
                    </tr>
                    <tr>
                        <td>Theo dõi VB đi</td>
                        <td>
                            Xem đơn vị nhận đã <strong>mở đọc chưa</strong>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default OutgoingDoc;
