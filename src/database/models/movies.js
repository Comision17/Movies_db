const { Model } = require('sequelize')

module.exports = ( sequelize, DataTypes ) => {

    class Movies extends Model {}

    Movies.init({
        title: DataTypes.STRING,
        rating: DataTypes.DECIMAL,
        awards: DataTypes.INTEGER,
        release_date: DataTypes.DATE,
        length: DataTypes.INTEGER,
        genre_id: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    },{
        sequelize,
        modelName: 'Movies',
    })

    return Movies
}