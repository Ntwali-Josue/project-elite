const insurance = (sequelize, DataTypes) => {
    const Insurance = sequelize.define('insurance', {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      }
    });
   
    Insurance.associate = models => {
      Insurance.belongsTo(models.Patient);
    };
   
    return Insurance;
  };
   
  export default insurance;