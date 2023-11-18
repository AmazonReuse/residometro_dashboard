const ctx = document.getElementById("myChart");

let plas = 1002.56
let metal = 5688.73
let vidro = 1727.03
let orgs = 433.2
let rejs = 10.72

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
  type: 'pie',
  data: {
    labels: ['Plástico (' + plas + ' Kg)', 'Metal (' + metal + ' Kg)', 'Vidro (' + vidro + ' Kg)', 'Orgânicos (' + orgs + ' Kg)', 'Rejeitos (' + rejs + ' Kg)'],
    datasets: [{
      label: 'Parcela do total (em %)',
      data: [perc1, perc2, perc3, perc4, perc5],
      backgroundColor: [
        'rgba(173, 38, 23, 1)',
        'rgba(173, 151, 23, 1)',
        'rgba(23, 173, 95, 1)',
        'rgba(88, 46, 41, 1)',
        'rgba(98, 112, 102, 1)'
      ],
      borderColor: [
        'rgba(143, 139, 139, 1)',
        'rgba(143, 139, 139, 1)',
        'rgba(143, 139, 139, 1)',
        'rgba(143, 139, 139, 1)',
        'rgba(143, 139, 139, 1)'
      ],
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