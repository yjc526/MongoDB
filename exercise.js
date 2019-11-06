const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/exercise-basic", {
        //playground DB
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB에 연결 되었습니다!"))
    .catch(error => console.error(error));



const schema = mongoose.Schema()
const Course = mongoose.model("Course", schema);

async function read() {
    const courses = await Course.find();

    const exam1 = await Course.find()
        .where("isPublished").equals(true)
        .where("tags").in(["backend"])
        .sort("name")
        .select("name author");

    const exam2 = await Course.find()
        .where("isPublished").equals(true)
        .where("tags").in(["backend", "frontend"])
        .sort("-price")
        .select("name price");

    const exam3 = await Course.find()
        .where("name").in([/js/i])
        .where("price").gte(15)


    console.log("[ courses ] ", courses);
    console.log("[ 실습1 ] ", exam1);
    console.log("[ 실습2 ] ", exam2);
    console.log("[ 실습3 ] ", exam3);
}

read();