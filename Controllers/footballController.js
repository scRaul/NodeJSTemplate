const {asyncFetch} = require('../Util/asyncFetch');


exports.getScores = async (req,res,next) =>{

   let carData = await asyncFetch(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard`);
     if(!carData){
        const error = new Error("unable to connect to api");
        error.status = 500;
        return next(error);
     }
     res.status(200).json(carData);
    next();
}