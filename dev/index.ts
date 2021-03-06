import './index.css';

import { State, Schema } from '@boardgamelab/components';

import Sandbox from '../src/Sandbox.svelte';
import { writable } from 'svelte/store';

const schema: any = {
  assets: {},

  templates: {
    card: {
      id: 'card',
      name: 'Card',
      type: 2,
      deps: [],
      properties: {},
      behaviors: {},
      layout: {
        geometry: {
          width: 630,
          height: 880,
        },
        faces: [
          {
            layers: [
              {
                name: 'Layer #1',
                parts: {},
                isLocked: false,
                isVisible: {
                  type: 'PropertyOrValue',
                  value: true,
                  propertyID: null,
                },
                traitLayout: null,
              },
            ],
          },
          {
            layers: [
              {
                name: 'Layer #1',
                parts: {},
                isLocked: false,
                isVisible: {
                  type: 'PropertyOrValue',
                  value: true,
                  propertyID: null,
                },
                traitLayout: null,
              },
            ],
          },
        ],
      },
    },
  },

  objects: {
    'card-1': { id: 'card-1', componentID: 'card', copies: 1 },
    'card-2': { id: 'card-2', componentID: 'card', copies: 1 },
    'card-3': { id: 'card-3', componentID: 'card', copies: 1 },
  },

  traits: {},
  game: {
    turnOrder: 'none',
  },
};

const state: any = {
  objects: {
    'card-1': {},
    'card-2': {},
    'card-3': {},
  },

  game: {},
};

new Sandbox({
  target: document.getElementById('root') as HTMLElement,
  props: {
    schema: writable(schema),
    state: writable(state),
  },
});
