class ListNegociation {


    constructor(){
        this._negociations = []
    }


    addTrade(negociation){
        this._negociations.push(negociation);
    }

    get negociations(){
        return this._negociations;
    }
}