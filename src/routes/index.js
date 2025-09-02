import Login from '../pages/login'
import Messages from '../pages/messages'
import Notification from '../pages/notification'
import Posts from '../pages/posts'
import Messagess from '../pages/messages'
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
        component: Messagess
    },
    {
        path: "/question",
        component: Question
    }
]
