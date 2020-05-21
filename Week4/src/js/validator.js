class Validator {

    isValid = true
    touched = false
    
    options = {}

    constructor(parameters) {
        console.log('Validator()', parameters)
        this.options = Object.assign({},
            {
                selector: null,
                errorMessage: 'Invalid value'
            },
            parameters
        )
        const selector = this.options.selector
        if (!selector) {
            console.error("Must provide a selector key!") // this is a soft error, like a slap on the wrist
            // throw new Error("Must provide a selector key!") // this blows up the whole app
        }

        console.log('setting up listener for', selector)
        const elements = document.querySelectorAll(selector)

        // two ways to handle this part
        // 1: my preferred way
        if (!elements) {
            console.warn("No elements matching the selector were found!", selector)
            return
        }

        // 2: but this is fine too, just a little clunkier
        // if (element) {
        //     // do the setup here
        // }
    
        for(var i=0; i<elements.length; i++) {
            elements[i].addEventListener('focus', () => {
                this.touched = true
            })
            // this sets the wrong scope for 'this' in the child class
            // elements[i].addEventListener('blur', this.validate)
            // so use this syntax instead
            elements[i].addEventListener('blur', (evt) => this.validate(evt))
        }
    }

    validate(event) {
        console.log('Validator.validate()')
    }

    validateBefore(event) {
        console.log('Validator.validateBefore()')
    }

    validateAfter(event) {
        console.log('Validator.validateAfter() isValid?', this.isValid)
        const $el = event.target
        if (!this.isValid) {
            $el.classList.add('invalid')
            $el.parentElement.querySelector('.error-message').innerHTML = this.options.errorMessage
            $el.style.backgroundColor = "red"
        } else {
            $el.classList.remove('invalid')
            $el.parentElement.querySelector('.error-message').innerHTML = ''
            $el.style.backgroundColor = '';

        }
    }

    showErrors = () => {
        console.log('showing errors')
    }
}
