function getBaseMap(){
    // Return a basic map object, with grid and walls defined.
    empty_map = getEmptyMap();
    // TODO set walls and exits for map
}

function getEmptyMap(){
    map = [];
    for(i = 0; i < GAME_WIDTH; i++){
        col = [];
        for(j = 0; j < GAME_HEIGHT; j++){
            col.push(getCell());
        }
        map.push(col);
    }
    return map;
}

function getCell(){
    return 'empty';
}

function getMapCoords(indices){
    // Given map[x][y], return the cartesian coordinates of the top left corner of that tile
    x = indices.x;
    y = indices.y;

    coords = {};
    x_scalar = x/GRID_WIDTH;
    coords['x'] = Math.floor(x_scalar * (GAME_WIDTH));
    y_scalar = y/GRID_HEIGHT;
    coords['y'] = Math.floor(y_scalar * GAME_HEIGHT);

    return coords;
}

function getMapIndices(coords){
    // given coords, return the corresponding indices of the map
    x = coords.x - MENU_WIDTH;
    y = coords.y;

    indices = {};
    x_scalar = x/(GAME_WIDTH - MENU_WIDTH);
    indices['x'] = Math.floor(x_scalar * GRID_WIDTH);
    y_scalar = y/GAME_HEIGHT;
    indices['y'] = Math.floor(y_scalar * GRID_HEIGHT);

    return indices;
}

function renderMap(){
    if(game_data.options['show_grid'] === true){
        renderGrid();
    }
}

function renderGrid(){
    for(i = 0; i < GAME_WIDTH; i++){
        for(j = 0; j < GAME_HEIGHT; j++){
            col.push(getCell());
        }
        map.push(col);
    }
    drawRectangle(context,
        {
            x: x,
            y: y,
            width: width,
            height: height,
            fill: MENU_BUTTON_FILL,
            stroke: MENU_BUTTON_STROKE
        }
    );
}
