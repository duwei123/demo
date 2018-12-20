import template from './hello-page.html';

const name = 'helloPage';  // 标签
const bindings = {};
const controller = function() {
  this.loginTitle = 'I am login.......';
};

export default {
  name,
  template,
  bindings,
  controller,
}
