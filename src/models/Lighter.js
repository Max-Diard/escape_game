import { GameObject } from './GameObject'

export class Lighter extends GameObject {
    constructor(game, name, status){
        const type = "Lighter";
        const icons = {
           idle: "https://image.flaticon.com/icons/png/512/4986/4986714.png",
           on: "https://image.flaticon.com/icons/png/512/2385/2385911.png" 
        };
        super(game, name, icons, type, status);
    }

    use(){
        if(this.status === "idle"){
            this.setStatus("on");
        }
    }
    
    combine(otherItem){
        if (this.status === 'on'){
            return otherItem.burn();
        }
        else{
           return false;
        }
    }
}