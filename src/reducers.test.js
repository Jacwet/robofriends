import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

import * as reducers from './reducers';
 
describe('serarch robots', () => {
  const initialStateSeach = {
    searchField : ""
  }
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ""})
  })

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(reducers.searchRobots(initialStateSeach, {
      type: CHANGE_SEARCH_FIELD,
      payload: "abc"
    })).toEqual({ searchField: "abc" })
  })
})


describe("requestRobots", () => {
  const initalStateRobots = {
    robots: [],
    isPending: false
  }

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initalStateRobots)
  })

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(initalStateRobots, {
      type: REQUEST_ROBOTS_PENDING,
    })).toEqual({
      robots: [],
      isPending: true
    })
  })

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(reducers.requestRobots(initalStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: 123,
        name: "test",
        email: "test@gmail.com"
      }]
    })).toEqual({
      robots: [{
        id: 123,
        name: "test",
        email: "test@gmail.com"
      }],
      isPending: false
    })
  })

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(reducers.requestRobots(initalStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: "nooooo"
    })).toEqual({
      error: "nooooo",
      robots: [],
      isPending: false
    })
  })

})