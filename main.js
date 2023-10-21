//Productos añadidos
let productosCarrito=[];

//Productos disponibles
let productos = [
    {
        id: 1,
        nombre: 'Pera Conferencia',
        precio: 0.34,
        imagen: 'item1.jpeg'
    },
    {
        id: 2,
        nombre: 'Manzana Golden',
        precio: 0.36,
        imagen: 'item2.jpeg'
    },
    {
        id: 3,
        nombre: 'Uvas',
        precio: 2.60,
        imagen: 'item3.jpeg'
    },
    {
        id: 4,
        nombre: 'Banana',
        precio: 0.21,
        imagen: 'item4.jpeg'
    },
    {
        id: 5,
        nombre: 'Melón Galia',
        precio: 2.71,
        imagen: 'item5.jpeg'
    },
    {
        id: 6,
        nombre: 'Mandarina',
        precio: 0.36,
        imagen: 'item6.jpeg'
    },
    {
        id: 7,
        nombre: 'Piña',
        precio: 2.30,
        imagen: 'item7.jpeg'
    },
    {
        id: 8,
        nombre: 'Mango',
        precio: 1.23,
        imagen: 'item8.jpeg'
    }




];

//CARGA INICIAL DE PRODUCTOS
renderProducts()





/*
Método que genera mediante DOM los elementos disponibles para "comprar".
Los datos se cargan de la "BBDD" que hay en la parte superior del documentos.
Esto hace que solo haga falta añadir un producto más a la "BBDD" para que atomáticamente se muestre en la página.
*/
function renderProducts(){

    for (let i = 0; i < productos.length; i++) {
        
        let listItems=document.getElementById('list-items');
        
        let item=document.createElement('div');
        item.classList.add('item');
        listItems.appendChild(item);

        let itemImg=document.createElement('img');
        itemImg.classList.add('item-img');
        itemImg.setAttribute('src','./assets/'+productos[i].imagen);
        item.appendChild(itemImg);

        let itemName=document.createElement('p');
        itemName.classList.add('item-name');
        itemName.textContent=productos[i].nombre;
        item.appendChild(itemName);

        let itemPrice=document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.textContent=productos[i].precio+'€';
        item.appendChild(itemPrice);

        let itemButton = document.createElement('button');
        itemButton.classList.add('item-add');
        itemButton.textContent = 'Añadir al carrito';
        itemButton.addEventListener('click', function() { addProductsToCart(productos[i]) });

        item.appendChild(itemButton);
        
    }
}

/*
Método para añadir productos al carrito.
Se añaden productos al array general y se llama al método recargarCarrito().
*/
function addProductsToCart(producto){

    productosCarrito.push(producto);
    recargarCarrito();
}





/*
Método para recargar el carrito.
El método usa el array de productos y genera mediante DOM, todos los elementos de la lista.
Se les añade por código los atributos necesarios (class,textContent,src,eventos).
*/

function recargarCarrito(){
    let elementCarrito=document.getElementById('elementosCarrito');
    elementCarrito.innerHTML = '';
    for (let i = 0; i < productosCarrito.length; i++) {
        
        let divProducto=document.createElement('div');
        divProducto.classList.add('cart-product');

        elementCarrito.appendChild(divProducto);

        let imgProducto= document.createElement('img');
        imgProducto.classList.add('cart-img');
        imgProducto.setAttribute('src','./assets/'+productosCarrito[i].imagen);
        elementCarrito.appendChild(imgProducto);

        let itemName=document.createElement('p');
        //itemName.classList.add('item-name');
        itemName.textContent=productosCarrito[i].nombre;
        elementCarrito.appendChild(itemName);


        let itemPrice=document.createElement('p');
        itemPrice.classList.add('cart-price');
        itemPrice.textContent=productosCarrito[i].precio+'€';
        elementCarrito.appendChild(itemPrice);

        
        let divDatos=document.createElement('div');
        divDatos.classList.add('cart-unidades');

        elementCarrito.appendChild(divDatos);

        let itemUnidades=document.createElement('p');
        itemName.classList.add('cart-un');
        itemUnidades.textContent='1 Ud.';
        divDatos.appendChild(itemUnidades);

        let itemButton = document.createElement('button');
        itemButton.classList.add('button-quitar');
        itemButton.textContent = '-';
        itemButton.addEventListener('click', function() { removeProductsToCart(i) });

        divDatos.appendChild(itemButton);
   
    }

}

/*
Método para eliminar elementos del carrito.
Se usa un array auxiliar en el que se guardan los elementos quitando el que has eliminado mediante el botón.
*/
function removeProductsToCart(product){
    let productosCarritoAux=[];

    for (let i = 0; i < productosCarrito.length; i++) {

        
        if(product!=i){
            productosCarritoAux.push(productosCarrito[i]);
        }
        
    }
    productosCarrito=productosCarritoAux;
    recargarCarrito();
}