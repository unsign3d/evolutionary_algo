module.exports = {
    "extends": "standard",
    "plugins": ['jest', 'babel'],
    "env": {
        "jest": true,
    },
    "rules": {
        "babel/new-cap": 1,
        "babel/camelcase": 1,
        "babel/no-invalid-this": 1,
        "babel/no-unused-expressions": 1,
        "babel/valid-typeof": 1,
      }
};