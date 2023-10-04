class NegociationsView extends View{

    constructor(element){
        super(element);
    }


    template(model) {


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
        ${model.negociations.map(e => `

                <tr>
                    <td>${DateHelper.dateForText(e.date)}</td>
                    <td>${e.quantity}</td>
                    <td>${e.value}</td>
                    <td>${e.volume}</td>
                </tr>
            `
            //.join('') serve pra transformar tudo que foi feito 
            //dentro do map em uma string concatenada
            ).join('')}
        </tbody>

        <tfoot>
            <td colspan="3"> </td>
            <td>${
                //IIEF podem ser auto-invocadas em templates
                model.negociations.reduce((sum, n)=>sum + n.volume, 0.0)
            }</td>
        </tfoot>

    </table>
    `}
}
