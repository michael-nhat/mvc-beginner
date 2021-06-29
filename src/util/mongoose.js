module.exports  = {
    multipleMongooseToObj: function (mongooses) {
        return mongooses.map(mongooses => mongooses.toObject())
    },
    
    mongoosesToObj: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}