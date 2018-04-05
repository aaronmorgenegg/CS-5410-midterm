function renderMenuButton(button){
    canvas = game_data['canvas'];
    context = game_data['context'];

    x = button.min_x;
    y = button.min_y;
    width = button.max_x - button.min_x;
    height = button.max_y - button.min_y;

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

    x += width/2;
    y += height/2 + 10;

    drawText(context, {x:x, y:y, color:MENU_FONT_COLOR, font:MENU_FONT, msg:button.display_name});
}

function renderButtons(buttons){
    for(i = 0; i < buttons.length; i++){
        renderMenuButton(buttons[i]);
    }
}

function renderMenu(){
    window[game_data.menu['state'] + 'MenuRender']();
}

function baseMenuRender(){
    renderButtons(game_data.menu['buttons']);
}

function creditsMenuRender(){
    renderButtons(game_data.menu['buttons']);
    credits = { x:MENU_WIDTH/2,
                y:MENU_HEIGHT/5,
                color:MENU_FONT_COLOR,
                font:MENU_FONT,
                msg:'Created by'};
    drawText(game_data.context, credits);

    credits = { x:MENU_WIDTH/2,
                y:MENU_HEIGHT/5 + 30,
                color:MENU_FONT_COLOR,
                font:MENU_FONT,
                msg:'Aaron Morgenegg'
    };
    drawText(game_data.context, credits);
}

function high_scoresMenuRender(){
    renderButtons(game_data.menu['buttons']);
    renderHighScores();
}

function optionsMenuRender(){
    renderButtons(game_data.menu['buttons']);
}

function controlsMenuRender(){
    renderButtons(game_data.menu['buttons']);
}

function gameMenuRender(){
    renderButtons(game_data.menu['buttons']);
}
