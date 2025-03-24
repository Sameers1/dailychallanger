import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Stack, Chip, Badge, LinearProgress, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HistoryIcon from '@mui/icons-material/History';
import StarIcon from '@mui/icons-material/Star';

const challenges = [
  { id: 1, text: 'Write with your non-dominant hand today', type: 'creative', difficulty: 'medium' },
  { id: 2, text: 'Do 20 jumping jacks every hour', type: 'physical', difficulty: 'easy' },
  { id: 3, text: 'Learn 5 new words in a foreign language', type: 'mental', difficulty: 'medium' },
  { id: 4, text: 'Drink water every hour', type: 'health', difficulty: 'easy' },
  { id: 5, text: 'Meditate for 10 minutes', type: 'mental', difficulty: 'easy' },
  { id: 6, text: 'Draw a self-portrait', type: 'creative', difficulty: 'medium' },
  { id: 7, text: 'Write a short story in 15 minutes', type: 'creative', difficulty: 'medium' },
  { id: 8, text: 'Do 10 push-ups', type: 'physical', difficulty: 'medium' },
  { id: 9, text: 'Practice mindful breathing for 5 minutes', type: 'mental', difficulty: 'easy' },
  { id: 10, text: 'Stretch for 10 minutes', type: 'physical', difficulty: 'easy' }
];

const categories = ['all', 'creative', 'physical', 'mental', 'health'];

const achievements = [
  { name: 'Beginner', requiredPoints: 100 },
  { name: 'Intermediate', requiredPoints: 500 },
  { name: 'Advanced', requiredPoints: 1000 },
  { name: 'Master', requiredPoints: 5000 }
];

const motivationalQuotes = [
  "Every day is a new beginning.",
  "Small steps lead to big changes.",
  "Progress is progress, no matter how small.",
  "You are stronger than you think."
];

