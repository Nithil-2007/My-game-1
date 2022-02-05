class Form{

constructor() {
     this.input = createInput("NAME");
     this.button = createButton("PLAY");
     this.greeting = createElement("h1");
     this.title = createElement("h3");
}

  setElementsPosition() {

    this.title.html("ANIMALS QUIZ");
    this.title.position(width/2 - 80, height/2 - 400)
   this.input.position(width/2 - 100, height/2);
   this.button.position(width/2 - 50, height/2 + 100);
   this.greeting.position(width/2 -200, height/2 - 50);
   
  }

 hide () {
    
   this.button.hide();
   this.input.hide();
   this.greeting.hide();
 }

 handleMousePressed() {

   this.button.mousePressed(()=> {

      this.input.hide();
      this.button.hide();
    
      
      var message = `
      Hello ${this.input.value()}
 </br>wait for another player to join...`;
    this.greeting.html(message);

      
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount
     // player.update(name);
      player.updateCount(playerCount);
          

     })
 }

 display() {    
  
  this.setElementsPosition();
  this.handleMousePressed(); 
}

}
