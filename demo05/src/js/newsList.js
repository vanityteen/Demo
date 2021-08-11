import axios from 'axios'
let res = axios({
    // url: 'https://api.apiopen.top/getWangYiNews',
    // method: 'POST',
    method: 'GET',
    url: 'https://www.mxnzp.com/api/news/list',
    params: {
        typeId: '515',
        page: 1,
        app_id: 'emfjlekgxchngglp',
        app_secret: 'NStsd016Q0dtdEJMclpUbytualF5Zz09'
    }
})
module.export={
    res
} 