const td = [{
    code:"",
    name:"",
    rate:"",
},
{
    code:"",
    name:"",
    rate:"",
},
{
    code:"",
    name:"",
    rate:"",
},
{
    code:"",
    name:"",
    rate:"",
},
{
    code:"",
    name:"",
    rate:"",
},
{
    code:"",
    name:"",
    rate:"",
},
{
    code:"",
    name:"",
    rate:"",
},
]

const api_url = "https://bitpay.com/api/rates"
const refresh = document.querySelector('.refresh')
const addNew = document.querySelector('.addNew')
const button = document.querySelector('button')
const table = document.querySelector('table')


class Bitcoin {
    constructor(api_url, td) {
        this.api_url = api_url
        this.td = td
        this.getPrices(this.td)
        this.refresh = this.refresh.bind(this)
    }

    setPrices(td, prices) {
        this.td = td
        this.prices = prices
        
        for(var i = 1; i< table.rows.length;i++){  
            for( var j = 0; j < table.td[i].cells.length; j++){
                table.rows[i].cells[j].innerHTML= td [i-1][j];
            }
        }
    }

    getPrices(td) {

        $.ajax({
            url: this.api_url,
            dataType: 'json',
            success: (data)=> {
                this.prices = data
                this.setPrices(this.td, this.prices)

            
                // console.log(data)
                
                
                //    prices.textContent = data.prices
                //    td.textContent = data.td
                //    this.td = data.td
                //    this.prices = data.prices
            },
            error:(error)=>{
                console.log('There is something wrong')
            }
        })

    }

    refresh() {
        this.getPrices()
    }

}

let prices = new Bitcoin(api_url, td)

button.addEventListener('click',function(refresh){
   this.
})

// addNew.addEventListener('click'() =>{
//     prompt("Which currency are you looking for?")
// })



