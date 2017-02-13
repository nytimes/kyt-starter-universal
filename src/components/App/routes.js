
import Home from '../Home';
import Tools from '../Tools';

const routes = [{
  exactly: true,
  pattern: '/',
  component: Home,
}, {
  pattern: '/tools',
  component: Tools,
}];

export default routes;