function App() {
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem('challengeStreak');
    return saved ? parseInt(saved) : 0;
  });
  const [lastCompletedDate, setLastCompletedDate] = useState(() => {
    return localStorage.getItem('lastCompletedDate') || '';
  });
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem('points');
    return saved ? parseInt(saved) : 0;
  });
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('history');
    return saved ? JSON.parse(saved) : [];
  });
  const [quote, setQuote] = useState(() => {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  });
  const [badges, setBadges] = useState(() => {
    const saved = localStorage.getItem('badges');
    return saved ? JSON.parse(saved) : [];
  });
  const [weeklyGoal, setWeeklyGoal] = useState(() => {
    const saved = localStorage.getItem('weeklyGoal');
    return saved ? parseInt(saved) : 0;
  });
  const [monthlyGoal, setMonthlyGoal] = useState(() => {
    const saved = localStorage.getItem('monthlyGoal');
    return saved ? parseInt(saved) : 0;
  });
  const [difficulty, setDifficulty] = useState(() => {
    const saved = localStorage.getItem('difficulty');
    return saved || 'normal';
  });

  const getRandomChallenge = () => {
    const filteredChallenges = challenges.filter(challenge => 
      selectedCategory === 'all' || challenge.type === selectedCategory
    );
    const randomIndex = Math.floor(Math.random() * filteredChallenges.length);
    return filteredChallenges[randomIndex];
  };

  useEffect(() => {
    setCurrentChallenge(getRandomChallenge());
  }, [selectedCategory]);

  useEffect(() => {
    localStorage.setItem('challengeStreak', streak.toString());
    localStorage.setItem('lastCompletedDate', lastCompletedDate);
  }, [streak, lastCompletedDate]);

  const handleNewChallenge = () => {
    setCurrentChallenge(getRandomChallenge());
    setCompleted(false);
  };

  const handleComplete = () => {
    if (completed) return;
    
    const today = new Date().toLocaleDateString();
    const pointsToAdd = currentChallenge.difficulty === 'easy' ? 10 : 
                       currentChallenge.difficulty === 'medium' ? 20 : 30;

    // Update points and goals
    const newPoints = points + pointsToAdd;
    setPoints(newPoints);
    setWeeklyGoal(prev => prev + pointsToAdd);
    setMonthlyGoal(prev => prev + pointsToAdd);
    localStorage.setItem('points', newPoints.toString());
    localStorage.setItem('weeklyGoal', (weeklyGoal + pointsToAdd).toString());
    localStorage.setItem('monthlyGoal', (monthlyGoal + pointsToAdd).toString());

    // Add to history
    const historyItem = {
      challenge: currentChallenge.text,
      date: today,
      points: pointsToAdd
    };
    const newHistory = [...history, historyItem];
    setHistory(newHistory);
    localStorage.setItem('history', JSON.stringify(newHistory));

    // Check for achievements and badges
    achievements.forEach(achievement => {
      if (newPoints >= achievement.requiredPoints && 
          !history.some(h => h.achievement === achievement.name)) {
        const achievementItem = {
          challenge: `Achievement Unlocked: ${achievement.name}`,
          date: today,
          points: 0,
          achievement: achievement.name
        };
        const updatedHistory = [...newHistory, achievementItem];
        setHistory(updatedHistory);
        localStorage.setItem('history', JSON.stringify(updatedHistory));

        // Add badge
        const newBadge = {
          name: achievement.name,
          date: today
        };
        const updatedBadges = [...badges, newBadge];
        setBadges(updatedBadges);
        localStorage.setItem('badges', JSON.stringify(updatedBadges));
      }
    });

    // Adjust difficulty based on performance
    if (streak > 7 && difficulty === 'normal') {
      setDifficulty('hard');
      localStorage.setItem('difficulty', 'hard');
    }

    // Update streak only if it's a new day
    if (today !== lastCompletedDate) {
      setStreak(prev => prev + 1);
      setLastCompletedDate(today);
      localStorage.setItem('challengeStreak', (streak + 1).toString());
      localStorage.setItem('lastCompletedDate', today);
    }

    setCompleted(true);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Daily Challenge Generator
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {quote}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <Badge badgeContent={streak} color="primary">
            <Chip
              icon={<LocalFireDepartmentIcon />}
              label="Streak"
              color="primary"
              variant="outlined"
            />
          </Badge>
          <Badge badgeContent={points} color="secondary">
            <Chip
              icon={<StarIcon />}
              label="Points"
              color="secondary"
              variant="outlined"
            />
          </Badge>
        </Stack>

        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 4 }}>
          {categories.map(category => (
            <Chip
              key={category}
              label={category.charAt(0).toUpperCase() + category.slice(1)}
              onClick={() => handleCategoryChange(category)}
              color={selectedCategory === category ? 'primary' : 'default'}
              variant={selectedCategory === category ? 'filled' : 'outlined'}
            />
          ))}
        </Stack>

        {currentChallenge && (
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Today's Challenge
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {currentChallenge.text}
              </Typography>
              <Stack direction="row" spacing={1} justifyContent="center">
                <Chip
                  label={currentChallenge.type}
                  color="primary"
                  size="small"
                />
                <Chip
                  label={currentChallenge.difficulty}
                  color="secondary"
                  size="small"
                />
              </Stack>
            </CardContent>
          </Card>
        )}

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleNewChallenge}
            startIcon={<RefreshIcon />}
          >
            New Challenge
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleComplete}
            disabled={completed}
            startIcon={<CheckCircleIcon />}
          >
            Complete
          </Button>
          <Button
            variant="outlined"
            onClick={() => setShowHistory(true)}
            startIcon={<HistoryIcon />}
          >
            History
          </Button>
        </Stack>
      </Box>

      <Dialog open={showHistory} onClose={() => setShowHistory(false)}>
        <DialogTitle>Challenge History</DialogTitle>
        <DialogContent>
          <List>
            {history.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={item.challenge}
                  secondary={`${item.date} - Points: ${item.points}`}
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default App;