import { FC } from 'react';
import Image from '~/components/Image';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './VanBanChoXuLy.module.scss';

const cx = classNames.bind(styles);

interface VanBanChoXuLyProps {}

const VanBanChoXuLy: FC<VanBanChoXuLyProps> = () => {
    return (
        <div className={cx('page')}>
            <div className={cx('page')}>
                <div className={cx('card')}>
                    <h2>📥 Văn bản chờ xử lý</h2>
                    <p>
                        <span className={cx('path')}>VĂN BẢN ĐẾN → Văn bản chờ xử lý</span>
                    </p>
                    <p>
                        Đây là danh sách tất cả văn bản được chuyển đến cho bạn mà bạn{' '}
                        <strong>chưa xử lý xong</strong>.
                    </p>
                    <div className={cx('img-box')}>
                        <div className={cx('image-wrapper')}>
                            <Image src={images.vbDenChoXuLy} alt="Văn bản đến chờ xử lý" />
                            <div className={cx('cap')}>
                                Hình 2.1 - Danh sách văn bản đến chờ xử lý
                            </div>
                        </div>
                    </div>

                    <h3>Cách tìm kiếm văn bản</h3>
                    <ol className={cx('steps')}>
                        <li>
                            <strong>Tìm kiếm nhanh:</strong> Nhìn lên phía trên bảng danh sách, bạn
                            sẽ thấy các ô trống nhỏ nằm dưới tiêu đề của mỗi cột (như Số ký hiệu,
                            Trích yếu...). Để tìm văn bản, bạn chỉ cần gõ trực tiếp từ khóa vào ô
                            tương ứng (ví dụ: gõ <span className={cx('highlight')}>12-HD/TW</span>{' '}
                            vào cột "Số, ký hiệu" hoặc gõ{' '}
                            <span className={cx('highlight')}>Đại hội</span> vào cột "Trích yếu nội
                            dung"). Danh sách sẽ tự động lọc kết quả ngay lập tức khi bạn gõ.
                        </li>
                        <li>
                            <strong>Tìm kiếm nâng cao:</strong> Khi cần lọc chính xác theo ngày nhận
                            hoặc độ khẩn/mật, hãy bấm vào nút <strong>"Tìm kiếm nâng cao"</strong>{' '}
                            (biểu tượng hình kính lúp màu đỏ ở góc trên bên phải của bảng). Một hộp
                            thông tin sẽ hiện ra, bạn điền khoảng thời gian hoặc cơ quan ban hành
                            rồi bấm nút <strong>"Tìm kiếm"</strong>.
                        </li>
                        <li>
                            <strong>Làm mới danh sách:</strong> Nếu muốn xóa các từ khóa đã lọc để
                            quay lại danh sách đầy đủ ban đầu, bạn xóa chữ đã gõ trong các ô hoặc
                            bấm nút <strong>"Làm mới"</strong> (biểu tượng 2 mũi tên xoay tròn) ở
                            trên thanh công cụ.
                        </li>
                    </ol>

                    <h3>Cách đọc và tải file văn bản</h3>
                    <ol className={cx('steps')}>
                        <li>
                            <strong>Mở văn bản xem chi tiết:</strong> Dùng chuột nhấp đúp (click
                            liên tục 2 lần) vào dòng văn bản bạn muốn mở trong bảng danh sách. Hệ
                            thống sẽ mở ra một Tab làm việc mới hiển thị toàn bộ nội dung của văn
                            bản đó.
                        </li>
                        <li>
                            <strong>Đọc văn bản trực tiếp:</strong> Nhìn vào mục "Tệp đính kèm"
                            (thường có biểu tượng ghim giấy 📎). Bấm chuột trái trực tiếp vào tên
                            tệp văn bản (đuôi `.pdf` hoặc `.docx`). Trình duyệt sẽ mở một tab mới
                            hiển thị nội dung tệp để bạn đọc ngay mà không cần tải về.
                        </li>
                        <li>
                            <strong>Tải tệp về máy tính:</strong> Nếu muốn lưu trữ tệp trên máy
                            tính, bạn bấm vào biểu tượng <strong>tải xuống (⬇️)</strong> nằm bên
                            phải tên tệp đính kèm. Tệp tải về sẽ được lưu mặc định trong thư mục{' '}
                            <span className={cx('highlight')}>Downloads</span> trên máy tính của
                            bạn.
                        </li>
                    </ol>

                    <h3>Cách chuyển tiếp văn bản (Chuyển xử lý cho đồng chí khác)</h3>
                    <ol className={cx('steps')}>
                        <li>
                            <strong>Mở tính năng chuyển tiếp:</strong> Tại màn hình xem chi tiết văn
                            bản, bạn nhìn lên thanh công cụ nằm ngang phía trên và bấm vào nút{' '}
                            <strong>"Chuyển xử lý"</strong>.
                        </li>
                        <li>
                            <strong>Chọn người nhận từ danh sách:</strong> Một cửa sổ sơ đồ tổ chức
                            (cây đơn vị) sẽ hiện lên.
                            <ul>
                                <li>
                                    Bấm vào biểu tượng dấu cộng{' '}
                                    <span className={cx('highlight')}>(+)</span> hoặc mũi tên nhỏ
                                    đứng trước tên phòng ban/đơn vị để mở rộng danh sách nhân viên
                                    bên trong.
                                </li>
                                <li>
                                    Tìm tên người bạn muốn chuyển. Tick chọn vào ô vuông trước tên
                                    người đó.
                                </li>
                                <li>
                                    Tại dòng tên người đó, ở các cột tương ứng, chọn vai trò xử lý
                                    bằng cách tick vào một trong các ô: <strong>Xử lý chính</strong>{' '}
                                    (người chịu trách nhiệm giải quyết chính),{' '}
                                    <strong>Đồng xử lý</strong> (người phối hợp thực hiện), hoặc{' '}
                                    <strong>Nhận để biết</strong> (gửi xem thông tin).
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Nhập ý kiến chỉ dẫn:</strong> Gõ nội dung yêu cầu xử lý vào
                            khung trống <strong>"Ý kiến xử lý"</strong> ở phần dưới của cửa sổ (Ví
                            dụ:{' '}
                            <em>
                                "Chuyển đồng chí Nguyễn Văn A xử lý, tham mưu văn bản phúc đáp trước
                                ngày 05/07"
                            </em>
                            ).
                        </li>
                        <li>
                            <strong>Gửi đi:</strong> Bấm nút <strong>"Gửi"</strong> màu đỏ ở cuối
                            cửa sổ để hoàn tất. Văn bản sẽ tự động chuyển đi và biến mất khỏi danh
                            sách "Văn bản chờ xử lý" của bạn.
                        </li>
                    </ol>
                    <div className={cx('warn')}>
                        Nếu bạn phát hiện mình gửi nhầm người, hãy mở danh sách{' '}
                        <strong>"Văn bản đã xử lý"</strong>, nhấp đúp mở văn bản đó lên, chọn tab{' '}
                        <strong>"Xem luân chuyển"</strong> ở góc dưới và bấm nút{' '}
                        <strong>"Thu hồi"</strong>. Lưu ý: Chỉ thu hồi thành công khi người nhận
                        chưa bấm mở xem văn bản đó.
                    </div>

                    <h3>Cách hoàn thành văn bản (Khi đã giải quyết xong công việc)</h3>
                    <ol className={cx('steps')}>
                        <li>
                            <strong>Mở văn bản:</strong> Nhấp đúp chuột để mở chi tiết văn bản cần
                            báo cáo hoàn thành.
                        </li>
                        <li>
                            <strong>Báo cáo kết quả:</strong> Bấm nút <strong>"Hoàn thành"</strong>{' '}
                            trên thanh công cụ phía trên.
                        </li>
                        <li>
                            <strong>Ghi nhận thông tin xử lý:</strong> Nhập nội dung tóm tắt kết quả
                            xử lý vào ô ý kiến (Ví dụ:{' '}
                            <em>"Đã soạn dự thảo công văn gửi UBND huyện ngày 28/06"</em> hoặc{' '}
                            <em>"Đã nghiên cứu và lưu hồ sơ theo dõi"</em>).
                        </li>
                        <li>
                            <strong>Xác nhận:</strong> Bấm nút <strong>"Ghi lại"</strong> để lưu.
                            Văn bản sẽ chuyển sang trạng thái "Đã hoàn thành" và chuyển vào kho lưu
                            trữ đã xử lý của bạn.
                        </li>
                    </ol>
                    <div className={cx('tip')}>
                        Nếu muốn hoàn thành nhiều văn bản cùng lúc, tại danh sách chờ xử lý, bạn
                        tick chọn vào ô vuông đầu dòng của các văn bản đó, sau đó bấm nút{' '}
                        <strong>"Hoàn thành"</strong> trên thanh công cụ chung.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VanBanChoXuLy;
