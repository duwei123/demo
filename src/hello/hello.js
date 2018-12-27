import Mdle from '../common/mdle';
import helloPage from './hello-page';
import loginService from '../provider/login-user';

const name = 'hello';
let mdle = Mdle(name, []);
mdle.registService(loginService);
mdle.setRoutes({
  '/hello': {
    controller: "helloPage",
    template:"weiweipang"
  },
  "/user": {
    template:"",
    templateUrl: "",
  }
});
const page = helloPage;

export default {
  name,
  mdle,
  page
};