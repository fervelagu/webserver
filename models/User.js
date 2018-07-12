const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username: String,
    email: String,
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    role: {
        type: String,
        enum: ['USER', 'EDITOR', 'ADMIN'],
        default: 'USER'
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

// userSchema.plugin(passportLocalMongoose, {usernameField:'email'});
module.exports = require('mongoose').model('User', userSchema);