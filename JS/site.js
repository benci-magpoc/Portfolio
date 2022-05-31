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

//Fetching API
fetch('https://dev-n-tech-by-benci-magpoc.herokuapp.com/api/BlogPostsApi?num=3')
    .then(response => response.json())
    .then(function (data) {
        //alert(JSON.stringify(data));
        //In order to display some of the data, like tghe created date a little more
        //work is involved
        let options = {
            month: "short",
            day: 'numeric'
        }
        let dateCreated = new Date(data[0].created).toLocaleDateString("en-US", options);

        document.querySelector("#blogTitle1").innerHTML = data[0].title;

        document.querySelector("#blogDay1").innerHTML = dateCreated.split(" ")[1];

        document.querySelector("#blogMonth1").innerHTML = dateCreated.split(" ")[0];

        document.getElementById("blogImage1").setAttribute("src", `data:${data[0].imageType};base64,${data[0].imageData}`);

        document.getElementById("blogContent1").innerText = data[0].abstract;

        document.getElementById("blogLink1").setAttribute("href", `https://dev-n-tech-by-benci-magpoc.herokuapp.com/PostDetail/${data[0].slug}`);

        document.getElementById("readMoreLink1").setAttribute("href", `https://dev-n-tech-by-benci-magpoc.herokuapp.com/PostDetail/${data[0].slug}`);

        // Gettting how long has been updated since
        let dateToday = new Date();
        let createdDate = new Date((data[0].updated != null) ? data[0].updated : data[0].created);
        let diffTime = Math.abs(dateToday.getTime() - createdDate.getTime());
        let lastUpdated = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        document.getElementById("lastUpdated1").innerHTML = lastUpdated;

        // Assigning values to 2nd blog post
        dateCreated = new Date(data[1].created).toLocaleDateString("en-US", options);

        document.querySelector("#blogTitle2").innerHTML = data[1].title;

        document.querySelector("#blogDay2").innerHTML = dateCreated.split(" ")[1];

        document.querySelector("#blogMonth2").innerHTML = dateCreated.split(" ")[0];

        document.getElementById("blogImage2").setAttribute("src", `data:${data[1].imageType};base64,${data[1].imageData}`);

        document.getElementById("blogContent2").innerText = data[1].abstract;

        document.getElementById("blogLink2").setAttribute("href", `https://dev-n-tech-by-benci-magpoc.herokuapp.com/PostDetail/${data[1].slug}`);

        document.getElementById("readMoreLink2").setAttribute("href", `https://dev-n-tech-by-benci-magpoc.herokuapp.com/PostDetail/${data[1].slug}`);

        // Gettting how long has been updated since
        dateToday = new Date();
        createdDate = new Date((data[1].updated != null) ? data[1].updated : data[1].created);
        diffTime = Math.abs(dateToday.getTime() - createdDate.getTime());
        lastUpdated = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        document.getElementById("lastUpdated2").innerHTML = lastUpdated;

        // Assigning values to 3rnd blog post
        dateCreated = new Date(data[2].created).toLocaleDateString("en-US", options);

        document.querySelector("#blogTitle3").innerHTML = data[2].title;

        document.querySelector("#blogDay3").innerHTML = dateCreated.split(" ")[1];

        document.querySelector("#blogMonth3").innerHTML = dateCreated.split(" ")[0];

        document.getElementById("blogImage3").setAttribute("src", `data:${data[2].imageType};base64,${data[2].imageData}`);

        document.getElementById("blogContent3").innerText = data[2].abstract;

        document.getElementById("blogLink3").setAttribute("href", `https://dev-n-tech-by-benci-magpoc.herokuapp.com/PostDetail/${data[2].slug}`);

        document.getElementById("readMoreLink3").setAttribute("href", `https://dev-n-tech-by-benci-magpoc.herokuapp.com/PostDetail/${data[2].slug}`);

        // Gettting how long has been updated since
        dateToday = new Date();
        createdDate = new Date((data[2].updated != null) ? data[2].updated : data[2].created);
        diffTime = Math.abs(dateToday.getTime() - createdDate.getTime());
        lastUpdated = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        document.getElementById("lastUpdated3").innerHTML = lastUpdated;
    });