---
layout: faq
title: "How do I connect NeoPixel to my EMC02?"
categories: neopixel
---
Use servo 4 triple header pins. This provides 5V, GND and SIG to NeoPixel and is preconfigured in FireStep.
In fact, those of you who attempted to use Servo4 for an actual servo will find that it doesn't work for servos
because FireStep sends all the status signals to the servo 4, completely borking any servo you attach there.
(NOTE: If you REALLY want a servo 4, just disable the NeoPixel by setting the status pin to something else).
Please follow Adafruit wiring conventions and precautions. You may also find inline connectors useful for
disassembly and repair. Oh. and I use a NeoPixel on my RAMPS 1.4, so that is also possible. As always,
be VERY CAREFUL with polarities and pin assignments. You don't want to fry your lights.