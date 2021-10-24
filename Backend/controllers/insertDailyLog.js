const connection = require("../connection.js");
const DailyLog = require("../models/dailyLogSchema.js");


connection.on('open', () => {

    console.log("Connected");

    // let newDailyLog = new DailyLog({
    //     userEmailAddress: 'emailAddressTWO@yahoo.com',
    //     objMorningRoutineLog: [{
    //             productName: "Product One",
    //             description: "Description of the product",
    //             category: "Category ONE"
    //         },
    //         {
    //             productName: "Product TWO",
    //             description: "Description of the producttwo",
    //             category: "Category TWO"
    //         }
    //     ]
    // });

    const saveDocument = async dailyLogDocument => {
        await dailyLogDocument.save();
        console.log("log has been added.");

        const result = await DailyLog.find({}).exec();

        console.log("fetched: ", result);


    }

    saveDocument(newDailyLog)
        .catch(error => console.log(error));
    //.finally(() => process.exit());

});