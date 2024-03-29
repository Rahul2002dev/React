
import Card from "./Card";
function Cards({courses}){
    let allCourses = [];
    const getCourses = () => {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })

        return allCourses;
    }
    return (
        <div>
           
           { getCourses().map((course) => {
               return( <Card course = {course}/>)
            })
        }
        </div>
    )
}

export default Cards;