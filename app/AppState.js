import Purchase from "./Models/Purch.js"
import Vendor from "./Models/Vendor.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  vendor = new Vendor("Vendor", 10.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdxYBO2D74gkQJulKd_ulJQu9W5BdAoN9Cv-FWmId29fNIMI6EVGLbc74bdJXPQkZbS_Y&usqp=CAU')
  purchase = [{
    chip: new Purchase("Doritios", 2, 'https://www.doritos.com/sites/doritos.com/files/2018-08/new-nacho-cheese.png'),
    soda: new Purchase("coke", 2, 'https://atlas-content-cdn.pixelsquid.com/stock-images/coke-soda-q13q2x2-600.jpg'),
    candyBar: new Purchase("candy-bar", 5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbXHyL6pW7PEAlY-ajusutKPZpBYrqstxVA&usqp=CAU')
    }]
}



export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
