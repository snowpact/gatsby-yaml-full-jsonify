# gatsby-yaml-full-jsonify

Plugin for `gatsby-transformer-yaml-full` to parse json parseable strings.

## Install

```bash
$ npm install gatsby-yaml-full-jsonify gatsby-transformer-yaml-full
```

## Configure

```javascript
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-transformer-yaml-full',
      options: {
        plugins: [
          {
            resolve: 'gatsby-yaml-full-jsonify'
          }
        ],
      },
    },
    // ...
  ],
}
```

## Usage

Use the `!jsonify` tag before a string to parse it into a parseable json string. The string can be multiline or one line.
You can omit double quotes for keys, but not for values.

### Example

#### YAML file

```yaml
# post.yaml

title: Blog post
config: !jsonify |
  string: "value"
  number: 2
  object: { key: "value" } 
  array: ["1", 2]
data: !jsonify key: "value"
```

#### Returning object

```javascript
{
  title: 'Blog post',
  config: '{ \"string\": \"value\", \"number\": 2, \"object\": { \"key\": \"value\" }, \"array\": [\"1\", 2]}',
  data: '{ \"key\": \"value\"}'
}
```
