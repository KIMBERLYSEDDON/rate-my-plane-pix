const sequelize = require('../config/connection');
const { Pic } = require('../models');

const picData = require('./picData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const pics = await Pic.bulkCreate(picData, {
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
};

seedDatabase();