function loadControls(){
    controls = localStorage['controls'];
    if(controls !== undefined){
        return JSON.parse(controls);
    } else{
        return {'sell': 83, 'upgrade': 85, 'start_level': 76, 'toggle_grid': 71, 'toggle_radius': 82, 'toggle_path': 80, 'toggle_mute': 77};
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
    if(game_data.menu['rebind']===''){
        for(i = 0; i < KEY_TOKENS.length; i++){
            handleKeyToken(e, KEY_TOKENS[i]);
        }
    } else {
        for(i = 0; i < game_data['controls'].length; i++){
            if(game_data['controls'][i] === e.keyCode){
                return;
            }
        }
        game_data.player['input'].push(e.keyCode);
    }
}

function handleKeyToken(e, token){
    if (e.keyCode === game_data.controls[token] && game_data.player['input'][game_data.player['input'].length-1] !== token) {
        game_data.player['input'].push(token);
    }
}

function onMouseClick(){
    x = event.x - game_data.canvas.offsetLeft;
    y = event.y - game_data.canvas.offsetTop;

    if(x < MENU_WIDTH){
        handleMenuClick(x, y);
    } else if(x >= MENU_WIDTH && x <= GAME_WIDTH){
        handleGameClick(x, y);
    }
}

function mouseInRange(x, y, min_x, max_x, min_y, max_y){
    if(x >= min_x && x <= max_x && y >= min_y && y <= max_y){
        return true;
    }
    return false;
}

function rebindKeys(){
    // Rebind keys if appropriate
    token = game_data.menu['rebind'];
    if(token !== '') {
        if (game_data.player['input'].length > 0) {
            game_data.controls[token] = game_data.player['input'][0];
            game_data.player['input'].shift();
            key = keyToChar(game_data.controls[token]);
            updateDisplayName(token, key);
            game_data.menu['rebind'] = '';
            saveControls();
        } else {
            updateDisplayName(token, '_');
        }
    }
}

function resetInput(){
    game_data.player['input'] = [];
}

function sellInputToken(){
    console.log("Sell token received!");
}

function upgradeInputToken(){
    console.log("Upgrade token received!");
}

function start_levelInputToken(){
    console.log("Start Level token received!");
}

function toggle_gridInputToken(){
    game_data.options['show_grid'] = !game_data.options['show_grid'];
}

function toggle_radiusInputToken(){
    game_data.options['show_radius'] = !game_data.options['show_radius'];
}

function toggle_pathInputToken(){
    game_data.options['show_path'] = !game_data.options['show_path'];
}

function toggle_muteInputToken(){
    game_data.options['mute'] = !game_data.options['mute'];
}
