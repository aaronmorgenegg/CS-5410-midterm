function loadHighScores(){
    high_scores = localStorage['high_scores'];
    if(high_scores !== undefined){
        return JSON.parse(high_scores);
    } else{
        resetHighScores();
        return loadHighScores();
    }
}

function resetHighScores(){
    game_data['high_scores'] = [0,0,0,0,0];
    localStorage['high_scores'] = JSON.stringify(game_data['high_scores']);
}

function saveHighScores(){
    game_data['high_scores'].push(game_data.player['score']);
    game_data['high_scores'].sort(function(a, b){return b - a});
    game_data['high_scores'] = game_data['high_scores'].slice(0, 5);
    localStorage['high_scores'] = JSON.stringify(game_data['high_scores']);
}
