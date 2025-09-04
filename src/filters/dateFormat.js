import Vue from 'vue'
import moment from 'moment'

Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
});