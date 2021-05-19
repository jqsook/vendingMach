import { ProxyState } from "../AppState.js";
// import { PurchaseController } from "./Controllers/PurchaseController.js";

 console.log("Beg of vend serv")

console.log("Vend Service")
class VendorService {
  runPurchase(item) {
    let vendCash = ProxyState.vendor.cash
    let item = ProxyState.purchase[item]
    if (vendCash > item) {
      vendCash -= item
      ProxyState.vendor.cash.push(vendCash)
    } else {
      alert("Need more funds")

    }
  }
}
export const vendorService = new VendorService()




    
    
    
//      let dorito= Number(document.getElementById('doritio').innerHTML = vendorTemplate)
//     let sodaPop = Number(document.getElementById('soda-pop').innerHTML = vendorTemplate)
//     let barCandy = Number(document.getElementById('bar-candy').innerHTML = vendorTemplate)
//     if (vendCash > dorito) {
//       vendCash += (vandCash -= dorito)
//       ProxyState.vendor.cash.push(vendCash)
//     } else if (vendCash > sodaPop) {
//       vendCash += (vandCash -= sodaPop)
//       ProxyState.vendor.cash.push(vendCash)
//     } else if (vendCash > barCandy) {
//       vendCash += (vandCash -= barCandy)
//       ProxyState.vendor.cash.push(vendCash)
//     }else {
//       alert("Insufficient funds")
//       }
//   }
// }

    // let purchase = ProxyState.item.find(p => p.name == itemCost)
    // if (!purchase) {
    //   throw new Error('Not available:' + purchaseName)
    // }
    // let total = ProxyState.vendor.cash -= purchase
    // ProxyState.vendor.cash.push(total)
    
    // ProxyState.vendor = ProxyState.vendor
    // console.log(Proxystate.vendor.cash)