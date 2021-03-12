const _import = require('~Router/_import_' + process.env.NODE_ENV);
let basePath = 'sys/' ;
const SysRouter = [{
    path:basePath+'dic',
    component:_import('index/em/sys/dic/SysDicView'),
    name:'sysDic',
    meta:{
        title:'字典配置',icon:"dic",keepAliveFlag:true,
        selfCompName:'SysDicView'
    }
},{
    path:basePath+'feedback',
    component:_import('index/em/sys/feedback/SysFeedbackView'),
    name:'sysFeedback',
    meta:{
        title:'系统反馈',icon:"flag",keepAliveFlag:true,
        selfCompName:'SysDicView'
    }
}];
export default SysRouter ;
