import axios from '~Config/axios/httpConfig';
import {HttpUtil} from '~Config/axios/httpUtil';

export const ArticleMyCreateListApi = {
    getAllArticleTagEnums() {  //取得 文章标签 列表
        let obj = HttpUtil.formatQueryPage({},{});
        //查询所有文章标签信息
        return axios.post('/oblCtl/oblArticleTag/gainEnumSelect',obj).then(res => res.data);
    },
    getPageQuery(queryArr,tableConf) {
        let obj = HttpUtil.formatQueryPage(queryArr,tableConf);
        //查询所有文章
        return axios.post('/oblCtl/oblArticle/querySelfDtoPage',obj).then(res => res.data);
    },
    batchDeleteByIds(ids) {  //批量删除
        var obj = {
            delIds:ids
        };
        return axios.post("/oblCtl/oblArticle/batchDeleteByIds",obj).then(res => res.data) ;
    },
    deleteById(delId) {  //删除
        var obj = {
            delId:delId
        };
        return axios.post("/oblCtl/oblArticle/deleteById",obj).then(res => res.data) ;
    },

};

