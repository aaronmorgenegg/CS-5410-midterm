// Constants to allow changing of 'magic numbers'
// Things may or may not work if these are changed... No guarantees

// Gameplay options

GAME_WIDTH = 1600; // Note that you'll have to change the canvas size in index.html as well
GAME_HEIGHT = 900; // Note that you'll have to change the canvas size in index.html as well
MENU_WIDTH = 400; // This is set up to have the menu on the left side, leaving a square play area
MENU_HEIGHT = GAME_HEIGHT;
GRID_WIDTH = 48;
GRID_HEIGHT = 36;
STARTING_LIVES = 100;
STARTING_MONEY = 100;
LR_GATE_SIZE = 8; // Size of the gates on the left and right sides
UD_GATE_SIZE = 8; // Size of the gates on the top and bottom sides

// Rendering options

MENU_FONT = '30px Arial';
MENU_FONT_COLOR = 'rgba(255, 255, 255, 1)';
MENU_BUTTON_FILL = 'rgba(100, 100, 100, 1)';
MENU_BUTTON_STROKE = 'rgba(25, 25, 25, 1)';
MENU_BUTTON_WIDTH = 360;
MENU_BUTTON_HEIGHT = 90;

// Constants - No Touching!
KEY_TOKENS = ['sell', 'upgrade', 'start_level', 'toggle_grid', 'toggle_radius', 'toggle_path', 'toggle_mute'];
