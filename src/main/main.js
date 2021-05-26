import html from "./main.html";
import $ from "jquery";
import {renderTemplate} from "../base-ui-component";
import { getHistory } from "../app-history";
import { Modal } from "../addNewMovie/add";



export class Main {
  constructor() {
    this.main;
  }
  render() {
    this.main = html;

    const container = document.createElement("div");
    container.innerHTML = html;

    return container.firstChild;
  }
}


const history = getHistory();

export class Header {
  constructor() {
    const header = document.createElement('div');
    header.innerHTML = html;
    this.header = header
  }

  

  onClick(event) {
    if (event.target.tagName === "A") {
      event.preventDefault();
      history.push({ pathname: "/list", search: "" });
    }
    else if (event.target.id === "add-new") {
      event.preventDefault();

      const modal = new Modal();
      modal.render();
      modal.saveMovie();
      $("#modal").modal("show");
    }
  }

  clickSearch() {
    this.header.querySelector("#search-btn").addEventListener("click", (e) => {
      e.preventDefault();
      const searchQuery = this.header.querySelector("input[name=query]");
      history.push({ pathname: "search-", search: `?query=${searchQuery.value}` });
      searchQuery.value = "";
    })
  }


  render() {
    this.header.addEventListener("click", this.onClick.bind(this));

    this.clickSearch();

    return this.header;
  }
}

export class Greeting {
  constructor() {
    const greeting = document.createElement('div');
    greeting.innerHTML = html;
    this.greeting = greeting.querySelector("#greetings");
  }

  render() {
    return this.greeting
  }
}

export class Footer {
  constructor() {
    this.footer;
  }

  render() {
    this.footer = html;

    const container = document.createElement("div");
    container.innerHTML = html;

    return container.firstChild;
  }
}

