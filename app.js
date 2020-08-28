document.addEventListener('DOMContentLoaded',()=>{
   const CardArray=[
    {
        name:"f",
        img:"/Images/1.jpg"
    },
    {
        name:"f",
        img:"/Images/1.jpg"
    },
    {
        name:"s",
        img:"/Images/2.jpg"
    },
    {
        name:"s",
        img:"/Images/2.jpg"
    },
    {
        name:"t",
        img:"/Images/3.jpg"
    },
    {
        name:"t",
        img:"/Images/3.jpg"
    },
    {
        name:"fo",
        img:"/Images/4.jpg"
    },
    {
        name:"fo",
        img:"/Images/4.jpg"
    },
    {
        name:"fi",
        img:"/Images/5.jpg"
    },
    {
        name:"fi",
        img:"/Images/5.jpg"
    },
    {
        name:"s",
        img:"/Images/6.jpg"
    },  
    {
        name:"s",
        img:"/Images/6.jpg"
    }
   ] 
   CardArray.sort(()=>.5-Math.random());
   var CardsChosen=[];
   var cardChosenId=[];
   const result = document.querySelector('#result');
   var winner=[];
   const grid = document.querySelector('.grid');
  
   function createcard(){
       for(let i = 0 ; i<CardArray.length; i++){
           var card = document.createElement('img');
           card.setAttribute('src','Images/b.png');
           card.setAttribute('data-id',i);
           card.addEventListener('click',flibcard);
           grid.appendChild(card);
       }
       result.textContent=winner.length;
   }
   function flibcard(){
    var cardId = this.getAttribute('data-id');
    CardsChosen.push(CardArray[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute('src',CardArray[cardId].img);
    if(CardsChosen.length == 2){
       setTimeout(CheckForMatch,500);
       
 }

}
function CheckForMatch(){
    var cards = document.querySelectorAll('img');
    const card1 = cardChosenId[1];
    const card2 = cardChosenId[0];
    if(card1==card2){
        alert("this is the same image..");
        cards[card2].setAttribute('src','/Images/b.png');
    }
    else if(CardsChosen[0]==CardsChosen[1])
    {
        alert("done..")
        cards[card1].removeEventListener('click',flibcard);
        cards[card2].removeEventListener('click',flibcard);
        winner.push(card1);
    }
    else{
        cards[card1].setAttribute('src','/Images/b.png');
        cards[card2].setAttribute('src','/Images/b.png');
        alert("try again!!")
    }
    cardChosenId=[];
    CardsChosen=[];
    if(winner.length==CardArray.length/2){
        alert("Winner!!");
        result.textContent="congratulations!!"
    }
    else{
    console.log(winner.toString());  
    result.textContent=winner.length;
    }
   }
   createcard();
});
