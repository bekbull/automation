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
            todo._status.checked = !todo._status.checked
        },
        () => {
            todo.delete()
        }
    )
    idCounter += 1
    const post = todo.createTodo()
    return post
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