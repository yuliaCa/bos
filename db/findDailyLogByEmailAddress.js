const connection = require("./connection.js");
const DailyLog = require("./models/dailyLogSchema.js");


connection.on('open', () => {

    console.log("Connected");

    let EmailAddress = process.argv[2];

    const loadDocument = async EmailAddress => {
        const result = await DailyLog.find({ userEmailAddress: EmailAddress.toLowerCase() }).exec();

        if (result == "") {
            console.log("no record");
        } else {
            console.log("fetched: ", result);
        }

    }

    loadDocument(EmailAddress)
        .catch(error => console.log(error))
        .finally(() => process.exit());

});