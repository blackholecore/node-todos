var configValues = require("./config");

module.exports = {
    getDbConnectionString: function(){
        if(configValues.username !== null && configValues.password !== null && configValues.username !== "" && configValues.password !== ""){
            return `mongodb://${configValues.username}:${configValues.password}localhost:27017/node-todos`;
        }else{
            return `mongodb://localhost:27017/node-todos`;
        }
    }
}