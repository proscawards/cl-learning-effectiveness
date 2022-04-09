"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chemistlabue_export_json_1 = __importDefault(require("../src/chemistlabue-export.json"));
const objects_to_csv_1 = __importDefault(require("objects-to-csv"));
class Extractor {
    constructor() {
        this.data = chemistlabue_export_json_1.default;
        this.userData = [];
        this.exData = [];
    }
    extractData() {
        this.userData = Object.values(this.data.users);
        this.userData.forEach((data) => {
            //both of these userNames are actually under alpha-testing
            if (data.userName != "proscawards" &&
                data.userName != "ChemistLab") {
                let arr = {
                    userName: data.userName,
                    T1M1SuccessAttempts: data.StoryMode.Terrarium1.Ministage1.SuccessAttempt,
                    T1M2SuccessAttempts: data.StoryMode.Terrarium1.Ministage2.SuccessAttempt,
                    T1M3SuccessAttempts: data.StoryMode.Terrarium1.Ministage3.SuccessAttempt,
                    A1M1SuccessAttempts: data.StoryMode.Antarticium1.Ministage1.SuccessAttempt,
                    A1M2SuccessAttempts: data.StoryMode.Antarticium1.Ministage2.SuccessAttempt,
                    A1M3SuccessAttempts: data.StoryMode.Antarticium1.Ministage3.SuccessAttempt,
                    T1M1AFHCount: data.StoryMode.Terrarium1.Ministage1.AFHCount,
                    T1M2AFHCount: data.StoryMode.Terrarium1.Ministage2.AFHCount,
                    T1M3AFHCount: data.StoryMode.Terrarium1.Ministage3.AFHCount,
                    A1M1AFHCount: data.StoryMode.Antarticium1.Ministage1.AFHCount,
                    A1M2AFHCount: data.StoryMode.Antarticium1.Ministage1.AFHCount,
                    A1M3AFHCount: data.StoryMode.Antarticium1.Ministage1.AFHCount,
                    T1M1TipsFound: data.StoryMode.Terrarium1.Ministage1.TipsFound,
                    T1M2TipsFound: data.StoryMode.Terrarium1.Ministage2.TipsFound,
                    T1M3TipsFound: data.StoryMode.Terrarium1.Ministage3.TipsFound,
                    A1M1TipsFound: data.StoryMode.Antarticium1.Ministage1.TipsFound,
                    A1M2TipsFound: data.StoryMode.Antarticium1.Ministage2.TipsFound,
                    A1M3TipsFound: data.StoryMode.Antarticium1.Ministage3.TipsFound,
                };
                this.exData.push(arr);
            }
        });
    }
    async toCsv() {
        const csv = new objects_to_csv_1.default(this.exData);
        await csv.toDisk("csv/export.csv");
    }
}
exports.default = Extractor;
