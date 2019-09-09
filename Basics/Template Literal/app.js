const name = "Ahmet Zurnacı";
const department = "Engineer";
const salary = 10000;



// const a = "Name: " + name + "\n" + "Department: " + department + "\n" + "Salary: " + salary;


// const a = `Name:${name}\nDepartment:${department}\nSalary:${salary}`;

// const html = "<ul> " +
//     "<li> " + name + "</li>" +
//     "<li> " + department + "</li>" +
//     "<li> " + salary + "</li>" +
//     "</ul>";

function a() {
    return "Hello";
}

const html = `
            <ul>
                <li>${name}</li>
                <li>${department}</li>
                <li>${salary}</li>
                <li>${10 / 4}</li>
                <li>${a()}</li>
            </ul>
`;

document.body.innerHTML = html;
