// routes/types.ts
export interface AppRoute {
    id: string;
    path?: string;
    title: string;
    icon?: string;
    component: React.FC;
    children?: AppRoute[];

    // Mở rộng sau này
    hidden?: boolean;
    permission?: string;
}
