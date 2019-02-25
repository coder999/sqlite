cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-sqlite/www/SQLitePlugin.js",
        "id": "cordova-plugin-sqlite.SQLitePlugin",
        "pluginId": "cordova-plugin-sqlite",
        "clobbers": [
            "window.sqlitePlugin",
            "cordova.plugins.sqlitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-sqlite-storage": "2.0.2",
    "cordova-plugin-sqlite": "1.0.3"
}
// BOTTOM OF METADATA
});