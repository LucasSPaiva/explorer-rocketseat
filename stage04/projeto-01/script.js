const patients = [
	{
		name: 'Luiz',
		age: 37,
		weight: 20,
		height: 120
	},
	{
		name: 'Luizin',
		age: 27,
		weight: 70,
		height: 139
	},
	{
		name: 'Luizinho',
		age: 74,
		weight: 73,
		height: 10
	}
]

const patientsNames = []

// for (let index = 0; index < patients.length; index++) {
// 	patientsNames[index] = patients[index].name
// }

for (let patient of patients) {
	patientsNames.push(patient.name)
}
// console.log(patientsNames)

// let patientsSumAges = 0

// for (let patient of patients) {
// 	patientsSumAges += patient.age
// }

// console.log(patientsSumAges)

// const patientsCured = []

// for (let patient of patients) {
// 	patientsCured.name = patient.name
// 	patientsCured.weight = patient.weight
// 	patientsCured.cured = true
// }
// console.log(patientsCured)

const calcIMC = (weight, height) => {
	return (weight / (height / 100) ** 2).toFixed(2)
}

const calcPatientIMC = patient => {
	return calcIMC(patient.weight, patient.height)
}

for (patient of patients) {
	console.log(calcPatientIMC(patient))
}
