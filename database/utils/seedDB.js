const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		first: "Melissa",
		last: "Lynch",
		department: "Computer Science"
	});
	const dummyEmployee2 = await Employee.create({
		first: "Dan",
		last: "Elkik"
	});

	const dummyTask = await Task.create({
		description: "Buy Sprite Cranberry",
        priority: 0, // urgent
        completion: "In Progress"
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;