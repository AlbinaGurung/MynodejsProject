module.exports = (sequelize, DataTypes) => {
    const task = sequelize.define("task", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull : false
      },
      duedate: {
        type: DataTypes.STRING,
        allowNull:false
      },
      imageUrl:{
        type : DataTypes.STRING,
        allowNull : true
      }
    });
    return task;
  };