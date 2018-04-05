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
    game_data['high_scores'] = [0,0,0,0,0,0,0,0,0,0];
    localStorage['high_scores'] = JSON.stringify(game_data['high_scores']);
}

function saveHighScores(){
    game_data['high_scores'].push(game_data.player['score']);
    game_data['high_scores'].sort(function(a, b){return b - a});
    game_data['high_scores'] = game_data['high_scores'].slice(0, 10);
    localStorage['high_scores'] = JSON.stringify(game_data['high_scores']);
}

function renderHighScores(){
    y = MENU_HEIGHT/5;
    for(i = 0; i < game_data.high_scores.length; i++){
        score = { x:MENU_WIDTH/2,
                  y:y,
                  color:MENU_FONT_COLOR,
                  font:MENU_FONT,
                  msg:(i+1) + ': ' + game_data.high_scores[i]
        };
        drawText(game_data.context, score);
        y += 30;
    }
}