function resetGame(){
    saveHighScores();
    game_data.player['input'] = '';
    game_data.player['score'] = 1;
    game_data.player['direction'] = '';
    game_data.map = getMap();
    game_data.snake = getSnake();
    game_data.state['game_over'] = false;
    game_data.state['growth_queue'] = 0;
}

function gameOver(){
    game_data.state['game_over'] = true;
    endGame();
}

function endGame(){
    saveHighScores();
}

