import {createRouter, createWebHistory} from "vue-router";
import TeamsList from "./components/teams/TeamsList.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import UsersList from "./components/users/UsersList.vue";
import UsersFooter from "./components/users/UsersFooter.vue";
import NotFound from "./components/nav/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        { name: 'teams', path: '/teams', meta: { needsAuth: true }, components: {default: TeamsList, footer: TeamsFooter}, children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
            ] },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log('users beforeEnter')
                console.log(to, from)
                next()
            }
        },
        { path: '/:notFound(.*)', component: NotFound },
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        // console.log(to, from, savedPosition)
        if (savedPosition) {
            return savedPosition
        }
        return {
            left: 0,
            top: 0,
        }
    },
})

router.beforeEach(function (to, from, next) {
    console.log('Global beforeEach')
    console.log(to, from)
    // if (to.meta.needsAuth) {
    //     console.log('Needs auth!')
    //     next()
    // } else {
    //     next()
    // }
    next()
})

router.afterEach((to, from) => {
    // sending analytics data
    console.log('Global AfterEach')
    console.log(to, from)
})

export default router