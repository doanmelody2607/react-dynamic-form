import { IImages } from '~/commons/types/images';

const images: IImages = {
    coDang: require('~/assets/images/co-dang.svg').default,
    noImage: require('~/assets/images/no-image.png'),

    // Login & Dashboard
    login: require('~/assets/images/login.png'),
    loginOTP: require('~/assets/images/login-otp.png'),
    dashboard: require('~/assets/images/dashboard.png'),

    // OutgoingDoc
    myDraft: require('~/assets/images/my-draft.png'),
    myDraftAddFile01: require('~/assets/images/my-draft_create_01.png'),
    myDraftAddFile02: require('~/assets/images/my-draft_create_02.png'),
    myDraftAddFile03: require('~/assets/images/my-draft_create_03.png'),
    myDraftAddFile04: require('~/assets/images/my-draft_create_04.png'),
    myDraftAddFile05: require('~/assets/images/my-draft_create_05.png'),
    myDraftAddFile06: require('~/assets/images/my-draft_create_06.png'),
    myDraftAddFile07: require('~/assets/images/my-draft_create_07.png'),
    myDraftAddFile08: require('~/assets/images/my-draft_create_08.png'),
    myDraftAddFile09: require('~/assets/images/my-draft_create_09.png'),

    taskManagement: require('~/assets/images/quan-ly-nhiem-vu-dhtn.png'),
    taskManagementAdvance: require('~/assets/images/quan-ly-nhiem-vu-tim-kiem-nang-cao.png'),
    vbDenChoXuLy: require('~/assets/images/van-ban-den-cho-xu-ly.png'),
    vbDenDaXuLy: require('~/assets/images/van-ban-den-da-xu-ly.png'),
};

export default images;
