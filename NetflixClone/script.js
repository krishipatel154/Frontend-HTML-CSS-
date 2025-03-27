function que1_details() {
    document.getElementById('que1-para').innerHTML = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/><br/>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"

    let que1_para = document.getElementById('que1-para');
    if (que1_para.style.display == "block") {
        que1_para.style.display = "none";
        document.getElementById('questions-sect').style.height = '1000px'
        // document.getElementById('que1').classList.remove("active");  
        document.getElementById('plus-icon1').style.rotate = "none";

    } else {
        que1_para.style.display = "block";
        document.getElementById('plus-icon1').style.rotate = "45deg";
        document.getElementById('questions-sect').style.height = 'calc(1000px + 200px)'
        document.getElementById('que1').className = "active"
    }

    

    if (document.getElementById('que1').className == "active") {
        document.getElementById('que2-para').style.display = "none";
        document.getElementById('que3-para').style.display = "none";
        document.getElementById('que4-para').style.display = "none";
        document.getElementById('que5-para').style.display = "none";
        document.getElementById('que6-para').style.display = "none";
    }
}

function que2_details() {
    document.getElementById('que2-para').innerHTML = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."

    let que2_para = document.getElementById('que2-para');
    if (que2_para.style.display == "block") {
        que2_para.style.display = "none";
        document.getElementById('plus-icon2').style.rotate = "none";
        document.getElementById('que2').className = "non-active"
        document.getElementById('questions-sect').style.height = '1000px'
    } else {
        que2_para.style.display = "block";
        document.getElementById('plus-icon2').style.rotate = "45deg";
        document.getElementById('que2').className = "active"
        document.getElementById('questions-sect').style.height = 'calc(1000px + 100px)'
    }

    if (document.getElementById('que2').className == "active") {
        document.getElementById('que1-para').style.display = "none";
        document.getElementById('que3-para').style.display = "none";
        document.getElementById('que4-para').style.display = "none";
        document.getElementById('que5-para').style.display = "none";
        document.getElementById('que6-para').style.display = "none";
    }
}

function que3_details() {
    document.getElementById('que3-para').innerHTML = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/><br/>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."

    let que3_para = document.getElementById('que3-para');
    if (que3_para.style.display == "block") {
        que3_para.style.display = "none";
        document.getElementById('questions-sect').style.height = '1000px'
        document.getElementById('que3').className = "non-active"
        document.getElementById('plus-icon3').style.rotate = "none";
    } else {
        que3_para.style.display = "block";
        document.getElementById('questions-sect').style.height = 'calc(1000px + 200px)'
        document.getElementById('que3').className = "active"
        document.getElementById('plus-icon3').style.rotate = "45deg";
    }

    if (document.getElementById('que3').className == "active") {
        document.getElementById('que2-para').style.display = "none";
        document.getElementById('que1-para').style.display = "none";
        document.getElementById('que4-para').style.display = "none";
        document.getElementById('que5-para').style.display = "none";
        document.getElementById('que6-para').style.display = "none";
    }
}

function que4_details() {
    document.getElementById('que4-para').innerHTML = "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."

    let que4_para = document.getElementById('que4-para');
    if (que4_para.style.display == "block") {
        que4_para.style.display = "none";
        document.getElementById('questions-sect').style.height = '1000px'
        document.getElementById('plus-icon4').style.rotate = "none";
        document.getElementById('que4').className = "non-active"
    } else {
        que4_para.style.display = "block";
        document.getElementById('questions-sect').style.height = 'calc(1000px + 100px)'
        document.getElementById('plus-icon4').style.rotate = "45deg";
        document.getElementById('que4').className = "active"
    }

    if (document.getElementById('que4').className == "active") {
        document.getElementById('que2-para').style.display = "none";
        document.getElementById('que3-para').style.display = "none";
        document.getElementById('que1-para').style.display = "none";
        document.getElementById('que5-para').style.display = "none";
        document.getElementById('que6-para').style.display = "none";
    }
}

function que5_details() {
    document.getElementById('que5-para').innerHTML = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."

    let que5_para = document.getElementById('que5-para');
    if (que5_para.style.display == "block") {
        que5_para.style.display = "none";
        document.getElementById('questions-sect').style.height = '1000px'
        document.getElementById('plus-icon5').style.rotate = "none";
        document.getElementById('que5').className = "non-active"
    } else {
        que5_para.style.display = "block";
        document.getElementById('questions-sect').style.height = 'calc(1000px + 100px)'
        document.getElementById('plus-icon5').style.rotate = "45deg";
        document.getElementById('que5').className = "active"
    }

    if (document.getElementById('que5').className == "active") {
        document.getElementById('que2-para').style.display = "none";
        document.getElementById('que3-para').style.display = "none";
        document.getElementById('que4-para').style.display = "none";
        document.getElementById('que1-para').style.display = "none";
        document.getElementById('que6-para').style.display = "none";
    }
}

function que6_details() {
    document.getElementById('que6-para').innerHTML = "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br/><br/>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."

    let que6_para = document.getElementById('que6-para');
    if (que6_para.style.display == "block") {
        que6_para.style.display = "none";
        document.getElementById('questions-sect').style.height = '1000px'
        document.getElementById('plus-icon6').style.rotate = "none";
        document.getElementById('que6').className = "non-active"
    } else {
        que6_para.style.display = "block";
        document.getElementById('questions-sect').style.height = 'calc(1000px + 200px)'; 
        document.getElementById('plus-icon6').style.rotate = "45deg";
        document.getElementById('que6').className = "active"
    }

    if (document.getElementById('que6').className == "active") {
        document.getElementById('que2-para').style.display = "none";
        document.getElementById('que3-para').style.display = "none";
        document.getElementById('que4-para').style.display = "none";
        document.getElementById('que5-para').style.display = "none";
        document.getElementById('que1-para').style.display = "none";
    }
}