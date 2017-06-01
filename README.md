### 使用React+Webpack+Nodejs+Express快速构建项目
本项目的主要目的是对React+Webpack+Nodejs+Express的综合使用，感受一下综合开发的感觉，哈哈哈！！！并没有技术上的讲解，主要是这个架构的搭建  
使用webpack实现react的热更新  
使用reload 等实现了node的动态更新，不用每次更改服务都重启一下  
#### 主要功能
其实没什么功能，主要是测试框架。  
实现了输入微信公众号，通过爬虫获取该公众号下的最新的10条文章，并显示    
是的，有个小小小小的小爬虫   
#### 文件结构
app.js 为入口文件  
./views                 react页面放置的文件  
./public                webpack生成的dist放置的页面  
./spider                爬虫文件存放处  
webpack.config.dev.js   本地开发时使用的webpack文件  
webpack.config.js       正式运行时使用的webpack文件  

#### 工具
使用的东西包括：  
    React、react-router@4、webpack、NodeJs、Express、async、cheerio、axios、request  
东西多，但是没有啥实际意义  
#### 使用
```nodejs
git clone https://github.com/yxcs/express-react-wx.git
cd express-react-wx
npm install
```
测试
```nodejs
NODE_ENV=dev npm run dev
```
正式
```nodejs
webpack 
NODE_ENV=production npm start
```
