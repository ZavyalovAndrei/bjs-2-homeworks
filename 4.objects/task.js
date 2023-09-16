function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let student1 = new Student("Ivan", "male", 29);
let student2 = new Student("Avraam", "male", 33);
let student3 = new Student("Anabella", "female", 25);
let student4 = new Student("Maria", "female", 30);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty("marks") === true) {
		this.marks.push(...marks);
	} else {
		console.log("Current student excluded");
	}
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty("marks") === false || this.marks.length === 0) {
		return 0;
	} else {
		let result = (this.marks.reduce((accumulator, item) => accumulator + item, 0)) / this.marks.length;
		console.log(result);
		return result;
	}
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}