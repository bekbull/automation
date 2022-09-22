export default class Form {
    constructor(popupSelector, submitCallback) {
        this._popupElement = document.querySelector(popupSelector);
        this._submitCallback = submitCallback;
    }

    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll('.form__input');

        // создаём пустой объект
        this._formValues = {};
        console.log(this._inputList[0]);
        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            
            if (input.name == 'checked') {
                this._formValues[input.name] = input.checked;
                input.checked = false
            } else {
                this._formValues[input.name] = input.value;
                input.value = ''
            }
        });

        // возвращаем объект значений
        return this._formValues;
    }

    setEventListeners() {
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallback(this._getInputValues());
        })
    }
}

