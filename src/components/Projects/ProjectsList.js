module.exports = {
    myProjects: [
        {
            title: "2015 Prepaid Consumer Insights Study",
            description: "This agency design was a flat file design in Photoshop that another developer and I took and added a ton of animations and counters to.  Making this page responsive took a lot of additional code to look right on a mobile device.  This one was a lot of fun to develop.",
            technology: "D3, ScrollMagic, GreenSock, Bootstrap 2, jQuery, countUp.js",
            link: "https://www.firstdata.com/en_us/all-features/prepaid-infographic.html",
            image: require("../../images/prepaid-consumer-insights.jpg")
        },
        {
            title: "Connected Magazine",
            description: "This page is an agency design that I developed for the company in summer of 2017.  This" +
            " responsive page contains several links to PDF articles and contains on hover UX with the custom AddThis integration.",
            technology: "jQuery, Bootstrap 2, and AddThis",
            link: "https://www.firstdata.com/en_us/about-first-data/media/connected-magazine.html",
            image: require("../../images/connected-magazine.jpg")
        },
        {
            title: "STAR.com Redesign",
            description: "This redesign for star.com launched in February of 2017 and I developed this responsive site from an agency Illustrator design.  This site lives on a LAMP stack and uses the Google Maps API to drive the ATM Locator application.  This ATM Locator application houses over 400,000 ATM locations that I manage in a MySQL database.  This was a really fun build and I am very proud of it.",
            technology: "Bootstrap3, PHP, jQuery, Google Maps API, qForms Front-end Validation, MySQL and Google ReCaptcha",
            link: "https://www.star.com",
            image: require("../../images/star.jpg")
        },
        {
            title: "SpendTrend Report 2016",
            description: "This infographic page was a lot of fun to build because it uses a one page scroll script to overwrite the existing scroll behavior. This page also contains data visualizations on how holiday spending was in 2016 during Thanksgiving, Black Friday, and Cyber Monday.",
            technology: "D3, C3, datamaps.js, Scrollmagic, jQuery, Bootstrap 2, and One Page Scroll",
            link: "https://www.firstdata.com/en_us/all-features/spendtrend-holiday-2016.html",
            image: require("../../images/spendtrend-holiday-2016.jpg")
        },
        {
            title: "First Data eCommerce Partners",
            description: "This landing page actually has several partners.  The pages content is updated dynamically based on a query string parameter reflecting the partner.  When a new partner is called it uses PHP to pull in new content based on that partner including copy, chat code, and partner logos. If you replace the current partner value with say “picture-cart” a new partner page appears but uses most of the same codebase.",
            technology: "PHP, Bootstrap 3, qForm Validation, jQuery",
            link: "https://www.firstdatapartners.com/ecommerce/?partner=cincompass",
            image: require("../../images/fdpartners.jpg")
        },
        {
            title: "Black Rim Solutions",
            description: "Black Rim Solutions is small part-time business that I have been running for almost 10 years now offering design, development, and photography to small businesses in Colorado.  This was a design template that I customized, and added some GreenSock and ScrollMagic to.",
            technology: "Bootstrap 3, GreenSock, ScrollMagic, fancyBox",
            link: "https://www.blackrimsolutions.com",
            image: require("../../images/brs.jpg")
        }
    ]
};