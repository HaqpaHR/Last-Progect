import template from "lodash.template";

export function renderTemplate(html, data) {
    const tmp = template(html);
    const string = tmp(data);

    const container = document.createElement("div");
    container.innerHTML = string;

    return container.firstChild;
}
