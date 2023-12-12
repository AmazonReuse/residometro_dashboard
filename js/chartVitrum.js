const ctx = document.getElementById("myChart");

let plas = 100
let metal = 0
let vidro = 100
let orgs = 0
let rejs = 0

const total = plas + metal + vidro + orgs + rejs

function percentage(number, sum){
  let perc = (number/sum)*100
  return Math.round(perc * 10)/10
}

let perc1 =  percentage(plas, total)
let perc2 =  percentage(metal, total)
let perc3 =  percentage(vidro, total)
let perc4 =  percentage(orgs, total)
let perc5 =  percentage(rejs, total)

const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    //labels: ['Plástico (' + plas + ' Kg)', 'Metais (' + metal + ' Kg)', 'Vidro (' + vidro + ' Kg)', 'Orgânicos (' + orgs + ' Kg)', 'Rejeitos (' + rejs + ' Kg)'],
    labels: ['Vidro 1 (' + plas + ' Kg)', 'Vidro 2 (' + vidro + ' Kg)'],
 
    datasets: [{
      label: 'Parcela do total (em %)',
      //data: [perc1, perc2, perc3, perc4, perc5],
      data: [perc1, perc3],
      backgroundColor: [
        //'rgba(173, 38, 23, 1)',
        //'rgba(173, 151, 23, 1)',
        'rgba(23, 173, 95, 1)',
        'rgba(23, 203, 95, 1)',
        //'rgba(98, 112, 102, 1)'
      ],
      borderColor: [
        'rgba(40, 40, 24, 0.8)',
        'rgba(40, 40, 24, 0.8)',
        'rgba(40, 40, 24, 0.8)',
        'rgba(40, 40, 24, 0.8)',
        'rgba(40, 40, 24, 0.8)',      ],
      borderWidth: 1
    }]
  },
  options: {
   	//cutoutPercentage: 40,
    responsive: true,
    
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20
          },
          position: 'bottom',
          display: false
        }
      }
    }
  }
});