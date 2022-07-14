class Produto{

    constructor()
    {
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvar()
    {
        let produto = this.lerDados();
        
        if(this.validaCampos(produto))
        {
            this.adicionar(produto);
        }
        
        this.listaTabela();
        this.cancelar();
    }

    listaTabela()
    {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++)
        {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = 'R$ ' + this.arrayProdutos[i].valor;

            let imgDelete = document.createElement('img');
            imgDelete.src = './img/trash.svg';
            imgDelete.setAttribute("onclick", "produto.deletar("+this.arrayProdutos[i].id+")");
            
            td_acoes.appendChild(imgDelete);


        }
    }

    adicionar(produto)
    {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    lerDados()
    {
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.valor = document.getElementById('valor').value;

        return produto;
    }

    validaCampos(produto)
    {
        let msg = '';

        if(produto.nomeProduto == '')
        {
            msg += 'Informe o nome do Produto \n';
        }

        if(produto.valor == '')
        {
            msg += 'Informe o valor do Produto \n';
        }

        if(msg != '')
        {
            alert(msg);
            return false;
        }

        return true;
    }

    cancelar()
    {
        document.getElementById('produto').value = '';
        document.getElementById('valor').value = ''; 
    }

    deletar(id)
    {
        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayProdutos.length; i++)
        {
            if(this.arrayProdutos[i].id  == id)
            {
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
    }

}

var produto = new Produto();