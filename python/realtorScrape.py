from requests import get
from bs4 import BeautifulSoup

html = get("https://www.realtor.com")

res = BeautifulSoup(html.text, "html5lib");

print(res.prettify())