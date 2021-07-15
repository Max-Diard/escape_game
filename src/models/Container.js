import { GameObject } from "./GameObject";

export class Container extends GameObject{
    constructor(game, name, icons, type,  status, items){
        super(game, name, icons, type || 'Container', status);
        this.items = items;
    }

    use(){
        if(this.status === "idle"){
            this.game.addItemsToWorld(this.items);
            this.setStatus("opened");
            return true;
        }else{
            alert('Ce container a déjà été vidé!')
        }
    }
}