class Router {
    constructor(routes) {
        if (!routes) {
            throw 'error: routes param is mandatory';
        }
        this.routes = routes;
        this.rootElem = document.getElementById('app');
        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => this.hasChanged());
        this.hasChanged();
    }

    hasChanged() {
        const hash = window.location.hash.substr(1);
        const matchedRoute = this.routes.find((route) => route.isActiveRoute(hash));

        if (matchedRoute) {
            this.goToRoute(matchedRoute.htmlName);
        } else {
            const defaultRoute = this.routes.find((route) => route.default);
            if (defaultRoute) {
                this.goToRoute(defaultRoute.htmlName);
            }
        }
    }

    goToRoute(htmlName) {
        const url = 'views/' + htmlName;
        fetch(url)
            .then((response) => response.text())
            .then((html) => {
                this.rootElem.innerHTML = html;
            })
            .catch((error) => console.error('Error loading route:', error));
    }
}