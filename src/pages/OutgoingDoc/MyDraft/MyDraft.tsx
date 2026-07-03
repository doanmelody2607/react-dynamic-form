import { FC } from 'react';
import Image from '~/components/Image';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './MyDraft.module.scss';
import Card from '~/components/Card';
import ImageWithFigcaption from '~/components/ImageWithFigcaption';
import Step from '~/components/Step';
import Highlight from '~/components/Highlight';

const cx = classNames.bind(styles);

interface MyDraftProps {}

const MyDraft: FC<MyDraftProps> = () => {
    return (
        <Card
            cardTitle="📥 DỰ THẢO CỦA TÔI"
            description="Đây là danh sách tất cả dự thảo do bạn tạo ra, thông qua các trường thông tin trên bảng bạn có thể theo dõi được các dự thảo dễ dàng."
        >
            <ImageWithFigcaption figcaption="Hình 2.1 - Danh sách văn bản dự thảo đã tạo">
                <Image src={images.myDraft} alt="Văn bản dự thảo" />
            </ImageWithFigcaption>

            <h3>Cách tạo mới dự thảo</h3>

            <Step>
                <li>
                    Tại giao diện <strong>Danh sách văn bản dự thảo</strong>, click vào nút có hình{' '}
                    <Highlight content="dấu cộng" highlightType="do" /> như{' '}
                    <Highlight content="Hình 2.1" />, hệ thống sẽ mở trang{' '}
                    <Highlight content="Tạo mới văn bản dự thảo" highlightType="xanh" />
                </li>
                <ImageWithFigcaption figcaption="Hình 2.2 - Giao diện trang tạo mới văn bản dự thảo">
                    <Image src={images.myDraftAddFile01} alt="Tạo mới văn bản dự thảo" />
                </ImageWithFigcaption>
                <li>
                    Click vào nút <Highlight content="Chọn file" highlightType="do" /> như{' '}
                    <Highlight content="Hình 2.2" />, đưa file dự thảo lên, hệ thống sẽ quét qua
                    file văn bản và tự động điền các trường thông tin cần thiết vào.
                </li>
                <ImageWithFigcaption figcaption="Hình 2.3 - Giao diện trang tạo mới văn bản dự thảo sau khi tải file dự thảo lên">
                    <Image
                        src={images.myDraftAddFile02}
                        alt="Tạo mới văn bản dự thảo - đã đính file lên"
                    />
                </ImageWithFigcaption>
                <li>
                    Click vào <Highlight content="Kiểm tra thể thức, chính tả" highlightType="do" />
                    , hệ thống sẽ mở tab kiểm tra lên, trong tab hiển thị nội dung văn bản và danh
                    sách lỗi văn bản
                </li>
                <ImageWithFigcaption figcaption="Hình 2.4 - Giao diện tab kiểm tra thể thức, chính tả">
                    <Image
                        src={images.myDraftAddFile03}
                        alt="Tạo mới văn bản dự thảo - kiểm tra chính tả"
                    />
                </ImageWithFigcaption>
                <li>
                    Sau khi hoàn tất việc kiểm tra thể thức, chính tả dự thảo, tiếp theo là phần{' '}
                    <Highlight content="Chọn người xử lý tiếp theo" />, khi chọn người xử lý {'-->'}{' '}
                    chức danh tương ứng sẽ hiển thị. Ở phần <Highlight content="Chọn hành động" />,
                    có 2 luồng hành động sau: <Highlight content="Phê duyệt" highlightType="xanh" />{' '}
                    và <Highlight content="Ký duyệt" highlightType="xanh" />
                </li>
                <ImageWithFigcaption figcaption="Hình 2.5 - Giao diện trang tạo mới văn bản dự thảo - Danh sách cá nhân xử lý tiếp theo">
                    <Image
                        src={images.myDraftAddFile04}
                        alt="Tạo mới văn bản dự thảo - Chọn người ký duyệt - Chưa chọn"
                    />
                </ImageWithFigcaption>
                <li>
                    Sau khi chọn xong <Highlight content="Người xử lý" /> và{' '}
                    <Highlight content="Hành động" /> xong, ta sẽ có được giao diện như hình bên
                    dưới
                </li>
                <ImageWithFigcaption figcaption="Hình 2.6 - Giao diện trang tạo mới văn bản dự thảo - Danh sách cá nhân xử lý tiếp theo">
                    <Image
                        src={images.myDraftAddFile05}
                        alt="Tạo mới văn bản dự thảo - Chọn người ký duyệt - Đã chọn"
                    />
                </ImageWithFigcaption>
                <li>
                    Trước khi trình phê duyệt và ký duyệt, có thể chọn các cá nhân để xin ý kiến
                    trong phần <Highlight content="Danh sách cho ý kiến" /> như hình bên dưới.
                </li>
                <ImageWithFigcaption figcaption=" Hình 2.7 - Giao diện trang tạo mới văn bản dự thảo - Danh sách các cá nhân cho ý kiến">
                    <Image
                        src={images.myDraftAddFile06}
                        alt="Tạo mới văn bản dự thảo - Chọn các cá nhân xin ý kiến"
                    />
                </ImageWithFigcaption>
                <li>
                    Click vào <Highlight content="Chọn cá nhân" highlightType="do" /> như{' '}
                    <Highlight content="Hình 2.7" />, tab danh sách cá nhân sẽ được mở lên như hình
                    bên dưới {'-->'} chọn cơ quan, đơn vị và các cá nhân tương ứng
                </li>
                <ImageWithFigcaption figcaption=" Hình 2.8 - Giao diện trang tạo mới văn bản dự thảo - Chọn các cá nhân cho ý kiến">
                    <Image
                        src={images.myDraftAddFile07}
                        alt="Tạo mới văn bản dự thảo - Chọn các cá nhân xin ý kiến"
                    />
                </ImageWithFigcaption>
                <li>
                    Sau khi đã chọn các cá nhân và đồng ý thêm vào danh sách, ta sẽ có được giao
                    diện <Highlight content="Danh sách cho ý kiến" /> như hình dưới đây
                </li>
                <ImageWithFigcaption figcaption=" Hình 2.9 - Giao diện trang tạo mới văn bản dự thảo - Danh sách cá nhân cho ý kiến sau khi đã chọn">
                    <Image
                        src={images.myDraftAddFile08}
                        alt="Tạo mới văn bản dự thảo - Chọn các cá nhân xin ý kiến"
                    />
                </ImageWithFigcaption>
                <li>
                    Cuối cùng, dựa vào nhu cầu (<Highlight content="Lưu lại" highlightType="do" />,{' '}
                    <Highlight content="Trình ký" highlightType="xanh" />
                    ,...), ta sẽ thực hiện <Highlight content="Hành động" /> phù hợp
                </li>
                <ImageWithFigcaption figcaption=" Hình 2.10 - Giao diện trang tạo mới văn bản dự thảo - Chú thích các hành động">
                    <Image
                        src={images.myDraftAddFile09}
                        alt="Tạo mới văn bản dự thảo - Chọn các cá nhân xin ý kiến"
                    />
                </ImageWithFigcaption>
            </Step>
        </Card>
    );
};

export default MyDraft;
