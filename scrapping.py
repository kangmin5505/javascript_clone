import requests
from pixabay import Image
from urllib.parse import quote_plus
from urllib.request import urlopen

# api_key
import config


# input your Unsplash API_KEY
API_KEY = config.API_KEY

image = Image(API_KEY)

# custom image search
imgs = image.search(q='mountains',
             lang='en',
             image_type='photo',
             orientation='horizontal',
             category='nature',
             safesearch='true',
             order='popular',
             page=1,
             per_page=50)

hits = imgs['hits']
for idx, hit in enumerate(hits):
    picture_url = hit["webformatURL"]
    r = requests.get(picture_url)
    with open(f"C:\\github\\javascript_clone\\img\\{idx}.jpg", "wb") as f:
        f.write(r.content)
        
