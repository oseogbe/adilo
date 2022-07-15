import { createRouter, createWebHistory } from "vue-router"
import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/tools-and-app",
        children: [
            {
                path: "/snapbyte-recorder",
                name: "Snapbyte",
                component: () => import("@/views/tools-and-app/SnapbyteRecorder.vue"),
            },
            {
                path: "/audio-bounce",
                name: "AudioBounce",
                component: () => import("@/views/tools-and-app/AudioBounce.vue"),
            },
            {
                path: "/sugar-voice",
                name: "SugarVoice",
                component: () => import("@/views/tools-and-app/SugarVoice.vue"),
            }
        ],
    },
    {
        path: '/live-preview',
        name: 'LivePreview',
        component: () => import("@/components/tools-and-app/snapbyte/LivePreview.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router