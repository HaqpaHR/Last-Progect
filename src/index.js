import { Home } from "./home/home";
import {Menu} from "./menu/menu";
import { About} from "./about/about";
import {appHistory} from "./app-history";
import {Card} from "./movie-card/movie-card"

const menu = new Menu();
document.body.appendChild(menu.render());

const wrapper = document.createElement('div');
document.body.appendChild(wrapper);

function renderRoute(pathname) {
    switch(pathname) {
        case '/':{
            wrapper.innerHTML = '';
            break;
        }
        case '/home':{
            wrapper.innerHTML = '';
            const home = new Home();
            wrapper.appendChild(home.render());
            break;
        }
        case '/about':{
            wrapper.innerHTML = '';
            const about = new About();
            wrapper.appendChild(about.render());
            break;
        }
    }
}

console.log('path', appHistory.location.pathname)

appHistory.listen((listener) => {
    renderRoute(listener.location.pathname)
});

renderRoute(appHistory.location.pathname)