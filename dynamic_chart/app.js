var employeeLabel = [], employeeSalaryData = [], employeeAgeData = []

async function  dummyChart() {
await getDummyData()

let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of the chart
    type: 'bar',

    //The data of our dataset
    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'Employee Salary',
            backgroundColor: 'blue',
            borderColor: 'rgb(255, 99, 132)',
            data: employeeSalaryData,
            fill: true
        },
        {
            label: 'Employee Age',
            backgroundColor: 'pink',
            borderColor: 'rgb(255, 99, 132)',
            data: employeeAgeData,
            fill: true

        
      }
    
    ]
    },

    //Configuration options go here
    options: {
        interaction: {
            mode: 'index'
        }
    }
});
}

dummyChart()

  //fetch Data From Dummy REST API

  async function getDummyData(){
    const apiUrl="https://dummy.restapiexample.com/api/v1/employees"

    const response = await fetch(apiUrl)
    const barChartData = await response.json()

    const salary= barChartData.data.map( (x) => x.employee_salary)
    const age= barChartData.data.map( (x) => x.employee_age)
    const name= barChartData.data.map( (x) => x.employee_name)

    console.log(salary, age, name)

    employeeLabel = name
    employeeSalaryData = salary
    employeeAgeData = age
  }

 