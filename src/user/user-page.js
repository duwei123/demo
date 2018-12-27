import { log, Ramda } from "../common/util";
import template from './user-page.html';
import { APP_CTRL_NAME } from "../common/global";
import user from "./user";

const name = 'userPage';  // <user-page></user-page>
const bindings = {};
const controller = function (userService, filterFilter,$http) {
  'ngInject'
  this.users = [];
  this.allUsers = [];
  this.nameFilter = ' ';
  this.$http=$http;
  userService.fetch().then(resp => {
    // log(resp);
    log(this);
    this.allUsers = resp.data;
    this.users = resp.data;
    log(this.users);
    var str = location.search;
    var str2=str.substring(1,4);
    console.log(str2);
    var str1=str.substring(4, str.length);
    if(str1==1){
      this.show=true;
    }else{
      this.show=false;
    }
   
    
  });

  this.filterUserName = function () {
    this.users = filterFilter(this.allUsers, this.nameFilter);
  };

  this.deleteUser = function (id) {
    alert(11);
  }


  this.add = function () {
    var name = this.name;
    var password = this.password;
    var age = this.age;
    var id = this.id;
    alert(id)
    var data = this;
    console.log(data);
    $http.post('   ', data).then(function successCallback(response) {
     alert(response);
  }, function errorCallback(response) {
      // 请求失败执行代码
      alert(response);
});

  }
};

export default {
  name,
  template,
  bindings,
  controller,
}