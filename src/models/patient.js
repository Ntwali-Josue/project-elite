const patient = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
      Patientname: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    });

    Patient.associate = models => {
    Patient.hasMany(models.Insurance,{ onDelete: 'CASCADE' });
  };
   
    return Patient;
  };
   
  export default patient;