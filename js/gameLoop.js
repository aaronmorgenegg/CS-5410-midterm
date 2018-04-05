game_data = {};

function initialize(){
    // Initializes the textures, options, and calls gameLoop
    canvas = document.getElementById('canvas_main');
    context = canvas.getContext('2d');
    game_data = {
        'time':{
            'previous':performance.now(),
            'current':0,
            'elapsed':0,
            'running':0,
            'countdown': 3000
        },
        'player':{
            'input': [],
            'score': 0
        },
        'snake':{
            'direction':'right',
            'length': 3
        },
        'map': getMap(),
        'options':{
            'paused': true,
            'menu': false,
            'high_scores': false,
            'credits': false
        },
        'state': {
            'game_over': false
        },
        'high_scores': loadHighScores(),
        'controls': loadControls(),
        'canvas': canvas,
        'context': context
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener("mousedown", onMouseClick, false);

    requestAnimationFrame(gameLoop);
}

function processInput(){
    for(i = 0; i < game_data.player['input'].length; i++){
        window[game_data.player['input'][i] + "InputToken"]();
    }
    resetInput();
}

function update(){
    game_data.state['game_over'] = checkEndGame();
    if(!game_data.state['game_over']) {
        if (!game_data.options['menu']) {
            updateCountdown();
        }
        if (!game_data.options['paused']) {

        }
    }
}

function render(){
    renderBackground();
    if(game_data.options['credits']){
        renderCredits();
    } else if(game_data.options['high_scores']) {
        renderHighScores();
    } else if(game_data.options['menu']) {
        renderMenu();
    } else {
        renderMap();
        if(!game_data.state['game_over']) renderCountdown();
        if(game_data.state['game_over']) renderGameOver();
    }
}

function gameLoop(){
    updateTime();

    processInput();
    update();
    render();

    // Event-based model, makes a request to the browser to loop when its ready. Allows the browser to do other things
    requestAnimationFrame(gameLoop);
}

initialize();
