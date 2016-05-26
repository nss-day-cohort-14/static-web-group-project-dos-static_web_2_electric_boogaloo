var products = [
	{
		name: "Curled",
		description: "Our best seller. Handcarved from maple trees, this clever and witty design brings endless joy to the envious. Also blends well if it ever gets tangled.",
		price: "$50-$200",
		URL: '<img src="img/curled.jpg">',
	},	{
		name: "Gold",
		description: "Our luxury model, for those who love the smooth feel of success on their face. Our many sizes are all 40-karat and shine to a lustrous glow.",
		price: "$400-$1600",
		URL: '<img src="img/gold.jpg">',
	},	{
		name: "Necklace",
		description: "For the man-on-the-go or the man-without-pockets, these combs are kept always at the ready. Choose from a variety of comb materials and different chains.",
		price: "$50-$150",
		URL: '<img src="img/necklace.jpg">',
	},	{
		name: "Personalized",
		description: "Our company can customize your comb with a personal message, a desired material, and a specific size for the teeth. No vulgiarities will be accepted.",
		price: "$400",
		URL: '<img src="img/personal.jpg">',
	},	{
		name: "Steel",
		description: "For the heavy-duty user or the rough outdoorsman, our stainless steel combs will endure all elements including your indestructable 'stache.",
		price: "$100-$250",
		URL: '<img src="img/steel.jpg">',
	},	{
		name: "Switchblade",
		description: "For those who like a protective cover for their teeth and also just love the feel of a classic razor, our many switchblade combs will not fail to satisfy.",
		price: "$150",
		URL: '<img src="img/switch.jpg">',
	},	{
		name: "Silver",
		description: "When you want to silky feel of gold but without breaking the bank. Or if it just matches the chrome of your Harley better.",
		price: "$50-$250",
		URL: '<img src="img/tinysilver.jpg">',
	},	{
		name: "Vintage",
		description: "Our company has aquired a limited collection of ancient mustache combs, including some pine branches cut by cavemen.",
		price: "$400-$2000",
		URL: '<img src="img/vintage.jpg">',
	},
]

var productInfo = document.getElementById("combs")

for (var i = 0; i < products.length; i++) {
	var pName = products[i].name;
	var pDesc = products[i].description;
	var pPrice = products[i].price;
	var pURL = products[i].URL;
	productInfo.innerHTML += "<div class='productContainer'>" + "<div class='combpic'>" + pURL +"</div>" + "<div class='combname'>" + pName +"</div>" + "<div class='combdesc'>" + pDesc +"</div>" +"<div class='combprice'>" + pPrice +"</div>" + "</div>"
}