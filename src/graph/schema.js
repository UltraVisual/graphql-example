const { makeExecutableSchema } = require('graphql-tools');
const getData = require('../util/getData');

const games = getData('games');
const member = getData('member');
const promotions = getData('promotions');

const typeDefs = `
    type Query { 
        games: [Game],
        gameByBootName(name: String!): Game,
        member: Member,
        promotions: [Promotion],
        promosByBucket(bucket: String): [Promotion]
    }
    type Promotion {
        bucket: String,
        title: String,
        path: String,
        image: String,
        url: String,
    }
    type ImageSize {
        tall: Boolean,
        wide: Boolean
    }
    type Game { 
        name: String, 
        title: String, 
        gameSkin: String, 
        size: ImageSize ,
        demoUrl: String,
        realUrl: String
    },
    type Member {
        memberId: Int,
        username: String,
        memberFirstName: String,
        balance: String,
        points: String,
        memberCountryCode: String,
        memberCurrencyId: Int,
        emailVerified: String
    }
`;

const resolvers = {
    Query: { 
        games: () => games.games,
        gameByBootName: (root, { name }) => games.games.find(game => game.name === name),
        member: () => member,
        promotions: () => promotions.promotions,
        promosByBucket: (root, { bucket }) => promotions.promotions.filter(promo => promo.bucket == bucket)
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;
