const schema = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "auth",
    "comments"
  ],
  "properties": {
    "auth": {
      "$id": "#/properties/auth",
      "type": "boolean",
      "title": "The Auth Schema",
      "default": false,
      "examples": [
        true
      ]
    },
    "comments": {
      "$id": "#/properties/comments",
      "type": "object",
      "title": "The Comments Schema",
      "patternProperties": {
        "[1-9]|([1-9][0-9]+)": {
          "type": "object",
          "properties": {
            "id":  {
              "type": "integer",
              "title": "The Id Schema",
              "default": 0,
              "examples": [1]
            },
            "name": {
              "type": "string",
              "title": "The Name Schema",
              "default": "",
              "examples": ["hello world"],
              "pattern": "^(.*)$"
            }
          },
          "required": ["id", "name"],
          "additionalProperties": true
        }
      }
    }
  }
}

export default schema;
