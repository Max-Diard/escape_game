import { GameObject } from './GameObject';

export class Readable extends GameObject {
    constructor(game, name, status, text){
        const type = "Readable";
        const icons = {
            idle: "https://image.flaticon.com/icons/png/512/214/214316.png"
        };
        super(game, name, icons, type, status);
        this.text = text;
    }

    use(){
        alert('Vous lisez: '+this.text);
    }

    burn(){
        alert('La lettre brûle et laisse des cendres');
        //To-Do : Delete object and create ashes
        this.game.addItemsToWorld(new GameObject(this.game, "Cendres", {idle: "https://image.flaticon.com/icons/png/512/1657/1657184.png"}, "Ashes", "idle"));
        this.game.deleteItemFromWorld(this);
        return true;
    }
}