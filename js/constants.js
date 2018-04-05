// Constants to allow changing of 'magic numbers'
// Things may or may not work if these are changed... No guarantees

// Gameplay options

GAME_WIDTH = 1000; // Note that you'll have to change the canvas size in index.html as well
GAME_HEIGHT = 1000; // Note that you'll have to change the canvas size in index.html as well
KEY_TOKENS = {'up': 38, 'right': 39, 'down': 40, 'left': 37, 'exit': 27};
GRID_WIDTH = 50;
GRID_HEIGHT = 50;
CELL_WIDTH = Math.floor(GAME_WIDTH/GRID_WIDTH);
CELL_HEIGHT = Math.floor(GAME_HEIGHT/GRID_HEIGHT);
NUM_OBSTACLES = 10;
NUM_FOOD = 1;

// Rendering options

WHITE_COLOR = 'rgba(255, 255, 255, 1)';
ORANGE_COLOR = 'rgba(255, 125, 55, 1)';
BLUE_COLOR = 'rgba(55, 55, 255, 1)';
RED_COLOR = 'rgba(255, 55, 55, 1)';
GREEN_COLOR = 'rgba(55, 200, 55, 1)';
BLACK_COLOR = 'rgba(0, 0, 0, 1)';
GAME_OVER_FONT = '180px Arial';
GAME_OVER_COLOR = 'rgba(255, 255, 255, 1)';
MENU_FONT = '30px Arial';
MENU_FONT_COLOR = 'rgba(255, 255, 255, 1)';
MENU_BUTTON_FILL = 'rgba(100, 80, 145, 1)';
MENU_BUTTON_STROKE = 'rgba(25, 25, 25, 1)';
SCORE_FONT = '30px Arial';
SCORE_COLOR = 'rgba(255, 255, 255, 1)';
COUNTDOWN_FONT = '175px Arial';
COUNTDOWN_COLOR = 'rgba(255, 255, 255, .5)';
