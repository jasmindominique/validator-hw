class PhoneValidator extends Validator {
    constructor(parameters) {
        super(parameters)
        console.log('PhoneValidator()', this.options)

        console.log('looking for non-american phones?', this.options.nonAmerican)
    }

    validate = (event) => {
        console.log('PhoneValidator.validate', event)
        super.validateBefore(event)
        console.log('running validation for PhoneValidator', event)

        const value = event.target.value
        console.log('value', value)
        if (/^\s*\(?\d{3}\)?[\-\. ]?\d{3}[\-\. ]?\d{4}\s*$/.test(value)) {
            this.isValid = true
            console.log('valid phone number!')
        } else {
            this.isValid = false
            console.log('not a valid phone number')
        }
        super.validateAfter(event)
    }
}
