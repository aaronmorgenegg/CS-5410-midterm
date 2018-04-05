function getMap(){
    map = getEmptyMap();
    setBorders(map);
    setObstacles(map);
    setFood(map);

    return map;
}

function getEmptyMap(){
    map = [];
    for(i = 0; i < GRID_HEIGHT; i++){
        row = [];
        for(j = 0; j < GRID_WIDTH; j++){
            row.push(getEmptyCell());
        }
        map.push(row);
    }
    return map;
}

function setBorders(map){
    for(i = 0; i < GRID_HEIGHT; i++){
        map[i][0] = getWallCell();
        map[i][GRID_WIDTH-1] = getWallCell();
    }
    for(j = 0; j < GRID_WIDTH; j++){
        map[0][j] = getWallCell();
        map[GRID_HEIGHT-1][j] = getWallCell();
    }
}

function setObstacles(map){
    for(i = 0; i < NUM_OBSTACLES; i++){
        coords = findRandomEmptyCell(map);
        map[coords.x][coords.y] = 'block';
    }
}

function setFood(map){
    for(i = 0; i < NUM_FOOD; i++){
        coords = findRandomEmptyCell(map);
        map[coords.x][coords.y] = 'food';
    }
}

function findRandomEmptyCell(map){
    x = getRandomNumber(GRID_WIDTH);
    y = getRandomNumber(GRID_HEIGHT);

    if(map[x][y] === getEmptyCell()){
        return {'x':x, 'y':y};
    } else{
        return findRandomEmptyCell(map);
    }

}

function getEmptyCell(){
    return '';
}

function getWallCell(){
    return 'wall';
}

function renderMap(){
    for(i = 0; i < GRID_HEIGHT; i++){
        for(j = 0; j < GRID_WIDTH; j++){
            x = j/GAME_WIDTH;
            y = i/GAME_HEIGHT;
            renderCell(map[i][j], x, y);
        }
    }
}

function renderCell(cell, x, y){
    context = game_data.context;

    if(cell===getWallCell()){
        color = RED_COLOR;
        stroke = RED_COLOR;
    } else if(cell==='block'){
        color = GREEN_COLOR;
        stroke = GREEN_COLOR;
    } else if(cell==='food'){
        color = ORANGE_COLOR;
        stroke = ORANGE_COLOR;
    } else if(cell === getEmptyCell()){
        color = BLUE_COLOR;
        stroke = BLUE_COLOR;
    }

    drawRectangle(context,
        {
            x: x,
            y: y,
            width: CELL_WIDTH,
            height: CELL_HEIGHT,
            fill: color,
            stroke: stroke
        }
    );
}
