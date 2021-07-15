import { GameObject } from './GameObject'

export class Lighter extends GameObject {
    constructor(game, name, status){
        const type = "Lighter";
        const icons = {
           idle: require('../assets/lighter-off.png'),
           on: require('../assets/lighter-on.png') 
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