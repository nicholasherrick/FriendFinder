var friends = require('../data/friends');

module.exports = (app) =>{
    app.get('/api/friends/', (req, res) =>{
        res.json(friends);
    });

    app.post('/api/friends/', (req, res) =>{
        console.log('New user added to friends');

        var userData = req.body;
        var userScores = [];
        var differences = [];
        
        for(var i = 0; i < userData.scores.length; i++){
            userData.scores[i] = parseInt(userData.scores[i]);
            userScores.push(userData.scores[i]);
        }

        for(var i = 0; i < friends.length; i++){
            for(var j = 0; j < friends[i].scores.length; j++){
                differences.push(Math.abs(userData.scores[j] - friends[i].scores[j]));
            }
        }
        chunkIt(differences, 10);
        function chunkIt(array, size){
            var differencesChunked = [];
            for(var i = 0; i < array.length; i++){
                var last = differencesChunked[differencesChunked.length - 1];
                if (!last || last.length === size){
                    differencesChunked.push([array[i]]);
                }else{
                    last.push(array[i]);
                }
            }
            findMatch(differencesChunked);
        }

        function findMatch(diff){
            var sumsArray = [];
            for(i = 0; i < diff.length; i++){
                var allDifferences = diff[i];
                var sum = 0;
                for(var j = 0; j < diff[i].length; j++){
                    sum = sum + allDifferences[j];
                }
                sumsArray.push(sum);
            }
            getIndex(sumsArray);
        }
        
        function getIndex(sumsArray){
            var index = 0;
            var value = sumsArray[0];
            for(var i = 1; i < sumsArray.length; i++){
                if(sumsArray[i] < value){
                    value = sumsArray[i];
                    index = i;
                }
            }
            returnData(index);
        }

        function returnData(index){
            for(var i = 0; i < friends.length; i++){
                if(i === index){
                    friends.push(req.body);
                    res.json(friends[index]);
                }
            }
        }
    });
}