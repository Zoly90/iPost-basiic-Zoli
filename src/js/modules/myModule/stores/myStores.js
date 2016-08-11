/**
 * Created by zoltanincze on 08/08/2016.
 */
import { Store, toImmutable } from 'nuclear-js';
import * as ActionTypes from '../actionTypes.js';

const initialState = toImmutable({
  directories: [
    {
      "type": "folder",
      "name": "animals",
      "expanded": false,
      "path": "/animals",
      "children": [
        {
          "type": "folder",
          "name": "cat",
          "path": "/animals/cat",
          "expanded": false,
          "children": [
            {
              "type": "folder",
              "name": "images",
              "path": "/animals/cat/images",
              "expanded": false,
              "children": [
                {
                  "type": "file",
                  "name": "cat001.jpg",
                  "path": "/animals/cat/images/cat001.jpg"
                },
                {
                  "type": "file",
                  "name": "cat001.jpg",
                  "path": "/animals/cat/images/cat002.jpg"
                }
              ]
            },
            {
              "type": "file",
              "name": "cat002.jpg",
              "path": "/animals/cat/images/cat002.jpg"
            },
            {
              "type": "file",
              "name": "cat003.jpg",
              "path": "/animals/cat/images/cat003.jpg"
            }
          ]
        }
      ]
    },

    {
      "type": "folder",
      "name": "app",
      "expanded": false,
      "children": [
        {
          "type": "file",
          "name": "index.html"
        },
        {
          "type": "folder",
          "name": "js",
          "expanded": false,
          "children": [
            {
              "type": "file",
              "name": "main.js"
            },
            {
              "type": "file",
              "name": "app.js"
            },
            {
              "type": "file",
              "name": "misc.js"
            },
            {
              "type": "folder",
              "name": "vendor",
              "expanded": false,
              "children": [
                {
                  "type": "file",
                  "name": "jquery.js"
                },
                {
                  "type": "file",
                  "name": "underscore.js"
                }
              ]
            }
          ]
        },
        {
          "type": "folder",
          "name": "css",
          "expanded": false,
          "children": [
            {
              "type": "file",
              "name": "reset.css"
            },
            {
              "type": "file",
              "name": "main.css"
            }
          ]
        }
      ]
    }
  ]
});

class TreeStore extends Store   {
  getInitialState() {
    return initialState;
  }

  initialize()  {
    this.on(ActionTypes.FILTER, filter);
  }
}

export default new TreeStore();

function filter(state, payload) {
  const nextState = state.set('value', payload.value);

  if (state.equals(nextState))  {
    return state;
  }

  return nextState;
}
