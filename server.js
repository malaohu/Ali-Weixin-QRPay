var express = require('express');
var app =   express();

app.use(express.static(__dirname + '/public'));
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('./index.html',{});
});

//使用前一定要替换以下地址
var alipay_link = 'HTTPS://QR.ALIPAY.COM/FKX030126KTDDQSMUS9AA3';

app.get('/code',function(req,res){
    var ua = req.headers['user-agent'];
    if(/MicroMessenger\//.test(ua))
    {
        res.render('./weixin.html',{});
    }else if(/AlipayClient\//.test(ua))
    {
        res.redirect(alipay_link);
    }else
        res.send('请使用微信或者支付宝客户端扫码');
});

app.listen(3999, function () {
  console.log('Example app listening on port 3999')
})
