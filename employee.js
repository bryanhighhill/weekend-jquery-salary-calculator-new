console.log('HELLO');

$(readyNow);

let employees = [];
let totalMonthlyCost = 0;

function readyNow() {
    console.log('ready now');
    $('#submit-button').on('click', createEmployee);
    $('#employee-table').on('click', '.remove-employee', removeEmployee);
}
//COLLECT INPUT VALUES
function createEmployee() {
    console.log('you have added a new employee');

    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let employeeId = $('#employee-id').val();
    let jobTitle = $('#job-title').val();
    let annualSalary = Number($('#annual-salary').val());

    let employeeObject = {
        first_name: firstName,
        last_name: lastName,
        employee_id: employeeId,
        job_title: jobTitle,
        annual_salary: annualSalary
    }    
    console.log(employees);
//STORE INFO IN OBJECT ARRAY
    employees.push(employeeObject);
//APPEND INFO TO DOM;
    totalMonthlyCost += annualSalary;
    let employeeDom = $(`
        <tr data-employee-salary="${annualSalary}">
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${employeeId}</td>
            <td>${jobTitle}</td>
            <td>${annualSalary}</td>
            <td><button class="remove-employee">Remove</button></td>
        </tr>
    `)
    $('#employee-table').append(employeeDom);
//CLEAR INPUT FIELDS
    $('#first-name').val('');
    $('#last-name').val('');
    $('#employee-id').val('');
    $('#job-title').val('');
    $('#annual-salary').val('');
    monthlyCosts();
}

function monthlyCosts(){
    $('#monthly-costs').empty();
    $('#monthly-costs').append(Number(totalMonthlyCost));
    if (totalMonthlyCost > 20000) {
        $('#monthly-costs').css('background-color', 'red')
    } else {
        $('#monthly-costs').css('background-color', 'green')
    }
}

function removeEmployee() {
    let data = $(this).parent().parent().data('employeeSalary');
    console.log(data);
    $(this).parent().parent().remove();
    totalMonthlyCost -= data;
    monthlyCosts();
}