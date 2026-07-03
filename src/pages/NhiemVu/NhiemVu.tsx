import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './NhiemVu.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

interface NhiemVuProps {}

const NhiemVu: FC<NhiemVuProps> = () => {
    return (
        <div className={cx('page')}>
            <div className={cx('card')}>
                <h2>💼 Quản lý Nhiệm vụ</h2>
                <p>
                    <span className={cx('path')}>QUẢN LÝ NHIỆM VỤ → Danh sách nhiệm vụ</span>
                </p>
                <div className={cx('img-box')}>
                    <div className={cx('image-wrapper')}>
                        <Image src={images.taskManagement} alt="Màn hình đăng nhập" />
                        <div className={cx('cap')}>Hình 5.1 - Danh sách Nhiệm vụ được giao</div>
                    </div>
                </div>
                <p>
                    Chức năng Quản lý nhiệm vụ giúp chuyên viên theo dõi sát sao các công việc do
                    Lãnh đạo chỉ đạo, cũng như tự giao việc hoặc phối hợp công việc với các đồng chí
                    khác.
                </p>

                <h3>5.1. Xem và lọc danh sách nhiệm vụ</h3>
                <p>
                    Tại màn hình danh sách, bạn có thể lọc nhanh các nhiệm vụ bằng bộ lọc ở góc
                    trên:
                </p>
                <ul>
                    <li>
                        <strong>Nhiệm vụ cá nhân:</strong> Chỉ hiện các việc được giao cho riêng bạn
                        thực hiện.
                    </li>
                    <li>
                        <strong>Nhiệm vụ phối hợp:</strong> Hiện các công việc bạn tham gia với vai
                        trò hỗ trợ, phối hợp.
                    </li>
                    <li>
                        <strong>Nhiệm vụ giao đi:</strong> Danh sách các công việc do bạn tạo và
                        giao cho người khác.
                    </li>
                    <li>
                        <strong>Lọc theo trạng thái:</strong>{' '}
                        <em>
                            Chưa thực hiện, Đang thực hiện, Hoàn thành, Hoàn thành quá hạn, Quá hạn
                        </em>{' '}
                        để tập trung xử lý công việc gấp.
                    </li>
                </ul>

                <h3>5.2. Báo cáo tiến độ và Hoàn thành nhiệm vụ</h3>
                <p>
                    Khi thực hiện công việc, bạn cần thường xuyên cập nhật tiến độ để Lãnh đạo giao
                    việc nắm được thông tin:
                </p>
                <ol className={cx('steps')}>
                    <li>
                        <strong>Mở chi tiết nhiệm vụ:</strong> Nhấp đúp vào dòng nhiệm vụ cần báo
                        cáo trong danh sách.
                    </li>
                    <li>
                        <strong>Bấm nút Cập nhật tiến độ:</strong> Ở thanh công cụ phía trên, bấm
                        nút <strong>"Cập nhật tiến độ"</strong> (hoặc chọn tab{' '}
                        <strong>"Báo cáo tiến độ"</strong> bên dưới). Màn hình cập nhật sẽ hiển thị.
                    </li>
                    <li>
                        <strong>Nhập thông tin tiến độ:</strong>
                        <ul>
                            <li>
                                <strong>% hoàn thành:</strong> Nhập số phần trăm tiến độ thực tế (ví
                                dụ: 50%, 80%, hoặc 100% nếu đã hoàn thành).
                            </li>
                            <li>
                                <strong>Nội dung báo cáo:</strong> Viết chi tiết các phần việc đã
                                làm được, kết quả đạt được và khó khăn vướng mắc (nếu có).
                            </li>
                            <li>
                                <strong>Tài liệu đính kèm:</strong> Nhấn chọn file báo cáo hoặc sản
                                phẩm công việc từ máy tính tải lên làm minh chứng.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Ghi lại:</strong> Bấm nút <strong>"Ghi lại"</strong> để lưu báo cáo.
                        Nếu nhập 100%, nhiệm vụ sẽ tự động chuyển sang trạng thái{' '}
                        <em>Chờ xác nhận hoàn thành</em> từ phía Lãnh đạo.
                    </li>
                </ol>
                <div className={cx('img-box')}>
                    <div className={cx('image-wrapper')}>
                        <Image src={images.taskManagementAdvance} alt="Màn hình đăng nhập" />
                        <div className={cx('cap')}>
                            Hình 5.2 - Màn hình báo cáo tiến độ và đính kèm file minh chứng
                        </div>
                    </div>
                </div>
                <h3>5.3. Trao đổi và thảo luận công việc</h3>
                <p>
                    Để trao đổi trực tiếp với người giao việc hoặc người phối hợp mà không cần gặp
                    trực tiếp:
                </p>
                <ul>
                    <li>
                        Nhấp đúp vào nhiệm vụ → chọn tab <strong>"Thảo luận"</strong> ở góc dưới
                        trang chi tiết.
                    </li>
                    <li>
                        Nhập nội dung ý kiến, giải trình hoặc câu hỏi trao đổi công việc (Ví dụ: báo
                        cáo xin gia hạn thời gian thực hiện gửi Lãnh đạo{' '}
                        <span className={cx('highlight')}>Nguyễn Đăng Quang</span>).
                    </li>
                    <li>
                        Bấm nút <strong>"Gửi"</strong>. Nội dung trao đổi sẽ hiển thị theo dòng thời
                        gian và thông báo đến Lãnh đạo ngay lập tức.
                    </li>
                </ul>

                <h3>5.4. Quy trình tự tạo nhiệm vụ / Giao việc</h3>
                <ol className={cx('steps')}>
                    <li>
                        Bấm nút <strong>"Thêm mới"</strong> trên thanh công cụ phía trên bảng danh
                        sách.
                    </li>
                    <li>
                        Điền đầy đủ thông tin:{' '}
                        <strong>
                            Tên nhiệm vụ (*), Nội dung chi tiết, Ngày bắt đầu, Hạn hoàn thành
                        </strong>
                        .
                    </li>
                    <li>
                        Tại phần <strong>Người thực hiện</strong>, gõ tên cán bộ (Ví dụ: gõ tìm{' '}
                        <span className={cx('highlight')}>Nguyễn Đăng Quang</span> nếu cần xin chỉ
                        đạo trực tiếp hoặc phối hợp, hoặc chọn tên đồng chí khác).
                    </li>
                    <li>
                        Bấm <strong>"Ghi lại"</strong> để khởi tạo nhiệm vụ.
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default NhiemVu;
