function getSnake(){
    snake = [];
    head = findRandomEmptyCell(game_data.map);
    map[head.x][head.y] = 'snake';
    snake.push(head);
    return snake;
}

function updateSnake(){
    if(game_data['time']['snake'] < 0 && game_data.player['direction'] !== '') {
        head = updateDirection(game_data.snake[0]);
        checkCell(head);
        moveDirection(head);
    }
}

function updateDirection(head){
    new_head = {'x': head.x, 'y': head.y};
    direction = game_data.player['direction'];
    if(direction === 'up'){
        new_head.x -= 1;
    } else if(direction === 'right'){
        new_head.y += 1;
    } else if(direction === 'down'){
        new_head.x += 1;
    } else {
        new_head.y -= 1;
    }

    return new_head;
}

function checkCell(head){
    cell = map[head.x][head.y];
    if(cell === 'block' || cell === 'wall' || cell === 'snake'){
        gameOver();
    } else if (cell === 'food'){
        eatFood();
    }
}

function eatFood(){
    game_data.state['growth_queue'] += FOOD_GROWTH_FACTOR;
    setFood(game_data.map);
    game_data.player['score'] += FOOD_POINTS;
}

function moveDirection(head){
    addHead(head);
    removeTail();
}

function addHead(head){
    game_data.snake.unshift(head);
    game_data.map[head.x][head.y] = 'snake';
}

function removeTail(head){
    if(game_data.state['growth_queue'] === 0){
        tail = game_data.snake.pop();
        game_data.map[tail.x][tail.y] = getEmptyCell();
    } else {
        game_data.state['growth_queue'] -= 1;
    }
}
