import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {



    cards = [
  {
    id:1,
    image: 'git_head_thumbnail.jpg',
    category: 'git',
    title: 'Understanding Git HEAD',
    description: 'A short, simple guide that mixes practical commands, diagrams and the mistakes I learned from — perfect for beginners.',
    author: 'Sameer M',
    date: '21 sept 2025',
    authorImage: 'dummyImage.png'
  },
  {
    id:2,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
    category: 'Development',
    title: 'Best practices for code reviews',
    description: 'Discover techniques to ensure high quality and maintainable code through effective peer reviews.',
    author: 'Michael Scott',
    date: '10 Feb 2022',
    authorImage: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id:3,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    category: 'Technology',
    title: 'The future of AI in industry',
    description: 'Exploring how artificial intelligence is shaping the future across different industries worldwide.',
    author: 'Sarah Connor',
    date: '5 Mar 2022',
    authorImage: 'https://randomuser.me/api/portraits/women/3.jpg'
  },

  {
    id:4,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
    category: 'Leadership',
    title: 'Effective team management',
    description: 'Practical tips for building, managing, and inspiring high-performing teams in any industry.',
    author: 'Sophia Lee',
    date: '30 May 2022',
    authorImage: 'https://randomuser.me/api/portraits/women/5.jpg'
  },

  { 
    id:5,
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
    category: 'Design',
    title: 'Color theory in UI/UX',
    description: 'How color choices affect usability, mood, and overall design aesthetics in digital products.',
    author: 'Emily Carter',
    date: '8 Jul 2022',
    authorImage: 'https://randomuser.me/api/portraits/women/7.jpg'
  },

  {
    id:6,
    image: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479',
    category: 'Finance',
    title: 'Managing personal finances',
    description: 'Smart money habits and tools to take control of your financial future with confidence.',
    author: 'Anna Brown',
    date: '10 Sep 2022',
    authorImage: 'https://randomuser.me/api/portraits/women/9.jpg'
  },
  {
    id:7,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    category: 'Health',
    title: 'Work-life balance in tech',
    description: 'How tech professionals can avoid burnout and maintain a healthy balance in their careers.',
    author: 'Mark Wilson',
    date: '2 Oct 2022',
    authorImage: 'https://randomuser.me/api/portraits/men/10.jpg'
  }
];


  getCards() {
    return this.cards;
  }

  getCardById(id: number) {
    return this.cards.find(c => c.id === id);
  }
  
}
