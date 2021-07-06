import React from 'react'
import {screen, render} from '@testing-library/react'
import {getSearchAnimes, getTopAnimes} from "./animes"

//==========================
// test getToAnimes
//==========================
describe('must return 10 elements', () => {
    it('must display a title',async () => {
        const data = await getTopAnimes()
        expect(data.length).toEqual(10);
    })
})

describe('the firts element should be rank 1', () => {
    it('must return 1',async () => {
        const data = await getTopAnimes()
        expect(data[0].rank).toEqual(1);
    })

    it('must return 2',async () => {
        const data = await getTopAnimes()
        expect(data[9].rank).toEqual(10);
    })
})


//==========================
// Function to getSearchAnimes
//==========================

describe('the funtion should get a result',() => {
    it('must return content related', async () => {
        const data = await getSearchAnimes("naruto")
        const title = data.results[0].title
        );
    })
})