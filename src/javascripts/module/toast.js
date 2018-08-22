require('less/toast.less')
function toast (msg, time) {
    this.msg = msg
    this.dismissTime = time || 1000
    this.createToast()
    this.showToast()
}

toast.prototype = {
    createToast() {
        var tpl = '<div class="toast" >'+ this.msg + '</div>' 
        this.$toast = $(tpl)
        $('body').append(this.$toast)
    },
    showToast() {
        var self = this
        this.$toast.fadeIn(300, function() {
            setTimeout( function() {
                self.$toast.fadeOut(300, function() {
                    self.$toast.remove()
                })
            }, self.dismissTime)
        })
    }
}

function Toast (msg, time) {
    return new toast(msg, time)
}

// module.exports 必须是一个对象。这里要暴露一个函数
module.exports.Toast = Toast