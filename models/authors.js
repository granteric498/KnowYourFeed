module.exports = function(sequelize, DataTypes){
    var Authors = sequelize.define("Authors",{
        name: DataTypes.STRING
    });
    Authors.associate = function(models) {
        // Authors.hasMany(models.Port,{
        //     onDelete: "cascade"
        // });
    };
    return Authors;
};