const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({ //relaciones uno a uno no llevan array "user[{type, ref}]"
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    price: String,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = require('mongoose').model('Product', productSchema);