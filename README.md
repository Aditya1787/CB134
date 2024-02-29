# CB134
Food Waste Reduction Solution

the problem solution is like <br>
So basically, our working process is like that in hotels, marriage halls, hostels, events, and more. <br>
            After collecting this food, we deliver hygienic food to NGOs, orphanages, and similar places. <br>
            This is the best way to reduce food waste.<br>
            Additionally, if we obtain raw materials, we cook and provide food to underprivileged children and animals.<br>
            Our company operates independently, not for profit, as a sustainable and socially responsible model.<br>
home page html<br>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Waste Reduction Solution</title>
    <link rel="stylesheet" href="homepage.css">
</head>
<body>
    <header>
        <h1>Food Waste Reduction Solution</h1>
        <nav>
            <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="solutions.html">Solutions</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="inform.html" id="informToggle">Inform Us</a></li>
                <li><a href="join_us.html" id='join_us'>Join_us</a></li>
            </ul>
        </nav>
    </header>

    <section id="informUs" style="display: none;">
        <iframe src="inform.html" frameborder="0" style="width: 100%; height: 500px;"></iframe>
    </section>

    <section id="about">
        <div class="container">
            <h2>About Us</h2>
            <p>Our mission is to develop technology-driven solutions to tackle food waste at various stages of the supply chain, from production to consumption. We employ innovative tracking, redistribution, and waste prevention strategies to create a more sustainable food system.</p>
        </div>
    </section>

    <section id="solutions">
        <div class="container">
            <h2>Our Solutions</h2>
            <div class="solution">
                <h3>Production</h3>
                <p>Implementing smart farming techniques to reduce overproduction and optimize crop yields.</p>
            </div>
            <div class="solution">
                <h3>Supply Chain</h3>
                <p>Utilizing blockchain technology for transparent and efficient tracking of food from farm to table.</p>
            </div>
            <div class="solution">
                <h3>Consumption</h3>
                <p>Developing mobile apps to connect surplus food with those in need, reducing waste at the consumer level.</p>
            </div>
        </div>
    </section>

    <section id="blog">
        <div class="container">
            <h2>Latest Blog Posts</h2>
            <div class="blog-post">
                <h3>Reducing Food Waste: A Global Challenge</h3>
                <p>Learn about the scale of the food waste problem and what you can do to help.</p>
            </div>
            <div class="blog-post">
                <h3>Innovative Technologies in Food Waste Management</h3>
                <p>Discover the latest advancements in technology for tackling food waste throughout the supply chain.</p>
            </div>
        </div>
    </section>

    <footer id="contact">
        <div class="container">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to reach out to us:</p>
            <ul>
                <li>Email: info@foodwastereduction.com</li>
                <li>Phone: 7355462905</li>
            </ul>
        </div>
    </footer>

    <script src="homepagescript.js"></script>
</body>
</html>
<br>
home page css<br>
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
    color: #333;
    
}

header {
    background-color: #1b1111;
    padding: 20px 0;
    text-align: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    background: rgba(0, 0, 0, 0) url('l.jpeg');
    
}

header h1 {
    margin: 0;
    font-size: 32px;
    color: #333;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav ul li a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #007bff;
}

.container {
    width: 80%;
    margin: auto;
    padding: 20px 0;
}

section {
    padding: 40px 0;
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
#about{
    background: white;
}
h2 {
    text-align: center;
    color: #333;
}

.solution {
    margin-top: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 5px;
}

.solution h3 {
    color: #007bff;
}

.solution p {
    color: #666;
}

.blog-post {
    margin-top: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 5px;
}

.blog-post h3 {
    color: #007bff;
}

.blog-post p {
    color: #666;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}

footer ul {
    padding: 0;
}

footer ul li {
    list-style-type: none;
    margin-bottom: 10px;
}
home page js<br>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Inform Us</title>
<link rel="stylesheet" href="inform.css">
</head>
<body>
  <div class="container">
    <h2>Inform Us</h2>
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="mobile">Mobile Number:</label>
        <input type="tel" id="mobile" name="mobile" required>
      </div>
      <div class="form-group">
        <label for="pincode">Pincode:</label>
        <input type="text" id="pincode" name="pincode" required>
      </div>
      <div class="form-group">
        <label for="city">City:</label>
        <input type="text" id="city" name="city" required>
      </div>
      <div class="form-group">
        <label for="address">Home Address:</label>
        <textarea id="address" name="address" rows="3" required></textarea>
      </div>
      <div class="form-group">
        <label for="foodWeight">Food Weight:</label>
        <input type="number" id="foodWeight" name="foodWeight" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</body>
</html>

<br>
About page <br>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Food Waste Reduction System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }

        header {
            background-color: #3498db;
            color: #fff;
            text-align: center;
            padding: 1em;
        }

        section {
            margin: 20px;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: #3498db;
        }

        h3 {
            color: #333;
        }

        p {
            line-height: 1.6;
        }

        .team-member {
            margin: 20px 0;
        }

        .team-member img {
            max-width: 100%;
            border-radius: 50%;
            margin-bottom: 10px;
            height: 150px; /* Set a fixed height for equal sizing */
        }

        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1em;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>

