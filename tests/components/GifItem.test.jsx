import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

/**
 * @jest-environment jsdom
 */

describe('Tests in <GifItem />', () => {

    const title = 'Elefant'
    const url = 'http://elefant.com/elefant.jpg'

    test('Should match with the snapshot', () => {

        render( <GifItem /> )
    })
})