const employeeModel = require('../models/employee');

const createEmployee = async (req, res) => {
    const { employeeName, address, contact } = req.body;

    const newEmployee = new employeeModel({
        employeeName: employeeName,
        address: address,
        contact: contact,
        userId: req.userId
    });

    try {

        await newEmployee.save();
        res.status(201).json(newEmployee);


    } catch (error) {

        console.log(error);
        res.status(500).json({ message: "Something went wrong" });

    }

}

const updateEmployee = async (req, res) => {

    const id = req.params.id;

    const { employeeName, address, contact } = req.body;

    const newEmployee = {
        employeeName: employeeName,
        address: address,
        contact: contact,
        userId: req.userId
    };

    try {

        await employeeModel.findByIdAndUpdate(id, newEmployee, { new: true });
        res.status(200).json(newEmployee);



    } catch (error) {

        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }

}

const deleteEmployee = async (req, res) => {

    const id = req.params.id;

    try {

        const employee = await employeeModel.findByIdAndRemove(id);
        res.status(202).json(employee)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }

}


const getEmployee = async (req, res) => {

    try {

        const employee = await employeeModel.find({ userId: req.userId });
        res.status(200).json(employee);

    } catch (error) {

        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }

}


module.exports = {
    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee,
    getEmployee: getEmployee
}