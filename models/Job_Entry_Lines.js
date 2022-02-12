const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require();

class Job_Entry_Lines extends Model {

}

Job_Entry_Lines.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        header: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Notes",
        },
        body: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        job_entry_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Job_Entry_Lines'
    },
)

module.exports = Job_Entry_Lines