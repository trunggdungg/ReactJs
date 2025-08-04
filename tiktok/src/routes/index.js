//layyout
import { HeaderOnly } from '../components/Layout';

import HomePage from '../pages/Home';
import FollowingPage from '../pages/Following';
import ProfilePage from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/profile', component: ProfilePage },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null } // No layout for Search page
]

const privateRoutes = [
]

export { publicRoutes, privateRoutes };