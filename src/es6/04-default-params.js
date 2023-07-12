function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age|| 27;
    var country = country || 'MX';

    console.log(name, age, country);
}

newUser();
newUser('David',29,'CO');


function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age, country);
    
}

newAdmin();
newAdmin('Ana',28,'PR');