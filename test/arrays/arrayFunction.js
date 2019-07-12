var data = require('./arrayData');

exports.totalJediScore = data.personnel 
    .filter(function(person){
        return person.isForceUser === true;
    })
    .map(function(scores){
        return scores.pilotingScore + scores.shootingScore;
    })
    .reduce(function(acc, total){
        return acc + total;
    }, 0);

exports.totalNonJediScore = data.personnel
    .filter(function(person){
        return person.isForceUser === false;
    })
    .map(function(score){
        return score.pilotingScore + score.shootingScore;
    })
    .reduce(function(acc ,total){
        return acc +total;
    }, 0);