module.exports = function(sequelize, DataTypes) {
    var Tweets = sequelize.define("Tweets", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Tweets.associate = function(models) {
      Tweets.belongsTo(models.Authors, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Tweets;
  };
  