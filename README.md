
# mqtt-color-visualizer

A tool for visualizing mqtt data in a colorful way. Useful for the development of thermal camera, depth sensor, lidar, etc.

## Demo

http://mqtt-color-visualizer.azawz.com/

## Parameters

| Name  | Description           |
| ----  | ----                  |
| Col   | Col of color palette  |
| Row   | Row of color palette  |
| Max   | Max value             |
| From color | The value 0 will map from the color |
| To color | The max value will map to the color |
| Mqtt broker | Address of Mqtt broker |
| Mqtt topic | Mqtt topic to be subscript |
| Mqtt message key | The key containing the array  |

## Example Usage

Send a message to MQTT broker **"ws://broker.emqx.io:8083/mqtt"**, with a topic **"mqtt-color"**:

```json
{"8x8": [530, 250, 610, 50, 730, 850, 750, 350, 730, 800, 670, 170, 10, 510, 910, 940, 590, 220, 190, 640, 360, 680, 90, 300, 560, 650, 120, 80, 570, 420, 620, 110, 280, 630, 560, 380, 210, 390, 830, 500, 650, 320, 400, 310, 380, 60, 570, 800, 506, 8, 306, 301, 900, 170, 70, 77, 203, 770, 770, 605, 101, 120, 130, 104]
}
```