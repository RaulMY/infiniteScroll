const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const ideaSchema = new Schema({
  authorId: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  category: String,
  picPath: String,
  comments : [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  ratings: { risk: Number, commercial: Number, analytical: Number},
  followers : [{ type: Schema.Types.ObjectId, ref: 'User' }],
  similar : [],
  tags: [],
  rejection: {risk: 0, commercial: 0, analytical: 0}
}, {
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});


module.exports = mongoose.model('Idea', ideaSchema);
