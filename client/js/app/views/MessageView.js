class MessageView extends View{

    constructor(element){
        super(element);
    }

    template(model){
            //se não for falso faz o segundo se verdadeiro faz o primeiro
        return model.text ? `<p class="alert alert-info">${model.text}</p>` : '<p></p>';
    }

}