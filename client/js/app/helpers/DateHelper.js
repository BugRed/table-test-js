class DateHelper {

    constructor(){
        throw new Error('Esta classe não deve ser instanciada')
    }

    //ter um metodo estatico permite invocar o metodo sem instanciar a classe
    static textForDate(text){
        //expressão regular
        if(!/\d{4}-\d{2}-\d{2}/.test(text)) throw new Error('A data deve estar no formato: yyyy-mm-dd');

         //passar um date em forma de getTime gera uma string
        //para pegar do outro lado precisa adaptar para um replace com virgula
        
        return new Date(...text.split('-'));
                /*no caso de haver algo que necessite mudar na data antes de imprimir
                use Map e execute uma função pra cada parte do array
                .map((item, index) => item - index % 2;*/
    }

    static dateForText(date){
       return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()};`
    }
}