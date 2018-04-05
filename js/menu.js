function handleMenuClick(x, y){
    buttons = game_data.menu['buttons'];
    for(i = 0; i < buttons.length; i++){
        if (x >= buttons[i]['min_x'] && x <= buttons[i]['max_x'] &&
            y >= buttons[i]['min_y'] && y <= buttons[i]['max_y']){
            window[game_data.menu['state'] + '_' + buttons[i]['internal_name'] + 'Button']();
        }
    }
}

function setMenuState(state){
    game_data.menu['state'] = state;
    game_data.menu['buttons'] = window['get' + state + 'MenuButtons']();
}

function updateDisplayName(token, key){
    for(i = 0; i < game_data.menu['buttons'].length; i++){
        if(game_data.menu['buttons'][i]['internal_name'] === token){
            display_name = game_data.menu['buttons'][i]['display_name'];
            key_index = display_name.indexOf('(') + 1;
            updated_display_name = display_name.substr(0, key_index) + key + ')';
            game_data.menu['buttons'][i]['display_name'] = updated_display_name;
            return;
        }
    }
}


// ----- BUTTON GETTERS

function getMenuButtonsTemplate(spec){
    display_names = spec.display_names;
    internal_names = spec.internal_names;
    offset = spec.offset;
    width = spec.width;
    height = spec.height;
    x = spec.x;
    y = spec.y;

    buttons = [];
    min_x = x;
    max_x = min_x + width;
    min_y = y;
    max_y = min_y + height;

    for(i = 0; i < internal_names.length; i++){
        buttons.push({'min_x': min_x, 'min_y': min_y, 'max_x': max_x, 'max_y': max_y, 'internal_name': internal_names[i], 'display_name': display_names[i]});
        min_y += offset;
        max_y += offset;
    }
    return buttons;
}

function getMenuButtonsGrid(spec){
    display_names = spec.display_names;
    internal_names = spec.internal_names;
    width = spec.width;
    height = spec.height;
    x = spec.x;
    y = spec.y;
    offset = spec.offset;

    buttons = [];
    min_x = x;
    max_x = min_x + width;
    min_y = y;
    max_y = min_y + height;
    x_offset = width + offset;
    y_offset = height + offset;

    for(i = 0; i < internal_names.length; i++){
        buttons.push({'min_x': min_x, 'min_y': min_y, 'max_x': max_x, 'max_y': max_y, 'internal_name': internal_names[i], 'display_name': display_names[i]});
        min_x += x_offset;
        max_x += x_offset;

        if(max_x >= MENU_WIDTH - x){
            min_y += y_offset;
            max_y += y_offset;
            min_x = x;
            max_x = min_x + width;
        }
    }
    return buttons;
}

function getMenuButtons(){
    return window['get' + game_data.menu['state'] + 'MenuButtons']();
}

function getbaseMenuButtons(){
    display_names = ['End Game', 'New Game', 'Options', 'High Scores', 'Credits', 'Back'];
    internal_names = ['end_game', 'new_game', 'options', 'high_scores', 'credits', 'back'];
    offset = MENU_HEIGHT/internal_names.length - MENU_BUTTON_HEIGHT/2;
    x = MENU_WIDTH/2 - MENU_BUTTON_WIDTH/2;
    y = offset;

    spec = {
        display_names: display_names,
        internal_names: internal_names,
        offset:offset,
        width:MENU_BUTTON_WIDTH,
        height:MENU_BUTTON_HEIGHT,
        x:x,
        y:y
    };
    return getMenuButtonsTemplate(spec);
}

function getcreditsMenuButtons(){
    min_x = MENU_WIDTH/2 - MENU_BUTTON_WIDTH/2;
    max_x = min_x + MENU_BUTTON_WIDTH;
    min_y = MENU_HEIGHT - MENU_BUTTON_HEIGHT*3;
    max_y = min_y + MENU_BUTTON_HEIGHT;

    back = {'min_x': min_x, 'max_x': max_x, 'min_y': min_y, 'max_y': max_y, 'internal_name': 'back', 'display_name': 'Back'}
    return [back];
}

function gethigh_scoresMenuButtons(){
    min_x = MENU_WIDTH/2 - MENU_BUTTON_WIDTH/2;
    max_x = min_x + MENU_BUTTON_WIDTH;
    min_y = MENU_HEIGHT - MENU_BUTTON_HEIGHT*3;
    max_y = min_y + MENU_BUTTON_HEIGHT;
    back = {'min_x': min_x, 'max_x': max_x, 'min_y': min_y, 'max_y': max_y, 'internal_name': 'back', 'display_name': 'Back'}
    min_y -= MENU_BUTTON_HEIGHT * 1.17;
    max_y -= MENU_BUTTON_HEIGHT * 1.17;
    reset = {'min_x': min_x, 'max_x': max_x, 'min_y': min_y, 'max_y': max_y, 'internal_name': 'reset', 'display_name': 'Reset'}
    return [reset, back];
}

