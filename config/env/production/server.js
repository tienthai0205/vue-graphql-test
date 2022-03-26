module.exports = ({ env }) => ({
  url: "https://tranquil-tundra-41949.herokuapp.com/",
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["62789a7dc3da6bd644232e0998981f93e4ae070b68a2602b5acc7d36cd9c6aa9944b4038de6bd47796e2c3e92e39234e20636fb7ec6b6b405baa7da359f96b3afcb530dfdc7a6f02cdbb7b2c9eb05e8e93d39b48371b692dddd2119b8e0f552c81977c74c8e8ff7cfa7655ca7d07eef41952612fa1f14562612059660ee3351e"]),
  },
});
