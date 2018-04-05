function resetGame(){
    saveHighScores();
    game_data.player['input'] = [];
    game_data.player['score'] = 0;
}

function checkEndGame(){
    return false;
}

function endGame(){
    saveHighScores();
    window.close();
}
