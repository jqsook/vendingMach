import { ProxyState } from "../AppState.js";
import { PurchaseService } from "../Services/PurchaseService.js";


//Use attacksController as guide
function _drawPurchase(){
  
  let template = ''

    Object.values(ProxyState.purchase)  //app.attacksController.attack('${attack.name}')
        .forEach(item=>{
            template += /*html*/`
                <div class="container-fluid" id="purchase">
        <div class="row">
          <img src="${item.chip.img}" alt="" />
          <p></p>
          <button id="dorito" onclick="('${item.chip.cost}')">Doritios <br>
          $${item.chip.cost}</button>
        </div>
        <div class="row">
          <img src="${item.soda.img}" alt="" />
          <p></p>
          <button id="soda-pop"onclick="('${item.soda.cost}')"">Soda Pop<br>$${item.soda.cost}</button>
        </div>
        <div class="row">
          <img src="${item.candyBar.img}" alt="" />
          <p></p>
          <button id="bar-candy" onclick="('${item.candyBar.cost}')"">Candy Bar<br>$${item.candyBar.cost}</button>
        </div>
      </div>
            `
        })
        
          
        document.getElementById('purchase').innerHTML = template
}

export class PurchaseController{  //Draws the items to the window through abstraction.
    constructor(){
        ProxyState.on('purchase', _drawPurchase)
        _drawPurchase()
    }

    item(){  //This is the function call to push/update/calculate the 
      PurchaseService.runPurchase()
      console.log("Its in the item @Purch cont")
    }
}
