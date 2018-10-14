# Cheerio: react-native app for creating cheerful sentences randomly
*version 0.8.9*

This is a test react-native app intended to create random sentences that can be
read every time one needs them. The base program is designed to have 3 variants: cheerful sentence (quote), neutral (joke)
and sad (uplifting).

I created this as a simple, personal project just to test a few things, both logic and design, but if this evolves properly 
I might upload it to google play. Also, this is intended for being an android app

I will not upload the media or the sentences, so if you feel like using this project, feel free to customize it at your taste

acode@gmail.com

## Planning

### Done
* the app shows a random cheerful sentence from an internal list. You can click to sad face to go to next sentence
* the app shows a famous interesting quote from an internal list. you can click to happy face to go to next quote
* the system uses a randomly cheerful generated sentences
* sentences are saved in local
* Share the sentence in your social networks
* add advertisements

### Done design
* create an interesting interface. Likely using gradients, but maybe we can make the gradient animated
* add some custom elements like icons or even drawings. Draw some characters for each type of sentence
  * clever-like guy or girl for the quotes -> changed to candy
  * smiling guy or girl for the cheerful quotes -> changed to candy
  * check another type for custom list
  
### To do
* make smaller the spaces between lines
* add sound to the clicks

### Other things for the future:
* the app let you input your own list that helps you remember it in the future
* maybe make a test to remember the list?
* you can program the app to remind you every X time about a sentences
* backend for new sentences

### Bugs
* Now when you click in the balloon, shares the sentence. However, that prevents it for dragging the text if is too big
  
### Todo design
* when clicking to the candies, stars will appear around and will disappear after a while.

### Note:
* avoid using react-native@0.56.0 if you are developing in Windows, because as for today looks like it is not working
* after some months it still won't work, so this is an expo project