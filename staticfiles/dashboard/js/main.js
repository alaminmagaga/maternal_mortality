(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // // Worldwide Sales Chart
    // var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    // var myChart1 = new Chart(ctx1, {
    //     type: "bar",
    //     data: {
    //         labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    //         datasets: [{
    //                 label: "USA",
    //                 data: [15, 30, 55, 65, 60, 80, 95],
    //                 backgroundColor: "rgba(0, 156, 255, .7)"
    //             },
    //             {
    //                 label: "UK",
    //                 data: [8, 35, 40, 60, 70, 55, 75],
    //                 backgroundColor: "rgba(0, 156, 255, .5)"
    //             },
    //             {
    //                 label: "AU",
    //                 data: [12, 25, 45, 55, 65, 70, 60],
    //                 backgroundColor: "rgba(0, 156, 255, .3)"
    //             }
    //         ]
    //         },
    //     options: {
    //         responsive: true
    //     }
    // });


    // // Salse & Revenue Chart
    // var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    // var myChart2 = new Chart(ctx2, {
    //     type: "line",
    //     data: {
    //         labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    //         datasets: [{
    //                 label: "Salse",
    //                 data: [15, 30, 55, 45, 70, 65, 85],
    //                 backgroundColor: "rgba(0, 156, 255, .5)",
    //                 fill: true
    //             },
    //             {
    //                 label: "Revenue",
    //                 data: [99, 135, 170, 130, 190, 180, 270],
    //                 backgroundColor: "rgba(0, 156, 255, .3)",
    //                 fill: true
    //             }
    //         ]
    //         },
    //     options: {
    //         responsive: true
    //     }
    // });
    


    // // Single Line Chart
    // var ctx3 = $("#line-chart").get(0).getContext("2d");
    // var myChart3 = new Chart(ctx3, {
    //     type: "line",
    //     data: {
    //         labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
    //         datasets: [{
    //             label: "Salse",
    //             fill: false,
    //             backgroundColor: "rgba(0, 156, 255, .3)",
    //             data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
                
    //         }]
    //     },
    //     options: {
    //         responsive: true
    //     }
    // });


    // Marital Bar Chart
    var ctx4 = $("#marital-bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Living with partner", "Never in union", "Married", "No longer living", "together/separated","Divorced"],
            datasets: [{
                label: "Marital",
                fill: false,
                backgroundColor: [
                    
                    "rgba(54, 162, 235, 0.7)", // Blue for Living with partner 
                    "rgba(255, 99, 132, 0.7)", // Red for Never in union
                    "rgba(255, 206, 86, 0.7)", // Yellow for Married
                    "rgba(75, 192, 192, 0.7)", // Teal for No longer living together/separated
                    "rgba(153, 102, 255, 0.7)", // Purple for Divorced
                ],
                data: [27841, 10669, 1117, 1047, 604,543]
               
            }]
        },
        options: {
            responsive: true
        }
    });


    // Religion Bar Chart
    var ctx4 = $("#religion-bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Islam", "Christian", "Traditionalist", "Others"],
            datasets: [{
                label: "Religion",
                fill: false,
                backgroundColor: [
                    "rgba(54, 162, 235, 0.7)", // 
                    "rgba(75, 192, 192, 0.7)", // 
                    "rgba(255, 206, 86, 0.7)", // 
                    "rgba(255, 99, 132, 0.7)", // 
                ],
                data: [20959, 10669, 156, 200]
               
            }]
        },
        options: {
            responsive: true
        }
    });

// Risk Category Bar Chart
var ctx4 = $("#risk-bar-chart").get(0).getContext("2d");
var myChart4 = new Chart(ctx4, {
    type: "bar",
    data: {
        labels: ["Low", "Medium", "High"],
        datasets: [{
            label: "Risk Category",
            fill: false,
            backgroundColor: [
                "rgba(54, 162, 235, 0.7)", // 
                "rgba(75, 192, 192, 0.7)", // 
                "rgba(255, 206, 86, 0.7)", // 
                "rgba(255, 99, 132, 0.7)", // Teal for Others
            ],
            data: [13822 ,14074, 13925]
           
        }]
    },
    options: {
        responsive: true
    }
});


    // Ethnicity Bar Chart
    var ctx4 = $("#ethnicity-bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Yoruba", "Fulani", "Hausa", "Igbo","Ijaw/Izon","Tiv","Kanuri/Beriberi","Ibibio","Igala","Ekoi","Others"],
   
            datasets: [{
                label: "Ethinicity",
                fill: false,
                backgroundColor: [

                    "rgba(54, 162, 235, 0.7)", // Blue for Yoruba 
                    "rgba(255, 99, 132, 0.7)", // Red for Fulani
                    "rgba(255, 206, 86, 0.7)", // Yellow for Hausa
                    "rgba(75, 192, 192, 0.7)", // Teal for Igbo
                    "rgba(153, 102, 255, 0.7)", // Purple for Ijaw/Izon
                    "rgba(255, 159, 64, 0.7)", // Orange for Tiv
                    "rgba(0, 255, 0, 0.7)",     // Green for Kanuri/Beriberi
                    "rgba(255, 0, 0, 0.7)",     // Red for Ibibio
                    "rgba(255, 69, 0, 0.7)",    // Red-Orange for Igala
                    "rgba(218, 112, 214, 0.7)", // Orchid for Ekoi
                    "rgba(128, 128, 128, 0.7)", // Gray for Others
                ],
                data: [5372, 2953, 10765, 6714,1201,976,873,801,457,275,11404]
               
            }]
        },
        options: {
            responsive: true
        }
    });


    

    // Religion Pie Chart
    var ctx5 = $("#religion-pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Islam", "Christian", "Traditionalist", "Others"],
            datasets: [{
                backgroundColor: [
                    "rgba(255, 99, 132, 0.7)", // Red for Islam
                    "rgba(54, 162, 235, 0.7)", // Blue for Christian
                    "rgba(255, 206, 86, 0.7)", // Yellow for Traditionalist
                    "rgba(75, 192, 192, 0.7)", // Teal for Others
                ],
                data: [20959, 10669, 156, 200]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Ethnicity Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Yoruba", "Fulani", "Hausa", "Igbo","Ijaw/Izon","Tiv","Kanuri/Beriberi","Ibibio","Igala","Ekoi","Others"],
   
            datasets: [{
                backgroundColor: [
                    "rgba(255, 99, 132, 0.7)", // Red for Yoruba
                    "rgba(54, 162, 235, 0.7)", // Blue for Fulani
                    "rgba(255, 206, 86, 0.7)", // Yellow for Hausa
                    "rgba(75, 192, 192, 0.7)", // Teal for Igbo
                    "rgba(153, 102, 255, 0.7)", // Purple for Ijaw/Izon
                    "rgba(255, 159, 64, 0.7)", // Orange for Tiv
                    "rgba(0, 255, 0, 0.7)",     // Green for Kanuri/Beriberi
                    "rgba(255, 0, 0, 0.7)",     // Red for Ibibio
                    "rgba(255, 69, 0, 0.7)",    // Red-Orange for Igala
                    "rgba(218, 112, 214, 0.7)", // Orchid for Ekoi
                    "rgba(128, 128, 128, 0.7)", // Gray for Others
                ],
                data: [5372, 2953, 10765, 6714,1201,976,873,801,457,275,11404]
               
            }]
        },
        options: {
            responsive: true
        }
    });

    
})(jQuery);

