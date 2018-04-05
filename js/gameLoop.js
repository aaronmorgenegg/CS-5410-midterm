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
            'snake': SNAKE_UPDATE_RATE,
            'countdown': 3000
        },
        'player':{
            'input': '',
            'score': 1,
            'direction': ''
        },
        'map': getMap(),
        'options':{
            'paused': true,
            'menu': false,
            'high_scores': false,
            'credits': false
        },
        'state': {
            'game_over': false,
            'growth_queue': 0
        },
        'high_scores': loadHighScores(),
        'controls': loadControls(),
        'canvas': canvas,
        'context': context
    };
    game_data.snake = getSnake();

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener("mousedown", onMouseClick, false);

    requestAnimationFrame(gameLoop);
}

function processInput(){
    if(game_data.player['input'] !== '') window[game_data.player['input'] + "InputToken"]();

    resetInput();
}

function update(){
    if(!game_data.state['game_over']) {
        if (!game_data.options['menu']) {
            updateCountdown();
        }
        if (!game_data.options['paused']) {
            updateSnake();
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
        renderScore();
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
