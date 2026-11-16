# What the hell is this?
this is json_sponge that shit is vibecoded so you can ask ai or make your own episode with JSON
# What are the non-vibecoded stuff?
the models, the title cards.
# How do I use it?
the json commands:
`{
  "createCharacter": {
    "name": "Perch",
    "model": "/characters/perch.glb",
    "position": [0, 0, 0],
    "prompt": "A friendly fish reporter."
    "fishaudio": your fish audio id idk lol
  }
}`\
creates a character\
name: the name of character\
model: the model (GLB ONLY!!!)\
position: the position of the character\
prompt: pretty useless\
fishaudio: a fish audio voice ID (DO NOT PUT YOUR API KEY!!!)\\
`{
  "createNPCS": {
    "count": 2,
    "models": ["/npcs/fish1.glb", "/npcs/fish2.glb"],
    "rangePos": 15,
    "wander": true
  }
}`\
creates a variable amount of npcs\
count: the amount you wanna\
models: an array of models\
rangePos: the range to pick\
wander: true/false\\
`{
  "createTraffic": {
    "cars": ["/cars/car1.glb", "/cars/car2.glb"],
    "speed": 5,
    "count": 1
  }
}`\
creates a traffic jam\
cars: an array of the cars to add\
speed: the speed of the car (if you put 1000 then it will be barely visible because it's going at the speed of light)○
count: the amount of cars\\
`{
  "target": "Perch",
  "text": "Hello!"
}`\
makes the character say something\
target: the target character\
text: the text to say\\
`{
  "map": "/maps/conch.glb"
}`\
changes the map\
THIS IS IMPORTANT!\\\\\\
`{"title": "Chum falldown"}`\
adds an title card\
(THIS IS IMPORTANT, IF YOU WANT YOUR EPISODE TO BE VISIBLE!)
`{"song": "song url"}`\
makes a song topic theres no concert maps sorry