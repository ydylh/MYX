# 前端整理

## QQ 在线客服

[QQ 在线客服](http://wp.qq.com/)

## ifream 用法

### **获取 ifream 标签（父获取子）**

```javascript
document.getElementById('元素的ID') //存在id
document.frames['iframe的name'] //存在name
```

### **获取 ifream 标签（子获取父）**

```javascript
window.parent.document.getElementById('元素的ID') //存在id
```

### **获取 ifream 的 name 名**

```javascript
document.getElementById('元素的ID').attr('name')
```

:::warning frame 与 iframe 的区别及基本用法:

- frame 不能脱离 frameset 单独使用，iframe 可以；
- frame 不能放到 body 中，否则将无法显示；
- iframe 也可以嵌套在 frameset ，但是必须放到 body 中，不嵌套在 frameset 中的 iframe 可以随意使用；
- frame 的高度只能通过 frameset 控制，iframe 是自己本身控制，不能通过 frameset 设置；
- iframe 可以放到表格中；
  :::

### **contentWindow**

contentDocument 属性能够以 HTML 对象来返回 iframe 中的文档，可以通过所有标准的 DOM 方法来处理被返回的对象
`语法：frameObject.contentWindow`

### **contentWindow 和 contentDocument 的区别**

contentWindow 这是个只读属性，返回指定的 iframe 的窗口对象（所有浏览器都兼容）
contentDocument Firefox 支持（ie8 以上兼容）

::: warning 基本用法：

- `document.getElementById("myiframe").contentWindow`，得到 `iframe` 对象后，就可以通过 `contentWindow` 得到 `iframe` 包含页面的 `window` 对象，然后就可以正常访问页面元素了；
- `$("#myiframe")[0].contentWindow`，jquery 选择器获得 iframe，先把 jquery 对象转换为 DOM 对象，或者使用 `get()`方法转换；
- `$("#myiframe")[0].contentWindow.$("#dd").val()`，可以在得到 iframe 的 window 对象后接着使用 jquery 选择器进行页面操作；
- `$("#myiframe")[0].contentWindow.username="zhangsan"`; 可以通过这种方式向 iframe 页面传递参数，在 iframe 页面 window.username 就可以获取到值，username 是自定义的全局变量；
- 在 iframe 页面通过 parent 可以获得主页面的 window，接着就可以正常访问父亲页面的元素了；
- `parent.$("#frame_A")[0].contentWindow.document.getElmentById("#frame_B")`; 同级 iframe 页面之间调用，需要先得到父亲的 window，然后调用同级的 iframe 得到 window 进行操作；
  :::

## element-ui 里@selection-change 和@row-click 解耦

```javascript
@row-click (row, event, cloumn) {
    if (event.target.nodeName !=== 'INPUT' && event.target.nodeName !== 'SPAN') {
        console.log()
    }
}
```

## VUE 路由子路由默认显示页面

- 设置一个空路由

```javascript
children: [
  {
    path: '',
    name: defalut,
    component: defalut
  }
]
```

- 2、重定向路由 `redirect: ''`

## VUE 的路由写法

```javascript
1.const Foo = resolve => require(['../pages/home.vue'], resolve),
2.const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
导出：
export defalut = {
    Foo
}
```

**import 和 resolve 的区别**
如果用 import 引入的话，当项目打包时路由里的所有 component 都会打包在一个 js 中，造成进入首页时，需要加载的内容过多，时间相对比较长。
当你用 require 这种方式引入的时候，会将你的 component 分别打包成不同的 js，加载的时候也是按需加载，只用访问这个路由网址时才会加载这个 js。

## import 和 require 的区别

- 循环规范：
  - require 是 AMD 规范引入方式
  - import 是 es6 的一个语法，兼容浏览器要转成 es5
- 调用时间：
  - require 是运行时调用，所以 require 理论上可以运用在代码的任何地方
  - import 是编译是调动，必须放在文件开头
- 本质
  - require 是赋值过程，其实 require 的结果就是对象、数字、字符串、函数等，再把 require 的结果赋值给某个变量
  - import 是解构过程，但是目前所有的引擎都没有实现 import，node 会被编译成 require

## vue 路由 hash 模式和 history 模式的区别

- hash 路由带#，history 模式路由不带#
- history 路由必须前后端路由一致，才可以，否则会 404

:::warning 解决 history 模式 404 问题：
在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面
:::
**vue 默认 hash 模式路径，单页面应用。**

## http 请求常见的状态码

- 1xx：信息性状态码
- 2xx：成功状态码
- 3xx: 重定向状态码（301 永久重定向，请求资源被搬到了其他位置；302 临时重定向；304 客户端发送附带条件不满足）
- 4xx: 客户端请求路径错误（400 请求参数不匹配，403 服务器拒绝被访问，无权限；404 错误的路径；405 请求方式错误）
- 5xx: 服务器端错误（500 服务器错误，503 服务器超负荷）

## 作用域

- **全局作用域：**
  最外层函数定义的变量拥有全局作用域，即对任何内部函数来说，都是可以访问的。
- **局部作用域：**
  和全局作用域相反，局部作用域一般只在固定的代码片段内可访问到，而对于函数外部是无法访问的，最常见的例如函数内部

## 作用域链

全局作用域和局部作用域中变量的访问权限，其实是由作用域链决定的。
每次进入一个新的执行环境，都会创建一个用于搜索变量和函数的作用域链。作用域链是函数被创建的作用域中对象的集合。作用域链可以保证对执行环境有权访问的所有变量和函数的有序访问。
作用域链的最前端始终是当前执行的代码所在环境的变量对象（如果该环境是函数，则将其活动对象作为变量对象），下一个变量对象来自包含环境（包含当前还行环境的环境），下一个变量对象来自包含环境的包含环境，依次往上，直到全局执行环境的变量对象。全局执行环境的变量对象始终是作用域链中的最后一个对象。

## \*闭包

- **官方**：一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），因而这些变量也是该表达式的一部分。
- **理解**：闭包就是能够读取其他函数内部变量的函数。

### 闭包的特点

- 函数 b 嵌套在函数 a 内部；
- 函数内部可以引用外部的参数和变量；
- 参数和变量不会被垃圾回收机制回收

### 闭包优点

- 私有成员的存在；
- 避免全局变量的污染；
- 希望一个变量长期存储在内存中

### 闭包缺点

- 常驻内存，增加内存使用量；
- 使用不当会很容易造成内存泄露，解决方法是，在退出函数之前，将不使用的局部变量全部删除。

## \*Promise

Promise 是一个构造函数，自己身上有 `all`、`reject`、`resolve` 这几个眼熟的方法，原型上有 `then`、`catch` 等同样很眼熟的方法。
Promise 的构造函数接收一个参数，是函数，并且传入两个参数：`resolve`，`reject`，分别表示异步操作执行成功后的回调函数和异步操作执行失败后的回调函数。

> 例子

```javascript
function runAsync() {
  return new Promise(function(resolve, reject) {
    //做一些异步操作
    setTimeout(function() {
      console.log('执行完成')
      resolve('随便什么数据')
    }, 2000)
  })
}
runAsync().then(function(data) {
  console.log(data)
  //后面可以用传过来的数据做些其他操作
  //......
})
```

在 `runAsync()`的返回上直接调用 `then` 方法，`then` 接收一个参数，是函数，并且会拿到我们在 `runAsync` 中调用 `resolve` 时传的的参数。运行这段代码，会在 2 秒后输出“执行完成”，紧接着输出“随便什么数据”。
原来 `then` 里面的函数就跟我们平时的回调函数一个意思，能够在 `runAsync` 这个异步任务执行完成之后被执行。这就是 `Promise` 的作用了，简单来讲，就是能把原来的回调写法分离出来，在异步操作执行完后，用链式调用的方式执行回调函数。 ##本地存储：（`session`Storage 和 localStorage）（ cookie 和 `session` ）

## 本地存储：（`sessionStorage`和`localStorage`）（`cookie`和`session` ）

浏览器的缓存机制提供了可以将用户数据存储在客户端上的方式，可以利用 `cookie`,`session` 等跟服务端进行数据交互。

### `cookie` 和 `session`(都是用来跟踪浏览器用户身份的会话方式。)

:::warning 区别

- **保持状态**：`cookie` 保存在浏览器端，`session` 保存在服务器端
- **使用方式：**

  - `cookie` 机制：如果不在浏览器中设置过期时间，`cookie` 被保存在内存中，生命周期随浏览器的关闭而结束，这种 `cookie` 简称`会话 cookie`。如果在浏览器中设置了`cookie` 的过期时间，`cookie` 被保存在硬盘中，关闭浏览器后，`cookie` 数据仍然存在，直到过期时间结束才消失。
    `Cookie` 是服务器发给客户端的特殊信息，`cookie`是以文本的方式保存在客户端，每次请求时都带上它
  - `session` 机制：当服务器收到请求需要创建 `session` 对象时，首先会检查客户端请求中是否包含 `sessionid`。如果有 `sessionid`，服务器将根据该 id 返回对应 `session` 对象。如果客户端请求中没有 `sessionid`，服务器会创建新的 `session` 对象，并把 `sessionid` 在本次响应中返回给客户端。通常使用 `cookie` 方式存储 `sessionid` 到客户端，在交互中浏览器按照规则将 `sessionid` 发送给服务器。如果用户禁用 `cookie`，则要使用 URL 重写，可以通过 `response.encodeURL(url)` 进行实现；API 对 encodeURL 的结束为，当浏览器支持 Cookie 时，url 不做任何处理；当浏览器不支持 Cookie 的时候，将会重写 URL 将 `sessionID` 拼接到访问地址后。

- **存储内容：** `cookie` 只能保存字符串类型，以文本的方式；`session` 通过类似与 Hashtable 的数据结构来保存，能支持任何类型的对象(session 中可含有多个对象)
- **存储的大小：** `cookie`：单个 cookie 保存的数据不能超过 4kb；`session` 大小没有限制。
- **安全性：** `cookie`：针对 cookie 所存在的攻击：Cookie 欺骗，Cookie 截获；`session` 的安全性大于 cookie
  <br/>
  **原因如下：**

  - sessionID 存储在 cookie 中，若要攻破 session 首先要攻破 cookie；
  - sessionID 是要有人登录，或者启动 session_start 才会有，所以攻破 cookie 也不一定能得到 sessionID；
  - 第二次启动 session_start 后，前一次的 sessionID 就是失效了，session 过期后，sessionID 也随之失效。
  - sessionID 是加密的
  - 综上所述，攻击者必须在短时间内攻破加密的 sessionID，这很难。

- **应用场景：**

  - `cookie`：

    - 判断用户是否登陆过网站，以便下次登录时能够实现自动登录（或者记住密码）。如果我们删除 cookie，则每次登录必须从新填写登录的相关信息。
    - 保存上次登录的时间等信息。
    - 保存上次查看的页面
    - 浏览计数

  - `session`：Session 用于保存每个用户的专用信息，变量的值保存在服务器端，通过 SessionID 来区分不同的客户。

    - 网上商城中的购物车
    - 保存用户登录信息
    - 将某些数据放入 session 中，供同一用户的不同页面使用
    - 防止用户非法登录

- **缺点：**
  - `cookie：`
    - 大小受限
    - 用户可以操作（禁用）cookie，使功能受限
    - 安全性较低
    - 有些状态不可能保存在客户端。
    - 每次访问都要传送 cookie 给服务器，浪费带宽。
    - cookie 数据有路径（path）的概念，可以限制 cookie 只属于某个路径下。
  - `session：`
    - Session 保存的东西越多，就越占用服务器内存，对于用户在线人数较多的网站，服务器的内存压力会比较大。
    - 依赖于 cookie（sessionID 保存在 cookie），如果禁用 cookie，则要使用 URL 重写，不安全
    - 创建 Session 变量有很大的随意性，可随时调用，不需要开发者做精确地处理，所以，过度使用 session 变量将会导致代码不可读而且不好维护。

:::

### `WebStorage`（`localStorage`（本地存储）和 `sessionStorage`（会话存储））

WebStorage 的目的是克服由 cookie 所带来的一些限制，当数据需要被严格控制在客户端时，不需要持续的将数据发回服务器 <br/>

#### WebStorage 两个主要目标

- 提供一种在 cookie 之外存储会话数据的路径。
- 提供一种存储大量可以跨会话存在的数据的机制。

#### 生命周期

- `localStorage`:localStorage 的生命周期是永久的，关闭页面或浏览器之后 localStorage 中的数据也不会消失。localStorage 除非主动删除数据，否则数据永远不会消失。
- `sessionStorage` 的生命周期是在仅在当前会话下有效。sessionStorage 引入了一个“浏览器窗口”的概念，sessionStorage 是在同源的窗口中始终存在的数据。只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源另一个页面，数据依然存在。但是 sessionStorage 在关闭了浏览器窗口后就会被销毁。同时独立的打开同一个窗口同一个页面，sessionStorage 也是不一样的。

#### 存储大小

**`localStorage和sessionStorage的存储数据大小一般都是：5MB`**

#### 存储位置

**`localStorage` 和 `sessionStorage` 都保存在客户端，不与服务器进行交互通信。**

#### 存储内容类型

**`localStorage` 和 `sessionStorage` 只能存储字符串类型，对于复杂的对象可以使用 ECMAScript 提供的 `JSON` 对象的 `stringify` 和 `parse` 来处理**

#### 应用场景：

**`localStoragese`：常用于长期登录（+判断用户是否已登录），适合长期保存在本地的数据。`sessionStorage`：敏感账号一次性登录；**

```sh
用法：
存储：localStorage.setItem("key","value")；
获取：localStorage.getItem("key");
删除：localStorage.removeItem("key");
清空：localStorage.clear();​

```