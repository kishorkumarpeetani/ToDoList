import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        default : "Untitled",
        trim : true
    },
    description : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
        index : true,
    }
}, { timestamps : true });

const Task = mongoose.model('Task', taskSchema);

export default Task;