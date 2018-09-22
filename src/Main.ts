import { Aclass } from "./somepackage/Aclass";

export class Main{
    constructor(){
        console.log("constructing main");
        this.init();
    }

    private init():void{
        console.log("init main 90000000");
        const foo: Aclass = new Aclass();
    }
}