import { ProxyState } from "../AppState.js";
// import { PurchaseController } from "./Controllers/PurchaseController.js";


 console.log("Beg of Purch serv")


console.log("Vend Service")
class PurchaseService {
    runPurchase(item) {
        
        let purchase = ProxyState.purchase.find(p => p.cost == item)
        if (ProxyState.vendor.cash >= purchase.cost) {
            let total = ProxyState.cash -= purchase
            ProxyState.vendor.cash.push(total)
            ProxyState.vendor = ProxyState.vendor
            console.log(total)
        }
    }
}
export const purchaseService = new PurchaseService()


