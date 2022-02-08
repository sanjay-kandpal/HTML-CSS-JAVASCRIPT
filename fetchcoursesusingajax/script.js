function fetchAllCourses(){

   var courseList = $("#courses")

    $.ajax({
        url: "https://codingninjas.in/api/v3/courses",
        method: "GET",
        success:function(data){
            $("#main-heading").remove();
            let courses = data.data.courses;
            for (let course of courses) {
                courseList.append(`
                    <div class="card shadow-sm mx-2 my-4" style="width: 18rem;">
                        <img src="${course.preview_image_url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${course.name}</p>
                            <p class="card-text text-right">${course.level}</p>
                        </div>
                    </div>
                `)
            }
        }
    }).fail(function(){

    });

    


}



$("#fetch-courses").click(fetchAllCourses);