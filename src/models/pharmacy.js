const pharmacy = (sequelize, DataTypes) => {
    const Pharmacy = sequelize.define('pharmacy', {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      }
    });
   
    Pharmacy.associate = models => {
      Pharmacy.belongsTo(models.Patient);
    };
   
    return Pharmacy;
  };
   
  export default pharmacy;