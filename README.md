# monitor-server

The backend api for web monitor.

# Usage

提供如下两个上报API：

```
// 1、通过图片文件，get上报
GET /collect/wm.gif?dns=1&tcp=1&request=1&dom=1&white=1&domready=1&onload=1

let img = new Image();
img.src = host+ '/collect/wm.gif?dns=1&tcp=1&request=1&dom=1&white=1&domready=1&onload=1';

// 2、现代浏览器，通过navigator.sendBeacon进行上报
POST /collect

let data = {
  dns: 1,
  tcp: 1,
  request: 1,
  dom: 1,
  white: 1,
  domready: 1,
  onload: 1
};
window.navigator.sendBeacon(host + '/collect', data);
```

# How to develop?

```bash
git clone

npm i

# run dev
npm run dev

# build
npm run
```
