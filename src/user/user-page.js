import { log, Ramda } from "../common/util";
import template from './user-page.html';
import { APP_CTRL_NAME } from "../common/global";
import user from "./user";

const name = 'userPage';  // <user-page></user-page>
const bindings = {};

const controller = function (userService, filterFilter, $http) {
  'ngInject'

  this.users = [];
  this.allUsers = [];
  this.nameFilter = ' ';
  this.$http = $http;
  let _this = this;

  userService.fetch().then(resp => {
    this.allUsers = resp.data;
    this.users = resp.data;
    log(this.users);
    var str = location.search;
    var str2 = str.substring(1, 4);
    var str1 = str.substring(4, str.length);
    if (str1 == 1) {
      this.show = true;
    } else {
      this.show = false;
    }
  });

  this.filterUserName = function () {
    this.users = filterFilter(this.allUsers, this.nameFilter);
  };

  this.deleteUser = function (id) {
    for(var i=0; i<_this.users.length; i++){
      if(_this.users[i].id == id){
        _this.users.splice(i,1);
        break;
      }
    }
  }

  this.add = function () {
    var name = this.name;
    var location = this.location;
    var age = this.age;
    var id = this.id;

    if (name && location && age && id) {
      _this.users.push({
        id: id,
        location: location,
        name: name,
        age: age
      });
      this.name = "";
      this.location = "";
      this.age = "";
      this.id = "";
      angular.element("#myModal").modal('hide');
    } else {
      alert("添加属性不能为空！");
    }
  }

  this.cancleAddEvent = () => {
    _this.addShow = false;
    this.name = "";
    this.location = "";
    this.age = "";
    this.id = "";
    angular.element("#myModal").modal('hide');
  }
};

export default {
  name,
  template,
  bindings,
  controller,
}