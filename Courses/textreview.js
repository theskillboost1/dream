$(document).ready(function () {
    // Sample 2D array for reviews (Name and Review text)
    var reviews = [
        ["Monika Kandyara", "I'm Monika Kaur, and I'm pursuing the Digital Marketing course from Skill Boost Institute. My learning journey has been excellent so far. The best part is getting hands-on experience working on live projects. If you're also looking to build a career in IT, join Skill Boost and move forward...Thanku Skill Boost"],
        ["Ashmi Goyal", "Great learning experience!!! Friendly and helping teachers."],
        ["Romish thakur", "Hello Everyone, I'm Romish Thakur. I'm currently pursuing the Mern stack Developer course from Skill Boost, and I must say, it's been an incredible platform for me. I'm truly grateful to Skill Boost from the bottom of my heart. I personally recommend everyone to join Skill Boost and move forward in their careers. Thank you, Skill Boost."],
        ["Anita Rana", "Hello everyone, I'm Anita Thakur. I've completed the Python Development course from Skill Boost, where I gained hands-on experience by working on numerous projects and acquiring valuable skills. I highly recommend joining Skill Boost to learn new skills. Thank you, Skill Boost."],
        ["Diksha Sadyal", "I've enrolled in a few courses at Skill Boost Institute, and I’m really impressed. The courses cover a variety of in-demand tech skills, and the lessons are detailed and easy to follow. The instructors are experienced professionals who make complex topics feel simple. I’ve gained so much practical knowledge that I can apply directly to my work."],
        ["Ankita Singh", "The Skill Boost Institute is a fantastic resource for anyone looking to level up their tech skills. The content is very comprehensive, with real-world applications that make the lessons engaging. Whether you’re a beginner or looking to advance your skills, their courses are designed to help you succeed. Highly recommend!"],
        ["Vishal Rajbhar", "Hello everyone, I'm Vishal.Iam doing my Mern stack from the Skill Boost, upgrading my skills and having a great experience here. If you're also looking to enhance your computer skills, I highly recommend joining Skill Boost personally and embarking on a journey of growth and success.Thanku Jagjeet sir and Heena mam....Thanku Skill Boost."],
        ["Komalpreet Kaur", "I have done my basic computer course from the skill boost and now I'm doing the python web development course from this institute.The staff here is very friendly and they teach us everything in detail. So I recommend you all join this institute if you are looking for your skill development in computer."],
        ["Gurman Singh Dhaliwal", "Nice teaching as well as friendly environment. Heena mam and Jagjeet sir have very high knowledge on the offered courses."],
        ["Bharat Sharma", "This institute provided exceptional guidance and support, with highly knowledgeable teachers who really helped me grasp complex concepts."]
    ];

    // Loop through the reviews array and create HTML for each review
    for (var i = 0; i < reviews.length; i++) {
        var reviewHTML =
            '<div class="item">' +
            '<div class="review-card">' +
            '<p class="name">' + reviews[i][0] + '</p>' +
            '<p>' + reviews[i][1] + '</p>' +
            '</div>' +
            '</div>';
        $('#text-review-slider').append(reviewHTML); // Add review to the carousel
    }

    // Initialize Owl Carousel
    $("#text-review-slider").owlCarousel({
        items: 3,           // Show 3 reviews at a time
        slideBy: 1,         // Slide 1 item at a time
        loop: true,         // Loop the carousel
        margin: 10,         // Space between reviews
        autoplay: true,     // Auto play the carousel
        autoplayTimeout: 3000,  // Time between auto slides (in ms)
        autoplayHoverPause: true,  // Pause on hover
        nav: true,          // Show next and prev arrows
        dots: true,         // Show dots below the carousel

        // Responsive settings
        responsive: {
            0: {
                items: 1,  // On mobile (width <= 576px), show 1 review
            },
            768: {
                items: 2,
                  // On tablet (width <= 768px), show 2 reviews
            },
            1024: {
                items: 3   // On desktop (width >= 1024px), show 3 reviews
            }
        }
    });

});
