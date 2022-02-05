class Player {

    constructor(){
       this.name = null;
       this.index = null;
       
      
    
    }

    getCount() {

        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }

    updateCount(count) {

        database.ref("/").update({

            playerCount : count
        })
    }

    addplayer() {
        var playerIndex = "players/player"+ this.index;
        if(this.index == 1) {

            this.positionX = width/2 - 100;
        }
        else {

            this.positionX = width/2 + 100;
        }

        database.ref(playerIndex).set({

            name: this.name,
            
               
        })
    }

    static getPlayersInfo() {

        var playerInforef = database.ref("players");
        playerInforef.on("value", data =>{

            allPlayers = data.val()
        })
    } 

    update() {

        var playerIndex = "players/player"+ this.index;
        database.ref(playerIndex).update({

            name : this.name,
            
        })
    } 
   
}
