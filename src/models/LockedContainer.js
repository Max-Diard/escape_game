import { Container } from "./Container";

export class LockedContainer extends Container{
    constructor(game, name, icons, status, items){
        const type = "LockedContainer";
        super(game, name, icons, type, status, items);
    }

    use(){
        alert('Ce Container est fermé à clé')
        return false
    }

    combine(o){
        if (o.type === 'code'){
            return super.use();
        }
    }
}