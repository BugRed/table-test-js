class NegociationController {

    constructor() {
        let $ = document.querySelector.bind(document)

        this._inputDate = $('#data')
        this._inputQuantity = $('#quantidade')
        this._inputValue = $('#valor')

    }

    addEvent(event) {

        event.preventDefault();

        //passar um date em forma de getTime gera uma string
        //para pegar do outro lado precisa adaptar para um replace com virgula
        let date = new Date(
            this._inputDate.value
                .split('-')
                /*no caso de haver algo que necessite mudar na data antes de imprimir
                use Map e execute uma função pra cada parte do array
                .map((item, index) => item - index % 2;*/
        );

        let negociation = new Negociation(
            date,
            this._inputQuantity,
            this._inputValue,
        );
        console.log(negociation)

    }


}