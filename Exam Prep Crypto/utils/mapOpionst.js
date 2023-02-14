function mapOpitions(method) {
    //const options = ['crypto-wallet', 'credit-card', 'debit-card', 'paypal']
    const options = [{ msg: 'crypto-wallet', selected: false }, { msg: 'credit-card', selected: false }, { msg: 'ebit-card', selected: false }, { msg: 'paypal', selected: false }]
    return options.map((obj) => {
        if (obj.msg == method) {
            obj.selected = true;
            return obj;
        }
    });
} 

module.exports = {
    mapOpitions
}