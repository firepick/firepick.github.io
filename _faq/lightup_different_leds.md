---
layout: faq
title: "How do I light up different LEDs?"
categories: neopixel
---
Fork the FireStep repository and change NeoPixel.cpp, which maps display status to LED pyrotechnics:
https://github.com/firepick1/FireStep/blob/master/FireStep/NeoPixel.cpp
FireStep uses display status for semantic lighting control--it really doesn't care what LEDs do what
and you could even hook up the display status to a subwoofer to rattle you on error if you like.