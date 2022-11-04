import loadData from "./dataHandler/getData.mjs";
import VendingMachine from "./uiHandler/vendingMachine.mjs";

const productData = await loadData();
const vendingMachine = new VendingMachine();

vendingMachine.addEvent(productData);