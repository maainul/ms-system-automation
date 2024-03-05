import FormAttributeModel from "../model/formAttribute.js"


export const upsertFormAttributeController = async (req, res) => {
    try {
        const newFormAttribute = new FormAttributeModel(req.body)
        await newFormAttribute.save()
        res.status(201).json({ success: true, newFormAttribute })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

export const getFormAttributesController = async (req, res) => {
    try {
        const data = await FormAttributeModel.find()
        console.error('Get Form Attribute:', data)
        return res.status(201).send({
            success: true,
            message: 'Vehicle List',
            data,
        });

    } catch (error) {
        const status = error.status || 500
        return res.status(status).send({
            success: false,
            message: 'Error In Get Form Attribute List',
            error: error.message || error,
        });
    }
}





