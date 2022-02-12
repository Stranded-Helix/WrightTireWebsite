const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require();

class Ticket extends Model {

}

Ticket.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        key_tag: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        invoice_number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references : {
                model: 'customer',
                key: 'id'
            }
        }
    },
    {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Ticket'
    },
)

module.exports = Ticket