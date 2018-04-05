function loadControls(){
    return KEY_TOKENS;
}

function keyToChar(key){
    // Converts given key number to its character value
    return String.fromCharCode(key);
}

function onKeyDown(e) {
    for(key in KEY_TOKENS){
        handleKeyToken(e, key);
    }
}

function handleKeyToken(e, token){
    if (e.keyCode === game_data.controls[token] && game_data.player['input'][game_data.player['input'].length-1] !== token) {
        game_data.player['input'].push(token);
    }
}

function upInputToken(){
    if(game_data.player['direction'] !== 'down'){
        game_data.player['direction'] = 'up';
    }
}

function rightInputToken(){
    if(game_data.player['direction'] !== 'left'){
        game_data.player['direction'] = 'right';
    }
}

function downInputToken(){
    if(game_data.player['direction'] !== 'up'){
        game_data.player['direction'] = 'down';
    }
}

function leftInputToken(){
    if(game_data.player['direction'] !== 'right'){
        game_data.player['direction'] = 'left';
    }
}

function exitInputToken(){
    if(game_data.options['high_scores'] || game_data.options['credits']){
        game_data.options['high_scores'] = false;
        game_data.options['credits'] = false;
    }
    else if(game_data.options['menu']){
        exitMenuButton();
    } else {
        enterMenu();
    }
}

function resetInput(){
    game_data.player['input'] = [];
}
