class DateHelper {

    textForDate(text){
        //passar um date em forma de getTime gera uma string
        //para pegar do outro lado precisa adaptar para um replace com virgula
        return new Date(...text.split('-'));
                /*no caso de haver algo que necessite mudar na data antes de imprimir
                use Map e execute uma função pra cada parte do array
                .map((item, index) => item - index % 2;*/
    }

    dateForText(date){
       return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()};`
    }
}