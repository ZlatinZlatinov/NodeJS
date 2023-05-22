function erorParser(eror) {
    if (Array.isArray(eror)) {
        return eror.map((e) => e.msg).join('\n');
    } else if (eror.name == 'ValidationError') {
        return (Object.values(eror.erors)
        .map((x) => x.message)
        .join('\n'));
    } else {
        return eror.message;
    }
}

module.exports = { erorParser };