// NBA Data
export const nbaTeamStats = [
  {
    id: 1,
    name: "Golden State Warriors",
    wins: 53,
    losses: 29,
    pointsPerGame: 110.5,
    reboundsPerGame: 45.2,
    assistsPerGame: 27.1,
  },
  {
    id: 2,
    name: "Boston Celtics",
    wins: 51,
    losses: 31,
    pointsPerGame: 108.4,
    reboundsPerGame: 46.1,
    assistsPerGame: 24.8,
  },
  {
    id: 3,
    name: "Milwaukee Bucks",
    wins: 51,
    losses: 31,
    pointsPerGame: 115.5,
    reboundsPerGame: 46.7,
    assistsPerGame: 23.9,
  },
  {
    id: 4,
    name: "Phoenix Suns",
    wins: 64,
    losses: 18,
    pointsPerGame: 114.8,
    reboundsPerGame: 45.3,
    assistsPerGame: 27.4,
  },
  {
    id: 5,
    name: "Miami Heat",
    wins: 53,
    losses: 29,
    pointsPerGame: 110.0,
    reboundsPerGame: 43.7,
    assistsPerGame: 25.5,
  },
]

export const nbaPlayerStats = [
  {
    id: 1,
    name: "Stephen Curry",
    team: "Golden State Warriors",
    pointsPerGame: 25.5,
    assistsPerGame: 6.3,
    reboundsPerGame: 5.2,
  },
  {
    id: 2,
    name: "Jayson Tatum",
    team: "Boston Celtics",
    pointsPerGame: 26.9,
    assistsPerGame: 4.4,
    reboundsPerGame: 8.0,
  },
  {
    id: 3,
    name: "Giannis Antetokounmpo",
    team: "Milwaukee Bucks",
    pointsPerGame: 29.9,
    assistsPerGame: 5.8,
    reboundsPerGame: 11.6,
  },
  { id: 4, name: "Devin Booker", team: "Phoenix Suns", pointsPerGame: 26.8, assistsPerGame: 4.8, reboundsPerGame: 5.0 },
  { id: 5, name: "Jimmy Butler", team: "Miami Heat", pointsPerGame: 21.4, assistsPerGame: 5.5, reboundsPerGame: 5.9 },
]

// NFL Data
export const nflTeamStats = [
  { id: 1, name: "Kansas City Chiefs", wins: 14, losses: 3, pointsPerGame: 29.2, yardsPerGame: 413.6, turnovers: 23 },
  { id: 2, name: "Buffalo Bills", wins: 13, losses: 3, pointsPerGame: 28.4, yardsPerGame: 381.9, turnovers: 25 },
  { id: 3, name: "San Francisco 49ers", wins: 13, losses: 4, pointsPerGame: 26.5, yardsPerGame: 365.6, turnovers: 17 },
  { id: 4, name: "Philadelphia Eagles", wins: 14, losses: 3, pointsPerGame: 28.1, yardsPerGame: 389.1, turnovers: 19 },
  { id: 5, name: "Cincinnati Bengals", wins: 12, losses: 4, pointsPerGame: 26.1, yardsPerGame: 360.5, turnovers: 21 },
]

export const nflPlayerStats = [
  { id: 1, name: "Patrick Mahomes", team: "Kansas City Chiefs", passingYards: 5250, touchdowns: 41, interceptions: 12 },
  { id: 2, name: "Josh Allen", team: "Buffalo Bills", passingYards: 4283, touchdowns: 35, interceptions: 14 },
  {
    id: 3,
    name: "Christian McCaffrey",
    team: "San Francisco 49ers",
    rushingYards: 1139,
    receptions: 85,
    totalTouchdowns: 13,
  },
  {
    id: 4,
    name: "Jalen Hurts",
    team: "Philadelphia Eagles",
    passingYards: 3701,
    rushingYards: 760,
    totalTouchdowns: 35,
  },
  { id: 5, name: "Joe Burrow", team: "Cincinnati Bengals", passingYards: 4475, touchdowns: 35, interceptions: 12 },
]

// EPL Data
export const eplTeamStats = [
  { id: 1, name: "Manchester City", wins: 29, draws: 5, losses: 4, goalsFor: 94, goalsAgainst: 33, points: 92 },
  { id: 2, name: "Liverpool", wins: 28, draws: 8, losses: 2, goalsFor: 94, goalsAgainst: 26, points: 92 },
  { id: 3, name: "Chelsea", wins: 21, draws: 11, losses: 6, goalsFor: 76, goalsAgainst: 33, points: 74 },
  { id: 4, name: "Tottenham Hotspur", wins: 22, draws: 5, losses: 11, goalsFor: 69, goalsAgainst: 40, points: 71 },
  { id: 5, name: "Arsenal", wins: 22, draws: 3, losses: 13, goalsFor: 61, goalsAgainst: 48, points: 69 },
]

export const eplPlayerStats = [
  { id: 1, name: "Mohamed Salah", team: "Liverpool", goals: 23, assists: 13, shotsPerGame: 4.1 },
  { id: 2, name: "Kevin De Bruyne", team: "Manchester City", goals: 15, assists: 8, keyPassesPerGame: 3.1 },
  { id: 3, name: "Harry Kane", team: "Tottenham Hotspur", goals: 17, assists: 9, shotsPerGame: 3.5 },
  { id: 4, name: "Mason Mount", team: "Chelsea", goals: 11, assists: 10, keyPassesPerGame: 2.5 },
  { id: 5, name: "Bukayo Saka", team: "Arsenal", goals: 11, assists: 7, dribblesPer90: 2.1 },
]
