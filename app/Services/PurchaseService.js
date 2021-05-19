import { ProxyState } from "../AppState.js";


class PurchaseService {
    runPurchase(purchaseCost) {
        let purchase = ProxyState.purchase.find(p => p.cost == purchaseCost)
        if (ProxyState.vendor.cash >= purchase.cost) {
            ProxyState.cash -= purchase.cost
        }
        ProxyState.vendor.cash.push(purchase)
        ProxyState.vendor = ProxyState.vendor
        console.log(Proxystate.vendor.cash)
    }
}
export const purchaseService = new PurchaseService()

//Dont really need a conditonal as it is buttons selections.
