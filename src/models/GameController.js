import { Readable } from './Readable';
import { Lighter } from './Lighter';
import { Container } from './Container';
import { LockedContainer } from './LockedContainer';
import { GameObject } from './GameObject';
import { Table } from './Table';

export class GameController {
    constructor(ui){
        this.ui = ui;
        this.world = [
            new Table (this, "Table1", 'idle', false),
            new Table (this, "Table2", 'idle', true),
            new Readable(this, "Lettre", "idle", "Coucou je suis une lettre"),
            new Lighter(this, "Briquet", "idle"),
            new Container(this, "Armoire", {idle: ''}, null, "idle", []),
            new LockedContainer(this, "Casier à code", {idle: ''}, "idle", [
                new GameObject(this.game, "s", {idle: ''}, "Ashes", "idle")
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