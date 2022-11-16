console.log('HELLO');

$(readyNow);

let employees = [];

function readyNow() {
    console.log('ready now');
    $('#submit-button').on('click', createEmployee);
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
//APPEND INFO TO DOM
    let employeeDom = $(`
        <tr>
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
    $('#first-name').val('')
    $('#last-name').val('')
    $('#employee-id').val('')
    $('#job-title').val('')
    $('#annual-salary').val('')
}