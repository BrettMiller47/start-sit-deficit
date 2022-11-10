import * as fs from 'fs';
import { getTeams } from './utils/getTeams.js';

// Step 1) Get the teams
const seasonId = '2022';
const leagueId = 84532749;
let teams = await getTeams(leagueId, seasonId);

// Step 2) Sort 'teamsTotal' by 'totalDeficit'
let sorted = teams.sort((a, b) => (a.totalDeficit > b.totalDeficit) ? 1 : -1);

// Step 3) Write the sorted teams to JSON format
let data = JSON.stringify(sorted, null, 2);

fs.writeFile('sorted.json', data, err => {
  if (err) {
    throw err
  }
  console.log('JSON data is saved.')
})