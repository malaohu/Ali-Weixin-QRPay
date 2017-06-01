FROM readytalk/nodejs

WORKDIR /app
WORKDIR /app/views
WORKDIR /app/public
WORKDIR /app/public/css
WORKDIR /app/public/images
COPY server.js /app/
COPY package.json /app/
COPY views/index.html /app/views
COPY views/weixin.html /app/views
COPY public/css/css.css /app/public/css
COPY public/images/weixin.jpg /app/public/images
COPY public/images/weixinpay_head.jpg /app/public/images
RUN npm install
CMD node /app/server.js
