window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };
    // Shrink the navbar 
    navbarShrink();
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

// Fetching API
fetch('https://dev-n-tech-by-benci-magpoc.herokuapp.com/api/BlogPostsApi?num=3')
    .then(response => response.json())
    .then(function (data) {

        assignValuesToTags(data);
    });

// Function to assign values to specific tags that will display the blog data
function assignValuesToTags(data) {
    // Initiate variables for holding date values
    let dateCreated, dateToday, createdDate, diffTime, lastUpdated;
    // Options for toLocalDateString format
    let options = {
        month: "short",
        day: 'numeric'
    }
    // Loop through the array of data
    data.forEach((data, index) => {

        dateCreated = new Date(data.created).toLocaleDateString("en-US", options);

        document.getElementById(`blogTitle${index+1}`).innerHTML = data.title;

        document.getElementById(`blogDay${index+1}`).innerHTML = dateCreated.split(" ")[1];

        document.getElementById(`blogMonth${index+1}`).innerHTML = dateCreated.split(" ")[0];

        document.getElementById(`blogImage${index+1}`).setAttribute("src", `data:${data.imageType};base64,${data.imageData}`);

        document.getElementById(`blogContent${index+1}`).innerText = data.abstract;

        document.getElementById(`blogLink${index+1}`).setAttribute("href", `https://dev-n-tech-by-benci-magpoc.herokuapp.com/PostDetail/${data.slug}`);

        document.getElementById(`readMoreLink${index+1}`).setAttribute("href", `https://dev-n-tech-by-benci-magpoc.herokuapp.com/PostDetail/${data.slug}`);

        // Gettting how long has been updated since
        dateToday = new Date();
        createdDate = new Date((data.updated != null) ? data.updated : data.created);
        diffTime = Math.abs(dateToday.getTime() - createdDate.getTime());
        lastUpdated = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        // Displaying updated value in days
        document.getElementById(`lastUpdated${index+1}`).innerHTML = lastUpdated;

    });
}