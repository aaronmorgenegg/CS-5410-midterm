function drawRectangle(context, spec) {
    context.save();

    context.fillStyle = spec.fill;
    context.fillRect(spec.x, spec.y, spec.width, spec.height);

    context.strokeStyle = spec.stroke;
    context.strokeRect(spec.x, spec.y, spec.width, spec.height);

    context.restore();

}

function drawCircle(context, spec) {
    context.beginPath();

    context.strokeStyle = spec.stroke;
    context.arc(spec.x, spec.y, spec.radius, 0, 2*Math.PI);

    context.fillStyle = spec.fill;
    context.fill();

    context.stroke();

}

function drawText(context, spec){
    x = spec.x;
    y = spec.y;
    color = spec.color;
    font = spec.font;
    msg = spec.msg;

    context.fillStyle = color;
    context.textAlign = 'center';
    context.font = font;
    context.fillText(msg, x, y);
}

function renderBackground() {
    canvas = game_data['canvas'];
    context = game_data['context'];

    // menu background
    context.drawImage(
        img = game_data.textures['background'],
        x = 0,
        y = 0,
        width = GAME_WIDTH,
        height = GAME_HEIGHT
    );
}

function getRandomColor(){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return 'rgba('+r+', '+g+', '+b+', 1)'
}

function renderGameOver(){
    canvas = game_data['canvas'];
    context = game_data['context'];
    context.font=GAME_OVER_FONT;
    context.textAlign = 'center';
    x = canvas.width/2;
    y = canvas.height/2 - 100;
    context.fillStyle = GAME_OVER_COLOR;
    context.fillText("GAME", x, y);
    context.fillText("OVER", x, y+200);
}
