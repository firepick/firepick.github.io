---
layout: faq
title: "How do I take a picture using NeoPixel lighting?"
categories: neopixel
---
The PiCam auto-exposure needs some time to adjust, so firenodejs typically allows 300-500ms for
"auto-exposure settling time".  Look at msSettle in firenodejs /firestep more...
You also need to turn on camera lighting with {"dpyds":12} after a mov.
Perhaps we should do that automatically, but right now you need to do it explicitly