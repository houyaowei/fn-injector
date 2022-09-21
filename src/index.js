/**
 * 依赖模块注入器
 * @type {{}}
 * eg:
 * Injector.resolve(['service', 'router'], function(service, router, other) {
 *
 * })
 */

// let Injector = window.Injector = {}
let deps = new Map();

const Injector = {
  dependences: deps,
  register:function (k,v, callback) {
    if( callback ) {
      this.dependences.set(k,callback)
    } else {
      this.dependences.set(k,v)
    }
  },
  resolve: function (_deps, _func,_scope) {
    let args = [];
    for(let i = 0, iLen = _deps.length; i < iLen; i++) {
      //依赖项
      const dependKey = _deps[i]
      const dependValue = this.dependences.get(dependKey)
      if( dependValue ) {
        args.push( dependValue );
      } else {
        throw new Error('Can\'t resolve ' + dependKey);
      }
    }
    //处理参数，将参数拼接在依赖后面
    return function() {
      _func.apply(_scope || {}, args.concat(Array.prototype.slice.call(arguments, 0)));
    }()
  }
}
export default Injector;
