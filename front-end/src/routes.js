import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import CollectionsIcon from '@material-ui/icons/Collections';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import Notifications from '@material-ui/icons/Notifications';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Language from '@material-ui/icons/Language';
// core components/views for Admin layout
import UserProfile from 'views/UserProfile/UserProfile.js';
import UploadItem from 'views/UploadItem/UploadItem.js';
import PostItems from 'views/PostItems/PostItems.js';
import CreateAlbum from 'views/CreateAlbum/CreateAlbum';
import ManageAlbum from 'views/ManageAlbum/ManageAlbum';
import NotificationsPage from 'views/Notifications/Notifications.js';
//import UpgradeToPro from 'views/UpgradeToPro/UpgradeToPro.js';
// core components/views for RTL layout
import RTLPage from 'views/RTLPage/RTLPage.js';
import ChangePass from 'views/ChangePass/ChangePass.js';
const dashboardRoutes = [
  {
    path: '/user',
    name: 'Thông tin cá nhân',
    icon: Person,
    component: UserProfile,
    layout: '/admin',
  },
  {
    path: '/upload',
    name: 'Quản lý hiện vật',
    icon: 'content_paste',
    component: UploadItem,
    layout: '/admin',
  },
  {
    path: '/postItem',
    name: 'Tạo hiện vật',
    icon: LibraryBooks,
    component: PostItems,
    layout: '/admin',
  },
  {
    path: '/album',
    name: 'Tạo Album',
    icon: CollectionsIcon,
    component: CreateAlbum,
    layout: '/admin',
  },
  {
    path: '/magAlbum',
    name: 'Quản lí Album',
    icon: PermMediaIcon,
    component: ManageAlbum,
    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
    component: NotificationsPage,
    layout: '/admin',
  },
  {
    path: '/rtl-page',
    name: 'RTL Support',
    icon: Language,
    component: RTLPage,
    layout: '/rtl',
  },

  {
    path: '/changePass',
    name: 'Thay đổi mật khẩu',
    icon: VpnKeyIcon,
    component: ChangePass,
    layout: '/admin',
  },
];

export default dashboardRoutes;
