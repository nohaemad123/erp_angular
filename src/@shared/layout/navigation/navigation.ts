import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'لوحه التحكم',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link: '/' + JSON.parse(localStorage.getItem('user')).username + '/Dashboard',
    },
    {
        id   : 'stock',
        title: 'المخزون',
        type : 'collapsable',
        icon : 'heroicons_outline:inbox',
        children: [
            {
            id   : 'store',
            title: 'حركه المخزون - وارد',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },
        {
            id   : 'store',
            title: 'حركه المخزون - صادر',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },
        {
            id   : 'store',
            title: 'تحويلات المخازن',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },
        ]
    },
    {
        id   : 'purchase',
        title: 'المشتريات',
        type : 'collapsable',
        icon : 'heroicons_outline:document-text',
        children: [
            {
            id   : 'store',
            title: 'امر شراء',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },
        {
            id   : 'store',
            title: 'فاتورة شراء',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },
        {
            id   : 'store',
            title: 'مرتجع شراء',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },
        ]
    },
    {
        id   : 'sales',
        title: 'المبيعات',
        type : 'collapsable',
        icon : 'heroicons_outline:building-storefront',
        children: [
            {
            id   : 'store',
            title: 'امر بيع',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },
        {
            id   : 'store',
            title: 'فاتورة المبيعات',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },
        {
            id   : 'store',
            title: 'مرتجع مبيعات',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },
        {
            id   : 'store',
            title: 'كاشيرة',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },
        {
            id   : 'store',
            title: 'مرتجع كاشيرة',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },
        {
            id   : 'store',
            title: 'حجز بضاعه',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },
        ]
    },
    {
        id   : 'sales',
        title: 'المستخدمين',
        type : 'collapsable',
        icon : 'heroicons_outline:users',
        children: [
            {
            id   : 'store',
            title: 'اضافة مستخدم جديد',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },

        {
            id   : 'store',
            title: 'المستخدمين',
            type : 'basic',
            icon : 'insert_chart',
            link : '/store',
        },
        ]
    }
];
// export const compactNavigation: FuseNavigationItem[] = [
//     {
//         id   : 'example',
//         title: 'Example',
//         type : 'basic',
//         icon : 'heroicons_outline:chart-pie',
//         link : '/example'
//     },
//     {
//         id   : 'example2',
//         title: 'Example2',
//         type : 'basic',
//         icon : 'heroicons_outline:chart-pie',
//         link : '/example'
//     }
// ];
// export const futuristicNavigation: FuseNavigationItem[] = [
//     {
//         id   : 'example',
//         title: 'Example',
//         type : 'basic',
//         icon : 'heroicons_outline:chart-pie',
//         link : '/example'
//     }
// ];
// export const horizontalNavigation: FuseNavigationItem[] = [
//     {
//         id   : 'example',
//         title: 'Example',
//         type : 'basic',
//         icon : 'heroicons_outline:chart-pie',
//         link : '/example'
//     }
// ];
