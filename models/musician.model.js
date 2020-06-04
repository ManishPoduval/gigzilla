const { Schema, model } = require('mongoose');

const musicianSchema = new Schema(
  {
   musicianId: String, 
   musicianName: String,
   email: {
     type: String,
     required: [true, 'Please enter username'],
     
   },
   tours: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'tour'
   }],

   passwordHash: {
     type: String,
     required:true
   },
   phoneNumber: Number,
   genre: String,
   photoSrc: String,
   bio: String

  }
  
);


userSchema.index({ 'email': 1}, {unique: [true, 'Email already in use, please register with another email']});

 module.exports = model('User', musicianSchema);
