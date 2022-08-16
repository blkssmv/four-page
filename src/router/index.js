import { createRouter, createWebHistory } from 'vue-router'
import DragDrop from "@/pages/DragDrop";
import CompositionPage from "@/pages/CompositionPage";
import AnimationPage from "@/pages/AnimationPage";
import MouseEvent from "@/pages/MouseEvent";

const routes = [
  {
    path: '/drag-drop',
    name: 'drag-drop',
    component: DragDrop
  },
  {
    path: '/composition',
    name: 'composition',
    component: CompositionPage
  },
  {
    path: '/animation',
    name: 'animation',
    component: AnimationPage
  },
  {
    path: '/mouse-event',
    name: 'mouse-event',
    component: MouseEvent
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
