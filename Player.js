class Player
{
    constructor() {
		this.x = 500;
		this.y=200;
		this.spt=createSprite(this.x, this.y, 100,100);
		this.spt.shapeColor="blue";

	}

  applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+2;
	}

	moveleft(){
    this.spt.x = -20;
	}
	moveright(){
    this.spt.y = 20;
	}
	moveup(){
    this.spt.x = -20;
	}
	movedown(){
	this.spt.y = 20;
	}
}
























