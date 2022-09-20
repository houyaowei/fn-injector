import  Injector  from "..src/index.js";

var nameService = function() {
  return { name: 'nameService' };
}
var  roleService= function() {
  return { name: 'roleService' };
}
Injector.register('nameService', nameService)
Injector.register('roleService', roleService)

const result = Injector.resolve(['nameService','roleService'], function (service,role){
  console.log(service())
  console.log(role())
})