import { Task, Employee } from '../models';

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "Melissa",
		lastname: "Lynch",
		department: "Computer Science"
	});
	const dummyEmployee2 = await Employee.create({
		firstname: "Kim",
		lastname: "Kardashian"
	});

	const dummyTask = await Task.create({
		description: "Buy Sprite Cranberry",
        priority: 0,
        completion: "Tomorrow"
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

export default seedDB;