function getoptionsMenuButtons(){
    display_names = ['Controls',
                     'Show Placement Grid('+keyToChar(game_data.controls['toggle_grid']) + ')',
                     'Show Tower Range('+keyToChar(game_data.controls['toggle_radius']) + ')',
                     'Show Creep Path('+keyToChar(game_data.controls['toggle_path']) + ')',
                     'Mute('+keyToChar(game_data.controls['toggle_mute']) + ')',
                     'Back'];
    internal_names = ['controls', 'show_grid', 'show_radius', 'show_path', 'mute', 'back'];
    offset = MENU_HEIGHT/internal_names.length - MENU_BUTTON_HEIGHT/2;
    x = MENU_WIDTH/2 - MENU_BUTTON_WIDTH/2;
    y = offset;

    spec = {
        display_names: display_names,
        internal_names: internal_names,
        offset:offset,
        width:MENU_BUTTON_WIDTH,
        height:MENU_BUTTON_HEIGHT,
        x:x,
        y:y
    };
    return getMenuButtonsTemplate(spec);
}

function getcontrolsMenuButtons(){
    display_names = ['Sell('+keyToChar(game_data.controls['sell']) + ')',
                     'Upgrade('+keyToChar(game_data.controls['upgrade']) + ')',
                     'Start Level('+keyToChar(game_data.controls['start_level']) + ')',
                     'Show Grid('+keyToChar(game_data.controls['toggle_grid']) + ')',
                     'Show Radius('+keyToChar(game_data.controls['toggle_radius']) + ')',
                     'Show Path('+keyToChar(game_data.controls['toggle_path']) + ')',
                     'Mute('+keyToChar(game_data.controls['toggle_mute']) + ')',
                     'Back'];
    internal_names = ['sell', 'upgrade', 'start_level', 'toggle_grid', 'toggle_radius', 'toggle_path', 'toggle_mut', 'back'];
    height = MENU_BUTTON_HEIGHT * .5;
    width = MENU_BUTTON_WIDTH;
    offset = MENU_HEIGHT/(internal_names.length+2);
    x = MENU_WIDTH/2 - width/2;
    y = offset;

    spec = {
        display_names: display_names,
        internal_names: internal_names,
        offset:offset,
        width:width,
        height:height,
        x:x,
        y:y
    };
    return getMenuButtonsTemplate(spec);
}

function getgameMenuButtons(){
    display_names = ['Menu', 'Start', 'Sell', 'Cancel', 'Upgrade', 'Bullet', 'Bomb', 'Laser', 'Missile'];
    internal_names = ['menu', 'start_level', 'sell', 'cancel', 'upgrade', 'bullet_tower', 'bomb_tower', 'laser_tower', 'missile_tower'];
    x = 10;
    y = 10;
    offset = 9;
    width = 120;
    height = 120;

    spec = {
        display_names: display_names,
        internal_names: internal_names,
        offset:offset,
        width:width,
        height:height,
        x:x,
        y:y
    };
    buttons = getMenuButtonsGrid(spec);
    return buttons;

}


// ----- BASE BUTTONS


function base_end_gameButton(){
    endGame();
}

function base_new_gameButton(){
    resetGame();
}

function base_optionsButton(){
    setMenuState('options');
}

function base_high_scoresButton(){
    setMenuState('high_scores');
}

function base_creditsButton(){
    setMenuState('credits');
}

function base_backButton(){
    setMenuState('game');
}


// ----- CREDITS BUTTON


function credits_backButton(){
    setMenuState('base');
}


// ----- HIGH SCORES BUTTONS


function high_scores_backButton(){
    setMenuState('base');
}

function high_scores_resetButton(){
    resetHighScores();
}


// ----- OPTIONS BUTTONS


function options_backButton(){
    setMenuState('base');
}

function options_muteButton(){
    game_data.options['mute'] = !game_data.options['mute'];
}

function options_show_pathButton(){
    game_data.options['show_path'] = !game_data.options['show_path'];
}

function options_show_radiusButton(){
    game_data.options['show_radius'] = !game_data.options['show_radius'];
}

function options_show_gridButton(){
    game_data.options['show_grid'] = !game_data.options['show_grid'];
}

function options_controlsButton(){
    setMenuState('controls');
}


// ----- CONTROLS BUTTONS


function controls_sellButton(){
    game_data.menu['rebind'] = 'sell';
}

function controls_upgradeButton(){
    game_data.menu['rebind'] = 'upgrade';
}

function controls_start_levelButton(){
    game_data.menu['rebind'] = 'start_level';
}

function controls_toggle_gridButton(){
    game_data.menu['rebind'] = 'toggle_grid';
}

function controls_toggle_radiusButton(){
    game_data.menu['rebind'] = 'toggle_radius';
}

function controls_toggle_pathButton(){
    game_data.menu['rebind'] = 'toggle_path';
}

function controls_toggle_muteButton(){
    game_data.menu['rebind'] = 'toggle_mute';
}

function controls_backButton(){
    if(game_data.menu['rebind']==='')setMenuState('options');
}

// ----- GAME BUTTONS

function game_menuButton(){
    setMenuState('base');
}

function game_start_levelButton(){
    console.log('Start Level button pressed!');
}

function game_sellButton(){
    console.log('Sell button pressed!');
}

function game_cancelButton(){
    console.log('Cancel button pressed!');
}

function game_upgradeButton(){
    console.log('Upgrade button pressed!');
}

function game_bullet_towerButton(){
    console.log('Bullet Tower button pressed!');
}

function game_bomb_towerButton(){
    console.log('Bomb Tower button pressed!');
}

function game_laser_towerButton(){
    console.log('Laser tower button pressed!');
}

function game_missile_towerButton(){
    console.log('Missile tower button pressed!');
}