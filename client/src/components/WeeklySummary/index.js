import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container, Stack , Row, Col} from 'react-bootstrap'  

import TeamSummary from './TeamSummary';
import Card from './Card';


export default function WeeklySummary() {
  
  // ! State variable for weekNum (default to most recent week)
  // ! Apollo query for 'teamsThisWeek'
  const teamsThisWeek = [
    {
      name: "Tid, Richie, and a DUI",
      actualLineup: [
        {
          "SLOT": "QB",
          "PLAYER": "Kyler Murray",
          "TEAM": "Ari",
          "POS": "QB",
          "OPP": "KC",
          "STATUS": "L 21-44",
          "PROJ": "24.9",
          "FPTS": "24.55"
        },
        {
          "SLOT": "RB",
          "PLAYER": "James Conner",
          "TEAM": "Ari",
          "POS": "RB",
          "OPP": "KC",
          "STATUS": "L 21-44",
          "PROJ": "15.4",
          "FPTS": "14.0"
        },
        {
          "SLOT": "RB",
          "PLAYER": "Dameon Pierce",
          "TEAM": "Hou",
          "POS": "RB",
          "OPP": "Ind",
          "STATUS": "T 20-20",
          "PROJ": "10.0",
          "FPTS": "4.4"
        },
        {
          "SLOT": "WR",
          "PLAYER": "Ja'Marr Chase",
          "TEAM": "Cin",
          "POS": "WR",
          "OPP": "Pit",
          "STATUS": "L 20-23",
          "PROJ": "14.4",
          "FPTS": "23.9"
        },
        {
          "SLOT": "WR",
          "PLAYER": "Michael Pittman Jr.",
          "TEAM": "Ind",
          "POS": "WR",
          "OPP": "@Hou",
          "STATUS": "T 20-20",
          "PROJ": "12.2",
          "FPTS": "22.6"
        },
        {
          "SLOT": "TE",
          "PLAYER": "Dallas Goedert",
          "TEAM": "Phi",
          "POS": "TE",
          "OPP": "@Det",
          "STATUS": "W 38-35",
          "PROJ": "8.2",
          "FPTS": "7.5"
        },
        {
          "SLOT": "FLEX",
          "PLAYER": "Rashaad Penny",
          "TEAM": "Sea",
          "POS": "RB",
          "OPP": "Den",
          "STATUS": "W 17-16",
          "PROJ": "12.3",
          "FPTS": "7.7"
        },
        {
          "SLOT": "D/ST",
          "PLAYER": "Eagles D/ST",
          "TEAM": "Phi",
          "POS": "D/ST",
          "OPP": "@Det",
          "STATUS": "W 38-35",
          "PROJ": "9.4",
          "FPTS": "7.0"
        },
        {
          "SLOT": "K",
          "PLAYER": "Greg Joseph",
          "TEAM": "Min",
          "POS": "K",
          "OPP": "GB",
          "STATUS": "W 23-7",
          "PROJ": "8.0",
          "FPTS": "13.0"
        }
      ],
      optimalLineup:[
        {
          "SLOT": "QB",
          "PLAYER": "Kyler Murray",
          "TEAM": "Ari",
          "POS": "QB",
          "OPP": "KC",
          "STATUS": "L 21-44",
          "PROJ": "24.9",
          "FPTS": "24.55"
        },
        {
          "SLOT": "RB",
          "PLAYER": "James Conner",
          "TEAM": "Ari",
          "POS": "RB",
          "OPP": "KC",
          "STATUS": "L 21-44",
          "PROJ": "15.4",
          "FPTS": "14.0"
        },
        {
          "SLOT": "FLEX",
          "PLAYER": "Rashaad Penny",
          "TEAM": "Sea",
          "POS": "RB",
          "OPP": "Den",
          "STATUS": "W 17-16",
          "PROJ": "12.3",
          "FPTS": "7.7"
        },
        {
          "SLOT": "WR",
          "PLAYER": "Ja'Marr Chase",
          "TEAM": "Cin",
          "POS": "WR",
          "OPP": "Pit",
          "STATUS": "L 20-23",
          "PROJ": "14.4",
          "FPTS": "23.9"
        },
        {
          "SLOT": "WR",
          "PLAYER": "Michael Pittman Jr.",
          "TEAM": "Ind",
          "POS": "WR",
          "OPP": "@Hou",
          "STATUS": "T 20-20",
          "PROJ": "12.2",
          "FPTS": "22.6"
        },
        {
          "SLOT": "TE",
          "PLAYER": "Dallas Goedert",
          "TEAM": "Phi",
          "POS": "TE",
          "OPP": "@Det",
          "STATUS": "W 38-35",
          "PROJ": "8.2",
          "FPTS": "7.5"
        },
        {
          "SLOT": "FLEX",
          "PLAYER": "Amon-Ra St. Brown",
          "TEAM": "Det",
          "POS": "WR",
          "OPP": "Phi",
          "STATUS": "L 35-38",
          "PROJ": "10.6",
          "FPTS": "16.4"
        },
        {
          "SLOT": "D/ST",
          "PLAYER": "Eagles D/ST",
          "TEAM": "Phi",
          "POS": "D/ST",
          "OPP": "@Det",
          "STATUS": "W 38-35",
          "PROJ": "9.4",
          "FPTS": "7.0"
        },
        {
          "SLOT": "K",
          "PLAYER": "Greg Joseph",
          "TEAM": "Min",
          "POS": "K",
          "OPP": "GB",
          "STATUS": "W 23-7",
          "PROJ": "8.0",
          "FPTS": "13.0"
        }
      ],
      actualFPTS: 124.65,
      optimalFPTS: 136.65,
      deficit: 12
    },
    {
      name: 'Gru Gru Smith-Gruster',
      actualLineup: [
        {
          "SLOT": "QB",
          "PLAYER": "Russell Wilson",
          "TEAM": "Den",
          "POS": "QB",
          "OPP": "@Sea",
          "STATUS": "L 16-17",
          "PROJ": "23.6",
          "FPTS": "22.2"
        },
        {
          "SLOT": "RB",
          "PLAYER": "Alvin Kamara",
          "TEAM": "NO",
          "POS": "RB",
          "OPP": "@Atl",
          "STATUS": "W 27-26",
          "PROJ": "16.8",
          "FPTS": "6.1"
        },
        {
          "SLOT": "RB",
          "PLAYER": "Leonard Fournette",
          "TEAM": "TB",
          "POS": "RB",
          "OPP": "@Dal",
          "STATUS": "W 19-3",
          "PROJ": "15.1",
          "FPTS": "14.7"
        },
        {
          "SLOT": "WR",
          "PLAYER": "Terry McLaurin",
          "TEAM": "Wsh",
          "POS": "WR",
          "OPP": "Jax",
          "STATUS": "W 28-22",
          "PROJ": "11.8",
          "FPTS": "12.8"
        },
        {
          "SLOT": "WR",
          "PLAYER": "Chris Godwin",
          "TEAM": "TB",
          "POS": "WR",
          "OPP": "@Dal",
          "STATUS": "W 19-3",
          "PROJ": "8.4",
          "FPTS": "5.0"
        },
        {
          "SLOT": "TE",
          "PLAYER": "Darren Waller",
          "TEAM": "LV",
          "POS": "TE",
          "OPP": "@LAC",
          "STATUS": "L 19-24",
          "PROJ": "9.7",
          "FPTS": "9.9"
        },
        {
          "SLOT": "FLEX",
          "PLAYER": "JuJu Smith-Schuster",
          "TEAM": "KC",
          "POS": "WR",
          "OPP": "@Ari",
          "STATUS": "W 44-21",
          "PROJ": "10.1",
          "FPTS": "8.9"
        },
        {
          "SLOT": "D/ST",
          "PLAYER": "Bengals D/ST",
          "TEAM": "Cin",
          "POS": "D/ST",
          "OPP": "Pit",
          "STATUS": "L 20-23",
          "PROJ": "10.9",
          "FPTS": "7.0"
        },
        {
          "SLOT": "K",
          "PLAYER": "Tyler Bass",
          "TEAM": "Buf",
          "POS": "K",
          "OPP": "@LAR",
          "STATUS": "W 31-10",
          "PROJ": "7.5",
          "FPTS": "8.0"
        }
      ],
      optimalLineup:[
        {
          "SLOT": "QB",
          "PLAYER": "Russell Wilson",
          "TEAM": "Den",
          "POS": "QB",
          "OPP": "@Sea",
          "STATUS": "L 16-17",
          "PROJ": "23.6",
          "FPTS": "22.2"
        },
        {
          "SLOT": "RB",
          "PLAYER": "Leonard Fournette",
          "TEAM": "TB",
          "POS": "RB",
          "OPP": "@Dal",
          "STATUS": "W 19-3",
          "PROJ": "15.1",
          "FPTS": "14.7"
        },
        {
          "SLOT": "RB",
          "PLAYER": "Darrell Henderson Jr.",
          "TEAM": "LAR",
          "POS": "RB",
          "OPP": "Buf",
          "STATUS": "L 10-31",
          "PROJ": "7.1",
          "FPTS": "9.8"
        },
        {
          "SLOT": "WR",
          "PLAYER": "Terry McLaurin",
          "TEAM": "Wsh",
          "POS": "WR",
          "OPP": "Jax",
          "STATUS": "W 28-22",
          "PROJ": "11.8",
          "FPTS": "12.8"
        },
        {
          "SLOT": "WR",
          "PLAYER": "Julio Jones",
          "TEAM": "TB",
          "POS": "WR",
          "OPP": "@Dal",
          "STATUS": "W 19-3",
          "PROJ": "8.0",
          "FPTS": "10.1"
        },
        {
          "SLOT": "TE",
          "PLAYER": "Darren Waller",
          "TEAM": "LV",
          "POS": "TE",
          "OPP": "@LAC",
          "STATUS": "L 19-24",
          "PROJ": "9.7",
          "FPTS": "9.9"
        },
        {
          "SLOT": "FLEX",
          "PLAYER": "JuJu Smith-Schuster",
          "TEAM": "KC",
          "POS": "WR",
          "OPP": "@Ari",
          "STATUS": "W 44-21",
          "PROJ": "10.1",
          "FPTS": "8.9"
        },
        {
          "SLOT": "D/ST",
          "PLAYER": "Bengals D/ST",
          "TEAM": "Cin",
          "POS": "D/ST",
          "OPP": "Pit",
          "STATUS": "L 20-23",
          "PROJ": "10.9",
          "FPTS": "7.0"
        },
        {
          "SLOT": "K",
          "PLAYER": "Tyler Bass",
          "TEAM": "Buf",
          "POS": "K",
          "OPP": "@LAR",
          "STATUS": "W 31-10",
          "PROJ": "7.5",
          "FPTS": "8.0"
        }
      ],
      actualFPTS: 124.65,
      optimalFPTS: 136.65,
      deficit: 12
    }
  ]

  const styles = {
    stack: {
      display: 'flex',
      flexWrap: 'wrap',
      justifySelf: 'center'
    },
    summaryRow: {
      margin: '1rem',
      alignItems: 'flex-start',
      display: 'flex',
      flexWrap: 'wrap'
    },
    cardsRow: {
      display: 'flex',
      flexDirection: 'column'
    },
    divider: {
      borderBottom: '3px solid black',
      marginTop: '1.5rem',
      marginBottom: '1.5rem'
    },
    col: {
      justifyContent: 'center'
    }
  }

  return (
    <>
      {/* Create a row for each team */}
      {teamsThisWeek.map((team, i)=>
        <Stack key={i} style={styles.stack}>
          <Row className='d-flex justify-content-center '>
            <Col xs={9} style={styles.divider}>
            </Col>
          </Row>
          <Row style={styles.summaryRow}>
            <Col xs={4}>
              <TeamSummary
                name={team.name}
                actualFPTS={team.actualFPTS}
                optimalFPTS={team.optimalFPTS}
                deficit={team.deficit}
              />
            </Col>
            <Col xs={8} style={styles.col}>
              <Row style={styles.cardsRow}>
                <Card lineup={team.actualLineup} />
                <Card lineup={team.actualLineup} />
              </Row>
            </Col>
          </Row>
        </Stack>
      )}
    </>
  );
}