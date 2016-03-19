# modulada_amplitud

This repository contains the web view of the Modulada Amplitud archive. 

# Learning Journey

This is the first time I deal with the Google Maps API so this log is a repository for similar implementations in the future. Since my programming level reaches only the basis I am including a list of Google Maps APi related notes as well as Javascrip basic concepts learnt in the process.

Mar 18

Since this is also my first project with GitHUb I was trying to have a Testing branch to receive from other branches in order to test and then publish to Porduction (master).

I faced my first merge conflict so dealing with that shit at the moment.  

https://help.github.com/articles/resolving-a-merge-conflict-from-the-command-line/
  
Mar 17.

Created the proyect Key for the Google  Maps API without issue.  

https://developers.google.com/maps/documentation/javascript/get-api-key#get-an-api-key

https://developers.google.com/maps/documentation/javascript/basics#Region

After a couple of quick tries, I used one of the basic examples from the documentation and quickly added a couple of Markers in my map with InfoWindows embedding the audio embed from soundcloud.

BLOCK
I was creating the markers with a loop as well as the infowindows modifying this example (https://goo.gl/qosuTw). However when the Listeners were created only one value was assigned and I got the following error:  
  
Cannot read property 'open' of undefined

This error was happening when assigning the listeners to the markers with a loop.

I found a reference to an error at StackOverflow  
  
http://stackoverflow.com/questions/27794288/cannot-read-property-open-of-undefined-google-maps-infowindow-loop  
  
http://stackoverflow.com/questions/17981437/how-to-add-event-listeners-to-an-array-of-objects

It seems the issue is about the concept of closures. I am totally new to the concept so I need to grasp the basics and see how to implement it there. 

CLOSURES:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures  
 
   
 As usual I had to review my concepts for dealing with classes:  

CLASSES
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects









# About the Project
