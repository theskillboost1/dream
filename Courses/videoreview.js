$(document).ready(function () {
    // Sample array for YouTube reviews (Video Title, Video URL, Review Text)
    var youtubeReviews = [
        ["Nitin Jaryal", "https://www.youtube.com/embed/YrpSuJlxEIk", "Website Development "],
        ["Baby Thapa", "https://youtube.com/embed/5B2wOBp-FvU", " Mern-Stack Development "],
        ["Gurman Singh Dhaliwal", "https://youtube.com/embed/K683tLXtRac", "Python Development"],
        ["Anita Rana", "https://www.youtube.com/embed/WApJxbRkOHg", "Website Development with Python "]
        // ["MERN stack web development", "https://www.youtube.com/embed/ZJ-QG0dCFJ8", "Roadmap of MERN stack website development"]
    ];

    var currentIframe = null; // Store the currently playing iframe

    // Loop through the youtubeReviews array and create HTML for each review
    for (var i = 0; i < youtubeReviews.length; i++) {
        var reviewHTML =
            '<div class="item">' +
            '<div class="review-card" data-video-url="' + youtubeReviews[i][1] + '">' +
            '<p class="title">' + youtubeReviews[i][0] + '</p>' +
            '<iframe class="youtube-iframe" src="' + youtubeReviews[i][1] + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
            '<p class="text">' + youtubeReviews[i][2] + '</p>' +
            '</div>' +
            '</div>';
        $('#youtube-review-slider').append(reviewHTML); // Add YouTube review to the carousel
    }

    // Initialize Owl Carousel
    $("#youtube-review-slider").owlCarousel({
        items: 1,           // Default show 1 review
        slideBy: 1,         // Slide 1 item at a time
        loop: true,         // Loop the carousel
        margin: 15,         // Space between reviews
        autoplay: true,     // Auto play the carousel
        autoplayTimeout: 5000,  // Time between auto slides (in ms)
        autoplayHoverPause: true,  // Pause on hover
        nav: true,          // Show next and prev arrows
        dots: true,         // Show dots below the carousel

        // Responsive settings
        responsive: {
            0: {
                items: 1,  // On mobile (width <= 576px), show 1 review
            },
            576: {
                items: 2,  // On smaller screens (width <= 576px), show 2 reviews
            },
            768: {
                items: 2,
                  // On tablets (width <= 768px), show 3 reviews
            },
            1024: {
                items: 3   // On larger screens (width >= 1024px), show 3 reviews
            }
        }
    });

    // Event listener for stopping the video and changing to a new one
    $(document).on('click', '.review-card', function() {
        // If a video is currently playing, stop it by resetting its src attribute to 'about:blank'
        if (currentIframe) {
            currentIframe.attr('src', 'about:blank'); // Stop the currently playing video by clearing the src
        }

        // Get the new iframe element inside the clicked review card
        var newIframe = $(this).find('iframe');

        // Get the video URL for the clicked video
        var newSrc = $(this).data('video-url'); // Get the data-video-url attribute

        // Set the currentIframe to the new iframe
        currentIframe = newIframe;

        // Change the src attribute to start the new video
        newIframe.attr('src', newSrc); // Play the new video by setting the src attribute to the new URL
    });
});
