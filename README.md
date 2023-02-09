
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
{"8x8": [53, 25, 61, 5, 73, 85, 75, 35, 73, 80, 67, 17, 1, 51, 91, 94, 59, 22, 19, 64, 36, 68, 9, 30, 56, 65, 12, 8, 57, 42, 62, 11, 28, 63, 56, 38, 21, 39, 83, 50, 65, 32, 40, 31, 38, 6, 57, 80, 56, 0, 36, 31, 90, 17, 7, 77, 23, 77, 77, 65, 11, 12, 13, 14]
}
```