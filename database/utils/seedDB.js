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

	const dummyTask2 = await Task.create({
		description: "Sell Sprite Cranberry",
        priority: 0, // urgent
        completion: "Not Started"
	});

	await dummyTask.setEmployee(dummyEmployee2);
	await dummyTask2.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;