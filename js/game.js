function resetGame(){
    saveHighScores();
    game_data.player['input'] = [];
    game_data.player['score'] = 0;
}

function gameOver(){
    game_data.state['game_over'] = true;
}

function endGame(){
    saveHighScores();
    window.close();
}

