let jokes = [
  {
    id: '1',
    setup: "Why don't scientists trust atoms?",
    punchline: 'Because they make up everything!',
    category: 'Science',
    author: 'John Doe',
    rating: 4.5,
    totalRatings: 10,
    createdAt: '2024-10-24T12:00:00Z',
  },
  {
    id: '2',
    setup: 'Why did the chicken join a band?',
    punchline: 'Because it had the drumsticks!',
    category: 'Animals',
    author: 'Jane Smith',
    rating: 4.7,
    totalRatings: 8,
    createdAt: '2024-10-23T14:00:00Z',
  },
  {
    id: '3',
    setup: 'What do you call fake spaghetti?',
    punchline: 'An impasta!',
    category: 'Food',
    author: 'Chris Johnson',
    rating: 4.8,
    totalRatings: 12,
    createdAt: '2024-10-22T09:00:00Z',
  },
  {
    id: '4',
    setup: "Why don't skeletons fight each other?",
    punchline: "They don't have the guts!",
    category: 'Halloween',
    author: 'Alice Brown',
    rating: 4.6,
    totalRatings: 9,
    createdAt: '2024-10-21T13:00:00Z',
  },
  {
    id: '5',
    setup: "Why can't your nose be 12 inches long?",
    punchline: 'Because then it would be a foot!',
    category: 'Puns',
    author: 'David Lee',
    rating: 4.9,
    totalRatings: 15,
    createdAt: '2024-10-20T15:00:00Z',
  },
];

let categories = [
  {
    id: '1',
    name: 'Science',
  },
  {
    id: '2',
    name: 'Animals',
  },
  {
    id: '3',
    name: 'Food',
  },
  {
    id: '4',
    name: 'Halloween',
  },
  {
    id: '5',
    name: 'Puns',
  },
];

let users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    createdAt: '2024-10-20T10:00:00Z',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    createdAt: '2024-10-21T11:30:00Z',
  },
  {
    id: '3',
    name: 'Chris Johnson',
    email: 'chris.johnson@example.com',
    createdAt: '2024-10-22T08:30:00Z',
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    createdAt: '2024-10-21T12:45:00Z',
  },
  {
    id: '5',
    name: 'David Lee',
    email: 'david.lee@example.com',
    createdAt: '2024-10-20T14:00:00Z',
  },
];

let ratings = [
  {
    id: '1',
    jokeId: '1',
    userId: '1',
    rating: 5,
    ratedAt: '2024-10-24T12:30:00Z',
  },
  {
    id: '2',
    jokeId: '2',
    userId: '2',
    rating: 4,
    ratedAt: '2024-10-23T14:30:00Z',
  },
  {
    id: '3',
    jokeId: '3',
    userId: '3',
    rating: 5,
    ratedAt: '2024-10-22T09:30:00Z',
  },
  {
    id: '4',
    jokeId: '4',
    userId: '4',
    rating: 4,
    ratedAt: '2024-10-21T13:30:00Z',
  },
  {
    id: '5',
    jokeId: '5',
    userId: '5',
    rating: 5,
    ratedAt: '2024-10-20T15:30:00Z',
  },
];

export default { jokes, ratings, users, categories };
