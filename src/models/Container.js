import { GameObject } from "./GameObject";

export class Container extends GameObject{
    constructor(game, name, status, items){
        const type = "Container";
        const icons = {
            idle: 'https://image.flaticon.com/icons/png/512/2219/2219544.png'
        }
        super(game, name, icons, type, status);
        this.items = items;
    }

    use(){
        if(this.status === "idle"){
            this.game.addItemsToWorld(this.items);
            this.setStatus("opened");
        }
    }
}