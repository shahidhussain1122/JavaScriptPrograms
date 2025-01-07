export function generateForm(fields, onSubmit) {
    const formContainer = document.getElementById("formFields");
    formContainer.innerHTML = "";

    fields.forEach((field) => {
        const label = document.createElement("label");
        label.textContent = field.label;
        const input = document.createElement("input");
        input.type = field.type;
        input.name = field.name;
        input.id = field.name;
        formContainer.appendChild(label);
        formContainer.appendChild(input);
    });

    const form = document.getElementById("recordForm");
    form.onsubmit = (e) => {
        e.preventDefault();
        const data = {};
        fields.forEach((field) => {
            data[field.name] = document.getElementById(field.name).value;
        });
        onSubmit(data);
    };
}
