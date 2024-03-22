import mongoose from "mongoose";


// schema design
const TableValidationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'table name is required']
    },
    // fields:
    //     [{
    //         dataType: { type: String },
    //     },
    //     {
    //         maxValue: { type: Number },
    //     },
    //     { minValue: { type: Number } },
    //     ]
    // ,

}, { timestamps: true });


export default mongoose.model("TableValidation", TableValidationSchema)