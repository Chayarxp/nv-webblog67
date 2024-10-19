module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
        Planet: DataTypes.STRING,        
        thumbnail: DataTypes.STRING,     
        pictures: DataTypes.STRING,     
        content: DataTypes.TEXT,         
        Size: DataTypes.STRING,           
        Mass: DataTypes.STRING,     
        Gravity: DataTypes.STRING,
        Period: DataTypes.STRING         
    });

    return Blog;
}
