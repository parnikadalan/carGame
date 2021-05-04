class Game{
    constructor(){

    }
    getState(){
        db.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }
    
    updateState(state){
        db.ref("/").update({
            gameState: state
        })
    }

    async start(){
        if(gameState === 0){
            player = new Player ()
            var playerCountRef= await db.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getPlayerCount()
            }
           

            form = new Form()
            form.display()
        }

        car1= createSprite(100,200)
        car2= createSprite(300,200)
        car3= createSprite(500,200)
        car4= createSprite(700,200)
        cars= [car1,car2,car3,car4]
    }

    play(){
        form.hide()
        text('GAME START', 100, 100)
        Player.getPlayerInfo()

        if(allPlayers !== undefined){
            var index = 0
            var x = 0
            var y = 0
            
        for(var plr in allPlayers){
             index = index+1
             x = x+ 200
             y = displayHeight-allPlayers[plr].distance
             cars[index-1].x = x
             cars[index-1].y = y
            
             if(index === player.index){
                 camera.position.x = displayWidth/2
                 camera.position.y = cars[index-1].y
                 cars[index-1].shapeColor= "red"
             }
               //text(allPlayers[plr].name + " : "+ allPlayers[plr].distance, 100, displayPosition) 
                //displayPosition += 100
            
        }
        if(keyIsDown (UP_ARROW) && player.index == null){
        {   player.distance = -50
            player.update()
        }
        }
        }
    }
}