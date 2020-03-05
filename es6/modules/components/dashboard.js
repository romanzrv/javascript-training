import Header from "./header";
import Sidenav from "./sidenav";

class Dashboard {
    constructor(data) {
        this.statistics = data;
    }

    printStatistics() {
        console.log(this.statistics);
    }

    addHeader() {
        const header = new Header('Header title');
        header.printHeaderTitle();
    }

    addSideNav() {
        const sidenav = new Sidenav('SideNav Links');
        sidenav.printSideNavLinks();
    }
}

export default Dashboard;
