var app = require('koa')();
var router = require('koa-frouter');
var render = require('co-ejs');
var config = require('config-lite');
var staticCache = require('koa-static-cache');
var renderConf = require(config.renderConf);
var routerConf = config.routerConf;
var staticCacheConf = config.staticCacheConf;

app.use(staticCache(staticCacheConf));           //静态资源缓存
app.use(render(app,renderConf));                 //ejs配置
app.use(router(app,routerConf));                 //路由配置

module.exports = app;
