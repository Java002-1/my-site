import Home from '../views/Home/index.vue';
import About from '../views/About';
import Blog from '../views/Blog';
import Project from '../views/Project';
import Message from '../views/Message';

export default [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
  { path: '/project', component: Project },
  { path: '/message', component: Message },
];