const mongoose = require('mongoose');
require('dotenv').config();

const Book = require('./models/Book');

const sampleBooks = [
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: 299,
    image: 'https://covers.openlibrary.org/b/id/8739161-L.jpg',
    category: 'Fiction',
    isBestSeller: true,
    description: 'A philosophical novel about a young Andalusian shepherd on his journey to find treasure.',
    rating: 4.8
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 499,
    image: 'https://covers.openlibrary.org/b/id/10309819-L.jpg',
    category: 'Self-Help',
    isBestSeller: true,
    description: 'An easy and proven way to build good habits and break bad ones.',
    rating: 4.9
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    price: 599,
    image: 'https://covers.openlibrary.org/b/id/8406786-L.jpg',
    category: 'History',
    isBestSeller: true,
    description: 'A brief history of humankind from the Stone Age to the twenty-first century.',
    rating: 4.7
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: 399,
    image: 'https://covers.openlibrary.org/b/id/10975663-L.jpg',
    category: 'Self-Help',
    isBestSeller: true,
    description: 'Timeless lessons on wealth, greed, and happiness.',
    rating: 4.8
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 349,
    image: 'https://covers.openlibrary.org/b/id/8228691-L.jpg',
    category: 'Fiction',
    isBestSeller: true,
    description: 'A gripping tale of racial injustice and childhood innocence in the American South.',
    rating: 4.9
  },
  {
    title: '1984',
    author: 'George Orwell',
    price: 279,
    image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
    category: 'Fiction',
    isBestSeller: true,
    description: 'A dystopian novel about totalitarianism and the suppression of individuality.',
    rating: 4.7
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 249,
    image: 'https://covers.openlibrary.org/b/id/7353323-L.jpg',
    category: 'Fiction',
    isBestSeller: false,
    description: 'A novel about the American dream and the excesses of the Jazz Age.',
    rating: 4.5
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    price: 549,
    image: 'https://covers.openlibrary.org/b/id/8256956-L.jpg',
    category: 'Non-Fiction',
    isBestSeller: true,
    description: 'An exploration of two systems that drive the way we think.',
    rating: 4.6
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: 449,
    image: 'https://covers.openlibrary.org/b/id/6979861-L.jpg',
    category: 'Fantasy',
    isBestSeller: false,
    description: 'A fantasy novel about a hobbit who embarks on a grand adventure.',
    rating: 4.8
  },
  {
    title: 'Becoming',
    author: 'Michelle Obama',
    price: 699,
    image: 'https://covers.openlibrary.org/b/id/9256598-L.jpg',
    category: 'Biography',
    isBestSeller: true,
    description: 'An intimate memoir by the former First Lady of the United States.',
    rating: 4.9
  },
  {
    title: 'Ikigai',
    author: 'Héctor García & Francesc Miralles',
    price: 299,
    image: 'https://covers.openlibrary.org/b/id/10388940-L.jpg',
    category: 'Self-Help',
    isBestSeller: false,
    description: 'The Japanese secret to a long and happy life.',
    rating: 4.4
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    price: 399,
    image: 'https://covers.openlibrary.org/b/id/8091016-L.jpg',
    category: 'Thriller',
    isBestSeller: false,
    description: 'A mystery thriller involving a murder in the Louvre Museum.',
    rating: 4.3
  }
];

async function seedDatabase() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://sejalmohitkar-2002:9763345080@cluster0.6crrs.mongodb.net/bookstore';
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connected');

    await Book.deleteMany({});
    console.log('🗑️  Cleared existing books');

    const books = await Book.insertMany(sampleBooks);
    console.log(`✅ Seeded ${books.length} books successfully`);

    mongoose.connection.close();
    console.log('🔌 Database connection closed');
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
    process.exit(1);
  }
}

seedDatabase();
