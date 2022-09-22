const { Model } = require('sequelize')

module.exports = ( sequelize, DataTypes ) => {

    class Genre extends Model {}

    Genre.init({
        name: DataTypes.STRING,
        ranking: DataTypes.DECIMAL,
        active: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    },{
        sequelize,
        modelName: 'Genre',
    })

    return Genre
}