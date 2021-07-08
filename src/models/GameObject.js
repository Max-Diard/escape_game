export class GameObject{
    constructor(game, name, icons, type, status){
        this.game = game;
        this.name = name;
        this.icons = icons;
        this.type = type;
        this.status = status;
        this.icon = this.icons[this.status];
        this.isNew = true;
    }

    use(){
        alert('Rien ne se passe');
    }

    combine(){
        return false;
    }

    burn(){
        return false;
    }

    setStatus(status){
        this.status = status;
        this.icon = this.icons[status];
    }
}