class NegociationController {

    constructor() {

        //alias é um apelido
        let $ = document.querySelector.bind(document)

        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');
        this._listNegociations = new ListNegociation();
        //associando a classe view a div em html
        this._negociationsView = new NegociationsView($('#negociacoesView'));
    
        //mostrando a tabela view para o user
        this._negociationsView.update(this._listNegociations);
    }

    addEvent(event) {

        event.preventDefault();
        this._listNegociations.addTrade(this._createNegociation());
        this._negociationsView.update(this._listNegociations);
        this._cleanForm();
    }

    _createNegociation(){
        return new Negociation(
            DateHelper.textForDate(this._inputDate.value),
            this._inputQuantity.value,
            this._inputValue.value,
        );

    }

    _cleanForm(){
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;

        this._inputDate.focus();
    }


}