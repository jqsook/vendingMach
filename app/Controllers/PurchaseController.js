import { ProxyState } from "../AppState.js";


//Use attacksController as guide
function _drawPurchase(){
    let template = ''

    Object.values(ProxyState.purchase)  //onclick="app.attacksController.attack
        .forEach(item=>{
            template += /*html*/`
                <div class="container-fluid" id="purchase">
        <div class="row">
          <img src="${item.chip.img}" alt="" />
          <p></p>
          <button onclick="app.purchaseController.item.chip('${item.chip.cost}')">Doritios <br>
          $${item.chip.cost}</button>
        </div>
        <div class="row">
          <img src="${item.soda.img}" alt="" />
          <p></p>
          <button onclick="app.purchaseController.item.soda('${item.soda.cost}')"">Soda Pop<br>$${item.soda.cost}</button>
        </div>
        <div class="row">
          <img src="${item.candyBar.img}" alt="" />
          <p></p>
          <button onclick="app.purchaseController.item.candyBar('${item.candyBar.cost}')"">Candy Bar<br>$${item.candyBar.cost}</button>
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

    purchase(purchaseCost){
        purchaseService.runPurchase(purchaseCost)    
    }
}
