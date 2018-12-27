export default {
      name: 'userService',
      fn: function ($http) {
            'ngInject'
            this.fetch = () => $http.get('/someapi/users');
      },
      mockFn: function ($http) {
            'ngInject'
            this.function = () => $http.post('/stub/users.json');
            this.fetch = () => $http.get('/stub/users.json?v=12131');
      }
      
      
}

