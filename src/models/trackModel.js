import mongoose from 'mongoose';

const trackSchema = new mongoose.Schema({
  trackId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  artist: { type: String },
  cover: { type: String },
  preview: { type: String }, 
});

export const Track = mongoose.model('Track', trackSchema);
