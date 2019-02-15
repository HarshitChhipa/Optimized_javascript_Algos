groupByPropertyStages(properties) {
    this.Configured = properties.reduce((r, a) => {
        r[a.key] = [...r[a.key] || [], a];
        return r;
    }, {});
    // let groupBy = function (xs, key) {
    //     return xs.reduce(function (rv, x) {
    //         (rv[x[key]] = rv[x[key]] || []).push(x);
    //         return rv;
    //     }, {});
    // };
}
