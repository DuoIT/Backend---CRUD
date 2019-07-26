const IndexService = require('../services/indexService');

class IndexController{
    constructor(){
        this.indexService = IndexService;
    }
//getHome
    async getHome({req, res, next}){
        const result = await this.indexService.getHome();
        return res.json(result);

    }
//search
    async search({ req, res, next }){
        const { query } = req;
        const result = await this.indexService.search(query);
        res.json(result);
    }
}

module.exports = new IndexController();