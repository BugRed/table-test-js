//criando uma classe
class Negociation {

    constructor(date, quantity, value){

        //usar _ antes do nome da propriedade é um aviso para variaveis que deveriam ser só de leitura
        //pegando a data do momento
        this._date = date || new Date();
        this._quantity = quantity || 1;
        this._value = value || 0.0;

        //congelar uma instancia de objeto é necessario para segurança de dados de só leitura
        Object.freeze(this)
    }

    get volume(){
        return this._quantity * this._value;
    }

    get data(){
        return this._date;
    }

    get quantity(){
        return this._quantity
    }

    get value(){
        return this._value
    }
}