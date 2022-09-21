import './index.css';

import HtmlGenerator from '../scripts/utils/HtmlGenerator';
import Todo from '../scripts/components/Todo';
import Form from '../scripts/components/Form';

let idCounter = 0

const createCard = (item) => {
    const todo = new Todo({
        content: item.content,
        status: item.status,
        tag: item.tag,
        id: idCounter
    },
        '#todoTemplate',
        () => {
            todo._status.checked = !todo.status
            todo._status.checked ? this._content.style.setProperty("text-decoration", "line-through") : this._content.style.setProperty("text-decoration", "none")
        }
    )
    idCounter++
    todo.createTodo()
    return todo
}

const todoList = new HtmlGenerator({
    renderer: (item) => {
        const todo = createCard(item);
        todoList.addItem(todo);
    }
},
    '.todos')

const todoForm = new Form('#newTodoForm', (values) => {
    const todo = createCard({ content: values['content'], status: values['checked'], tag: values['tag'] }) 
    todoList.addItem(todo)
})

todoForm.setEventListeners();