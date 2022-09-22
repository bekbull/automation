export default class Todo {
    constructor(data, selectorTemplate, handleCheck, handleTrashClick) {
        this.id = data.id
        this.status = data.status
        this.content = data.content
        this.tag = data.tag
        this._handleCheck = handleCheck
        this._selectorTemplate = selectorTemplate
        this._handleTrashClick = handleTrashClick;
    }
    _getTemplate() {
        return document.querySelector(this._selectorTemplate).content.cloneNode(true);
    }
    getTodo() {
        return {
            id: this.id,
            content: this.content.textContent,
            status: this.status.checked,
            tag: this.tag.textContent
        }
    }
    createTodo() {
        const todo = this._getTemplate()
        this._status = todo.querySelector(".todo-status")
        this._content = todo.querySelector(".todo")
        this._tag = todo.querySelector(".todo-tag")
        this._trashBtn = todo.querySelector(".element__trash");
        this._content.textContent = this.content
        this._tag.textContent = this.tag
        this._status.checked = this.status
        this._elemCard = todo.querySelector(".element")
        this.status == true ? this._content.style.setProperty("text-decoration", "line-through") : this._content.style.setProperty("text-decoration", "none")
        this.status == true ? this._content.style.setProperty("color", "rgb(156 163 175)") : this._content.style.setProperty("color", "rgb(0 0 0)")
        this._setEventListeners();
        return todo
    }
    setTodo(id, content, status, tag) {
        this.id = id
        this._content.textContent = content
        this._status.checked = status
        this._tag.checked = tag
    }
    _setEventListeners() {
        this._status.addEventListener('click', (e) => {
            if (e.target.classList[0] !== 'todo' && e.target.classList[0] !== 'todo-tag') {
                this._handleCheck()
                if (this._status.checked == true) {
                    this._status.checked = false
                    this._content.style.setProperty("text-decoration", "none")
                    this._content.style.setProperty("color", "rgb(0 0 0)")
                } else {
                    this._status.checked = true
                    this._content.style.setProperty("text-decoration", "line-through")
                    this._content.style.setProperty("color", "rgb(156 163 175)")
                }
            }
        })
        this._trashBtn.addEventListener('click', this._handleTrashClick);
    }
    delete() {
        this._elemCard.remove();
    }
}