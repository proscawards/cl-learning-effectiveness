# ChemistLab Learning Effectiveness
This repository is to perform quantitative analysis on which metric is more effective on assisting user in acquiring Success Attempts.

## Introduction
This is a part of my Final Year Project, where all interaction data from Unreal Engine 4/Firebase Realtime-Database are collected and only selected metrics (Success Attempts/Tips Found/Ask For Help) will be analyzed in this section. This is conducted under Learning Effectiveness in **Section VI: Testing**.

## File Structure
```
.
├── csv                               # Exported csv directory
│   └── export.csv                    # Generated CSV file from index.js
├── lib                               # TypeScript directory
│   ├── api                           # TypeScript interfaces
│   │   ├── Data.ts/Data.js           # Interface for json file
│   └── Extractor.ts/Extractor.js     # To extract data from json file and convert into csv
├── py                                # Python directory        
│   ├── heatmap.png                   # Generated correlation heatmap from learning_effectiveness.ipynb
│   └── learning_effectiveness.ipynb  # To perform quantitative analysis using data mining approach
├── src                               # Data source directory
│   └── chemistlabue-export.json      # Exported data of ChemistLab from Firebase Realtime-Database                      
├── index.ts/index.js                 # Main executable to generate csv
└── ... 
```
## License
© 2021 - 2022 Multimedia University. All Rights Reserved.