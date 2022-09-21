const { Model } = require('sequelize')

module.exports = ( sequelize, DataTypes ) => {

    class Actors extends Model {}

    Actors.init({
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        rating: DataTypes.DECIMAL,
        favorite_movie_id: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    },{
        sequelize,
        modelName: 'Actors',
    })

    return Actors
}