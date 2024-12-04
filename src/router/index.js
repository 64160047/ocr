import { createRouter, createWebHistory } from 'vue-router';

import Chat_Page from '@/components/Chat_Page.vue';
import Ocr_Page from '@/components/Ocr_Page.vue';

const routes = [
  {
    path: '/',
    name: 'OcrPage',
    component: Ocr_Page,
  },
  {
    path: '/Chat_Page',
    name: 'ChatPage',
    component: Chat_Page,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
