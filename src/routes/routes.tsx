// Pages
import { AppRoute } from '~/commons/interfaces/routes';
import appRoutes from '~/config/routes';

// export interface AppRoute {
//     id: string;
//     path: string;
//     title: string;
//     icon?: string;
//     component: React.FC;
//     children?: AppRoute[];
// }

// Public routes
// const publicRoutes: IRoute[] = [
//     { path: config.routes.home, component: Home },
//     { path: config.routes.incomingDoc, component: VanBanDen },
//     { path: config.routes.incomingDocWaiting, component: VanBanChoXuLy },
//     { path: config.routes.incomingDocProcessed, component: VanBanDaXuLy },
//     { path: config.routes.incomingDocRejected, component: VanBanBiTraLai },
//     { path: config.routes.outgoingDoc, component: VanBanDi },
//     { path: config.routes.submissionForm, component: PhieuTrinh },
//     { path: config.routes.taskManagement, component: NhiemVu },
//     { path: config.routes.meetingSchedule, component: LichHop },
// ];

// const publicRoutes = Object.values(routesConfig).map(({ path, component }) => ({
//     path,
//     component,
// }));

const flattenRoutes = (routes: AppRoute[]): AppRoute[] => {
    return routes.flatMap((route) => [
        { ...route },
        ...(route.children ? flattenRoutes(route.children) : []),
    ]);
};

const publicRoutes = flattenRoutes(appRoutes);
console.log('publicRoutes:: ', publicRoutes);

export { publicRoutes };
