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
    

        //criando uma mensagem padrão
        this._message = new Message();
        //mostrando a mensagem padrão vai receber o local onde quero exibir a mensagem
        this._messageView = new MessageView($('#messageView'));
        this._messageView.update(this._message)


    }

    addEvent(event) {

        event.preventDefault();
        this._listNegociations.addTrade(this._createNegociation());
        this._negociationsView.update(this._listNegociations);


        this._message.text = 'Negociação adicionada com sucesso!'
        this._messageView.update(this._message)
        this._cleanForm();
    }

    delete(){
        this._listNegociations.cleanList();
        this._negociationsView.update(this._listNegociations);

        this._message.text = 'Negociações apagadas com sucesso!'
        this._messageView.update(this._message);
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