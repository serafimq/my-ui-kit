import {createRouter, createWebHashHistory} from "vue-router";
import Index from "@/views/Index.vue";
import Button from "@/views/Button.vue";
import Typography from "@/views/Typography.vue";
import Checkbox from "@/views/Checkbox.vue";
import RadioButton from "@/views/RadioButton.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/button',
      name: 'Button',
      component: Button,
    },
    {
      path: '/typography',
      name: 'Typography',
      component: Typography,
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox,
    },
    {
      path: '/radioButton',
      name: 'RadioButton',
      component: RadioButton,
    },
  ]
})

export default router;
