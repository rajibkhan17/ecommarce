class APIFeatures {
    constructor(query, queryStr){
        this.query = query; 
        this.queryStr = queryStr;
    }

    search(){
        const keyword =this.queryStr.keyword ? {
            name : {
                $regex : this.queryStr.keyword,
                $options: 'i'
            }
        } : {}

        console.log(keyword)

        this.query = this.query.find({...keyword})

        return this;
    }
    //filter  api/v1/products?keyword=Walton&price[gte]=1&price[lte]=50
    filter() {

        const queryCopy = {...this.queryStr}


        //Removing fields from query
        const removeFields = ['keyword', 'limit', 'page']
        removeFields.forEach(el => delete queryCopy[el])
       
        //advance filter for price, rating etc

        let queryStr = JSON.stringify(queryCopy)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)


        this.query = this.query.find(JSON.parse(queryStr));

        return this;
    }
}

module.exports = APIFeatures 