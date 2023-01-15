const { model, Schema, Types } = require('mongoose');

// Defining current date variable
const date = new Date()

// Creating reaction sub document for thought schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: date,
            get: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        }
    }
)

// Creating Thought model's schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: date,
            get: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        },
        username: {
            type: String,
            required: true
        },
        reactions:[
            reactionSchema
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// Setting Thought model's schema's virtual
thoughtSchema.virtual('reactionCount')
    .get(() => this.reactions.length);

// Creating Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;