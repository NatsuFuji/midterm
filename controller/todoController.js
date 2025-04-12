import Todo from './todoModel.js'; 

// Get all todos
export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new todo
export const createTodo = async (req, res) => {
    const { id, items } = req.body;

    if (!id || !items) {
        return res.status(400).json({ message: 'ID and items are required.' });
    }

    try {
        const newTodo = new Todo({ id, items });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a todo by id
export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Todo.findOneAndDelete({ id });
        if (!result) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a todo by id
export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { items } = req.body;

    if (!items) {
        return res.status(400).json({ message: 'Items are required to update.' });
    }

    try {
        const updatedTodo = await Todo.findOneAndUpdate(
            { id },                    // filter
            { items },                 // update
            { new: true }              // return the updated document
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
