//================================================================================
// Data
//================================================================================
var descText = "Once had a dream of lecturing about wieners in the financial sector. Lead a team developing strategies for chess sets in the financial sector. Earned praised for my work testing the market for clip-on ties on the black market. Spent 2002-2010 supervising the production of carnival rides in Los Angeles, CA. Earned praised for my work testing the market for magma in Pensacola, FL. Have a strong interest in training etch-a-sketches for no pay.";

//================================================================================

var bio = {
    "name": "Joane Doe",
    "nickname": "John",
    "role": "Front-End Developer, Artist",
    "birthday": "01 Jan 1900",
    "nationality": "Wookie",
    "contacts": {
        "mobile": "+12 345 6789 ",
        "email": "fake@gmail.com",
        "github": "github: fakeLorem",
        "twitter": "faek",
        "location": "Unicorn Land, Space",
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": descText,
    "skills": [ "Photoshop", "Illustrator", "Premiere", "3D Maya", "HTML / CSS", "JS" ]
};

//================================================================================

var education = {
    "schools": [ {
        "name": "School of Rock",
        "location": "Unicorn Land",
        "degree": "Bachelor of Unicorn Studies",
        "majors": [ "2D", "3D" ],
        "dates": " 2010-2015",
        "url": "http://www.lipsum.com/"
    } ],
    "onlineCourses": [ {
        "title": "Front-End Developer Nanodegree",
        "school": "Udacity",
        "dates": "Ongoing",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
        "title": "Study online Course",
        "school": "Online Fake School",
        "dates": "Sept - Oct",
        "url": "http://www.lipsum.com/"
    }, {
        "title": "Programming for Unicorns",
        "school": "Fake School",
        "dates": "June - July",
        "url": "http://www.lipsum.com/"
    }, ],
};

//================================================================================

var work = {
    "jobs": [ {
        "employer": "Fasephase inc",
        "title": "Direct Identiy Liason",
        "location": "Canada",
        "dates": "2016 - present",
        "description": "Wanted to get myself a new cell phone so I could hear myself as a ringtone. Who knew the store would go and check my credit score? Now all they let me have is this dinosaur! "
    }, {
        "employer": "Groove-tom",
        "title": "Graphic Artist",
        "location": "Brazil",
        "dates": "2015 - 2016",
        "description": "Must be light and sure, as though your path were upon rice paper. It is said, a Shaolin priest can walk through walls. Looked for, he can not be seen. Listened for, he can not be heard. Touched, can not be felt. This rice paper is the test."
    }, {
        "employer": "Canplus",
        "title": "Graphic Artist (Intern)",
        "location": "Moon",
        "dates": "April - Sept 2014",
        "description": "Look for the Union Label when you are buying a coat, dress, or blouse. Remember, somewhere our union's sewing, our wages going to feed the kids, and run the house. W"
    }, {
        "employer": "la-base",
        "title": "Part Time Marketing Artist",
        "location": "Antartica",
        "dates": "May - September 2013",
        "description": "n not be seen. Listened for, he can not be heard. Touched, can not be felt. This rice paper is the test. Fragile as the wings of the dragonfly, clinging as the cocoon of the silk worm"
    } ],
};

//================================================================================

var projects = {
    "projects": [ {
        "title": "starship Enterprise",
        "client": "Client",
        "dates": "Month, 201X",
        "description": "Space, the final frontier. These are the voyages of the starship Enterprise. Its five year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before!",
        "url": "http://www.google.com",
        "images": [ "https://placeimg.com/150/150/animals/grayscale", "https://placeimg.com/150/150/arch/grayscale" ]
    }, {
        "title": "Lorem Ipsum Moon Star",
        "client": "Client",
        "dates": "Month, 201X",
        "description": "Wanted to get myself a new cell phone so I could hear myself as a ringtone. Who knew the store would go and check my credit score? Now all they let me have is this dinosaur!",
        "url": "http://www.google.com",
        "images": [ "https://placeimg.com/150/150/people/grayscale", "https://placeimg.com/150/150/nature/grayscale" ]
    }, {
        "title": "Lorem Ipsum Asteroids",
        "client": "Client",
        "dates": "Month, 201X",
        "description": "Hello hello hello, can anybody hear me? I know I know I know, I should have gone to Free Credit Report dot com! That's where I should have gone, could have got my knowledge on.",
        "url": "http://www.google.com",
        "images": [ "https://placeimg.com/150/150/tech/grayscale", "https://placeimg.com/150/150/any/grayscale" ]
    } ],
};

//================================================================================

var skills = {
    "knowledge": [ "Lockpicking", "Flower Arrangement", "Foraging", "Paper Cutting", "Basic Video Editing", "Swimming" ],
    "technicalskills": [ {
        "name": "HTML / CSS",
        "level": "60",
        "colorclass": "p-web"
    }, {
        "name": "Javascript",
        "level": "52",
        "colorclass": ""
    }, {
        "name": "Adobe Photoshop",
        "level": "98",
        "colorclass": "p-ps"
    }, {
        "name": "Adobe Illustrator",
        "level": "70",
        "colorclass": "p-ill"
    }, {
        "name": "Adobe Premiere",
        "level": "50",
        "colorclass": "p-prem"
    }, {
        "name": "Autodesk Maya",
        "level": "60",
        "colorclass": "p-maya"
    } ]
};


//================================================================================
// 'display' Functions that append html to their respective sections
//================================================================================

education.display = function() {
    var tempSchoolItem = '';

    for ( var i = 0; i < this.schools.length; i++ ) {
        tempSchoolItem = HTMLbachelorItem;
        tempSchoolItem = tempSchoolItem.replace( '%name%', this.schools[ i ].name );
        tempSchoolItem = tempSchoolItem.replace( '%degree%', this.schools[ i ].degree );

        if ( this.schools[ i ].majors.length > 0 ) {
            //I want a comma to appear after the first major
            // in order to do that, the first element will already be part
            //of the string, and seperated from the loop.

            var tempMajorString = 'Majors: ' + this.schools[ i ].majors[ 0 ];

            //all the remaining elements will be appended with a comma
            //in front to the existing first element, the loop
            //starts at 1 because I want to start at the second element
            //of the array.
            for ( var j = 1; j < this.schools[ i ].majors.length; j++ ) {
                var theMajor = this.schools[ i ].majors[ j ];

                tempMajorString += ', ' + theMajor;
            }

            tempSchoolItem = tempSchoolItem.replace( '%majors%', tempMajorString );
        } else {
            tempSchoolItem = tempSchoolItem.replace( '%majors%', 'No Majors Listed' );
        }


        tempSchoolItem = tempSchoolItem.replace( '%location%', this.schools[ i ].location );
        tempSchoolItem = tempSchoolItem.replace( '%dates%', this.schools[ i ].dates );
    }

    var onlineCoursesHolder = '';
    var tempOnlineItem = '';

    for ( i = 0; i < this.onlineCourses.length; i++ ) {
        tempOnlineItem = HTMLonlineItem;

        tempOnlineItem = tempOnlineItem.replace( '%school%', this.onlineCourses[ i ].school );
        tempOnlineItem = tempOnlineItem.replace( '%title%', this.onlineCourses[ i ].title );
        tempOnlineItem = tempOnlineItem.replace( '%date%', this.onlineCourses[ i ].dates );
        tempOnlineItem = tempOnlineItem.replace( '%url%', this.onlineCourses[ i ].url );
        onlineCoursesHolder += tempOnlineItem;
    }

    var educationHTML = {
        "bachelor": tempSchoolItem,
        "online": onlineCoursesHolder
    };

    $( "#section_bachelor" ).append( educationHTML.bachelor );
    $( "#section_online" ).append( educationHTML.online );

    return;
};

bio.display = function() {
    $( "#picture-container" ).prepend( mainPic.replace( "%data%", bio.biopic ) );
    $( "#main-name" ).prepend( mainRole.replace( "%data%", bio.role ) );
    $( "#main-name" ).prepend( mainName.replace( "%data%", bio.name ) );
    $( "#first-row" ).append( mainNickname.replace( "%data%", bio.nickname ) );
    $( "#first-row" ).append( mainEmail.replace( "%data%", bio.contacts.email ) );
    $( "#first-row" ).append( mainPhone.replace( "%data%", bio.contacts.mobile ) );
    $( "#second-row" ).prepend( mainBirth.replace( "%data%", bio.birthday ) );
    $( "#second-row" ).append( mainLocation.replace( "%data%", bio.contacts.location ) );
    $( "#second-row" ).append( mainNationality.replace( "%data%", bio.nationality ) );
    $( "#third-row" ).append( mainDescription.replace( "%data%", bio.welcomeMessage ) );

    for ( var i = 0; i < socialArray.length; i++ ) {
        $( "#social-buttons" ).append( socialArray[ i ] );
    }

    for ( i = 0; i < bio.skills.length; i++ ) {
        document.getElementById( 'skill-list' ).innerHTML += '<li>' + bio.skills[ i ] + '</li>';
    }

    for ( var key in bio.contacts ) {
        if ( bio.contacts.hasOwnProperty( key ) ) {
            //console.log(bio.contact[key])
            document.getElementById( 'footer-contacts' ).innerHTML += '<li>' + bio.contacts[ key ] + '</li>';
        }
    }
};

work.display = function() {
    var HTMLworkHolder = '';
    var workTempItem = '';

    for ( var i = 0; i < this.jobs.length; i++ ) {
        workTempItem = HTMLworkItem;

        workTempItem = workTempItem.replace( '%employer%', this.jobs[ i ].employer );
        workTempItem = workTempItem.replace( '%title%', this.jobs[ i ].title );
        workTempItem = workTempItem.replace( '%dates%', this.jobs[ i ].dates );
        workTempItem = workTempItem.replace( '%location%', this.jobs[ i ].location );
        workTempItem = workTempItem.replace( '%description%', this.jobs[ i ].description );
        HTMLworkHolder += workTempItem;
    }
    $( "#section_experience" ).append( HTMLworkHolder );

    return;
};

projects.display = function() {
    //LOOP THROUGH EACH PROJECT

    var finalProjectHTML = '';

    for ( var i = 0; i < this.projects.length; i++ ) {


        //==============================
        // generating the descHTML
        //==============================
        var descHTMLholder = '';
        var tempItem = HTMLprojectDescItem;

        tempItem = tempItem.replace( '%title%', this.projects[ i ].title );
        tempItem = tempItem.replace( '%client%', this.projects[ i ].client );
        tempItem = tempItem.replace( '%dates%', this.projects[ i ].dates );
        tempItem = tempItem.replace( '%description%', this.projects[ i ].description );
        tempItem = tempItem.replace( '%url%', this.projects[ i ].url );

        //assigned into another variable for readability
        descHTMLholder = tempItem;

        //==============================
        // generating the imagesHTML
        //==============================

        var imagesHTMLholder = '';
        tempItem = imageHTML;

        for ( var j = 0; j < this.projects[ i ].images.length; j++ ) {
            imagesHTMLholder += tempItem.replace( '%image%', this.projects[ i ].images[ j ] );
        }

        //==============================
        // generating the rowHTML
        //==============================
        var tempItemRow = HTMLprojectItem;

        tempItemRow = tempItemRow.replace( '%descriptionHTMLhere%', descHTMLholder );
        tempItemRow = tempItemRow.replace( '%imagesHTMLhere%', imagesHTMLholder );

        //add the row to the main holder of all the HTML
        finalProjectHTML += tempItemRow;
    }

    //when all loops have been completed:
    $( '#projects-container' ).append( finalProjectHTML );

    return;
};

skills.display = function() {
    var HTMLknowledgeHolder = '';
    var HTMLtechSkillHolder = '';
    var skillsTempItem = '';

    for ( var i = 0; i < this.knowledge.length; i++ ) {
        skillsTempItem = HTMLknowledgeItem;
        skillsTempItem = skillsTempItem.replace( '%data%', this.knowledge[ i ] );
        HTMLknowledgeHolder += skillsTempItem;
    }

    for ( i = 0; i < this.technicalskills.length; i++ ) {
        skillsTempItem = HTMLprogressItem;
        skillsTempItem = skillsTempItem.replace( '%name%', this.technicalskills[ i ].name );
        skillsTempItem = skillsTempItem.replace( '%colorclass%', this.technicalskills[ i ].colorclass );
        skillsTempItem = skillsTempItem.replace( /%level%/g, this.technicalskills[ i ].level );
        HTMLtechSkillHolder += skillsTempItem;
    }

    var knowledgeHTML = {
        "knowledge": HTMLknowledgeHolder,
        "techskill": HTMLtechSkillHolder
    };

    $( "#knowledgelist" ).append( knowledgeHTML.knowledge );
    $( "#progresslist" ).append( knowledgeHTML.techskill );

    return;
};

//================================================================================
// Display Functions
//================================================================================

bio.display();
education.display();
skills.display();
work.display();
projects.display();

//================================================================================
// Misc UI Code
//================================================================================

function scrollNav() {
    $( '.nav a' ).click( function() {
        //Toggle Class
        $( ".active" ).removeClass( "active" );
        $( this ).closest( 'li' ).addClass( "active" );

        var theClass = $( this ).attr( "class" );
        $( '.' + theClass ).parent( 'li' ).addClass( 'active' );
        //Animate
        $( 'html, body' ).stop().animate( {
            scrollTop: $( $( this ).attr( 'href' ) ).offset().top - 160
        }, 400 );
        return false;
    } );
    $( '.scrollTop a' ).scrollTop();
}

//setup the typing animation library (under the main name)
TyperSetup();
scrollNav();

$( '.navbar li a' ).click( function( event ) {
    event.preventDefault();
    $( $( this ).attr( 'href' ) )[ 0 ].scrollIntoView();

} );


//================================================================================
// Google Maps API
//================================================================================

//more Locations I want to populate the map with
var locationplaces = [ "Frankfurt Am Main, Germany", "Almere Buiten, Netherlands", "Phoenix, Arizona", "Dubai, United Arab Emirates", "Naardenbos, Naarden, Netherlands" ];

var map;

function initializeMap() {
    var locations;
    var mapOptions = {
        disableDefaultUI: true
    };
    map = new google.maps.Map( document.querySelector( '#mapbox' ), mapOptions );

    function locationFinder() {
        var locations = [];
        locations.push( bio.contacts.location );
        education.schools.forEach( function( school ) {
            locations.push( school.location );
        } );
        for ( var l = 0; l < locationplaces.length; l++ ) {
            locations.push( locationplaces[ l ] );
        }
        work.jobs.forEach( function( job ) {
            locations.push( job.location );
        } );
        return locations;
    }

    function createMapMarker( placeData ) {
        var lat = placeData.geometry.location.lat();
        var lon = placeData.geometry.location.lng();
        var name = placeData.formatted_address;
        var bounds = window.mapBounds;
        var marker = new google.maps.Marker( {
            map: map,
            position: placeData.geometry.location,
            title: name
        } );
        var infoWindow = new google.maps.InfoWindow( {
            content: name
        } );
        google.maps.event.addListener( marker, 'click', function() {
            infoWindow.open( map, marker );
        } );
        bounds.extend( new google.maps.LatLng( lat, lon ) );
        map.fitBounds( bounds );
        map.setCenter( bounds.getCenter() );
    }

    function callback( results, status ) {
        if ( status == google.maps.places.PlacesServiceStatus.OK ) {
            createMapMarker( results[ 0 ] );
        }
    }

    function pinPoster( locations ) {
        var service = new google.maps.places.PlacesService( map );
        locations.forEach( function( place ) {
            var request = {
                query: place
            };
            service.textSearch( request, callback );
        } );
    }
    window.mapBounds = new google.maps.LatLngBounds();
    locations = locationFinder();
    pinPoster( locations );
}

window.addEventListener( 'load', function() {
    initializeMap();
    $( '#mapbox' ).css( 'height', '500px' );
    $( "#mapbox" ).append( googleMap );
    window.addEventListener( 'resize', function( e ) {
        map.fitBounds( mapBounds );
    } );
} );