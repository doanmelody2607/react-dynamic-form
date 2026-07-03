import classNames from 'classnames/bind';
import { FC } from 'react';
import images from '~/assets/images';
import Card from '~/components/Card';
import Image from '~/components/Image';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';
import Note from '~/components/Note';
import styles from './Home.module.scss';
import Highlight from '~/components/Highlight';
import Step from '~/components/Step';

const cx = classNames.bind(styles);

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return (
        <div className={cx('page')}>
            <Card
                cardTitle="🔐 Đăng nhập vào Hệ thống"
                description="Hệ thống Điều hành tác nghiệp được truy cập qua trình duyệt web. Dưới đây là
                    hướng dẫn cách đăng nhập:"
            >
                <h3>Các bước đăng nhập</h3>
                <Step>
                    <li>
                        Mở trình duyệt <Highlight content="Google Chrome" /> hoặc{' '}
                        <Highlight content="Microsoft Edge" />
                    </li>

                    <li>
                        Gõ vào thanh địa chỉ: <strong>https://dhtn.dcs.vn</strong> rồi nhấn{' '}
                        <strong>Enter</strong>.
                    </li>

                    <ImageWithFigcaption figcaption="Hình 1.1 - Màn hình đăng nhập hệ thống tại địa chỉ dhtn.dcs.vn">
                        <Image src={images.login} alt="Màn hình đăng nhập" />
                    </ImageWithFigcaption>

                    <li>
                        Tại ô <strong>"Tên tài khoản"</strong> — nhập số CCCD.
                    </li>
                    <li>
                        Tại ô <strong>"Mật khẩu"</strong> — nhập mật khẩu. Bấm biểu tượng 👁 bên
                        phải để kiểm tra mật khẩu đã đúng chưa.
                    </li>

                    <li>
                        Bấm nút <strong>Đăng nhập</strong> màu đỏ, mã OTP (6 số) sẽ được gửi về SĐT
                        ngay lập tức, nhập mã OTP vào hệ thống để hoàn thành việc đăng nhập.
                    </li>

                    <ImageWithFigcaption
                        figcaption="Hình 1.2 - Màn hình đăng nhập hệ thống khi có yêu cầu nhập mã xác
                                thực OTP"
                    >
                        <Image src={images.loginOTP} alt="Màn hình đăng nhập - xác thực OTP" />
                    </ImageWithFigcaption>
                </Step>

                <Note noteType="tip">
                    Ngoài đăng nhập bằng tài khoản thông thường, bạn cũng có thể đăng nhập bằng{' '}
                    <strong>VNeID</strong> (nút phía dưới). Liên hệ bộ phận IT để được hướng dẫn
                    kích hoạt VNeID.
                </Note>

                <Note noteType="warn">
                    Nếu quên mật khẩu, bấm vào chữ <strong>"Quên mật khẩu"</strong> trên màn hình
                    đăng nhập hoặc liên hệ quản trị viên. Không chia sẻ mật khẩu cho người khác.
                </Note>
            </Card>

            <Card
                cardTitle="🏠 Trang chủ (Dashboard) — Màn hình tổng quan"
                description="Sau khi đăng nhập thành công, bạn sẽ thấy màn hình Trang chủ như sau:"
            >
                <ImageWithFigcaption figcaption="Hình 1.3 - Trang chủ hệ thống: hiển thị thống kê và các chức năng chính">
                    <Image src={images.dashboard} alt="Màn hình dashboard" />
                </ImageWithFigcaption>
                <h3>Giải thích các vùng trên Trang chủ</h3>
                <table>
                    <tr>
                        <th>Vùng</th>
                        <th>Mô tả chi tiết</th>
                    </tr>
                    <tr>
                        <td>
                            <strong>Menu bên trái</strong>
                        </td>
                        <td>
                            Danh sách tất cả chức năng: Văn bản đến, Văn bản đi, Phiếu trình, Lịch
                            họp, Nhiệm vụ... Bấm vào tên chức năng để mở.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Thanh trên cùng (đỏ)</strong>
                        </td>
                        <td>
                            Hiển thị tên đơn vị, nút tìm kiếm 🔍, thông báo 🔔, làm mới 🔄. Bấm vào
                            tên bạn ở góc phải để đổi mật khẩu hoặc đăng xuất.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Các ô thống kê</strong>
                        </td>
                        <td>
                            Số lượng văn bản đến/đi/phiếu trình theo trạng thái.{' '}
                            <Highlight content="Bấm trực tiếp vào con số" /> để mở danh sách tương
                            ứng — rất nhanh!
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Nhiệm vụ nhận được</strong>
                        </td>
                        <td>
                            Biểu đồ tiến độ nhiệm vụ cá nhân — giúp bạn nắm nhanh tổng quan công
                            việc được giao.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Lịch họp sắp tới</strong>
                        </td>
                        <td>Hiển thị các cuộc họp trong tuần bạn cần tham dự.</td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Các tab phía trên</strong>
                        </td>
                        <td>
                            Mỗi chức năng mở ra sẽ là một tab riêng. Bạn có thể chuyển qua lại giữa
                            các tab, hoặc bấm X để đóng tab.
                        </td>
                    </tr>
                </table>
                <h3>Đăng xuất</h3>
                <Step>
                    <li>
                        Bấm vào <strong>tên của bạn</strong> ở góc trên bên phải (ví dụ:{' '}
                        <strong>"Vũ Ngọc Đoàn"</strong>).
                    </li>
                    <li>
                        Chọn <strong>"Đăng xuất"</strong> từ menu xổ xuống.
                    </li>
                </Step>
                <Note noteType="danger">
                    Luôn đăng xuất khi rời khỏi máy tính, đặc biệt trên máy dùng chung, để bảo vệ
                    tài khoản của bạn.
                </Note>
            </Card>
        </div>
    );
};

export default Home;
