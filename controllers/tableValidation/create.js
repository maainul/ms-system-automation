import TableValidationModel from '../../model/tables.js'

export const create = async (req, res) => {
    try {
        //validation
        // const {error,value} = validationLog

        // alreay exists Check
        const data = await TableValidationModel.findOne({ 'name': req.body.name })
        if (data) {
            return res.status(400).json({
                success: false,
                label: "name",
                error: "Table is already exists"
            })
        }
        // save data to the database
        const newTableValidation = await TableValidationModel.create(req.body)

        console.log(newTableValidation)
        res.status(201).json({ success: true, newTableValidation })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}