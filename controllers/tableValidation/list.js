import TableValidationModel from '../../model/tables.js'


export const list = async (req, res) => {
    try {
        const data = await TableValidationModel.find()
        if (data.length <= 0) {
            return res.status(201).json({
                success: true,
                label: "Success",
                error: "No data Available"
            })
        } else {
            return res.status(201).json({
                success: true,
                label: "Success",
                data: data
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}