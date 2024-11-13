export interface Creator {
  id: number;
  name: string;
  category: string;
  image: string;
  coverImage: string;
  bio: string;
  stats: {
    followers: number;
    likes: number;
    projects: number;
  };
  content: Array<{
    id: number;
    type: 'image' | 'video' | 'audio';
    thumbnail: string;
    title: string;
    likes: number;
  }>;
}

export const creators: Creator[] = [
  {
    id: 1,
    name: "Sarah Chen",
    category: "Music Production",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    coverImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
    bio: "Award-winning music producer and songwriter with over 10 years of experience.",
    stats: {
      followers: 125000,
      likes: 450000,
      projects: 48
    },
    content: [
      {
        id: 1,
        type: 'audio',
        thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
        title: 'Summer Vibes Mix',
        likes: 23400
      },
      {
        id: 2,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae',
        title: 'Studio Session Highlights',
        likes: 18900
      },
      {
        id: 3,
        type: 'image',
        thumbnail: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0',
        title: 'New Album Cover',
        likes: 15600
      }
    ]
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    coverImage: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07",
    bio: "Digital artist specializing in concept art and illustration with a unique blend of traditional and modern techniques.",
    stats: {
      followers: 88000,
      likes: 380000,
      projects: 65
    },
    content: [
      {
        id: 1,
        type: 'image',
        thumbnail: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07',
        title: 'Cyberpunk City',
        likes: 45600
      },
      {
        id: 2,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
        title: 'Digital Art Process',
        likes: 28900
      }
    ]
  },
  {
    id: 3,
    name: "Aisha Patel",
    category: "Dance",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    coverImage: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434",
    bio: "Contemporary dance choreographer pushing the boundaries of movement and expression.",
    stats: {
      followers: 92000,
      likes: 420000,
      projects: 32
    },
    content: [
      {
        id: 1,
        type: 'video',
        thumbnail: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434',
        title: 'Contemporary Performance',
        likes: 34500
      },
      {
        id: 2,
        type: 'image',
        thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad',
        title: 'Dance Workshop',
        likes: 19800
      }
    ]
  }
];