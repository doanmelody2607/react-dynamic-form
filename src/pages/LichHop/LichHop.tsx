import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './LichHop.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

interface LichHopProps {}

const LichHop: FC<LichHopProps> = () => {
    return (
        <div className={cx('page')}>
            <div className={cx('card')}>
                <h2>🔐 Đăng nhập vào Hệ thống</h2>
                <p>
                    Hệ thống Điều hành tác nghiệp được truy cập qua trình duyệt web. Dưới đây là màn
                    hình đăng nhập thực tế:
                </p>
                <div className={cx('img-box')}>
                    <div className={cx('image-wrapper')}>
                        <Image src={images.login} alt="Màn hình đăng nhập" />
                        <div className={cx('cap')}>
                            Hình 1.1 - Màn hình đăng nhập hệ thống tại địa chỉ dhtn.dcs.vn
                        </div>
                    </div>
                </div>
                <h3>Các bước đăng nhập</h3>
                <ol className={cx('steps')}>
                    <li>
                        Mở trình duyệt <span className={cx('highlight')}>Google Chrome</span> hoặc{' '}
                        <span className={cx('highlight')}>Microsoft Edge</span> trên máy tính.
                    </li>
                    <li>
                        Gõ vào thanh địa chỉ: <strong>https://dhtn.dcs.vn</strong> rồi nhấn{' '}
                        <strong>Enter</strong>.
                    </li>
                    <li>
                        Tại ô <strong>"Tên tài khoản"</strong> — nhập số điện thoại hoặc tên đăng
                        nhập đã được cấp.
                    </li>
                    <li>
                        Tại ô <strong>"Mật khẩu"</strong> — nhập mật khẩu. Bấm biểu tượng 👁 bên
                        phải để kiểm tra mật khẩu đã đúng chưa.
                    </li>
                    <li>
                        Bấm nút <strong className={cx('red-btn')}>Đăng nhập</strong> màu đỏ.
                    </li>
                </ol>
                <div className={cx('tip')}>
                    Ngoài đăng nhập bằng tài khoản thông thường, bạn cũng có thể đăng nhập bằng{' '}
                    <strong>VNeID</strong> (nút phía dưới). Liên hệ bộ phận IT để được hướng dẫn
                    kích hoạt VNeID.
                </div>
                <div className={cx('warn')}>
                    Nếu quên mật khẩu, bấm vào chữ <strong>"Quên mật khẩu"</strong> trên màn hình
                    đăng nhập hoặc liên hệ quản trị viên. Không chia sẻ mật khẩu cho người khác.
                </div>
            </div>
            <div className={cx('card')}>
                <h2>📅 Lịch họp & Lịch công tác</h2>
                <p>
                    <span className={cx('path')}>LỊCH HỌP → Lịch tuần cơ quan</span>
                </p>
                <div className={cx('img-box')}>
                    <img src="images/lich_tuan_co_quan.png" alt="Lịch tuần cơ quan" />
                    <div className={cx('cap')}>
                        Hình 6.1 - Giao diện Lịch tuần cơ quan hiển thị theo buổi
                    </div>
                </div>
                <p>
                    Chức năng Lịch họp cung cấp toàn bộ lịch công tác, lịch họp tập trung của cơ
                    quan và lịch của các đồng chí Thường trực Đảng ủy/Lãnh đạo đơn vị.
                </p>

                <h3>6.1. Xem lịch tuần cơ quan</h3>
                <p>
                    Giao diện lịch tuần hiển thị trực quan dưới dạng bảng phân chia theo từng ngày
                    trong tuần (từ Thứ Hai đến Chủ Nhật) và theo buổi (Sáng/Chiều):
                </p>
                <ul>
                    <li>
                        <strong>Nội dung cuộc họp:</strong> Hiển thị rõ thời gian bắt đầu, tiêu đề
                        cuộc họp/nội dung công tác.
                    </li>
                    <li>
                        <strong>Thành phần & Địa điểm:</strong> Ghi rõ cuộc họp diễn ra tại phòng
                        họp nào, do ai chủ trì và thành phần cán bộ triệu tập tham gia.
                    </li>
                </ul>

                <h3>6.2. Xem chi tiết cuộc họp và tải tài liệu chuẩn bị họp</h3>
                <p>Để chuẩn bị tốt nhất nội dung trước khi bước vào phòng họp:</p>
                <ol className={cx('steps')}>
                    <li>
                        <strong>Chọn cuộc họp:</strong> Di chuột đến cuộc họp cần xem trên bảng lịch
                        tuần và nhấp đúp chuột. Hộp thoại chi tiết cuộc họp sẽ hiện ra.
                    </li>
                    <li>
                        <strong>Kiểm tra tài liệu:</strong> Nhìn xuống mục{' '}
                        <strong>"Tài liệu đính kèm"</strong> ở phía dưới.
                    </li>
                    <li>
                        <strong>Tải file tài liệu:</strong> Bấm trực tiếp vào tên tệp tin đính kèm
                        (định dạng .pdf, .docx, .xlsx...) để tải tài liệu chuẩn bị họp về máy tính
                        cá nhân.
                    </li>
                </ol>
                <div className={cx('img-box')}>
                    <img src="images/lich_hop_danh_sach.png" alt="Tài liệu cuộc họp" />
                    <div className={cx('cap')}>
                        Hình 6.2 - Danh sách chi tiết cuộc họp và file tài liệu đính kèm
                    </div>
                </div>

                <h3>6.3. Kết xuất lịch tuần ra Word để in ấn</h3>
                <p>Khi cần in lịch tuần để dán bảng tin văn phòng hoặc lưu trữ bản cứng:</p>
                <ol className={cx('steps')}>
                    <li>Mở màn hình Lịch tuần cơ quan.</li>
                    <li>
                        Nhìn lên thanh công cụ phía trên bên phải, bấm vào nút biểu tượng{' '}
                        <strong>Tải xuống (📥 - Xuất Word)</strong>.
                    </li>
                    <li>
                        Hệ thống sẽ tự động xuất toàn bộ lịch của tuần hiện tại ra một file Word
                        (.docx) được định dạng bảng biểu rất đẹp mắt và chuẩn công vụ. Bạn chỉ cần
                        mở file lên và nhấn in.
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default LichHop;
