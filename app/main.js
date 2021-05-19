import { ProxyState } from "./AppState.js";
import { PurchaseController } from "./Controllers/PurchaseController.js";
import { VendorController } from "./Controllers/VendorController.js";



class App {
  vendorController = new VendorController();
  purchaseController = new PurchaseController()
}

console.log(ProxyState)

window["app"] = new App();
