import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";

//do not sign in
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
]

//have to sign in
const privateRoutes = [

]

export {
    publicRoutes,
    privateRoutes
}