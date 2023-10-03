class NegociationsView {

    constructor(element){
        this._element = element;
    }

    _template(model) {


        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATE</th>
                <th>QUANTITY</th>
                <th>VALUE</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        ${model.negociations.map((e)=>{
            return `
                <tr>
                    <td>${DateHelper.dateForText(e.date)}</td>
                    <td>${e.quantity}</td>
                    <td>${e.value}</td>
                    <td>${e.volume}</td>
                </tr>
            `
            //.join('') serve pra transformar tudo que foi feito 
            //dentro do map em uma string concatenada
        }).join('')}
        </tbody>
        <tfoot>
        </tfoot>
    </table>
    `
    }

    update(model){
        this._element.innerHTML = this._template(model);    
    }
}
