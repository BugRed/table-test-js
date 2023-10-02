class NegociationController {

    constructor() {

        //alias é um apelido
        let $ = document.querySelector.bind(document)

        this._inputDate = $('#data')
        this._inputQuantity = $('#quantidade')
        this._inputValue = $('#valor')

    }

    addEvent(event) {

        event.preventDefault();
        let helper = new DateHelper();

        let negociation = new Negociation(
            helper.textForDate(this._inputDate.value),
            this._inputQuantity,
            this._inputValue,
        );
    }


}