function loadControls(){
    controls = localStorage['controls'];
    if(controls !== undefined){
        return JSON.parse(controls);
    } else{
        return {'up': 38, 'right': 39, 'down': 40, 'left': 37, 'menu': 27};
    }
}

function saveControls(){
    localStorage['controls'] = JSON.stringify(game_data['controls']);
}

function keyToChar(key){
    // Converts given key number to its character value
    return String.fromCharCode(key);
}

function onKeyDown(e) {
    for(i = 0; i < KEY_TOKENS.length; i++){
        handleKeyToken(e, KEY_TOKENS[i]);
    }
}

function handleKeyToken(e, token){
    if (e.keyCode === game_data.controls[token] && game_data.player['input'][game_data.player['input'].length-1] !== token) {
        game_data.player['input'].push(token);
    }
}

function resetInput(){
    game_data.player['input'] = [];
}
