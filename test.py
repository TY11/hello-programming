import requests
import json

url="https://cn.bing.com/search?q=cat"
req = requests.get(url)
j = req.headers
for key,value in j.items():
    print(key)
