// Object.values(___currentCart).forEach(val => console.log(val));



___currentCart.forEach(function(index, key){
	console.log(key.quantity);
});


for (var i=0; i<___currentCart.length; i++) {
    var qty = ___currentCart[i].quantity;
    var title = ___currentCart[i].title;
    var prc = ___currentCart[i].price;
    var shiPrc = ___currentCart[i].shippingPrice;
    var totPrc = prc + shiPrc;
    var newArray = [qty, title, totPrc];
}	