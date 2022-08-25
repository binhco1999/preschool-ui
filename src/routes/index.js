import { HeaderOnly } from '~/components/Layouts';

import Home from '~/pages/Home';
//Public for people who not login yet
const publicRoutes = [{ path: '/', component: Home, layout: HeaderOnly }];
//Private for people who was logged in
const privateRoutes = [];
export { publicRoutes, privateRoutes };
