// Purpose: Build the commission form


const buildCommissionForm = function () {
    api.getSingleAnimal(id).then(animal => {
        const output = $("#order-form")
        const fragment = document.createDocumentFragment()
    // Customer info (name, address, phone number, email)

    // Type of animal

    // Quantity of animals

    // Size

    // Mounted?

    // When you want it by (date field)
})
}




module.exports = buildCommissionForm
