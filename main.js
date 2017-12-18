const api_url = "https://bitpay.com/api/rates"

$.ajax({
    type:"GET",
    url:api_url,
    dataType:'jsonp',
    success: function (getPrices,setPrices){
        $("#api").html(JSON.stringify(getPrices,setPrices,6))
    },
    error: "Something went wrong!"
})

// const td = document.querySelector('td')

class getPrices{
    constructor(api_url,td){
        this.api_url = api_url
        this.td = td
    }
    setPrices(td,prices){
        this.td = td
        this.prices = prices
    }
}
