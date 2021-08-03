class newsPage{
    constructor(){
        console.log('成功关联');
        this.Ajax()
    }
    Ajax() {
        axios.post({
            url:'https://api.apiopen.top/getImages',
            method:'POST',
            page:1,
            count:10
        })
        .then((res)=>{
            console.log(res);
        })
    }
}