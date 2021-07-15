import {GameObject} from './GameObject';

export class Table extends GameObject{
    constructor(game, name, status, hasCode){
        const type = "Table";
        const icons = {
            idle: require('../assets/table.png'),
            flipped : require('../assets/table-flipped.png'), 
            code_unreadable : require('../assets/table-flipped.png'),
            code_revealed : require('../assets/table-flipped.png')
        }
        super(game, name, icons, type, status);
        this.hasCode = hasCode;
    }

    use(){
        if(this.hasCode){
            this.setStatus('code_unreadable');
            alert('Il y a une gravure illisible sous la table')
        }
        else {
            this.setStatus('flipped');
        }
    }

    combine(o){
        if(this.status === 'code_unreadable'){
            if(o.type === 'Ashes'){
                alert('Un code apparaît');
                this.game.deleteItemFromWorld(o);
                this.game.addItemsToWorld(new GameObject(this.game, "Code", {idle: require('../assets/code.png')}, "Code", 'idle'));
                return true
            }
        }
        return false
    }
}
