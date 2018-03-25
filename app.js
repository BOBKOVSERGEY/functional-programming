var bs = require("browser-sync").create();

bs.watch(['sushnost/*.*', 'sushnost/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
    server: "./sushnost"
});