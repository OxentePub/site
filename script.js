var txt= '#Pizzas |https://www.curtamais.com.br/uploads/conteudos/a9c53f2976beae674cbee183459f43f9.jpg +  $P $M $G +Carne de sol $28,00 $34,00 $40,00 *Molho, carne de sol, mussarela,  cebola, orégano e azeitona. +Calabresa $25,00 $30,00 $35,00 *Molho, mussarela, calabresa, orégano e azeitona +Toscana $25,00 $30,00 $35,00 *Molho, mussarela, calabresa, cebola, orégano e azeitona +Italiana $28,00 $33,00 $38,00 *Molho, mussarela, presunto, calabresa, bacon, milho, orégano e azeitona +Americana $27,00 $32,00 $37,00 *Molho, mussarela, presunto, ovo, bacon, orégano e azeitona. +Portuguesa $25,00 $30,00 $35,00 *Molho, mussarela, presunto, ovo, orégano e azeitona +Moda da casa $27,00 $32,00 $37,00 *Molho, mussarela, frango, milho, cebola, orégano e azeitona +Frango $26,00 $31,00 $36,00 *Molho, mussarela, frango, orégano e azeitona +Carijó $27,00 $32,00 $37,00 *Molho, mussarela, frango, bacon, milho, orégano e azeitona +Jardineira $25,00 $30,00 $35,00 *Molho, mussarela, milho, ervilha, tomate, cebola, orégano e azeitona +Dois queijo $27,00 $32,00 $37,00 *Molho, mussarela, parmesão, tomate, cebola, orégano e azeitona #Hambúrguer |https://c.pxhere.com/photos/13/fa/beef_bread_bun_burger_cheese_cheeseburger_close_up_delicious-1556149.jpg!d +Oxente Burgue Kids $5,00 *Pão, carne, presunto e queijo. +Oxente Burgue $6,00 *Pão, carne, presunto, queijos salada. +Oxente Bacon $8,00 *Pão, carne, presunto, queijo, bacon e salada +Oxente Calabresa $8,00 *Pão, carne, presunto, queijo, calabresa e salada +Oxente Ovo $7,00 *Pão, carne, presunto, queijo, ovo e salada +Oxente da casa I $10,00 *Pão, carne, calabresa, bacon, queijo, salada e molho +Oxente da Casa II $12,00 *Pão, carne, bacon, calabresa, ovo, presunto, queijo, salada e molho #Sanduíches |https://world.openfoodfacts.org/images/products/376/027/025/0143/front_fr.10.full.jpg +Costela Bovina $12,00 *Pão, costela bovina, queijo, salada e molho +Frango  $10,00  *Pão, filé de frango, queijo, salada e molho +Carne de sol  $12,00 *Pão, carne-sol, queijo, salada e molho +Calabresa suína $10,00 *Pão, calabresa suína, queijo, salada e molho #Pastel |https://guiadopastel.com.br/wp-content/uploads/2020/04/4-receitas-de-massa-de-pastel-dourado-1200x840.jpg  +Frango $4,00 +Frango, requeijão e molho  $6,00 +Frango e queijo $5,00 +Queijo $4,00 +Presunto e queijo $4,00 #Drinks |https://claudia.abril.com.br/wp-content/uploads/2020/01/dicas-para-fazer-a-caipirinha-perfeita-kajakiki-1.jpg?quality=85&strip=info +Caipirinha $5,00 +Caipirosca $7,00 +Mojito $10,00 +Batida de morango $15,00 +Batida de maracujá $15,00 #Sucos |https://www.sabornamesa.com.br/media/k2/items/cache/b018fd5ec8f1b90a1c8015900c2c2630_XL.jpg +Maracujá $5,00 +Goiaba $4,00 +Manga $4,00 +Acerola $4,00 #Bebidas |https://c.pxhere.com/images/2e/40/6852ff0e1abee8a647bc6ba11d39-1454697.jpg!d +Água de coco $4,00 +Cajuína $8,00 +Refrigerante 250 ml +Refrigerante Ks +Refrigerante Lata +Refrigerante 1 litro +Refrigerante 1,50 lt +Refrigerante 2,00 litros +Água mineral 500ml +Água com gás 500ml +H2o +Agua fresh +Schweppes +Red bull +Monster +Cervejas, cachaças e whisks variados #Petiscos |https://t1.rg.ltmcdn.com/pt/posts/4/3/7/carne_de_sol_acebolada_9734_orig.jpg +Carne de sol $30,00 *Mais acompanhamento +Frango a passarinha $25,00 *Mais acompanhamento +Maminha $35,00 *Mais acompanhamento +Carneiro $30,00 *Mais acompanhamento +Calabresa $30,00 *Mais acompanhamento +Porção de frios $15,00 +Batata frita pequena $10,00 +Batata frita grande $15,00 +Batata frita com bacon e queijo chedder $20,00 +Porção de pastel $15,00 *10 unidades +Porção chapeuzinho de couro $15,00 *8 unidades +Acompanhamentos:  Macaxeira, batata frita ou tapioca, vinagrete e farofa';

