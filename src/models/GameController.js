import { Readable } from './Readable';
import { Lighter } from './Lighter';
import { Container } from './Container';
import { GameObject } from './GameObject';

export class GameController {
    constructor(ui){
        this.ui = ui;
        this.world = [
            new Readable(this, "Lettre", "idle", "Coucou je suis une lettre"),
            new Lighter(this, "Briquet", "idle"),
            new Container(this, "Armoire", "idle", [
                new GameObject(this.game, "Cendres", {idle: "https://image.flaticon.com/icons/png/512/1657/1657184.png"}, "Ashes", "idle")
            ])
            
        ];
        this.inventory = [

        ];
        this.timer = 500;
        this.finished = false;
        setInterval(() =>{
            if(this.timer > 0){
                this.timer--;
            }
            else{
                alert("C'est perdu!")
            }
        }, 1000)
    }

    useItem(target){
        target.use();
    }

    combineItems(){
        const item1 = this.inventory[0];
        const item2 = this.inventory[1];
        if(!item1.combine(item2)){
            if(!item2.combine(item1)){
                alert('Rien ne se passe');
            }
        }
        this.inventory = [];
    }

    addItemsToWorld(items){
        if(!Array.isArray(items)){
            items = [items];
        }
        this.world = this.world.concat(items);
    }

    addItemToInventory(item){
        if (this.inventory >= 2){
            this.inventory.pop();
        }
        this.inventory.push(item);
    }

    deleteItemFromWorld(item){
        this.world.splice(this.world.indexOf(item),1);
    }

    deleteItemFromInventory(item){
        this.inventory.splice(this.inventory.indexOf(item),1);
    }

    finish(){
        alert("C'est gagné")
    }
}