from urllib.request import urlopen
from bs4 import BeautifulSoup

def get_link(base_url,link):

    results=set()

    html=urlopen(link)
    bs4Obj=BeautifulSoup(html.read(),'lxml')
    a_tag=bs4Obj.find_all('a')

    for tag in a_tag:
        results.add(base_url+(tag.get('href')))
    return results






