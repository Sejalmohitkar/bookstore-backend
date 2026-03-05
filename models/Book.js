const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Book title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters']
    },
    author: {
      type: String,
      required: [true, 'Author name is required'],
      trim: true,
      maxlength: [100, 'Author name cannot exceed 100 characters']
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative']
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/300x400?text=No+Cover'
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      enum: [
        'Fiction',
        'Non-Fiction',
        'Mystery',
        'Science Fiction',
        'Biography',
        'History',
        'Self-Help',
        'Children',
        'Romance',
        'Thriller',
        'Fantasy',
        'Poetry',
        'Comics',
        'Other'
      ]
    },
    isBestSeller: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters']
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

// Index for faster queries
bookSchema.index({ isBestSeller: 1 });
bookSchema.index({ category: 1 });
bookSchema.index({ title: 'text', author: 'text' });

module.exports = mongoose.model('Book', bookSchema);
