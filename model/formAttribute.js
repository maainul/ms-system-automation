import mongoose from "mongoose";


// schema design
const formAttributeSchema = new mongoose.Schema({
    testinput: {
        type: String,
        required: [true, 'testinput  is required']
    },
   
}, { timestamps: true });


export default mongoose.model("FormAttribute", formAttributeSchema)