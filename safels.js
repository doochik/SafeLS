(function() {

    var ls = window['localStorage'];

    /**
     * SafeLS - safety localStorage usage!
     * Little JavaScript object that wrap every localStorage method in try-catch
     * because every method thows different exceptions escessialy in Chome and Firefox as they store data in SQLite.
     * You can use it even browser has no localStorage support.
     * @name SafeLS
     */
    window['SafeLS'] = {

        /**
         * Store key.
         * @param {String} key
         * @param {String} data
         * @return {Boolean}
         */
        setItem: function(key, data) {
            try {
                ls.setItem(key, data);
                return true;
            } catch (e) {
                // throw exceptions frequently
            }
        },

        /**
         * Get key.
         * @param {String} key
         * @return {String}
         */
        getItem: function(key) {
            try {
                return ls.getItem(key);
            } catch (e) {
                // throw exceptions frequently
            }
            return null;
        },

        /**
         * Clear storage.
         * @return {Boolean}
         */
        clear: function() {
            try {
                ls.clear();
                return true;
            } catch(e) {
                // throw exceptions frequently
            }
        },

        /**
         * Remove key.
         * @param {String} key
         * @return {Boolean}
         */
        removeItem: function(key) {
            try {
                ls.removeItem(key);
                return true;
            } catch(e) {
                // throw exceptions frequently
            }
        },

        /**
         * Return storage length.
         * @return {Number}
         */
        length: function() {
            try {
                return ls.length;
            } catch(e) {
                // throw exceptions rarely
            }
            return 0;
        },

        /**
         * Return key name by index.
         * @param {Number} index
         * @return {String}
         */
        key: function(index) {
            try {
                return ls.key(index);
            } catch (e) {
                // throw exceptions rarely
            }
            return '';
        }
    };

})();