let car_price = document.querySelector(".car_price")
let down_payment = document.querySelector(".down_payment")
let term = document.querySelector(".term")
let interest_rate = document.querySelector(".interest_rate")
let calculate_btn = document.querySelector(".calculate_btn")
let principal_text = document.querySelector(".principal_text")
let down_payment_text = document.querySelector(".down_payment_text")
let year_text = document.querySelector(".year_text")
let rate_text = document.querySelector(".rate_text")
let monthly_payment = document.querySelector(".monthly_payment")
let total_amount_after_payment_text = document.querySelector(".total_amount_after_payment_text")
let total_interest_text = document.querySelector(".total_interest_text")

let car_price_value
let down_payment_value 
let term_value
let interest_rate_value

calculate_btn.addEventListener("click", function set_values_local_storage() {

    
  localStorage.setItem("car_price_value", car_price.value);
  localStorage.setItem("down_payment", down_payment.value);
  localStorage.setItem("term", term.value);
  localStorage.setItem("interest_rate", interest_rate.value);


})


function get_values_from_storage(){ 

car_price_value = Number(localStorage.getItem("car_price_value"));
down_payment_value = Number(localStorage.getItem("down_payment"));
term_value = Number(localStorage.getItem("term"));
interest_rate_value = Number(localStorage.getItem("interest_rate"));


}

get_values_from_storage()


let principal = car_price_value - down_payment_value
let rate = interest_rate_value / 100
let number_of_payment = 12 * term_value
let payment
let result

function payment_calculator(){
 

    payment = (principal * rate/12)/[1-(1+rate/12)** -number_of_payment]

    result = Number(Math.round(payment * 100)/100)

    
}


payment_calculator()

principal_text.innerHTML = "Principal: $" + principal
monthly_payment.innerHTML = "Monthly payment: $" + result

let car_price_and_down = car_price_value + down_payment_value
let total_cost = result * number_of_payment + down_payment_value
let  total_interest =   total_cost - car_price_value


if (term_value <= 1 ){

    total_amount_after_payment_text.innerHTML = "Total cost after " + term_value + " year: $" + Math.round(total_cost * 100)/100  
    total_interest_text.innerHTML = "Total interest after " + term_value + " year: $" + Math.round(total_interest * 100)/100  
} else {

    total_amount_after_payment_text.innerHTML = "Total cost after " + term_value + " years: $" + Math.round(total_cost * 100)/100  
    total_interest_text.innerHTML = "Total loan interest after " + term_value + " years: $" + Math.round(total_interest * 100)/100
}
