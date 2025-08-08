# Portfolio/Showcase of My Best Gaming Moments

## Overview

I wanted to have a place to showcase all of my best gaming-related edits, clips (funny and impressive), and stats. </br>
In order to achieve this, I decided to code my own website from scratch using ReactJS. </br></br>
The structure of the showcase is as follows: 

* [NavBar](#navbar)
* [Home](#home-section)
* [Portfolio](#portfolio-section)
* [Clips](#clips-section)
* [Stats](#stats-section)
* [Reviews](#reviews-section)
* [Extra Features](#extra-features)

# Installation

Clone the repository and navigate to the project directory. Then run 
```
npm install
```
to install all the necessary dependencies.</br></br>

Then run
```
npm start
```
to view the project on localhost:3000.

## NavBar

The Navigation Bar at the top of the webpage allows the user to move around to a specified section of the webpage without needing to scroll.</br></br>

* Clicking the 'creo.' text in the top left-hand corner takes the user back to the home page.
* Clicking the 'Portfolio' text takes the user to the Portfolio section, and so-on and so-on.
* Clicking the Twitch Icon (the left icon on the top right corner) directs the user to my streaming channel.
* Clicking the Steam Icon (right icon in the top right corner) directs the user to my Steam profile.

## Home Section

The home section contains the avatar I use in my gaming-related endeavors as well as my in-game username with some nicknames 
in quotes from friends and opponents alike.

![Home Page](https://i.imgur.com/VndQEzb.gif)

## Portfolio Section

The portfolio section contains a carousel that displays youtube video players, each with one of the videos I edited and released.</br>

The arrows on either side of the player allow the user to select which of the videos they'd like to watch.
Clicking play on any one of these videos expands it to 'fullscreen', which removes the arrows for navigating the carousel, and changes the background color of the Navigation Bar and Portfolio Section for a more pleasureable viewing experience. When the video is either paused or it finishes, the player automatically exits 'fullscreen', reapplies the arrows for navigating, and restores the original background colors of the Navigation Bar and Portfolio Sections. </br></br>

![Carousel Movement](https://i.imgur.com/SVd1imk.gif) </br>
![Play/Pause](https://i.imgur.com/h9FPUR2.gif)

Also implemented is a feature where if the user scrolls out of the portfolio section (i.e. the video player is no longer in view), then the video automatically pauses. </br> 
![Scroll Pause](https://i.imgur.com/2XJhlO0.gif)

## Clips Section

For the clips section, my vision is to display clips that have been stored in a youtube account. I will use the YouTube API to get the data of all videos uploaded to that account and have a way to search on the people in the games, and the game names, to find clips.</br></br>

In order to achieve this, I want to implement a search bar that will allow the user to search for specific tags (such as the name of a game, or people who appear in the clip). Adding tags will filter the clips to only show the relevant ones (where ALL conditions are met -- so if someone selects two people and a game, the tags must include 
both people's names and the game name).

I also want a way to upload videos directly to said youtube account (and add appropriate tags).

## Stats Section

For the stats section, my vision is to interact with the APIs of the games for which I want to display my stats (my performance in these games).The idea is loosely based off of sites like [this](https://tracker.gg).</br></br>

Upon receiving the data I want, I want to possibly implement another carousel, but this time to display stats per game in a minimalist and aesthetically pleasing way.

## Reviews Section

And lastly, for the reviews section, I would like to pull comments from my steam profile using the Steam API and display them in an aesthetically pleasing way.

## Extra Features

- Snap scrolling
- Change CSS based on User Inputs
- Dynamically sizes content depending on Viewport size (haven't tested on mobile)

# Roadmap: Things left to do

- [ ] Implement the clips section
- [ ] Implement the stats section
- [ ] Implement the reviews section
