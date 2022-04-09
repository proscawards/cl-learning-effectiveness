interface Ministage {
    AFHCount: number,
    BestTimeinSec: number,
    FailedAttempt: number,
    SuccessAttempt: number,
    TipsFound: number,
    TotalAttempt: number,
    TotalTimeSpent: number,
    ZeroErrorForSuccess: number
}

interface Stage {
    BestTimeinSec: number,
    Completion: Boolean,
    Ministage1: Ministage,
    Ministage2: Ministage,
    Ministage3: Ministage,
    NoOfPlay: number,
    NoOfPlayAB: number,
    NoOfRestart: number
}

interface StoryMode {
    Antarticium1: Stage,
    Terrarium1: Stage
}

interface Achievement {
    achievement1: Boolean,
    achievement1UnlockedDate: string,
    achievement2: Boolean,
    achievement2UnlockedDate: string,
    achievement3: Boolean,
    achievement3UnlockedDate: string,
    achievement4: Boolean,
    achievement4UnlockedDate: string,
    achievement5: Boolean,
    achievement5UnlockedDate: string,
    achievement6: Boolean,
    achievement6UnlockedDate: string
}

interface Telescopes {
    telescope1: Boolean,
    telescope2: Boolean,
    telescope3: Boolean,
    telescope4: Boolean,
    telescope5: Boolean,
    telescope6: Boolean,
    telescope7: Boolean
}

export interface UserData {
    OverallPercent: number,
    StoryMode: StoryMode,
    achievementUnlocked: Achievement,
    currentCharacter: string,
    currentCharacterID: number,
    joinedDate: string,
    lastOnline: string,
    telescopes: Telescopes,
    totalAFHCount: number,
    totalScore: number,
    totalTelescopeClicked: number,
    totalTimeSpent: number,
    tutorialCompleted: Boolean,
    userEmail: string,
    userName: string
}

export interface ExtractedData {
    userName: string,
    T1M1SuccessAttempts: number,
    T1M2SuccessAttempts: number,
    T1M3SuccessAttempts: number,
    A1M1SuccessAttempts: number,
    A1M2SuccessAttempts: number,
    A1M3SuccessAttempts: number,
    T1M1AFHCount: number,
    T1M2AFHCount: number,
    T1M3AFHCount: number,
    A1M1AFHCount: number,
    A1M2AFHCount: number,
    A1M3AFHCount: number,
    T1M1TipsFound: number,
    T1M2TipsFound: number,
    T1M3TipsFound: number,
    A1M1TipsFound: number,
    A1M2TipsFound: number,
    A1M3TipsFound: number
}