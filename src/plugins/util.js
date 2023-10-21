import Vue from 'vue';
import {format} from 'date-fns'

Vue.prototype.$util = {
    timeAgo(d) {
        var date = new Date(d);
        var now = new Date();
        var offset = now.getTimezoneOffset() * -60

        var seconds = (now.getTime() - date.getTime()) / 1000 + offset

        if (seconds < 60) {
            return  Math.floor(seconds) + " s"

        } else if (seconds < 3600) {
            return Math.floor(seconds / 60) + " m"

        } else if (seconds < 3600 * 24) {
            return Math.floor(seconds / 60 / 60) + " h"
        }

        if(date.getFullYear() < now.getFullYear()){
            return format(date, 'dd/MM/yyyy')
        }
        return format(new Date(date), 'dd/MM')
    },

    adThousands(n){
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