/*
fetch('cardapio.txt').then(function (res){

  res.text().then(function (data){

    console.log(data);

  });

});
*/

montaCardapio();


function montaCardapio()
{
  var tipoNome = '';
  var foodImage = '';
  var idLista = '';
  var completo = 0;
  
  for( let i=0; i < txt.length; i++ )
  {

      if(txt[i] == '#')
      {   
        i++;
        tipoNome = '';
        while(txt[i] != '|' && txt[i] != '+' && txt[i] != '$')
        {
          tipoNome += txt[i];
          i++;
        }
        
        completo++;
      }
      
      if(txt[i] == '|')
      {
        i++;
        foodImage = '';
        while(txt[i] != '+' && txt[i] != '$' && txt[i] != '*' && i < txt.length)
        {
          foodImage += txt[i];
          i++;
        }
        completo++;
      }
      
      if(completo == 2)
      {
        completo = 0;
        criaTipo(tipoNome, foodImage);
      }
    
      if(txt[i] == '+')
      {
        i++;
        var itemNome = '';
        
        while(txt[i] != '#' && txt[i] != '$' && txt[i] != '*' && txt[i] != '+' && i < txt.length)
        {
          itemNome += txt[i];
          i++;
        }
        
        addItem(itemNome, tipoNome);
        
        while(txt[i] != '#' && txt[i] != '+' && i < txt.length)
        {
          
          if(txt[i] == '$')
          {
            i++;
            var preco = '';
            
            while(txt[i] != '#' && txt[i] != '$' && txt[i] != '*' && txt[i] != '+' && i < txt.length){
              preco += txt[i];
              i++;
            }
            
            addPreco(preco, itemNome+tipoNome); 
          }
          
          if(txt[i] == '*')
          {
            i++;
            var ingredientes = '';
            
            while(txt[i] != '#' && txt[i] != '$' && txt[i] != '+' && i < txt.length)
            {
              ingredientes += txt[i++];
            }
            addIngredientes(ingredientes, itemNome+tipoNome);
          }
        }
        
       i--;
      }
    
    
  }
}




function addItem(itemNome, tipoNome)
{
  var novoItem = '<div class="item" id="'+itemNome+tipoNome+'"> <div class="item-body" id="'+itemNome+tipoNome+'body"> <div class="item-nome">'+itemNome+'</div> </div> </div>';
  
  document.getElementById(tipoNome+'lista').innerHTML += novoItem;
}


function addPreco(preco, idItem)
{
  if(preco[0] != 'P' && preco[0]!='M' && preco[0] != 'G') { preco = 'R$ '+preco; }
  var novoPreco = '<div class="preco"> '+preco+' </div>';
  
  document.getElementById(idItem+'body').innerHTML += novoPreco;
}

function addIngredientes(ingredientes, idItem)
{
  var novoIng = '<div class="ingredientes">'+ingredientes+'</div>';
  document.getElementById(idItem).innerHTML += novoIng;
}

function criaTipo(tipoNome, foodImage)
{     
  idLista = "'"+ tipoNome+'lista'+ "'";
  
  var novoTipo = '<div class="tipo" id="' + tipoNome +'"> <img src="'+ foodImage +'" class="food-images" alt=""> <div class="tipo_body"> <div class="tipo_head"> <div class="tipo-nome">'+ tipoNome +'</div> <button onclick="showHide('+ idLista +')" class="buttonToggle" > <svg viewBox="0 0 320 512" width="100" title="angle-down"> <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" /> </svg> </button> </div> <div class="listaDeItens" id="'+tipoNome+'lista'+'"> </div> </div> </div>';
        
  document.getElementById("cardapio").innerHTML += novoTipo;
}


function showHide (id)
{
  var lista = document.getElementById(id);
  
  if(lista.style.display === "block")
  {
      lista.style.display = "none";
  }
  else
  {
    lista.style.display = "block";
  }
  
}

function simularAtiva()
{
  var box = document.getElementById('simulacao');
  
  if(box.style.display === "block") { box.style.display = "none"; }
  else { box.style.display = "block"; }
  
  
  var btnAdd = document.getElementsByClassName("buttonAdd");
  
  for(var i=0; i<btnAdd.length; i++)
  {
    var x  = btnAdd[i];
    if(x.style.display === "inline-flex"){ x.style.display = "none"; }
    else { x.style.display = "inline-flex"; }
  }
  
  
}

function addItemSimu(idItem)
{
  console.log(idItem);
}


function increaseValue(id) {
  var value = parseInt(document.getElementById(id).value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById(id).value = value;
}

function decreaseValue(id) {
  var value = parseInt(document.getElementById(id).value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById(id).value = value;
}



//https://replit.com/@SAMUELLHENRIQUE/Oxente-site#index.html

//input number get from:
//https://codepen.io/mtbroomell/pen/yNwwdv?editors=1010