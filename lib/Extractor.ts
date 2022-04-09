import jsonData from "../src/chemistlabue-export.json";
import { UserData, ExtractedData } from "./api/Data";
import ObjectsToCsv from "objects-to-csv";
 
export default class Extractor {

    private data: any = jsonData;
    private userData: UserData[] = [];
    private exData: any[] = [];

    constructor(){
    }

    extractData(){
        this.userData = Object.values(this.data.users);
        this.userData.forEach((data) => {
            //both of these userNames are actually under alpha-testing
            if (data.userName != "proscawards" &&
                data.userName != "ChemistLab"){
                    let arr: ExtractedData = {
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
                    }
                    this.exData.push(arr);
                }

        })
    }

    async toCsv(){
        const csv = new ObjectsToCsv(this.exData);
        await csv.toDisk("csv/export.csv");
    }
    
}
