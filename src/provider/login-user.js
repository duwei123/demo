export default {
    name: 'loginService',
    fn: function ($http) {
        'ngInject'
        this.fetch = () => $http.get('/someapi/users');
  },
  mockFn: function ($http) {
        'ngInject'
        this.fetch = () => $http.get('/stub/name.json');
  }
  
    
}
