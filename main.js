//Criar uma referência para tela

//Dê altura e largura específicas para a imagem do carro
greencar_width = 75;
greencar_height= 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
greencar_x = 5;
greencar_y = 225;

function add() {
	//carregar carro e imagens de fundo na tela.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground
	background_imgTag.src background_Image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadBackground
	greencar_imgTag.src greencar_Image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadGreenCar() {
	ctx.drawImage(greencar_imgTag, greencar_X, greencar_Y, greencar_Width, greencar_Height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(roverY >=0)
	{
		roverY = roverY - 10;
		console.log("Quando a seta para cima é pressionada,  x = " + roverX + " | y = " +roverY);
		 uploadBackground();
		 uploadRover();
	}
}

function down()
{
	if(roverY <=500)
	{
		roverY =roverY+ 10;
		console.log("Quando a seta para baixo é pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		uploadRover();
	}

function left()
{
	if(roverX >= 0)
	{
		roverX =roverX - 10;
		console.log("Quando a seta para esquerda é pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadRover();
	}
}

function right()
{
	if(roverX <= 700)
	{
		roverX =roverX + 10;
		console.log("Quando a seta para direita é pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		uploadRover();
    }
}
