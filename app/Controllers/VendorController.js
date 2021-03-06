import { ProxyState } from "../AppState.js";

//Private
function _drawVendor() {
  let vend = ProxyState.vendor
  let vendorTemplate = /*html*/`  
  <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1 id="vendor">Money Left Over $ ${vend.cash}</span>
      </nav>
  `
  //Need to add the logic to sum the cash - purchase
  document.getElementById('vendor').innerHTML = vendorTemplate
}

export class VendorController{
    // public
    constructor(){
      ProxyState.on('vendor', _drawVendor)
      _drawVendor()
    }
  }