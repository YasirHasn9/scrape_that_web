import requests
from bs4 import BeautifulSoup

# Delcare a function called scrape_page with a parameter(string) called url. 
# Inside the function make a get request to the page with that url 
# the request will give you a response. 
# The repsonse now holds the content. To extract the content, we need to understand what data type is the content.
# Simple the content is the html, isn't that amazing you lucky bastred?
# Yes bastred, I mean with one click and you can bring the whole page, and magority of the code is already written for you.
# Btw, I love this 

# Now to parse the html, luckly for us-- again basterd -- python has an already developed 
# a library or package --- names do not matter --- that can scrape the web called bs4
# and appearntely, <and i wish my spelling is correct, and I dont know how to trun on the spell_checking function in cursor> that this library has a function 
# called BeautifulSoup --- if that's so true then--- it is really beautiful.

# Side story
# A friend of mine always tells me or let's say he's always making fun of me for saying beautiful
# And because I tend to tell it in a relax way, he mimckely says in a slow way lol.
# Well, gentalmen, im so lazy, I like things that are already built for me 
# they are so beautiful, they make my life easier, they make me focus on the things 
# I love, thank you God/Universe/Nature/Whatever for making my life easy 

# anyways this beautiful sexy function allows for us to pass the content of the response 
# and another parameter(string) (hardcoded the value of is 'html.parser')
# Idk why, this remainds me of the reducer function in React-hooks - FUCK REACT <Kidding, am I tho?>.

# And since this beautiful sexy lady named is BeautifulSoup, we are gonna name it soup
# You see sometimes beauty foces you to compromise, espically if you are in a despair for it.
# Sweetheart do not judge me, Need makes me comply, and I know the less I need the happier Iam 

# The value soup has, is the html in that page. For now, im only interested in it a for learning puprose 
# we are gonna tell the soup to extract desired element of html. For now let's assume it is gonna be <a href/>
# print the a to see

def scrape_page(url):
    response = requests.get(url, headers={'User_agent': 'Mozilla/5.0'})

    soup = BeautifulSoup(response.content, 'html.parser')

    links = soup.find_all('a')

    for link in links:
        print(link.get("href"))

scrape_page('https://www.linkedin.com/jobs/search/?currentJobId=4008051662&distance=25&geoId=103644278&keywords=Software%20Engineer&origin=JOBS_HOME_KEYWORD_HISTORY&refresh=true')


# I think we are living, or let's say I'm lucky to live in a place and time where things are so easy for me.
# you see, one of the things that has improved the life of human being is the Extension. 
# yes extenstion, so simple that I have never thought of before because maybe for the same reason: it is simple
# we human are so complicated, we do not think simple enough and I have no idea who the funck brainwished us 
# into that. Don't get wrong, I also believe that life is brutal and savage most of the time but also 
# and for that reason our ancestors build this to us, they make it easier to use and built all these technology 


# it's kinda hard to focus when you have many things need to be done 
# life has a lot of responsibilities or it does not but fucking society does and forces to to follow its rules. 

