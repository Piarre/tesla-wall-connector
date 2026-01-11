import { WallConnector } from "../dist";

const WC = new WallConnector("192.168.0.13");

console.log(await WC.decodedSSID());