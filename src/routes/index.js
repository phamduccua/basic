import Login from '../pages/login'
import Messages from '../pages/messages'
import Notification from '../pages/notification'
import Posts from '../pages/posts'
import Question from '../pages/question'
export const publicRouter = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/notification",
        component: Notification
    },
    {
        path: "/posts",
        component: Posts
    },
    {
        path: "/message",
        component: Messages
    },
    {
        path: "/question",
        component: Question
    }
]
