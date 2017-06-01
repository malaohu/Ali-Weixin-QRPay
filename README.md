# 支付宝微信付款码合二为一

## 使用必读
使用前请做以下修改
1. 修改server.js 文件，alipay_link 替换成你自己的支付宝付款码的链家。
2. 替换图片 public/images/weixin.jpg 图片,换成你自己的微信二维码，为了美观最好保持默认大小。


## 部署向导
需要Nodejs 0.12.0（含） +

推荐使用NVM安装 http://51.ruyo.net/p/3214.html#3

```
git clone https://github.com/malaohu/Ali-Weixin-QRPay.git
cd Ali-Weixin-QRPay
npm install
node server.js
```
