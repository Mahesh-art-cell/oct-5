var products=["watch","mobile","laptop","belt"]
function AddToCart() {
    var input=prompt("enter the produt")
    if(input){
        for(ele of products){
            var itemfound=false;
            if(ele==input){
                console.log("u have added",input,"item to the cart");
                alert("u have added"+""+input+""+"item to the cart")
                itemfound=true
                break;
            }
        }
        if(!itemfound){
            alert(`we don't have $(input) item in our basket`)
        }
    }
    else{
        alert("please select an item");
    }
    
    
}