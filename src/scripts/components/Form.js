export default class Form {
    constructor(popupSelector, submitCallback) {
        this._popupElement = document.querySelector(popupSelector);
        this._submitCallback = submitCallback;
    }

    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll('.form__input');

        // создаём пустой объект
        this._formValues = {};

        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
            // console.log(input.name, input.value);
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

