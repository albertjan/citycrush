App.User = DS.Model.extend({
    email: DS.attr('string'),
    name: DS.attr('string'),
    avatar: DS.attr('string'),
    currentPosition: DS.belongsTo('position'),
    trace: DS.hasMany('position'),
    objectives: DS.hasMany('objective'),
    coins: DS.attr('number'),
    challengesLost: DS.hasMany('challenges'),
    challengesWon: DS.hasMany('challenges')
});

App.User.FIXTURES = [
    {
        id: 1,
        email: "user1@citycrush.co",
        name: "user1",
        avatar: "/images/avatars/user1.png",
        currentPosition: 3,
        trace: [3],
        objectives: [],
        coins: 45,
        challengesLost: [],
        challengesWon: []
    },
    {
        id: 2,
        email: "user2@citycrush.co",
        name: "user2",
        avatar: "/images/avatars/user2.png",
        currentPosition: 4,
        trace: [4],
        objectives: [],
        coins: 20,
        challengesLost: [],
        challengesWon: []
    }
];