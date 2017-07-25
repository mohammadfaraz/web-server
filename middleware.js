module.exports = {
    requireAuthentication: function(req, res, next){
        console.log('Private function is hit');
        next();
    },
    logger: function(req, res, next) {
        console.log(req.method + req.originalUrl+ ' ' + new Date().toString());
        next();
    }
};