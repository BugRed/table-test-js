//criando uma classe
class Negociation {

    constructor(date, quantity, value){

        //usar _ antes do nome da propriedade é um aviso para variaveis que deveriam ser só de leitura
        //pegando a data do momento
        //usar uma nova instancia de uma referencia para criar um novo objeto dentro da classe
        //garante que se usada uma variavel para construir a classe
        //não poderá mudar a data mudando a variavel
        this._date = new Date(date.getTime()) || new Date();
        this._quantity = quantity || 1;
        this._value = value || 0.0;

        //congelar uma instancia de objeto é necessario para segurança de dados de só leitura
        Object.freeze(this)
    }

    get volume(){
        return this._quantity * this._value;
    }

    get date(){
        //date é um objeto portanto não pode ser congelado aqui,
        //para impedir que alguem altere a data ao inves de enviar 
        //a referencia da data mandamos uma variavel novo como referencia
        return new Date(this._date.getTime());
    }

    get quantity(){
        return this._quantity
    }

    get value(){
        return this._value
    }
}