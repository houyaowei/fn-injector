## fn-injector

方法的DI（Dependency Injection）实现，JavaScript版

#### API描述


基础服务

```JavaScript
var nameService = function() {
  return { name: 'nameService' };
}
var  roleService= function() {
  return { name: 'roleService' };
}

```

> injector.register(key,value): 注册服务, key为缓存标识，如果重复会覆盖

```JavaScript

Injector.register('nameService', nameService)
Injector.register('roleService', roleService)

```

> injector.resolve: 引用服务

```JavaScript
  Injector.resolve(['nameService','roleService'], function (service,role){
    console.log(service())
    console.log(role())
  })
```

## V2.0

将兼容以下写法：

```JavaScript

injector.resolve(function(service, other, router) {

})

```
