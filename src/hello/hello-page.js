import template from './hello-page.html';
import app from '../login/index';
import { log } from "../common/util";

const name = 'helloPage';
const bindings = {};

const controller = function ($scope, $http) {
  'ngInject'
  this.submit = function () {
    var flag = false;
    var _this = this;
    if (this.name == null || this.password == null) {
      alert("用户名或者密码不能为空");
    } else {
      $http.get("/stub/name.json").then(function (data) {
        console.log(data.data);
        for (var i = 0; i < data.data.length; i++) {
          var user = data.data[i];
          if (_this.name == user.name && _this.password == user.password) {
            // console.info("登录成功");
            location.href = "/pages/user/index.html?id="+user.id;
            flag = true;
            if (user.id == 1) {
              console.log("管理员登录")
            }
          }
        }
        if (flag == false) {
          console.info("登录失败");
        }else {
          console.info("登录成功");
          // location.href = "/pages/user/index.html?id="+user.id;
        }
      });
    }
  }

};

export default {
  name,
  template,
  bindings,
  controller,
}
