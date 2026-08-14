// External Dependencies
import { ObjectId } from "mongodb";

//Class Implementation
export default class Game {
    public name: string;
    public price: number;
    public category: string;
    public id: ObjectId;

    constructor(name: string, price: number, category: string, id: ObjectId) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.id = id;
    }
}
