# maplibre-remove-layer

Reproduce a bug when removing map and layer.

Steps to reproduce.

1. Click Toggle layer button. The line layer should disappear.
2. Click Toggle map layer. The map should disappear.

In step 2. the app crashes instead.

Checking `if (map?.style)` before removing layer and source is one (ugly) way to avoid the problem.
Setting a timeout for the call to `map.remove` is a bit better way, but still a work around.
