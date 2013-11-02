App.Position = DS.Model.extend({
    lat: attr('number'),
    long: attr('number'),
    timestamp: attr('date')
});

App.Position.FIXTURES = [
    {
        id: 1,
        lat: 53,2218,
        long: 6,5544,
        timestap: null
    },
    {
        id: 2,
        lat: 53,2219,
        long: 6,5545,
        timestap: null
    },
    {
        id: 3,
        lat: 53,2217,
        long: 6,5543,
        timestap: null
    },
    {
        id: 4,
        lat: 53,2220,
        long: 6,5542,
        timestap: null
    }
]