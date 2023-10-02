class NegociationController {

    constructor() {

        //alias é um apelido
        let $ = document.querySelector.bind(document)

        this._inputDate = $('#data')
        this._inputQuantity = $('#quantidade')
        this._inputValue = $('#valor')
        this._listNegociations = new ListNegociation();

    }

    addEvent(event) {

        event.preventDefault();

        this._listNegociations.addTrade(this._createNegociation())
        this._cleanForm()

        console.log(this._listNegociations.negociations)
    }

    _createNegociation(){
        return new Negociation(
            DateHelper.textForDate(this._inputDate.value),
            this._inputQuantity,
            this._inputValue,
        );
    }

    _cleanForm(){
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;

        this._inputDate.focus();
    }


}