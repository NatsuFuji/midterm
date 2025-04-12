import mongoose from 'mongoose'; // import mongoose

const todoSchema = mongoose.Schema({
    id: {
        type: String,
        required: [true, 'Please provide an ID']
    },
    items: {
        type: String,
        required: [true, 'Please provide items']
    }
});

export default mongoose.model('Todo', todoSchema); // export model as 'Todo'
