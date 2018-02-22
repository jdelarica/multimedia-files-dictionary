# Multimedia Files Dictionary


| ![Javier de la Rica](/images/Javier.JPG) | ![Logo](/images/upc_etsetb.jpg) |
| :---: | :---: |
| Javier de la Rica | delaricajavier@gmail.com |

# SMART TV

A smart TV is a television set with integrated Internet and interactive “Web 2.0." features. It is a technological convergence between computers and flat screen television sets and set-top boxes. Besides the usual functions of television sets and set-top boxes provided through traditional broadcasting media, these devices can also provide Internet TV, online interactive media, over-the-top content (OTT), as well as on-demand streaming media, and home networking access.

# SAMSUNG SMART TV APP

This activity consists in developing a simple application for the Samsung Smart TV platform, downloading the SDK and developing through the IDE to run the application in the Smart TV Application “emulator”. The main coding language used to develop the program is HTML for the main elements, with CSS and JavaScript.
The main idea of the current application is to do a movie dictionary in which the user can look for their favorite movies or TV Shows, similar to some well-known applications such as Netflix or HBO. Nevertheless, instead of being as complete as these ones, with the current application the user will only be able to look for the movies, and read the description. If wanted, the user can also just divide the movies or shows depending on their genre.
The application has mainly been developed in HTML, JavaScript and CSS in the Tizen Studio, making use of the Samsung TV simulator in order to run the application as in a TV with a remote.

# APPLICATION STRUCTURE

The application consists of a main menu on the left, and several HTML pages, in order to be able to organize all the movies and shows depending on the genre, and also to differentiate between TV Shows and Movies.
The main structure of the application can be observed in the following image, differentiated into three main blocks: The CSS style sheets, the main HTML files and the JavaScript ones. The HTML files contain the main information of the application, together with the CSS files, with all the pictures and the style of the app. The JavaScript files are those who allow the application behave as it does. They allow the application to filter all the products in different categories, and to use the TV remote in the Samsung TV simulator.

Once the user clicks on the menu, the user can select whether he or she wants to see the lists of the Movies, TV Shows or Documentaries, as shown on the Figure above. A JavaScript function filters out all the information, and only shows the information selected. This information is filtered based on a category ID given to each of the multimedia files in the index.html script.

			<div class="product-item", category="tv">
				<img src="images/products/THEOA.jpg" alt="">
				<a href="THEOA.html">The OA (2016)</a>
			</div>

The user can also select, once the category is chosen, the multimedia he or she wants to watch. Inside each of the items, a short synopsis with the directors and stars information is shown, together with a YouTube trailer. The main idea of the page is shown below.

![img1](/images/Imagen1.png?raw=true "Home Page")

# SAMSUNG TV 

The application can be run in the Samsung TV. In this case, it is run in the Samsung TV simulator. A JavaScript with functions able to differentiate the pressed buttons in the remote is written. With this, the application can be run in a Samsung TV, and the user can select the shows, the trailer and the info with only the TV remote.
In the images below we can observe a process the user follows in order to go and watch the trailer of the TV Show Sense8.

![img2](/images/Imagen2.png?raw=true "Movies")
![img3](/images/Imagen3.png?raw=true "TV Shows")
![img4](/images/Imagen4.png?raw=true "Sene8")

