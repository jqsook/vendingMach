import { ProxyState } from "../AppState.js";


class VendorService {
  runPurchase(purchaseName) {
    let purchase = ProxyState.purchase.find(p => p.name == purchaseName)
    if (!purchase) {
      throw new Error('Not available:' + purchaseName)
    }
    ProxyState.vendor.cash -= purchase.cost
    
    ProxyState.vendor = ProxyState.vendor
    console.log(Proxystate.vendor.cash)
  }
}
export const vendorService = new VendorService()


