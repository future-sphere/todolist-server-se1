import mongoose from 'mongoose';

interface Todo extends mongoose.Document {
  title: string;
  isComplete: boolean;
}

const TodoSchema: mongoose.Schema = new mongoose.Schema({
  title: String,
  isComplete: Boolean,
});

const TodoModel = mongoose.model<Todo>('Todos', TodoSchema);

export default TodoModel;