<body>
    <header>
        <h1>Food Waste Reduction System</h1>
    </header>

    <section>
        <h2>Introduction</h2>
        <p>Welcome to Your Food Waste Reduction System, where our passion for sustainability meets innovative solutions. <br>In a world grappling with the challenges of food waste, we stand committed to creating a positive impact on both the environment and communities.<br>

            At the core of our mission is the relentless pursuit of a food waste-free country. We believe that through strategic interventions and collective efforts, we can make a significant difference.</p>
            <img src="vision_image_1.jpg" alt="Vision Image 1">
            <img src="vision_image_2.jpg" alt="Vision Image 2">
    </section>

    <section>
        <h2>Team Members</h2>
        <div class="team-member">
            <!-- <img src="team_member_1.jpg" alt="Aditya Kumar Mishra"> -->
            <h3>Aditya Kumar Mishra</h3>
            <p>Founder</p>
        </div>
        <div class="team-member">
            <!-- <img src="team_member_2.jpg" alt="Harsh Gangwani"> -->
            <h3>Harsh Gangwani</h3>
            <p>President</p>
        </div>
        <div class="team-member">
            <!-- <img src="team_member_3.jpg" alt="Raj Singh"> -->
            <h3>Raj Singh</h3>
            <p>Co-Founder & CEO</p>
        </div>
        <div class="team-member">
            <!-- <img src="team_member_4.jpg" alt="Harsh Raj"> -->
            <h3>Harsh Raj</h3>
            <p>CFO</p>
        </div>
        <div class="team-member">
            <!-- <img src="team_member_5.jpg" alt="Rai Singh"> -->
            <h3>Rai Singh</h3>
            <p>Co-Founder & CMO</p>
        </div>
        <div class="team-member">
            <!-- <img src="team_member_6.jpg" alt="Aryan Gupta"> -->
            <h3>Aryan Gupta</h3>
            <p>Tech Head</p>
        </div>
        <p>And a ten thousand of team is working with us which main work is to collect the food from different places <br>
        And some are working in the tech team.</p>
    </section>

    <section>
        <h2>Working Process</h2>
        <p>So basically, our working process is like that in hotels, marriage halls, hostels, events, and more. <br>
            After collecting this food, we deliver hygienic food to NGOs, orphanages, and similar places. <br>
            This is the best way to reduce food waste.<br>
            Additionally, if we obtain raw materials, we cook and provide food to underprivileged children and animals.<br>
            Our company operates independently, not for profit, as a sustainable and socially responsible model.</p>
            <img src="https://media.istockphoto.com/id/1425232352/photo/expired-organic-bio-waste-mix-vegetables-and-fruits-in-a-huge-container-in-a-rubbish-bin-heap.jpg?s=612x612&w=0&k=20&c=_hIv18ePoswfw6BTJK9j7JMC4mhgXU-GX8rpIEbIJ5s=" alt="Vision Image 1">
            <img src="https://media.istockphoto.com/id/1160205101/photo/making-compost-from-vegetable-leftovers.jpg?s=1024x1024&w=is&k=20&c=gEky9T4XnPaqbeK-koQPpcyrhCFRF5p-c8SSHHZTymE=" alt="Vision Image 2"><br>
            <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvNzgASVX-cvPnu7RHqFnFE4lkYnjWtVFAQ&usqp=CAU" alt="Vision Image 2"> -->
    </section>

    <section>
        <h2>Vision</h2>
        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/foodwaste-sixteen_nine.jpeg?VersionId=QpaQvBcAs7avz66f6YOEMuYZbPIWKdhg" alt="Vision Image 1"><br>
        <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6V8gNxyB5w0bwKEe4f5-xmJ7RpzrA6jCXMA&usqp=CAU" alt="Vision Image 2"> -->
        
        <p>Our vision is twofold: <br>
            1. To assist the helpless – people, children, and animals. <br>
            2. To make our country pollution-free and food waste-free.</p>
    </section>

    <section>
        <h2>Meet Our Team</h2>
        <!-- <img src="team_photo_1.jpg" alt="Team Photo 1">
        <img src="team_photo_2.jpg" alt="Team Photo 2">
        <img src="team_photo_1.jpg" alt="Team Photo 1">
        <img src="team_photo_2.jpg" alt="Team Photo 2"> -->
        <p>Visit our 'Meet the Team' page to get to know the passionate individuals behind our food waste reduction
            initiative.</p>
        <!-- Provide a link to the team page -->
    </section>

    <!-- <footer>
        &copy; 2024 Your Food Waste Reduction System. All rights reserved.
    </footer> -->
</body>

</html>

join us html<br>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Join Us - Food Waste Reduction Solutions</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(to right, #8CC84B, #8CC84B); /* Background gradient */
        }

        header {
            background-color: #FFA500;
            color: white;
            padding: 20px;
            text-align: center;
        }

        section {
            padding: 20px;
            text-align: center;
            color: white;
        }

        h2 {
            color: white;
        }

        form {
            max-width: 400px;
            margin: 20px auto;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
            border-radius: 8px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #333;
        }

        input, textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
            box-sizing: border-box;
        }

        button {
            background-color: #333;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #555;
        }
    </style>
</head>

<body>

    <header>
        <h1>Join Us - Food Waste Reduction Solutions</h1>
    </header>

    <section>
        <h2>Be a part of the solution! Join us in reducing food waste.</h2>
        <p>Fill out the form below to express your interest in joining our initiative.</p>
    </section>

    <form>
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Your Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="phone">Your Phone Number:</label>
        <input type="tel" id="phone" name="phone" required>

        <label for="message">Why do you want to join us?</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
    </form>

</body>

</html>
<br>
flow chart<br>

![flow chart](https://github.com/Aditya1787/CB134/assets/148345694/ff2a6db8-f2af-4e29-a5e7-c2a3b4042ddf)
