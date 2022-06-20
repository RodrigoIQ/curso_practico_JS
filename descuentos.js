//In this file I will follow the second project in Platzi practical javascript course 

function discount_price(price,percentege){
        return price*(1-(percentege/100));
}


function get_Discounted_price(){
        //product_price, discount_percentage
        const product_price = document.getElementById("product_price").value;
        const discount_percentage =  document.getElementById("discount_percentage").value;
        const result_Paragraf = document.getElementById("ResultPrice");
        const discount=discount_price(product_price,discount_percentage);
        resul_Paragraf.innerText = `Product price is ${product_price} with discount it is ${discount}`
};