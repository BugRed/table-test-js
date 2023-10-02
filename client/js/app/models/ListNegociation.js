class ListNegociation {


    constructor(){
        this._negociations = []
    }


    addTrade(negociation){
        this._negociations.push(negociation);
    }

    get negociations(){
        //retornando uma copia da lista original para impedir alteração
        return [].concat(this._negociations); 
    }
}