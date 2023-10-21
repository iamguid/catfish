import { generateAll } from "../utils";

export default () => {
    generateAll(__dirname, {}, { generateClientsStubs: true, generateServerStubs: true });
}